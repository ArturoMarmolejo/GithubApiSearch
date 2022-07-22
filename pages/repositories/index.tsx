import { findRepositories, getRepositories } from "../../api/repositories";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import ListRepository from "../../components/ListRepository/ListRepository";
import { MAX_BUTTON_PAGINATION, PER_PAGE } from "../../api/constants";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
import { iRepository } from "../../api/types/repository";
import getTopic from "../../utils/getTopic";

export const getServerSideProps: GetServerSideProps = async (): Promise<any> => {
  try {
    const response = await findRepositories({ q: getTopic(), page: 1, per_page: PER_PAGE })
    const total_page = response.total_count / 10;

    return {
      props: {
        repositories: response.items,
        total_page: total_page > 100 ? 100 : total_page,
      }
    };
  } catch (error) {
    return {
      props: {
        repositories: [],
        total_page: 0,
      }
    };
  }
};

type RepositoriesPageProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Repositories: NextPage = ({ repositories: listRepositories, total_page }: RepositoriesPageProps) => {
  const [repositories, setRepositories] = useState<iRepository[]>(listRepositories);
  const [total, setTotal] = useState<number>(total_page);
  const [loading, setLoading] = useState<boolean>(false);

  const changePagination = async (page: number) => {
    try {
      setLoading(true)
      const response = await findRepositories({ q: getTopic(), page, per_page: PER_PAGE });

      setTotal(response.total_count);
      setRepositories(response.items);
    } catch (error) {
      /* show error */
      console.error(error);
    } finally {
      setLoading(false)
      window.scroll(0, 0);
    }
  }

  return (
    <main className="posts-repositories wrapper">
      <ListRepository repositories={repositories} />
      <Pagination
        total={total}
        loading={loading}
        totalButtons={MAX_BUTTON_PAGINATION}
        onChange={changePagination}
      />
    </main>
  )
}

export default Repositories;