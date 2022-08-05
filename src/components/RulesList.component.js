import { View, Text } from 'react-native'
import React from 'react';
import styled from 'styled-components/native';

const TextWrapper = styled(Text)`
font-family: Inter-Black;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 35px;
color: #FFFFFF;
padding-left: 16px;
`
export const RulesList = ({instructions}) => {
  return (
    <View>
      <TextWrapper>{instructions}</TextWrapper>
    </View>
  )
}