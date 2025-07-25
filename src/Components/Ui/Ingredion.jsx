import { useState } from "react";
import { getFoodByIng } from "../../API/apiInstance";
import IngrediontsCards from "./IngrediontsCards";

const Ingredion = () => {
  //state to store the input value;
  const [inputValue, setInputValue] = useState("");
  //state to store the array of data;
  const [mealsData, setMealsData] = useState(null);
  //for error message;
  const [errorMessage, setErrorMessage] = useState("");

  //function to make the api call on button's click;
  const handleSubmitRequest = async (event) => {
    try {
      event.preventDefault();
      //api call;
      const res = await getFoodByIng(inputValue);
      // console.log(await (res).data.meals);
      const mealsData = await (res).data.meals;
      console.log(mealsData);
      //store the object;
      setMealsData(mealsData || null);
      setInputValue("");
      //alert when no meal found;
      if (inputValue.trim() !== "" && mealsData === null) {
        alert("Oops, No Meal Found of this ingrediant, Try With another one.");
        setInputValue("");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Some error occurred while fetching meals.");
    }
  }

  return (
    <div className="ing-main-container">
      <h1 className="show-container-heading">
        Get Meals By their Main ingrediant
      </h1>

      <div className="ing-container">

        <div className="input-container">
          <input type="text" placeholder="Search By Ingredionts.." value={inputValue} onChange={(event) => setInputValue(event.target.value)} />

          <button className="search-ing-btn" onClick={handleSubmitRequest}>Search</button>
        </div>

        <div className="meals-show-container">

          <div className="ingCards">
            <IngrediontsCards inputValue={inputValue} ingData={mealsData} errorMessage={errorMessage} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredion;