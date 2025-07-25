/* eslint-disable no-unused-vars */
import { useEffect, useMemo, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getFoodById } from "../../API/apiInstance";

const MealDetails = () => {
    //useParams to get the parameter value;
    //to get the mealId so that we can pass it to the new fetchfunction;
    //which fetch the data based on meals id;
    const { id } = useParams();
    // console.log(id);

    //useTransition hook;
    const [isPending, startTransition] = useTransition();
    //hook to store the response data;
    //this will work as object, avoid making it an array;
    const [meal, setMeal] = useState(null);

    //fetching the data;
    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const res = await getFoodById(id);
                const IndMeal = res.data.meals[0];
                setMeal(IndMeal || null);
                console.log(IndMeal);
            } catch (error) {
                console.log("Some Error occured", error);
                setMeal(null);
            }
        };

        fetchMeal();
    }, [id]);

    //helper function to extract ingredients from array of data;
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

    //we donot have to render it every time, after fetch(data) then only we have to call this function;
    const ingredients = useMemo(() => {
        return meal ? extractIngData(meal) : []
    }, [meal])

    return (
        <>
            {/* pending state  */}
            {isPending && (
                <div className="loader-container">
                    <PacmanLoader color="#e85d04" margin={10} />
                </div>
            )}


            {
                meal !== null ? (
                    <div className="meal-seaction">
                        <h1 className="meal-heading">
                            {meal.strMeal}
                        </h1>
                        <div className="meal-cntainer">
                            <img src={meal.strMealThumb} alt={meal.strMeal} />

                            <div className="meal-details">
                                <div className="meal-subHeading">
                                    <p>Originated From : {meal.strArea}</p>
                                    <p>Meals Category: {meal.strCategory}</p>
                                </div>

                                <div className="ingredients-container">
                                    <h2>{meal.strMeal}'s Ingredients</h2>
                                    <ul className="ingList">
                                        {
                                            ingredients.map((curEle, index) => (
                                                <li className="ingElement" key={index}>{curEle}</li>
                                            ))
                                        }
                                    </ul>
                                </div>

                                <div className="recipe-container">
                                    <p className="recipe">
                                        Main Recipe :
                                        <span >{meal.strInstructions}</span>
                                    </p>
                                </div>

                                <div className="ytLink">
                                    <a href={meal.strYoutube} className="link" target="_blank" rel="noopener noreferrer">
                                        Watch Recipe Video
                                    </a>
                                </div>
                            </div>
                        </div>

                        <NavLink to={"/features/region"}>
                            <button className="back">Go Back To Dishes</button>
                        </NavLink>
                    </div>

                ) : (
                    !isPending && (
                        <p className="no-results">
                            Oops, Your Meal is eaten by Rat🐭... Try Again
                        </p>
                    )
                )
            }
        </>
    )
}

export default MealDetails;