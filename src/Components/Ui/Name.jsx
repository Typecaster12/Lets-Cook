import { useMemo, useState } from "react";
import { getFoodByName } from "../../API/apiInstance";

const Name = () => {
  //state to store the input value;
  const [inputFoodData, setInputFoodData] = useState("");
  //state to store the dish data;
  //as set to null, it will store anything like str, array, object etc;
  const [dishData, setDishData] = useState(null);


  //function to get the dish's detail
  const getDishDetail = async () => {
    try {
      const res = await getFoodByName(inputFoodData);
      //meals = array of objects;
      // [0] => oth index of Array(get that data)
      //so initially meals is an array of objects;
      console.log(res.data.meals[0]);
      const mealData = Array.isArray(res.data.meals) ? res.data.meals[0] : null;

      //store into dishData;
      if (res.status === 200) {
        //if mealData is present then well set but if data not their the dishData remains null;
        setDishData(mealData || null);
      }
    } catch (error) {
      console.log("Some error occured", error);
      setDishData(null);
    }
  }

  //handleSubmit;
  const handleSubmit = (event) => {
    //avoide reload when submit;
    event.preventDefault();
    //donot call the api with empty input field;
    if (!inputFoodData.trim()) {
      <p className="error-msg">Dear User, Plzz Enter Dish Name to get the Dish's Detils</p>
    }
    //calling the function;
    getDishDetail();
  }


  //helper function;
  const extractIngData = (meal) => {
    const IngredientsList = [];

    //loop through 20 keys, as we have 20 keys of ing in api data;
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        IngredientsList.push(`${measure?.trim() || ""} ${ingredient.trim()}`);
      }
    }

    return IngredientsList;
  }

  const ingredients = useMemo(() => {
    return dishData ? extractIngData(dishData) : []
  }, [dishData]);


  return (
    <div className="food-main-container">
      <h1 className="name-heading">
        Search Meal By Its Name
      </h1>
      <div className="food-container">
        <input
          type="text"
          placeholder="Enter Dish Name.."
          value={inputFoodData}
          onChange={(event) => setInputFoodData(event.target.value)}
        />
        <button className="search-btn" onClick={handleSubmit}>
          Search Dish
        </button>

        <div className="data-box">
          {dishData !== null ? (
            <div className="meal-seaction">
              <h1 className="meal-heading">{dishData.strMeal}</h1>
              <div className="meal-cntainer">
                <img src={dishData.strMealThumb} alt={dishData.strMeal} />

                <div className="meal-details">
                  <div className="meal-subHeading">
                    <p>Originated From: {dishData.strArea}</p>
                    <p>Meals Category: {dishData.strCategory}</p>
                  </div>

                  <div className="ingredients-container">
                    <h2>{dishData.strMeal}'s Ingredients</h2>
                    <ul className="ingList">
                      {ingredients.map((curEle, index) => (
                        <li className="ingElement" key={index}>
                          {curEle}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="recipe-container">
                    <p className="recipe">
                      Main Recipe: <span>{dishData.strInstructions}</span>
                    </p>
                  </div>

                  <div className="ytLink">
                    <a
                      href={dishData.strYoutube}
                      className="link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Recipe Video
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            inputFoodData.trim() !== "" && dishData === null && (
              <p className="error-msg">No Meal To Show You😣..</p>
            )
          )}
        </div>
      </div>
    </div>
  );

}
export default Name;
