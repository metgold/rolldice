import React from 'react';

import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { BackgroundImageHomeLight } from '../../components/backgroundimage.component';
import { Profile } from '../../components/profile.component';
import { ResultsBox } from '../../components/resultsbox.component';



const Container = styled(View)`
    display: flex;
    min-height: 100%;
    min-width: 100%;
    flex: 1;
    background: #222222;
`
const Dice = styled(View)`
    position: absolute;
    width: 63.47%;
    height: 29.31%;
    left: 18.4%;
    top: 24.88%;
    background: transparent;
    border-radius: 45px;
`
const RollView = styled(View)`
    position: absolute;
    top: 62%;
    display: flex;
    width: 112px;
    height: 40px;
    background: #0078E7;
    border-radius: 4px;
    justify-content: center;
    align-self: center;
`
const Roll = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF;
    text-align: center;
`
export const HourlyplayhomeBlack = () => {
  return (
   
     <BackgroundImageHomeLight>
       <Container>
       <Profile/>
        <Dice>
            <Image 
               style={{
                bottom: 0,
                left: 40,
                right: 1,
                top: 5
            }}
              source={require('../../../assets/images/dice_color1.png')}/>
        </Dice>
        <RollView>
        <Roll>
          Roll dice
        </Roll>
        </RollView>
        <ResultsBox/>
       </Container>
     </BackgroundImageHomeLight>
  )
}