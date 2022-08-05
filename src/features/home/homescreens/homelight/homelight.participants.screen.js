import { View, Text } from 'react-native'
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Games } from '../../../../components/games.component';

const Container = styled(View)`
  flex:1;
  background: #222222;
  padding-top: 40px;
`
const Wrapper = styled(View)`
  padding-top: 16px;
  background: #3847CF;
  max-width: 100%;
  min-height: 20%;
  border-radius: 6px;
  margin: 32px;
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
  margin-left: 32px;
  margin-right: 32px;
  background: #CF9338;
  border-radius: 6px;
  padding-top: 16px;
  min-height: 20%;
`
const SelectedInfo = styled(View)`
    display: flex;
    flex-direction: row;
`
const SelectedNumber = styled(Text)`
  height: 45px;
  width: 45px;
  background: #C4801A;
  border: 1px solid #946B1B;
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
const NumberText = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #FFFFFF; 
    padding-top: 26px;
    padding-left: 16px;        
`
const BottomWrapper = styled(View)`
    background: #8258DC;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    margin: 32px;
    min-height: 20%;
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

export const HomelightParticipant = () => {
  return (
    <Container>
        <Wrapper>
            <Title>No. Of Total Participants</Title>
            {players.map((player)=><Games id ={player.id} number = {player.number}/>)}
        </Wrapper>
      <Selected>
        <Title>Your Lucky Number</Title>
        <SelectedInfo>
            <SelectedNumber>5</SelectedNumber>
            <NumberText>You selected 5 </NumberText>
        </SelectedInfo>
      </Selected>
        <BottomWrapper>
            <SectionOdds>
                <Title>Your Winning Odds</Title>
                <OddsInfo>Total amount: 5000</OddsInfo>
                <OddsInfo>User selected: 5</OddsInfo>
                <OddsInfo>Number: 3</OddsInfo>
            </SectionOdds>
            <Amount> Winning amount : 1660 </Amount>
        </BottomWrapper>
    </Container>
  )
}