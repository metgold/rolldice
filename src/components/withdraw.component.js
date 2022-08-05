import React, {useState} from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { TextInput, Button  } from 'react-native-paper';


const ShadowContainer = styled(View)`
    
`
const SignUpContainer = styled(View)`
    background-color: #111111;
    width: 294px;
    height: 320px;
    align-self: center;
    elevation: 5;
    border-radius: 12px
`
const ChangePassword = styled(View)`
    display: flex;
    flex-direction: row;
`
const Lock = styled(Text)`
    color: #0078E6;
    font-family: Inter-Black;
    padding: 15px;
`
const Title = styled(Text)`
    color: #0078E6;
    font-family: Inter-Black;
    padding: 15px;
`
const Close = styled(Text)`
    color: #C6C6C6;
    font-family: Inter-Black;
    padding: 15px;
`
const FormInput = styled(View)`
    
`
const Password = styled(Text)`
    font-family: Inter-ExtraBold;
    color: #C6C6C6;
    font-size: 9px;
    font-weight: 500;
    padding-left: 33px;
`
const BoxInput = styled(TextInput)`
    margin: 20px;
    height: 41px;
    width: 239px;
    background-color: #3C3C3C;
    border: 1px solid #545454;
    border-radius: 2px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
`
const SubmitBtn = styled(Button)`
    margin: 20px;
    height: 41px;
    width: 239px;
    background-color: #0078E6;
    color: "#FFFFFF";
    border: 1px solid #545454;
    border-radius: 2px;
    elevation: 5;
`
const WithdrawScreeen = ({navigation}) => {
    return (
        <ShadowContainer>
            <SignUpContainer>
                <ChangePassword>
                    <Lock><Icon name='wallet-outline' color="#0078E6"/></Lock>
                    <Title>Withdraw</Title>
                    <Close><Icon name='close' color="#C6C6C6"/></Close>
                </ChangePassword>
                <FormInput>
                    <Password>WITHDRAW AMOUNT</Password>
                    <BoxInput
                        label="10"
                        secureTextEntry
                        right={<TextInput.Icon name="eye-off-outline" />}
                        />
                </FormInput>
                <SubmitBtn onPress ={() => navigation.navigate('Account')}>
                    Submit
                </SubmitBtn>
            </SignUpContainer>
        </ShadowContainer>
        
    )
};

export default WithdrawScreeen;