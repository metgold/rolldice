import React, { useState, useContext } from 'react';
import { Text, View } from 'react-native';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalContext from './utility/modalcontext';

const Wrapper = styled(View)`
      display: flex;
      flex-direction: row;
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
const BurgerNav = styled(View)`
    position: absolute;
    top: 49px;
    bottom: 0;
    right: 0;
    z-index: 3;
    elevation: -3;
    background: #111111;
    width: 130px;
    height: 174px;
    left: 222px;
    border-radius: 4px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    // transform: ${props => props.show ? 'translateX(0)': 'translateX(100)'};
    transition: transform 0.2s;
`
const View1 = styled(View)`
  height: 37px;
  width: 100px;
  flex: 1;
  border-bottom-width: 1px;
  border-bottom-color: #3C3C3C;

`
const Text1 = styled(Text)`
  font-family: Inter-Black; 
  height: 50px;
  width: 96px;
  font-style: normal; 
  font-weight: 500;
  color: #FFFFFF;
  font-size: 11px;
`
export const DropdownBox = () => {

  const {handlePress, handleWithdraw, handlePassword, handlePrivacy, handleSignout, box, setBox} = useContext(ModalContext);
  // const [box, setBox] = useState(false);
  return(
       <>
          <Wrapper>
            <Name onPress={()=>setBox(true)}>Akash_New</Name>
            <Icon name='chevron-down' color="#FFFFFF" size={20}/>
          </Wrapper>
          {
            box ?
              <BurgerNav>
              {/* <CloseWrapper>
                <CustomClose onClick={()=>setBox(false)}/>
              </CloseWrapper>  */}          
              <View1><Text1 onPress={()=>handlePress()} >Edit Profile</Text1></View1>
              <View1><Text1 onPress={()=>handleWithdraw()} >Withdraw</Text1></View1>
              <View1><Text1 onPress={()=>handlePrivacy()} >Privacy Policy</Text1></View1>
              <View1><Text1 onPress={() => handlePassword()} >Change Password</Text1></View1>
              <View1><Text1 onPress={() => handleSignout()} >Sign Out</Text1></View1>
            </BurgerNav> : null
          }
          
       </>
  )
}