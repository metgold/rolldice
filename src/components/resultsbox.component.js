import React from 'react';
import styled from 'styled-components/native';
import { Avatar } from 'react-native-paper';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled(View)`
    min-width: 100%;
    left: 18.2%;
    height: 5.30%;
    position: absolute;
`
const BottomActivity = styled(View)`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 339px;
    height: 43px;
    align-self: center;
    top: 500px;
    
`
const Result = styled(View)`
    display: flex;
    justify-content: center;
    width: 239px;
    height: 53px;
    background: #816DFF;
    border-radius: 6px;
`
const ResultText = styled(Text)`
    display: flex;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
    text-align: center;
    justify-content: center;
    align-self: center;
`
const Info = styled(View)`
    display: flex;
    flex-direction: row;
    width: 239px;
    height: 74px;
    background: #F8F8F8;
    border-radius: 6px;
    justify-content: space-around;
    padding: 16px;
`
const Points = styled(Text)`
font-family: Inter-black;
font-style: normal;
font-weight: 800;
font-size: 16px;
line-height: 18px
color: #222222;
`

export const ResultsBox = ({points}) => {
    return(
        <Container>
            <BottomActivity>
            <Result>
               <ResultText> Result</ResultText>
            </Result>
            <Info>
                <Avatar.Text size={24} label="1" background='#C9F0FF' />
                <Avatar.Text size={24} label="10" />
                <Icon name='star' color="#F2D422" size={24}/>
                <Points>{points} points</Points>
            </Info>
        </BottomActivity>
        </Container>
    )
}