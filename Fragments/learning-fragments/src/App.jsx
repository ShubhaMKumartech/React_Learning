import React, { useState } from "react";
import "./App.css";
import Fooditem from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItem = [];
  // let foodItem = ["sabzi", "Green Vegetables", "salad", "Ghee", "Roti"];

  // let [textToShow, setTextState] = useState();

  let [foodItem, setFoodItem] = useState([]);
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current value of textState:${textToShow}`);

  const hadleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = ' ';
      let newItems = [...foodItem , newFoodItem];
      setFoodItem(newItems);
      // console.log("Food value entered is " + newFoodItem);
    }
    // console.log(event);
    // textToShow = event.target.value;
    setTextState(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <FoodInput hadleKeyDown={hadleKeyDown}></FoodInput>
        {/* <p>{textToShow}</p> */}
        <Fooditem items={foodItem} />
        <ErrorMessage items={foodItem} />
      </Container>

      {/* <Container>
        <p>
          
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
