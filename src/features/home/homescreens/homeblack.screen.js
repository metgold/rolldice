import React, {useState, useContext} from 'react';
import { Profile } from '../../../components/profile.component';
import { View, Text, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { HourlyText } from '../../../components/hourlytext.component';
import { TeamPlayText } from '../../../components/teamplaytext.component';
import ForgotPasswordScreeen from '../../account/screens/forgotpassword.screen';
import ModalContext from '../../../components/utility/modalcontext';
import { EditProfileModal } from '../../../components/editprofilescreenmodal';
import EditProfileScreeen from '../../account/screens/editprofile.screen';
import WithdrawScreeen from '../../../components/withdraw.component';
import AlertScreeen from '../../../components/alert.component';
import { BackgroundImageHomeEllipseBlue } from '../../../components/backgroundimage.component';
import MakeItRain from '../../../components/animated.rain.component';


const Container = styled(View)`
    background-color: #222222;
    min-height: 100%;
`
const Welcome = styled(Text)`
    font-family: Inter-black;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    color: #FFFFFF;
    height: 31px;
    margin: 5px;
    padding-left: 25px;
    line-height: 31px
`
const GetInGame = styled(View)`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 335px;
    height: 140px;
    margin-left: 35px;
    background: #0078E6;
    border-radius: 4px;
    top: 123px;
    elevation: -3;
    z-index: -3;
`
const LeftContainer = styled(View)`
    margin-top: 18px;
    margin-left: 10px;
`
const ImageContainer = styled(View)`

    position: relative;
    max-width: 12%
`
const PlayDice = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    padding: 3px;
`
const GetInGameBtn = styled(Button)`
    background: #0F6BBF;
    border-radius: 5px;
    padding: 3px;
    margin-top: 5px;
`
const TwoContainer = styled(View)`
    position: absolute;
    top: 284px;
    display: flex;
    flex-direction: row;
    margin-left: 35px;
`
const CompeteBox = styled(View)`
    width: 150px;
    height: 236px;
    background-color: #6D40B8;
    border-radius: 4px;
`
const ResultsBox = styled(View)`
    width: 150px;
    height: 236px;
    background-color: #C55300;
    border-radius: 4px;
    margin-left: 35px;
`
const Compete = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
    text-transform: uppercase;
`
const TeamPlay = styled(Text)`
    align-self: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`
const CompeteImage = styled(View)`
    align-self: center;
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`
const CompeteBtn = styled(Button)`
    width: 140px;
    height: 32px;
    border-radius: 5px;
    align-self: center;
    background: #421387;
    margin-top: 12px;
`
const CompeteBtnList = styled(Button)`
    width: 140px;
    height: 32px;
    border-radius: 5px;
    align-self: center;
    background: #702F00;
    margin-top: 20px;
`
const CompeteText = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
`
const WinningConcepts = styled(View)`
    position: absolute;
    width: 315px;
    height: 210px;
    left: 30px;
    top: 502px;
`

export const HomeBlackScreen = ({navigation}) => {
    const { visible, hideModal, edit, hidePassword, withdraw, hideWithdraw, hidePrivacy, privacy} = useContext(ModalContext);
    return(   
        <Container>
          
           <Profile/>
           
            <Welcome>
                Hi Akash !!
            </Welcome>
            <GetInGame>
                <LeftContainer>
                    <HourlyText/>
                    <PlayDice>Play Dice</PlayDice>
                    <GetInGameBtn onPress={() => navigation.navigate('Hourly')}>
                        <CompeteText>Get In Game</CompeteText>
                    </GetInGameBtn>
                </LeftContainer>
                <ImageContainer>
                <BackgroundImageHomeEllipseBlue>
                <Image 
                        style={{
                            bottom: 70,
                            left: 0
                        }}
                        source={require('../../../../assets/images/img17.png')}/>
                </BackgroundImageHomeEllipseBlue>
                </ImageContainer>
            </GetInGame>
            <TwoContainer>
                <CompeteBox>
                    <Compete>Compete</Compete>
                    <TeamPlayText/>
                    <CompeteImage>
                        <Image source={require('../../../../assets/images/img18.png')}/>
                    </CompeteImage>
                    <CompeteBtn onPress={() => navigation.navigate('Team')}>
                        <CompeteText>
                             Get In Game
                        </CompeteText>
                    </CompeteBtn>
                </CompeteBox>
                <ResultsBox>
                    <Compete>Results</Compete>
                    <TeamPlay>Winners</TeamPlay>
                    <CompeteImage>
                        <Image source={require('../../../../assets/images/img19.png')}/>
                    </CompeteImage>
                    <CompeteBtnList onPress={() => navigation.navigate('Resultsview')}>
                    <CompeteText>
                             View Lists
                        </CompeteText>
                    </CompeteBtnList>
                </ResultsBox>
            </TwoContainer>
            <WinningConcepts>
                <Image source={require('../../../../assets/images/Winning_concept.png')}/>
            </WinningConcepts>
            <Provider>
            <Portal>
            
                <Modal visible={visible} onDismiss={hideModal}>
                <EditProfileScreeen/>    
        </Modal>
        <Modal visible={edit} onDismiss={hidePassword}>
                <ForgotPasswordScreeen/>    
        </Modal>
        <Modal visible={withdraw} onDismiss={hideWithdraw}>
                <WithdrawScreeen/>   
        </Modal>
        <Modal visible={privacy} onDismiss={hidePrivacy}>
                <AlertScreeen/>   
        </Modal>
              </Portal>
             {/*  <Portal>
              <Modal visible={edit} onDismiss={hidePassword}>
                    <ForgotPasswordScreeen/>    
            </Modal>
              </Portal> */}
              </Provider>
        </Container>
    )
}