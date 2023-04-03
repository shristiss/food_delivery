import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect,useState } from "react";

const AvailableMeals = () => {
  const [meals,setMeals]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [httpsError,setHttpError]=useState(); 
useEffect(()=>{
  const fetchMeals=async()=>{
  const response=await fetch('https://fooddelivery-7d253-default-rtdb.firebaseio.com/meals.json');
  const respnseData=await response.json();
if(!response.ok)
{
throw new Error("something went wrong!")
}
  const loadedMeals=[];
  for(const key in respnseData){
    loadedMeals.push({
      id:key,
      name:respnseData[key].name,
      description:respnseData[key].description,
      price:respnseData[key].price
    })
  }
  setMeals(loadedMeals)
  setIsLoading(false);
  }
  
  fetchMeals().catch((error)=>{
      setIsLoading(false);
      setHttpError(error.message)
    })

},[])

if(isLoading)
{
  return <section className={classes.MealsLoading}>
    <p>Loading...</p>
  </section>
}
if(httpsError){
  return <section className={classes.mealsError}>
    <p>{httpsError}</p>
  </section>
}
  const mealsList =meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
