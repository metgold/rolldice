import React, { useState } from 'react';

import { Motion } from "@legendapp/motion"
import { Button  } from 'react-native-paper'
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { BackgroundImageHomeLight } from '../../components/backgroundimage.component';
import { Profile } from '../../components/profile.component';
import { ResultsBox } from '../../components/resultsbox.component';
import MakeItRain from '../../components/animated.rain.component';



const Container = styled(View)`
    display: flex;
    min-height: 100%;
`
const ViewText = styled(View)`
    display: flex;
    align-self: center;
`
const HourlyTxt = styled(Text)`
  font-family: Inter-Black;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #FFFFFF;
  padding: 3px;
`
const DiceImg = styled(View)`
    position: absolute;
    width: 63.47%;
    height: 29.31%;
    align-self: center;
    top: 24.88%;
    background: #FFFFFF;
    border-radius: 45px;
    justify-content: center;
`
const Roll = styled(Button)`
    position: absolute;
    align-self: center;
    top: 61.58%;
    color: #FFFFFF;
    background: #FF5A14;
    border-radius: 4px;
    width: 39.87%;
    height: 4.93%;
    text-align: center;
`
const RollText = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #FFFFFF;
    min-width: 50%;
    text-transform: capitalize;
`



export const HourlyplayhomeLight = ({navigation}) => {

  const [ points, setPoints ] = useState(0);

  const dicePress = (x) => { x = Math.floor((Math.random() * 6)+1)*10;console.log(x); setPoints(x) }

  return (
   <>
    
     <BackgroundImageHomeLight>
     <MakeItRain/>
       <Container>
       <Profile/>
      <ViewText>
        <HourlyTxt>
          Hourly
        </HourlyTxt>
      </ViewText>
        <DiceImg>
            <Image 

              style={{
              bottom: 0,
              left: 40,
              right: 1,
              top: 5
          }}
            source={require('../../../assets/images/dicevector.png')}/>
        </DiceImg>
        <Roll onPress={dicePress}>
         <RollText> Roll Dice</RollText>
        </Roll>
        <ResultsBox points = {points}/>
       </Container>
     </BackgroundImageHomeLight>
   </>
  )
};