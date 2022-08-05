import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { Profile } from '../../components/profile.component';
import { HourlyText } from '../../components/hourlytext.component';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled(View)`
    display: flex;
    min-height: 100%;
    background-color: #222222;
`
const Roll = styled(button)`
    position: absolute;
    width: 112px;
    height: 40px;
    align-self: center;
    top: 472px;
    background: #0078E7;
    border-radius: 4px;
`
const BottomActivity = styled(View)`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 339px;
    height: 43px;
    align-self: center;
    top: 566px;
`
const Result = styled(Text)`
    width: 239px;
    height: 43px;
    background: #816DFF;
    border-radius: 6px;
`
const Info = styled(Text)`
    width: 64px;
    height: 43px;
    background: #3D8C8C;
    border-radius: 4px;
`
const Points = styled(Text)`

`
export const HourlyScreen = () => {
  return (
    <Container>
      <Profile/>
      <HourlyText/>
      <Roll>
        Roll Dice
      </Roll>
      <BottomActivity>
        <Result>
            Result
        </Result>
        <Info>
            <Avatar.Text size={14} label="1" />
            <Avatar.Text size={14} label="10" />
            <Icon name='star' color="#F2D422"/>
            <Points>1 points</Points>
        </Info>
      </BottomActivity>
    </Container>
  )
};