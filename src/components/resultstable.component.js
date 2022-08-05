import React from 'react';
import styled from 'styled-components/native';
import { View, Text} from 'react-native'

const Container = styled(View)`
    flex: 1;
    min-height: 100%;
    background: #222222;
    top: 5%;
`
const HeaderView = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 340px;
    height: 43px;
    top: 6%;
    background: #111111;
    border-radius: 4px;
    align-self: center;
`
const TitleView = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center
`
const TitleText = styled(Text)` 
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    color: #6C6C6C;
`
const RowView = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    top: 8%;
    width: 400px;
    height: 23px;
    border-bottom: 20px;
`
const CellText = styled(Text)`
    min-width: 100px;
    height: 50px;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    color: #FFFFFF;
    text-align: center;
`
export const ResultsTable = () => {
  return (
    <Container>
      <HeaderView>
        <TitleView><TitleText >Game ID</TitleText></TitleView>
        <TitleView><TitleText >Winner Point</TitleText></TitleView>
        <TitleView><TitleText >Info</TitleText></TitleView>
      </HeaderView>

      <RowView>
        <CellText>24</CellText >
        <CellText>50000</CellText>
        <CellText>View</CellText>
      </RowView>

      <RowView>
        <CellText>18</CellText>
        <CellText>20000</CellText>
        <CellText >View</CellText>
      </RowView>
      <RowView>
        <CellText>12</CellText>
        <CellText>10000</CellText>
        <CellText>View</CellText>
      </RowView>
    </Container>
  );
};