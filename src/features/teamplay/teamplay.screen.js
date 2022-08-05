import { View, Text, Image } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import {  Button } from 'react-native-paper';
import { Profile } from '../../components/profile.component';
import { TeamPlayText } from '../../components/teamplaytext.component';

const Container = styled(View)`
    display: flex;
    min-height: 100%;
    background-color: #222222;
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
    top: 58%;
    display: flex;
    width: 112px;
    height: 40px;
    background: #8D37A2;
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
const BottomActivity = styled(View)`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 339px;
    height: 43px;
    align-self: center;
    top: 69%;
    justify-content: space-around;
`
const WinnersList = styled(Text)`
    width: 239px;
    height: 43px;
    background: #00B3B3;
    border-radius: 4px;
    text-align: center;
    padding: 10px;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
`
const Info = styled(Text)`
    width: 64px;
    height: 43px;
    background: #3D8C8C;
    border-radius: 4px;
    text-align: center;
    padding: 10px;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    color: #FFFFFF;
`
const Timer = styled(Text)`
    position: absolute;
    width: 120px;
    height: 24px;
    align-self: center;
    top: 79%;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    color: #F8F8F8;
`
export const TeamPlayScreen = () => {
  return (
    <Container>
      <Profile/>
      <TeamPlayText/>
      <Dice>
            <Image 

              style={{
              bottom: 0,
              left: 40,
              right: 1,
              top: 5
          }}
            source={require('../../../assets/images/dice_color.png')}/>
        </Dice>
        <RollView>
        <Roll>
          Roll dice
        </Roll>
        </RollView>
      <BottomActivity>
        <WinnersList>
            Last Game Winners List
        </WinnersList>
        <Info>
            Info
        </Info>
      </BottomActivity>
      <Timer>
        00:59:00
      </Timer>
    </Container>
  )
};