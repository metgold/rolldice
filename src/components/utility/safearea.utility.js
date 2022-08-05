import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import React from 'react'

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`