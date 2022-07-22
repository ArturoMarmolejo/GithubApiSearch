
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import zebrandslogo from "../../public/assets/images/zebrands.svg"

export const Header = () => {
  const [fix, setFix] = useState<boolean>(false)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 180) {
        setFix(true)
      }
      else if (window.scrollY < 180) {
        setFix(false)
      }
    })
  }, [])

  return (
    <header className={!fix ? "header" : "header active"}>
      <nav className="container is-fluid is-flex is-align-items-center is-justify-content-space-between">
        <picture>
          <Link href="/">
            <Image
              src={zebrandslogo}
              alt={'zebrands'}
            />
          </Link>
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
