import Head from "next/head";
import "bulma/css/bulma.min.css";
import type { NextPage } from "next";
import Pagination from "../../components/Pagination/Pagination";
import { useState } from "react";
import { MAX_BUTTON_PAGINATION, PER_PAGE } from "../../api/constants";
import { findUsers } from "../../api/users";
import ListUser from "../../components/ListUser/ListUser";




const Users: NextPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    console.log('search', search)
    try {
      setLoading(true)
      const response = await findUsers({q: search, page: 1, per_page: PER_PAGE })
      const newTotalPage = response.total_count / PER_PAGE
      setTotal(newTotalPage > 100 ? 100 : Math.ceil(newTotalPage));
      setUsers(response.items);
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
      const response = await findUsers({ q: search, page, per_page: PER_PAGE });

      const newTotalPage = response.total_count / PER_PAGE
      setTotal(newTotalPage > 100 ? 100 : Math.ceil(newTotalPage));
      setUsers(response.items);
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
        <ListUser users={users}/>
      </div>
      <Pagination
        total={total}
        loading={loading}
        totalButtons={MAX_BUTTON_PAGINATION}
        onChange={changePagination}
      />
    </main>
  )
}

export default Users;