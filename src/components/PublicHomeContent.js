import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PublicHomePage = () => {
  return (
    <section className="content__wrapper__main">
      <div className="content__mainSection">
        <div className="home__heading">
          <h1> Time to de-mystify some things.</h1>
          <div className="landing__subtitle">
            <p>
              Terms like <span className="emphasis__spanP">"401k"</span>,
              <span className="emphasis__spanP">"IRA"</span>, and other acronyms
              we hear tossed around can all be a bit daunting at first.
            </p>
            <p>
              But these can all be simplified to get closer to building a
              fruitful future.
            </p>
            <Link to="/home-public" className="createAccount__link">
              <p>Create an account, here.</p>
            </Link>
          </div>
          <p className="calc__intro">
            <span className="emphasis__spanP">Seeing is believing. </span>
            Visualize the "magic" behind it here:
          </p>
          <h3>The miracle of compound interest</h3>
          <form>
            {/* CALCULATOR */}
            <div className="compound__interest__calc">
              <h4>Calculate here:</h4>
              <div className="initial__investment calc__input__section">
                <input type="text" />
                <div className="input__subtitle">
                  <label htmlFor="">Initial Investment</label>
                  <p>sub explanation</p>
                </div>
              </div>

              <div className="monthly__contribution calc__input__section">
                <label htmlFor="">Monthly Contribution</label>
                <input type="text" />
                <p>sub explanation</p>
              </div>

              <div className="length__years calc__input__section">
                <label htmlFor="">Length of time in years</label>
                <input type="text" />
                <p>sub explanation</p>
              </div>

              <div className="estimated__interest__rate calc__input__section">
                <label htmlFor="">Estimated Interest Rate</label>
                <input type="text" />
                <p>sub explanation</p>
              </div>

              <div className="interest__rate__variance calc__input__section">
                <label htmlFor="">Interest rate vaiance range</label>
                <input type="text" />
                <p>sub explanation</p>
              </div>

              <div className="compound__frequence calc__input__section">
                <label htmlFor="">Compound frequency</label>
                <select name="">
                  <option value="annually">Annually</option>
                  <option value="semiannually">Semiannually</option>
                  <option value="monthly">Monthly</option>
                  <option value="daily">Daily</option>
                </select>
                <p>sub explanation</p>
              </div>

              <div className="calc__buttons">
                <button className="confirm__btn__fill" type="button">
                  View Results
                </button>
                <button className="confirm__btn__outline" type="button">
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PublicHomePage;
