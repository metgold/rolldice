import React, { useState, useContext } from 'react';
import { View, Image, Text, Platform, KeyboardAvoidingView } from 'react-native';

import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native-paper';
import { FormInput } from '../../../components/forminput.component';
import { FormSubmitBtn } from '../../../components/formsubmitbtn.component';
import { isValidEmail, isValidObjField, updateError } from '../../../utils/methods';
import LoginScreen from './login.screen';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const Container = styled(View)`
    background: #222222;
    min-height: 100%;
    min-width: 100%;
`
const ErrorText = styled(Text)`
    position: absolute;
    font-family: Inter-Black;
    color: red;
    font-size: 18px;
    align-self: center;
    top: 133px;
`
const Dice = styled.View`
    position: absolute;
    top: 13px;
    align-self: center;
`
const SignUpText = styled(View)`
    position: absolute;
    top: 155px;
    align-self: center;
`
const TextTop = styled(Text)`
    width: 271px;
    height: 36px;
    text-align: center;
    color: #0078E7;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
`
const TextBelow = styled(Text)`
    width: 280px;
    height: 55px;
    text-align: center;
    color: #6C6C6C;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    padding-top: 15px;
`

const SignUpBtn = styled(View)`
    position: absolute;
    align-self: center;
    top: 635px;
`
const BottomText = styled(View)`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 179px;
    height: 24px;
    align-self: center;
    bottom: 3px;
`
const TextQuery = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #8B8B8B;
`
const TextLogin = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #0078E7;
`
const FormView = styled(View)`
    position: absolute;
    margin-top: 343px;
    top: 60px;
    align-self: center;
    justify-content: center;
    width: 307px;
    height: 46px;
`
const BoxInput = styled(View)`
    margin: 5px;
`
const Password = styled(Text)`
      margin-bottom: 10px;
      top: 2px;
      min-height: 12px;
      min-width: 96px;
      font-family: Inter-Black;
      color: #6C6C6C;
      font-size: 10px;
      font-weight: 500;
      line-height: 12px;
      line-spacing: 0.22rem;
`
const SubmitBtn = styled(Button)`
        position: absolute;
        width: 112px;
        height: 40px;
        background: #0078E7;
        border-radius: 4px;
        align-self: center;
`
const TextBtn = styled(Text)`
        font-family: Inter-Black;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        text-transform: capitalize;
`

export const SignUpScreen = ({navigation}) => {
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        country: '',
    });
    const[error, setError] = useState('');
    const { setAccount, setIsAuthenticated } = useContext(AuthenticationContext);

    const {fullName, email, password, confirmPassword, country} = userInfo
    const handleOnChangeText = (value, fieldName) => {
        setUserInfo({...userInfo, [fieldName]: value });
    }
    
    const isValidForm = () => {
        //We will accept only if all of the fields have value 
        if(!isValidObjField(userInfo)) return updateError('Required all fields!', setError)
        //if valid name with 3 or more characters
        if(!fullName.trim() || fullName.length < 3) return updateError('Invalid name!', setError)
        //only valid email is allowed
        if(!isValidEmail(email)) return updateError('Invalid email!', setError)
        //password musthave 8 or more characters
        if(!password.trim()|| password.length < 8) return updateError('password is less than 8 characters!', setError)
        //pasword and confirm password must be the same
        if(password !== confirmPassword) return updateError('password does not match!', setError)

        return true;
    }
    const submitForm = (email, password, fullName, country) => {
        if(isValidForm()){
            var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImVtYWlsIjoiZG9seUBtYWlsLmRlIiwiaWF0IjoxNjU4OTU0NTczfQ.VGvlZpK5Pb8xuow3l4yEekFfTVDOxfntDW9yDr7D1rI");
    myHeaders.append("Content-Type", "application/json");

    var circularReference = { "email": email,
    "password": password,
    "username": fullName,
    "country": country};
circularReference.myself = circularReference;

// JSON.stringify(circularReference); // returns --> TypeError: cyclic object value

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

var raw = JSON.stringify(circularReference, getCircularReplacer()); // returns --> {"otherData":123}
    
    // var raw = JSON.stringify({
    //   "email": email,
    //   "password": password,
    //   "username": fullName,
    //   "country": country
    // });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://192.168.7.17/user/add", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

        //    auth();
        setIsAuthenticated(true)

        }
    };
    // const auth =  () => navigation.navigate('Login')
     const KeyboardVerticalOffset = Platform.OS === 'ios ' ? 40 : 0;
    return(
            <Container>
            {error ? <ErrorText>{error}</ErrorText> : null}
            <Dice>
                <Image source={require('../../../../assets/images/img15.png')}/>
            </Dice>
            <SignUpText>
                <TextTop>Sign Up</TextTop>
                <TextBelow>Earn and Make Money with Lottery & Roulette</TextBelow>
            </SignUpText>
            
           <FormView>
           {/* <KeyboardAvoidingView KeyboardVerticalOffset={KeyboardVerticalOffset} behavior="position" style={{flex:1}}> */}
          <BoxInput>
          <Password>Full Name</Password>
          <FormInput 
                value={fullName} 
                placeholder='Full Name' 
                onChangeText={(value)=>handleOnChangeText(value,'fullName')}
                theme={{
                    colors: {
                      placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                      underlineColor: 'transparent', background: '#fff'
                       }
                 }}
            />
          </BoxInput>
            <BoxInput>
            <Password>Email address</Password>
            <FormInput 
                value={email} 
                autoCapitalize='none'  
                placeholder='Email ID' 
                onChangeText={(value)=>handleOnChangeText(value,'email')}
                theme={{
                    colors: {
                      placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                      underlineColor: 'transparent', background: '#fff'
                       }
                 }}
            />
            </BoxInput>
           <BoxInput>
           <Password>Select Country</Password>
           <FormInput 
                value={country} 
                autoCapitalize='none'  
                placeholder='Select Country' 
                right={<TextInput.Icon name='chevron-down' color='#6C6C6C' border='1.2px' />}
                onChangeText={(value)=>handleOnChangeText(value,'country')}
                theme={{
                    colors: {
                      placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                      underlineColor: 'transparent', background: '#fff'
                       }
                 }}
            />
           </BoxInput>
           <BoxInput>
           <Password>PASSWORD</Password>
           <FormInput 
                value={password} 
                autoCapitalize='none' 
                secureTextEntry 
                placeholder='Password' 
                right={<TextInput.Icon name="eye" color='#6C6C6C' border='1.2px'/>}
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
            <Password>Re-Enter password</Password>
            <FormInput 
                value={confirmPassword} 
                autoCapitalize='none' 
                secureTextEntry 
                placeholder='Re-Enter password' 
                right={<TextInput.Icon name="eye" color='#6C6C6C' border='1.2px'/>}
                onChangeText={(value)=>handleOnChangeText(value,'confirmPassword')}
                theme={{
                    colors: {
                      placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                      underlineColor: 'transparent', background: '#fff'
                       }
                 }}
            />
            </BoxInput>
            {/* </KeyboardAvoidingView> */}
           </FormView>
          
            <SignUpBtn>
                <SubmitBtn onPress={submitForm}>
                    <TextBtn>Sign Up</TextBtn>
                </SubmitBtn>
            </SignUpBtn>
            <BottomText>
                <TextQuery>Already have an account?</TextQuery>
                <TextLogin onPress={() => navigation.navigate('Login')}>Login</TextLogin>
            </BottomText>
        </Container>
       
    )
}