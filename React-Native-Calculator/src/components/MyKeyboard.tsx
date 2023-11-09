// import  * as React from "react";
import react, { useState } from 'react'
import Button from "./Button";
import { View, Text } from "react-native";
import {Styles} from "../styles/GlobalStyles"
import { myColors } from "../styles/Colors"


 export default function MyKeyboard() {
   var [value,setValue]=useState('0');
  const calculate=(x:String)=>
  {
    if(x=='=')
    {
      setValue(eval(value).toString());
    }
    else if(x=='C')
    {
      setValue('0');
    }
    else if(x=='X')
    {
      setValue(value.slice(0,-1));
    }
    else
    {
      if(value=='0')
      {
        value='';
      }
     
      setValue(value+x);
    }
  }

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center"
        }}
      >
       
        <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{value}</Text>
      
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={()=>calculate('C')} />
        <Button title="⌫" isGray onPress={() => calculate('X')} />  
        <Button title="^" isGray onPress={() => calculate("**")} />
        <Button title="÷" isBlue onPress={() => calculate("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => calculate("7")} />
        <Button title="8" onPress={() => calculate("8")} />
        <Button title="9" onPress={() => calculate("9")} />
        <Button title="×" isBlue onPress={() => calculate("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => calculate("4")} />
        <Button title="5" onPress={() => calculate("5")} />
        <Button title="6" onPress={() => calculate("6")} />
        <Button title="-" isBlue onPress={() => calculate("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => calculate("1")} />
        <Button title="2" onPress={() => calculate("2")} />
        <Button title="3" onPress={() => calculate("3")} />
        <Button title="+" isBlue onPress={() => calculate("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="00"  onPress={() => calculate("00")} />
        <Button title="0" onPress={() => calculate("0")} />
        <Button title="." onPress={() => calculate(".")} />
        <Button title="=" isBlue onPress={() => calculate("=")} />
      </View>
    </View>
  );
};



