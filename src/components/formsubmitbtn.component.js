import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled(TouchableOpacity)`
background: #0078E7;
border-radius: 4px;
width: 112px;
height: 40px;
justify-content: center;
align-items: center;
`
export const FormSubmitBtn = ({title, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Text>{title}</Text>
    </Container>
  )
}