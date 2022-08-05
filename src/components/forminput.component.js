import { View, Text } from 'react-native';
import React from 'react';

import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native-paper';

const FormWrapper = styled(Text)`
    align-self: center;
    min-height: 46px;
    min-width: 307px;
`
const Name = styled(Text)`

`
const BoxInput = styled(TextInput)`
    margin: 10px;
    height: 46px;
    width: 307px;
    background: #3C3C3C;
    border: 1px solid #545454;
    border-radius: 2px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
`

export const FormInput = (props) => {
    const { placeholder, label } = props
  return (
    <>
     <FormWrapper>
        <Name>{label}</Name>
            <BoxInput
                {...props}
                placeholder={placeholder}
            />
     </FormWrapper>
    </>
  )
}