import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getFoodIngById } from "../../API/apiInstance";
import { PacmanLoader } from "react-spinners";

const IngDetails = () => {
    //useParam to get the id of clicked card;
    const { id } = useParams();
    //to store the array of objects we gona get;
    const [mealData, setMealData] = useState(null);

    //fetching the data as we get the id of meal;
    useEffect(() => {
        const getTheMealData = async () => {
            try {
                const res = await getFoodIngById(id);
                if (res.status === 200) {
                    console.log(res.data.meals[0]);
                    const MealData = res.data.meals[0];
                    setMealData(MealData || null);
                } else {
                    setMealData(null);
                }
            } catch (error) {
                console.log(error);
                setMealData(null);
                alert("Oops, unalbe to get the recipe, Try again");
            }
        };

        getTheMealData();
    }, [id]);

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
        return mealData ? extractIngData(mealData) : []
    }, [mealData]);

    return (
        <>
            {
                mealData !== null ? (
                    <div className="ingDetails-section">
                        <h1 className="meal-heading">
                            {mealData.strMeal}
                        </h1>
                        <div className="meal-cntainer">
                            <img src={mealData.strMealThumb} alt={mealData.strMeal} />

                            <div className="meal-details">
                                <div className="meal-subHeading">
                                    <p>Originated From : {mealData.strArea}</p>
                                    <p>Meals Category: {mealData.strCategory}</p>
                                </div>

                                <div className="ingredients-container">
                                    <h2>{mealData.strMeal}'s Ingredients</h2>
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
                                        <span >{mealData.strInstructions}</span>
                                    </p>
                                </div>

                                <div className="ytLink">
                                    <a href={mealData.strYoutube} className="inglink" target="_blank" rel="noopener noreferrer">
                                        Watch Recipe Video
                                    </a>
                                </div>
                            </div>
                        </div>

                        <NavLink to={"/features/ing"}>
                            <button className="back">Go Back</button>
                        </NavLink>
                    </div>
                ) : (
                    <div className="loader-container">
                        <PacmanLoader
                            color="#d35400"
                            margin={10}
                        />
                    </div>
                )
            }
        </>
    )

}

export default IngDetails;

// functonName = getFoodIngById;