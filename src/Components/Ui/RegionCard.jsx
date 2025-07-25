import { NavLink } from "react-router-dom";

const RegionCard = ({ countryFoodData, isPending, hasInput, inputValue }) => {
    // //fucntion to get the meal id;
    // const getMealId = (event) => {
    //     console.log(event.target.value);
    //     return;
    // }


    // /features/name
    return (
        <>
            {countryFoodData.length > 0 ? (
                countryFoodData.map((curEle, index) => (
                    <div className="card" key={index}>
                        <img src={curEle.strMealThumb} alt="Item Image" />
                        <h3 className="item-name">{curEle.strMeal}</h3>

                        {/* for dynamic route, using the mealId of the given meals  */}
                        <NavLink className="region-card-btn" to={`/features/region/${curEle.idMeal}`}>
                            <button className="region-card-btn">See Recipe</button>
                        </NavLink>
                    </div>
                ))
            ) : (
                hasInput && !isPending && (
                    <p className="no-results">
                        Oopss.. Seems Like Rat🐭 has Eaten all the dishes from `{inputValue}`, Plzz Try again..
                    </p>
                )
            )}
        </>
    )
}

export default RegionCard;