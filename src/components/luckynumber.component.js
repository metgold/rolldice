import { View, Text } from 'react-native'
import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper'

const Container = styled(View)`
    position: absolute;
    left: 6.93%;
    right: 6.4%;
    top: 32.51%;
    bottom: 42.86%;
    background: #222222;
    border-radius: 6px;
`
const Title = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 19px;
`
const ViewNumber = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 50px;
`
const Number = styled(Text)`
width: 35px;
height: 35px;
left: 14.27%;
right: 6.4%;
top: 14.38%;
bottom: 54.31%;
background: #3C3C3C;
border: 1px solid #545454;
box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
border-radius: 2px;
color: #C6C6C6;
text-align: center;
padding: 8px;
font-family: Inter-Black;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
`
const SubmitBtn = styled(Button)`
    position: absolute;
    width: 112px;
    height: 40px;
    left: 34%;
    top:70.78%;
    background: #0078E7;
    border-radius: 4px;
    
`
const Btn = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 18px;
color: #FFFFFF;
`
export const LuckyNumber = () => {
  return (
    <Container>
      <Title>Select Your Lucky Number</Title>
      <ViewNumber>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
        <Number>4</Number>
        <Number>5</Number>
        <Number>6</Number>
      </ViewNumber>
      <SubmitBtn>
        <Btn>Submit</Btn>
      </SubmitBtn>
    </Container>
  )
}