
import Image from "next/image";
import zebrandslogo from "../../public/assets/images/zebrands.svg"

export const Hero = () => {
  //flex, align items center, justify content between

  return (
    <section>
      <div className="hero container is-fluid is-flex is-align-items-center is-justify-content-center">

        <h1 className="has-text-centered is-size-2 has-text-weight-bold">SEARCH EVERYTHING WITH THE GITHUB API</h1>
        <p className="has-text-centered is-size-4 has-text-weight-normal">The future of code is in the cloud, not your local copy. </p>
        
        <div className="columns mt-2 is-flex is-align-items-center is-justify-content-center">
          <input className="column input is-warning is-normal" type="text" placeholder="How to make a react app..."></input>
          <button className="column button is-dark is-normal">Search</button>
        </div>
      </div>
    </section>
  );
};
