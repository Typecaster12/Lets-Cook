import { useEffect, useState, useTransition } from "react";
import { getFoodsByRegion } from "../../API/apiInstance";
import { PacmanLoader } from "react-spinners";
import RegionCard from "./RegionCard";

const Region = () => {
    //state to store the value of input field;
    const [inputValue, setInputValue] = useState("");
    //state to track if there is any value inside the upper state or not;
    const [hasInput, setHasInput] = useState(false);
    //useTransition hook; 
    const [isPending, startTransition] = useTransition();
    //for api data to be stored;
    const [countryFoodData, setCountryFoodData] = useState([]);


    //conditions
    useEffect(() => {
        if (inputValue.trim() === "") {
            setHasInput(false);
            setCountryFoodData([]);
            return;
        }

        //else fetch the data;
        startTransition(async () => {
            try {
                const res = await getFoodsByRegion(inputValue);
                //storing into var to track the rander;
                const meals = res.data.meals;
                //conditions;
                if (meals === null) {
                    setHasInput(true);
                    setCountryFoodData([]);
                } else {
                    setHasInput(true);
                    console.log(meals);
                    setCountryFoodData(meals || []);
                }
            } catch (error) {
                console.error("Error fetching meals:", error);
                setCountryFoodData([]); // reset on error
                setHasInput(false);
            }
        });
    }, [inputValue]);


    return (
        <div className="region-section">
            <h1 className="region-heading">Get Taste Of Different Countries...</h1>
            <div className="region-container">
                <input
                    type="text"
                    placeholder="Enter Country Name"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />

                {/* this container indicats us weather we have data or not */}
                <div className="data-indicator">
                    {inputValue.trim() === ""
                        ? <p>Nothing Tasty Here..😣</p>
                        : <p>Your Food is Here..😋</p>}
                </div>

                {/* loading state  */}
                <div className="loader-container">
                    {isPending && <PacmanLoader
                        color="#e85d04"
                        margin={10}
                    />}
                </div>



                <div className="data-cards">
                    <RegionCard countryFoodData={countryFoodData} isPending={isPending} hasInput={hasInput} inputValue={inputValue} />
                </div>
            </div>

        </div>
    )
}

export default Region;