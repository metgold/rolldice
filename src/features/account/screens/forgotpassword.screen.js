import React, {useContext, useState} from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import { TextInput, Button  } from 'react-native-paper';
import { FormInput } from '../../../components/forminput.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { isValidObjField, updateError } from '../../../utils/methods';


const ShadowContainer = styled(View)`
    top: 5%;
    border-radius: 12px;
`
const SignUpContainer = styled(View)`
    background-color: #111111;
    min-width: 294px;
    min-height: 340px;
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
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #0078E6;
    padding-left: 45px;
    align-self: center;
`
const Close = styled(View)`
   display: flex;
   align-self: center;
   padding-left: 92px;

`
const ErrorText = styled(Text)`
    color: red;
    font-size: 18px;
    text-align: center;
`
const FormBox = styled(View)`
    
`
const PasswordText = styled(Text)`
    min-height: 12px;
    min-width: 96px;
    font-family: Inter-Black;
    color: #6C6C6C;
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    line-spacing: 0.22rem;
    padding-bottom: 8px;
    padding-left: 32px;
    text-transform: uppercase;
`
const BoxInput = styled(View)`
    margin: 10px;
`
const SubmitBtn = styled(Button)`
    margin: 20px;
    height: 41px;
    width: 307px;
    background-color: #0078E6;
    color: "#FFFFFF";
    border: 1px solid #545454;
    border-radius: 2px;
    elevation: 5;
`
const BtnText = styled(Text)`
    color: #FFFFFF;
    font-family: Inter-Black;
    font-size: 14px;
    text-transform: capitalize;
`
const ForgotPasswordScreeen = ({navigation}) => {
    const [error, setError] = useState('')
    const [userInfo, setUserInfo] = useState({
        password: '',
        confirmPassword: '',
    });

    const {confirmPassword, password} = userInfo;
    const { setIsAuthenticated } = useContext(AuthenticationContext);

    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value });
    };

    const isValidForm = () => {
        if(!isValidObjField(userInfo)) return updateError('Required all fields!', setError);
  
        if(!password.trim() || password.length <  8) return updateError('Password is too short!', setError);

        if(password !== confirmPassword) return updateError('password does not match!', setError)
  
        return true;
      };

      const submitForm = () => {
        if(isValidForm()){
          setIsAuthenticated(true);
        }
      }

    return (
        <ShadowContainer>
             {error ? <ErrorText>{error}</ErrorText> : null}
            <SignUpContainer>
                <ChangePassword>
                    <Lock><Icon name='lock-outline' color="#0078E6" size={23}/></Lock>
                    <Title>Change password</Title>
                    <Close><Icon name='close' color="#C6C6C6" size={23}/></Close>
                </ChangePassword>
                <FormBox>
                        <BoxInput>
            <PasswordText>Password</PasswordText> 
            <FormInput 
                value={password}
                autoCapitalize= 'none'
                placeholder='New Password' 
                secureTextEntry
                right={<TextInput.Icon name="eye-off-outline" color='#6C6C6C' border='1.2px' />}
                onChangeText={(value)=>handleOnChangeText(value,'password')}
                theme={{
                  colors: {
                    placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                    underlineColor: 'transparent', background: '#fff'
                     }
               }}
            />
            </BoxInput>
            <BoxInput>
            <PasswordText>Re-Type</PasswordText> 
            <FormInput 
                value={confirmPassword}
                autoCapitalize= 'none'
                placeholder='Confirm Password' 
                secureTextEntry
                right={<TextInput.Icon name="eye-off-outline" color='#6C6C6C' border='1.2px' />}
                onChangeText={(value)=>handleOnChangeText(value,'confirmPassword')}
                theme={{
                  colors: {
                    placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                    underlineColor: 'transparent', background: '#fff'
                     }
               }}
            />
            </BoxInput>
                </FormBox>
                <SubmitBtn onPress ={submitForm}>
                    <BtnText>Submit</BtnText>
                </SubmitBtn>
            </SignUpContainer>
        </ShadowContainer>
        
    )
};

export default ForgotPasswordScreeen;