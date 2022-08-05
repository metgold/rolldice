import styled from 'styled-components/native';

export const BackgroundSplashScreen = styled.ImageBackground.attrs({
    source: require("../../assets/images/img16.png"),
})`
flex: 1;
align-items: center;
justify-content: center;
`
export const BackgroundImageHomeLight = styled.ImageBackground.attrs({
    source: require("../../assets/images/light.png"),
})`
flex: 1;
align-items: center;
justify-content: center;
`
export const BackgroundImageHomeColor = styled.ImageBackground.attrs({
    source: require("../../assets/images/colorbg.png"),
})`
flex: 1;
align-items: center;
justify-content: center;
`
export const BackgroundImageHomeEllipseBlue = styled.ImageBackground.attrs({
    source: require("../../assets/images/Ellipseblue.png"),
})`
position: absolute;
width: 202px;
height: 96px;
top: 43px;
`