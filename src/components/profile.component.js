import React, {useState, useContext} from 'react';
import {  Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DropdownBox } from './homedropdown.component';
import ModalContext from './utility/modalcontext';


const Container = styled(View)`
      margin: 20px;
      background-color: transparent;
      height: 40px;
      min-width: 100%
`
const ProfileView = styled(View)`
      display: flex;
      flex-direction: row;
      margin: 5px
`
const Price= styled(View)`
      display: flex;
      flex-direction: row;
      margin-right: 70px;
      width: 140px;
      justify-content: space-between;
`
const StarCounter = styled(View)`
      display: flex;
      flex-direction: row;
      background-color: #FFE9E2;
      border-radius: 16px;
      width: 65px;
      height: 22px;
      padding: 2px;
`
const TextStar = styled(Text)`
      font-family: Inter-Black;
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      line-height: 16px;
      color: #27284B;
`
const MoneyCounter = styled(View)`
      display: flex;
      flex-direction: row;
      background-color: #E1FAC7;
      border-radius: 16px;
      width: 65px;
      height: 22px;
      padding: 2px;
`
const Name = styled(Text)`
      font-family: Inter-Black;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #FFFFFF;
      padding-left: 5px;
      padding-right: 5px;
`
export const Profile = () => {

  return (
    <Container>
      <ProfileView>
        <Price>
          <StarCounter>
            <Icon name='star' color="#EFB616" size={16}/>
            <TextStar> 5060 </TextStar>
          </StarCounter>
          <MoneyCounter>
            <Image source={require('../../assets/images/money.png')}/>
            <TextStar> $0.005 </TextStar>
          </MoneyCounter>
        </Price> 
        <Avatar.Image size={24} source={require('../../assets/images/Ellipse.png')} />
        <DropdownBox/>
      </ProfileView>
    </Container>
  );
}