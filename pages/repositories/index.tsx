import { findRepositories, getRepositories } from "../../api/repositories";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import ListRepository from "../../components/ListRepository/ListRepository";
import { PER_PAGE } from "../../api/constants";

export const getServerSideProps: GetServerSideProps = async (): Promise<any> => {
  const topics = ['React', 'Angular', 'Vue', 'Laravel', 'NextJs', 'milgun', 'type orm']
  const indexTopic = Math.ceil(Math.random() * topics.length)

  const response = await findRepositories({ q: topics[indexTopic], page: 1, per_page: PER_PAGE })
  const total_page = response.total_count / 10;

  return {
    props: {
      repositories: response.items,
      total_page: total_page > 100 ? 100 : total_page, 
    }
  };
};

type RepositoriesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Repositories: NextPage = ({ repositories, total_page }: RepositoriesPageProps) => {
  return (
    <main className="posts-repositories">
      <ListRepository repositories={repositories} />
    </main>
  )
}

export default Repositories;