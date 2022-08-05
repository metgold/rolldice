import { View, Text } from 'react-native'
import React from 'react';
import styled from 'styled-components/native';

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 16px;
`
const NumberBox = styled(Text)`
    box-sizing: border-box;
    position: absolute;
    height: 32px;
    width: 32px;
    left: 10%;
    background: #3C3C3C;
    border: 1px solid #545454;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
    border-radius: 2px;
    padding: 7px;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #C6C6C6;
`
const Members = styled(Text)`
position: absolute;
width: 100%;
height: 70px;
font-family: Inter-Black;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
left: 17%;
padding-left: 32px;
padding-top: 10px;
`

export const Games = ({id, number}) => {
  return (
    <View>
      <Container>
        <NumberBox>{id}</NumberBox>
        
        <Members>{number}</Members>
      </Container>
    </View>
  )
}