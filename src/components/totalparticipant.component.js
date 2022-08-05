import { View, Text } from 'react-native'
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Games } from './games.component';

const Container = styled(View)`
  position: absolute;
  left: 6.93%;
  right: 6.4%;
  top: 17.86%;
  bottom: 16.26%;
  background: #222222;
  border-radius: 6px;
`
const Close = styled(View)`
  display: flex;
  align-self: flex-end;
  padding: 10px;
`
const Title = styled(Text)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding-left: 32px;
`
const Selected = styled(View)`
  display: flex;
  flex-direction: column;
  height: 90px;
  margin-top: 10px;
`
const SelectedNumber = styled(Text)`
  height: 45px;
  width: 45px;
  background: #0078E7;
  border: 1px solid #FFFFFF;
  border-radius: 6px;
  color: #FFFFFF;
  padding-left: 15px;
  padding-top: 12px;
  margin-left: 32px;
  margin-top: 14px;
  font-family: Inter-Black;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
`
const SectionOdds = styled(View)`
  display: flex;
  flex-direction: column;
  height: 90px;
  margin-top: 10px; 
`
const OddsInfo = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #C6C6C6;
padding: 7px;
margin-left: 32px;
`
const Amount = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
color: #F48B19;
margin: 32px;
`
const players = [
  {id:'4', number: '2 players'},
  {id:'5', number: '5 players'},
  {id:'2', number: '7 players'},
]

export const Participant = () => {
  return (
    <Container>
      <Close><Icon name='close' color="#FFFFFF" size={27}/></Close>
      <Title>Total Participants</Title>
      {players.map((player)=><Games id ={player.id} number = {player.number}/>)}
      <Selected>
        <Title>Your Lucky Number</Title>
        <SelectedNumber>5</SelectedNumber>
      </Selected>
     <SectionOdds>
        <Title>Your Winning Odds</Title>
        <OddsInfo>Total amount: 5000</OddsInfo>
        <OddsInfo>User selected: 5</OddsInfo>
        <OddsInfo>Number: 3</OddsInfo>
     </SectionOdds>
    <Amount> Winning amount : 1660 </Amount>
    </Container>
  )
}