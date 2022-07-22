import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Hero = () => {
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    route.push(`/repositories?q=${search}`)
  }

  return (
    <section>
      <div className="hero container is-fluid is-flex is-align-items-center is-justify-content-center">

        <h1 className="has-text-centered is-size-2 has-text-weight-bold">SEARCH EVERYTHING WITH THE GITHUB API</h1>
        <p className="has-text-centered is-size-4 has-text-weight-normal">The future of code is in the cloud, not your local copy. </p>
        <div className="input-search-hero">
          <form className="input-search" onSubmit={onSubmit}>
            <input className="input-search__field" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="React, Anular, Vue..."></input>
            <button className={loading ? "button input-search__button  is-loading" : "button input-search__button"}>Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};
