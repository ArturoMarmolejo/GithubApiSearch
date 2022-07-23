import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import zebrandslogo from "../../public/assets/images/zebrands.svg";

export const Header = () => {
  const [fix, setFix] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setFix(true);
      } else if (window.scrollY < 120) {
        setFix(false);
      }
    });
  }, []);

  return (
    <header className={!fix ? "header" : "header active"}>
      <nav className="container is-fluid is-flex is-align-items-center is-justify-content-space-between">
        <picture className="logo-header">
          <Link href="/">
            <Image src={zebrandslogo} alt={"zebrands"} />
          </Link>
        </picture>
        <div className="header-right-section is-flex is-align-items-center is-flex-direction-row-reverse">
          <a className="button is-dark" href='https://github.com'>See More</a>
          <Link href="/repositories">
            <a className="has-text-black">Repositories</a>
          </Link>
          <Link href="/users">
            <a className="has-text-black">Users</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
