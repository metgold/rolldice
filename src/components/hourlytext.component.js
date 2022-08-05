import { View, Text } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Hourly = styled(Text)`
    font-family: Inter-Black;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #FFFFFF;
    padding: 3px;
`
export const HourlyText = () => {
  return (
    <View>
      <Hourly>Hourly</Hourly>
    </View>
  )
};