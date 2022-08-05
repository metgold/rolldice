import React from 'react';
import { View, Text, Image} from 'react-native';

import styled from 'styled-components/native';

const Container = styled(View)`
    position: absolute;
    left: 9%;
    right: 9%;
    top: 70.36%;
    bottom: 13.01%;
    background: #600171;
    border-radius: 6px;
`
const Stack = styled(View)`
    display: flex;
    flex-direction: column;
    padding: 15px;
`
const TopStack = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Left = styled(View)`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 239px;
    height: 43px;
    left: 1.27%;
    top: 69.70%;
    background: #00B3B3;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`
const TextContent = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 19px;
color: #FFFFFF;
`
const Cup = styled(View)`
    padding-right: 17px;
`
const RightText = styled(Text)`
    display: flex;
    position: absolute;
    width: 64px;
    height: 43px;
    right: 1.27%;
    top: 69.70%;
    background: #3D8C8C;
    border-radius: 4px;
    color: #FFFFFF;
    font-family: Inter Black;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    padding: 10px;
    text-align: center;
`
const Counter = styled(Text)`
    width: 120px;
    height: 24px;
    left: 128px;
    top: 243%;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.17px;
    color: #FFFFFF;
`


export const Lastgame = () => {
    return(
        <Container>
            <Stack>
                <TopStack>
                    <Left>
                        <Cup>
                            <Image source={require('../../assets/images/winner.png')}/>
                        </Cup>
                        <TextContent>Last Game Winners</TextContent>
                    </Left>
                    <RightText>Info</RightText>
                </TopStack>
                <Counter>00:59:00</Counter>
            </Stack>
        </Container>
    )
}