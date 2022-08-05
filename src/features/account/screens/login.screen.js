import React, {useState, useContext} from 'react';
import { Button, TextInput, Modal, Portal, Provider  } from 'react-native-paper';
import styled from 'styled-components/native';
import { Image, SafeAreaView, StatusBar, View, Text } from 'react-native';


import ForgotPasswordScreeen from "./forgotpassword.screen";
import { FormInput } from '../../../components/forminput.component';
import { isValidEmail, isValidObjField, updateError } from '../../../utils/methods';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';


const SafeArea = styled(SafeAreaView)`
    display: flex;
    min-height: 100%;
    background-color: #222222;
`
const Dice = styled(View)`
    top: 88px;
    justify-content: center;
    align-items: center;
`
const ErrorText = styled(Text)`
    position: absolute;
    font-family: Inter-Black;
    color: red;
    font-size: 18px;
    align-self: center;
    top: 133px;
`
const TextInfo = styled(View)`
    margin-top: 120px;
    justify-content: center;
    align-items: center;
`
const LogInNow = styled(Text)`
    font-family: Inter-ExtraBold;
    text-align: center;
    color: #0078E7;
    font-weight: 800;
    font-size: 28px;
    font-style: normal;
    width: 271px;
`
const EarnText = styled(Text)`
    font-family: Inter-Black;
    padding-top: 10px
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #F8F8F8;
    width: 281px;
`
const FormView = styled(View)`
    position: absolute;
    margin-top: 383px;
    top: 60px;
    align-self: center;
    justify-content: center;
    width: 307px;
    height: 46px;
`
const BoxInput = styled(View)`
    margin: 10px;
`
const Email = styled(Text)`
      top: 24px;
      min-height: 12px;
      min-width: 96px;
      font-family: Inter-Black;
      color: #6C6C6C;
      font-size: 10px;
      font-weight: 500;
      line-height: 12px;
      line-spacing: 0.22rem;
      padding-bottom: 35px;
`
const Password = styled(Text)`
      margin-top: 20px;
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
const Forgot = styled(Text)`
      top: 12px;
      min-height: 12px;
      min-width: 96px;
      font-family: Inter-Black;
      color: #6C6C6C;
      font-size: 10px;
      font-weight: 500;
      padding-left: 12px;
      line-height: 12px;
      line-spacing: 0.22rem;
`
const LogInBtn = styled(Button)`
      width: 112px;
      height: 40px;
      top: 280px;
      justify-content: center;
      align-self: center;
      background-color: #2DB357;
      border-radius: 4px;
`
const TextBtn = styled(Text)`
      color: #FFFFFF;
      font-family: Inter-Black;
      font-size: 14px;
      text-transform: capitalize;
`
const BottomText = styled.View`
      position: absolute;
      display: flex;
      flex-direction: row;
      min-width: 100%;
      min-height: 24px;
      justify-content: center;
      bottom: 0px;   
`
const NoAccount = styled.Text`
      color: #8B8B8B;
      font-size: 12px;
      font-weight: 500;
      padding: 5px;
`    
const SignUp = styled.Text`
      color: #0078E7;
      font-size: 12px;
      font-weight: 500;
      padding: 5px;
`

export const LoginScreen = ({navigation}) => {

    const [error, setError] = useState('')
    const [userInfo, setUserInfo] = useState({
      email: '',
      password: '',
    });

    const {email, password} = userInfo;
    const { setIsAuthenticated } = useContext(AuthenticationContext);

    const handleOnChangeText = (value, fieldName) => {
      setUserInfo({...userInfo, [fieldName]: value})
    };

    const isValidForm = () => {
      if(!isValidObjField(userInfo)) return updateError('Required all fields!', setError);

      if(!isValidEmail(email)) return updateError('Invalid email!', setError);

      if(!password.trim() || password.length <  8) return updateError('Password is too short!', setError);

      return true;
    };

    const submitForm = () => {
      if(isValidForm()){
        setIsAuthenticated(true);
      }
    }

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
  return (
    <>
      <SafeArea>
        <Provider>
          {error ? <ErrorText>{error}</ErrorText> : null}
          <Dice>
            <Image source={require('../../../../assets/images/img15.png')}/>
          </Dice>
          <TextInfo>
            <LogInNow>Login Now</LogInNow>
            <EarnText>Earn and make Money with Lottery & Roulette</EarnText>
          </TextInfo>
          <FormView>
            <BoxInput>
            <Email>EMAIL ADDRESS</Email> 
            <FormInput 
                value={email} 
                autoCapitalize= 'none'
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
          <Password>PASSWORD</Password>
            <FormInput 
                  value={password}  
                  placeholder='Password' 
                  autoCapitalize='none'
                  secureTextEntry
                  right={<TextInput.Icon name="eye-off-outline" color='#6C6C6C' border='1.2px'/>}
                  onChangeText={(value)=>handleOnChangeText(value,'password')}
                  theme={{
                    colors: {
                      placeholder: '#C6C6C6', text: '#C6C6C6', primary: 'white',
                      underlineColor: 'transparent', background: '#fff'
                       }
                 }}
              />
        </BoxInput>
          <Forgot onPress={showModal} >Forgot Password?</Forgot>
          </FormView>

          <LogInBtn mode="contained" onPress={submitForm}>
           <TextBtn> Login</TextBtn>
          </LogInBtn>
          <BottomText>
            <NoAccount>Don't have an account? </NoAccount>
            <SignUp onPress={() => navigation.navigate('SignUp')}>Sign Up</SignUp>
          </BottomText>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal}>
              <ForgotPasswordScreeen/>
            </Modal>
          </Portal>
        </Provider>
      </SafeArea>
      
    </>
  );
};

 