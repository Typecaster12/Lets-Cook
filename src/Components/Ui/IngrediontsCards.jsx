/* eslint-disable no-unused-vars */
import { useTransition } from "react";
import { NavLink } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const IngrediontsCards = ({ inputValue, ingData, errorMessage }) => {
  //useTransition hook;
  const [isPending, startTransition] = useTransition();
  return (
    <>

      {/* if some error occured  */}
      {
        errorMessage && (
          <p className="error-msg">{errorMessage}</p>
        )
      }

      {/* pending state  */}
      {
        isPending && (
          <div className="loader-container">
            <PacmanLoader color="#e85d04" />
          </div>
        )
      }

      {
        // (inputValue.trim() !== "") && (ingData !== null) && (
        (ingData !== null) && (
          <div className="mealing-card">
            {
              ingData.map((curEle) => {
                const { strMeal, strMealThumb, idMeal } = curEle;
                return <div className="ing-card" key={idMeal}>
                  <img src={strMealThumb} alt={strMeal} />
                  <h3 className="ing-meal-name">
                    {strMeal}
                  </h3>

                  {/* for routeing */}
                  <NavLink className="ing-route-navLink ing-route-btn" to={`/features/ing/${idMeal}`}>
                    <button className="ing-route-btn">
                      See Recipe..
                    </button>
                  </NavLink>
                </div>
              })
            }
          </div>
        )
      }

    </>
  )
}
export default IngrediontsCards;