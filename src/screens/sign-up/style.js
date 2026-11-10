
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
        paddingHorizontal: 22,
        paddingTop: 28,
        paddingBottom: 40,
    },
})`
    flex: 1;
`

const LogoArea = styled.View`
    align-items: center;
    margin-bottom: 28px;
`

const LogoText = styled.Text`
    color: #143C28;
    font-size: 43px;
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

const Card = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 26px;
    border-width: 1px;
    border-color: #E1EEE3;
    padding: 25px 20px;
`

const Title = styled.Text`
    color: #143C28;
    font-size: 26px;
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

const Row = styled.View`
    flex-direction: row;
    gap: 12px;
`

const FieldGroup = styled.View`
    margin-bottom: 18px;
`

const Label = styled.Text`
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
    overflow: hidden;
`

const Input = styled.TextInput`
    flex: 1;
    min-width: 0px;
    height: 54px;
    padding-horizontal: 13px;
    color: #143C28;
    font-size: 15px;
`

const PasswordToggle = styled.TouchableOpacity`
    width: 46px;
    height: 54px;
    align-items: center;
    justify-content: center;
`

const GenderOptions = styled.View`
    flex-direction: row;
    gap: 12px;
`

const GenderButton = styled.TouchableOpacity`
    flex: 1;
    min-height: 54px;
    border-radius: 14px;
    border-width: 1px;
    border-color: #DCE8DF;
    background-color: #FAFDFA;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 9px;
`

const Radio = styled.View`
    width: 19px;
    height: 19px;
    border-radius: 10px;
    border-width: 2px;
    border-color: #087F42;
    align-items: center;
    justify-content: center;
`

const RadioSelected = styled.View`
    width: 9px;
    height: 9px;
    border-radius: 5px;
    background-color: #087F42;
`

const GenderText = styled.Text`
    color: #143C28;
    font-size: 14px;
    font-weight: 600;
`

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 58px;
    background-color: #087F42;
    border-radius: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 12px;
`

const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 800;
`

const LoginRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 25px;
`

const LoginText = styled.Text`
    color: #64796C;
    font-size: 14px;
`

const LoginLink = styled.Text`
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
    Card,
    Title,
    Description,
    Row,
    FieldGroup,
    Label,
    InputWrapper,
    Input,
    PasswordToggle,
    GenderOptions,
    GenderButton,
    Radio,
    RadioSelected,
    GenderText,
    Button,
    ButtonText,
    LoginRow,
    LoginText,
    LoginLink,
    FooterText,
}
