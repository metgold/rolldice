import React from 'react';

import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { Profile } from '../../../../components/profile.component';
import { ResultsTable } from '../../../../components/resultstable.component';




const Container = styled(View)`
    display: flex;
    min-height: 100%;
    background: #222222;
`
const Results = styled(Text)`
    position: absolute;
    width: 98px;
    height: 23px;
    align-self: center;
    top: 11%;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #6C6C6C;
    line-height: 23px;
`
const Activities = styled(View)`
    display: flex;
    flex-direction: row;
    top: 8%;
    justify-content: space-around;
`
const HeaderText = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #0078E7;
`
export const HomeLightResults = () => {
  return (
         <Container>
      <Profile/>
      <Results>
        RESULTS
      </Results>
      <Activities>
        <HeaderText>My Participations</HeaderText>
        <HeaderText>Today</HeaderText>
      </Activities>
      <ResultsTable/>
    </Container>
  )
}