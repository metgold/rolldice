import "./styles.css";
import React, { useState } from "react";
import { View, Text } from 'react-native';
import { dataAttributes } from "./data/attributes";
import { Dice } from "./components/diceBox";
import Attributes from "./components/Attributes";

// initialize the Dice Box outside of the component
diceBox.init().then(()=>{
  diceBox.roll('1d6')
})

export default function App() {
  const [attr, setAttr] = useState(dataAttributes);
  const [pendingRoll, setPendingRoll] = useState();

  // This method is triggered whenever dice are finished rolling
  Dice.onRollComplete = (results) => {
    console.log(results);

    const newState = { ...attr };

    if (pendingRoll === "all") {
      Object.keys(newState).forEach((attr, i) => {
        newState[attr].total = results[i].value;
      });
    } else {
      newState[pendingRoll].total = results[0].value;
    }
    setAttr(newState);
  };

  // update attribute from numerical input
  const updateAttributes = (newState) => {
    console.log("update the attributes");
    setAttr(newState);
  };

  // trigger dice roll
  const rollDice = (notation, group) => {
    // save which attribute we're rolling for
    setPendingRoll(group);
    // trigger the dice roll
    Dice.show().roll(notation);
  };

  return (
    <View className="App">
      <Text>Dice Rolling Demo</Text>
      <Attributes
        attributes={attr} // pass in attribute numbers from App state
        onRoll={rollDice} // pass down roll function
        onChange={updateAttributes} // pass down onChange function
      />
    </View>
  );
}
