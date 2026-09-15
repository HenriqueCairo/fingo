import styled from "styled-components/native";


const Container = styled.View`
    flex: 1;
    background-color: #F5FFF1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 24px;
`



const LogoArea = styled.View`
    align-items: center;

    margin-top: 40px;
    margin-bottom: 35px;
`


const LogoText = styled.Text`
    font-size: 42px;

    font-weight: bold;

    color: #222222;
`


const LogoGo = styled.Text`
    color: #00863F;
`
const Subtitle = styled.Text`
    color: #555555;

    font-size: 14px;

    margin-top: 5px;
`


const LoginContainer = styled.View`
    width: 100%;

    background-color: #00863F;

    border-radius: 16px;

    padding: 18px 16px;
`


const Title = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: white;

    text-align: center;
`


const Description = styled.Text`
    font-size: 9px;
    color: white;

    text-align: center;

    margin-top: 4px;
    margin-bottom: 20px;
`


const Input = styled.TextInput`
    width: 100%;
    height: 42px;

    background-color: white;

    padding: 0 12px;

    margin-bottom: 12px;

    font-size: 11px;
    color: #111111;
`


const ForgotPassword = styled.TouchableOpacity`
    align-self: flex-end;

    margin-top: -5px;
    margin-bottom: 12px;
`


const ForgotPasswordText = styled.Text`
    font-size: 11px;
    color: #7DD49B;
`


const Btn = styled.TouchableOpacity`
    width: 100%;

    height: 48px;

    background-color: #FFFFFF;

    border-radius: 10px;

    align-items: center;
    justify-content: center;
`


const BtnTitle = styled.Text`
     color: #00863F;

    font-size: 16px;

    font-weight: bold;
`


const AccountText = styled.Text`
    font-size: 11px;
    color: #7DD49B;

    text-align: center;

    margin-top: 10px;
`


const SignUpText = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #FFFFFF;

    text-align: center;

    margin-top: 4px;
`


export {
    Container,
    LogoArea,
    LogoText,
    LogoGo,
    Subtitle,
    LoginContainer,
    Title,
    Description,
    Input,
    ForgotPassword,
    ForgotPasswordText,
    Btn,
    BtnTitle,
    AccountText,
    SignUpText
}