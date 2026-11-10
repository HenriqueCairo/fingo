
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #F4FFF1;
`

const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 22,
        paddingTop: 28,
        paddingBottom: 28,
    },
})`
    flex: 1;
`

const LogoArea = styled.View`
    align-items: center;
    margin-bottom: 34px;
`

const LogoText = styled.Text`
    color: #143C28;
    font-size: 47px;
    font-weight: 800;
    letter-spacing: -1.5px;
`

const LogoGo = styled.Text`
    color: #087F42;
`

const Subtitle = styled.Text`
    color: #64796C;
    font-size: 14px;
    margin-top: 6px;
    text-align: center;
`

const LoginContainer = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 26px;
    padding: 25px 20px;
    border-width: 1px;
    border-color: #E1EEE3;
`

const WelcomeIcon = styled.View`
    width: 56px;
    height: 56px;
    border-radius: 18px;
    background-color: #E4F7E9;
    align-items: center;
    justify-content: center;
    align-self: center;
    margin-bottom: 18px;
`

const Title = styled.Text`
    color: #143C28;
    font-size: 25px;
    font-weight: 800;
    text-align: center;
`

const Description = styled.Text`
    color: #64796C;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    margin-top: 9px;
    margin-bottom: 28px;
`

const FieldGroup = styled.View`
    margin-bottom: 18px;
`

const FieldLabel = styled.Text`
    color: #143C28;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 9px;
`

const InputWrapper = styled.View`
    width: 100%;
    min-height: 56px;
    border-radius: 14px;
    border-width: 1px;
    border-color: #DCE8DF;
    background-color: #FAFDFA;
    flex-direction: row;
    align-items: center;
`

const InputIcon = styled.View`
    width: 49px;
    align-items: center;
    justify-content: center;
`

const Input = styled.TextInput`
    flex: 1;
    min-width: 0px;
    height: 54px;
    color: #143C28;
    font-size: 15px;
    padding-right: 10px;
`

const PasswordToggle = styled.TouchableOpacity`
    width: 46px;
    height: 54px;
    align-items: center;
    justify-content: center;
`

const ForgotPassword = styled.TouchableOpacity`
    align-self: flex-end;
    margin-top: -2px;
    margin-bottom: 25px;
    padding-vertical: 5px;
`

const ForgotPasswordText = styled.Text`
    color: #087F42;
    font-size: 14px;
    font-weight: 700;
`

const Btn = styled.TouchableOpacity`
    width: 100%;
    height: 58px;
    background-color: #087F42;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`

const BtnTitle = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 800;
`

const AccountRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 25px;
    gap: 5px;
`

const AccountText = styled.Text`
    color: #64796C;
    font-size: 14px;
`

const RegisterLink = styled.Text`
    color: #087F42;
    font-size: 14px;
    font-weight: 800;
`

const FooterText = styled.Text`
    color: #819487;
    font-size: 13px;
    text-align: center;
    margin-top: 28px;
`

export {
    Container,
    Content,
    LogoArea,
    LogoText,
    LogoGo,
    Subtitle,
    LoginContainer,
    WelcomeIcon,
    Title,
    Description,
    FieldGroup,
    FieldLabel,
    InputWrapper,
    InputIcon,
    Input,
    PasswordToggle,
    ForgotPassword,
    ForgotPasswordText,
    Btn,
    BtnTitle,
    AccountRow,
    AccountText,
    RegisterLink,
    FooterText,
}
