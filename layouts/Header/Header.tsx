
import Image from "next/image";
import zebrandslogo from "../../public/assets/images/zebrands.svg"

export const Header = () => {
  //flex, align items center, justify content between

  return (
    <header className="header">
      <nav className="container is-fluid is-flex is-align-items-center is-justify-content-space-between">
        <picture>
          <Image
            src={zebrandslogo}
            alt={'zebrands'}
          />
        </picture>
        <div className="header-right-section is-flex is-align-items-center is-flex-direction-row-reverse">
          <button className="button is-dark">See More</button>
          <a className="has-text-black">Repositories</a>
          <a className="has-text-black">Users</a>
          <a className="has-text-black">Docs</a>
        </div>
      </nav>
    </header>
  );
};
