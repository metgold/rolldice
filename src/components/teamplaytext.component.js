import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const TeamPlay = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
`
export const TeamPlayText = () => {
  return (
    <View>
      <TeamPlay>Team Play</TeamPlay>
    </View>
  )
};