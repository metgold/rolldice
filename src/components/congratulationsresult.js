import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import ResultsContext from './utility/resultscontext'
import styled from 'styled-components/native';

const Container = styled(View)`
    background: #222222;
    border-radius: 6px;
`
const Title = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    // letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #FFFFFF;
`
const IconView = styled(View)`

`
const ResultsMessage = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 23px;
text-align: center;
text-transform: capitalize;
color: #F4BA49;
`
const GameEvents = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 35px;
text-align: center;
color: #FFFFFF;
`
const Score = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 800;
font-size: 14px;
line-height: 35px;
color: #F48B19;
`

export const CongratulationsResult = () => {
    const {results} = useContext(ResultsContext);
    console.log(results)
  return (
    <Container>
      <Title>RESULT</Title>
      <IconView></IconView>
      <ResultsMessage> {results.won} </ResultsMessage>
    <GameEvents>Total Amount:{results.Total}</GameEvents>
     <GameEvents>Dice Number:{results.Dice}</GameEvents>
     <GameEvents>Winner Player Amount:{results.player}</GameEvents>
      <Score>{results.player}</Score>
    </Container>
  )
}