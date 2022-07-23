import { findRepositories } from "../../api/repositories";
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import ListRepository from "../../components/ListRepository/ListRepository";
import { MAX_BUTTON_PAGINATION, PER_PAGE } from "../../api/constants";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
import { iRepository } from "../../api/types/repository";
import getTopic from "../../utils/getTopic";

export const getServerSideProps: GetServerSideProps = async (req): Promise<any> => {
  const query = req.query.q as string;

  try {
    const response = await findRepositories({ q: query || getTopic(), page: 1, per_page: PER_PAGE })
    const total_page = response.total_count / PER_PAGE;

    return {
      props: {
        repositories: response.items,
        total_page: total_page > 100 ? 100 : Math.ceil(total_page),
        haveQuery: Boolean(query),
        total_count: response.total_count,
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

const Repositories: NextPage = ({ repositories: listRepositories, total_page, total_count }: RepositoriesPageProps) => {
  const [repositories, setRepositories] = useState<iRepository[]>(listRepositories);
  const [total, setTotal] = useState<number>(total_page);
  const [totalCount, setTotalCount] = useState<number>(total_count);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const onSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true)
      const response = await findRepositories({ q: search, page: 1, per_page: PER_PAGE });

      const newTotalPage = response.total_count / PER_PAGE
      setTotal(newTotalPage > 100 ? 100 : Math.ceil(newTotalPage));
      setRepositories(response.items);
      setTotalCount(response.total_count)
    } catch (error) {
      /* show error */
      console.error(error);
    } finally {
      setLoading(false)
      window.scroll(0, 0);
    }
  }

  const changePagination = async (page: number) => {
    try {
      setLoading(true)
      const response = await findRepositories({ q: getTopic(), page, per_page: PER_PAGE });

      const newTotalPage = response.total_count / PER_PAGE
      setTotal(newTotalPage > 100 ? 100 : Math.ceil(newTotalPage));
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
      <div>
        <form className="input-search" onSubmit={onSubmit}>
          <input value={search} className="input-search__field" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="React, Angular, Vue..."></input>
          <button className={loading ? "button input-search__button  is-loading" : "button input-search__button"}>Search</button>
        </form>
        <p className="result-title">{totalCount} repository results</p>
      </div>
      <div>

      </div>
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