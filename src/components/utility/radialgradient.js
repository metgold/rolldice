/* import RadialGradient from 'react-native-radial-gradient';
import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const RadialContainer = styled(RadialGradient)`

`

// TODO: What to do with the module?
export const Radial = ({children}) => {
    return(
       <View>
         <RadialContainer style={{width:200,height:200}}
                        colors={['black','green','blue','red']}
                        stops={[0.1,0.4,0.3,0.75]}
                        center={[100,100]}
                        radius={200}>
          {children}
        </RadialContainer>
       </View>
    )
} */