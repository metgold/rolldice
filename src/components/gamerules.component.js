import { View, Text } from 'react-native'
import React from 'react';
import styled from 'styled-components/native';
import { RulesList } from './RulesList.component';

const Container = styled(View)`
    display: flex;
    flex-direction: column;
    background: #222222;
    min-height: 40%;
    margin-top: 43%;
    margin-left: 24px;
    margin-right: 24px;
    border-radius: 6px;
`
const Title = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    align-self: center;
    padding: 32px;
`
const rules = [
    {id: '1. Select your dice and then participate.'},
    {id: '2. Make your win amount'},
    {id: '3. Get success'},
    {id: '4. Withdraw your amount'},
    {id: '5. And then play'}
]
export const Gamerules = () => {
  return (
    <Container>
      <Title>About Game Rules & /info</Title>
      {
        rules.map((rule) => <RulesList instructions={rule.id}/>)
      }
    </Container>
  )
}