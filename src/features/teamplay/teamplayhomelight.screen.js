import React from 'react';

import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { BackgroundImageHomeColor } from '../../components/backgroundimage.component';
import { Lastgame } from '../../components/lastgamebox.component';
import { Profile } from '../../components/profile.component';
import { TeamPlayText } from '../../components/teamplaytext.component';
import { Navigation } from '../../infrastructure/navigation';



const Container = styled(View)`
    display: flex;
    min-height: 100%;
    min-width: 100%;
`
const Dice = styled(View)`
    position: absolute;
    width: 63.47%;
    height: 29.31%;
    align-self: center;
    top: 24.88%;
    background: #FFFFFF;
    border-radius: 45px;
    justify-content: center;
`
const RollView = styled(View)`
    position: absolute;
    top: 62%;
    display: flex;
    width: 112px;
    height: 40px;
    background: #FFBB0C;
    border-radius: 4px;
    justify-content: center;
    align-self: center;
`
const Roll = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #8D37A2;
    text-align: center;
`
export const TeamplayhomeLight = ({navigation}) => {
  return (
   
     <BackgroundImageHomeColor>
       <Container>
       <Profile/>
       <TeamPlayText/>
        <Dice>
            <Image
             style={{
              bottom: 0,
              left: 40,
              right: 1,
              top: 5
          }}
            source={require('../../../assets/images/dice_color.png')}/>
        </Dice>
        <RollView>
        <Roll onPress={()=>navigation.navigate('Teamplayroll')}>
          Participate
        </Roll>
        </RollView>
        <Lastgame/>
       </Container>
     </BackgroundImageHomeColor>
  )
}