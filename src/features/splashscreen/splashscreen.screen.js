import React from 'react';
import { BackgroundSplashScreen } from '../../components/backgroundimage.component';
import { Image } from 'react-native';

import styled from 'styled-components/native';

const Image1 = styled(Image)`
  position: absolute;
  width: 77.15%;
  height: 32.98%;
  left: 14.13%;
  top: 30.78%;
`
const Image2 = styled(Image)`
position: absolute;
width: 120.81%;
height: 55.34%;
left: 0.15%;
top: 45.58%;
`
export const  SplashScreen = ({navigation}) => {
  setTimeout(() => {navigation.navigate('Account')},3000)
  return (
    < BackgroundSplashScreen>
      <Image1 source={require('../../../assets/images/3ddice.png')}/>
      <Image2 source={require('../../../assets/images/profits1.png')}/>
    </ BackgroundSplashScreen>
  )
}