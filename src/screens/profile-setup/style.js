
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #F4FFF1;
`

const ScrollContent = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
        paddingBottom: 35,
    },
})`
    flex: 1;
`

const Header = styled.View`
    width: 100%;
    padding: 20px 22px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.Text`
    color: #143C28;
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -1px;
`

const LogoGo = styled.Text`
    color: #087F42;
`

const Skip = styled.Text`
    color: #087F42;
    font-size: 15px;
    font-weight: 700;
    padding: 8px;
`

const Content = styled.View`
    width: 100%;
    padding: 12px 22px 30px;
`

const Title = styled.Text`
    color: #143C28;
    font-size: 29px;
    font-weight: 800;
    text-align: center;
`

const TitleGreen = styled.Text`
    color: #087F42;
    font-size: 29px;
    font-weight: 800;
    text-align: center;
    margin-top: 2px;
`

const Description = styled.Text`
    color: #64796C;
    font-size: 15px;
    line-height: 23px;
    text-align: center;
    margin-top: 14px;
    margin-bottom: 25px;
`

const Card = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-width: 1px;
    border-color: #E1EEE3;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 18px;
`

const CardHeading = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 22px;
`

const CardIcon = styled.View`
    width: 43px;
    height: 43px;
    background-color: #E4F7E9;
    border-radius: 13px;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
`

const CardTitle = styled.Text`
    color: #143C28;
    font-size: 19px;
    font-weight: 800;
    flex: 1;
`

const Label = styled.Text`
    color: #143C28;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
`

const Input = styled.TextInput`
    width: 100%;
    min-height: 56px;
    background-color: #FAFDFA;
    border-width: 1px;
    border-color: #DCE8DF;
    border-radius: 14px;
    padding-horizontal: 15px;
    color: #143C28;
    font-size: 16px;
    margin-bottom: 14px;
`

const Row = styled.View`
    flex-direction: row;
    gap: 12px;
`

const Option = styled.TouchableOpacity`
    flex: 1;
    min-height: 55px;
    background-color: ${({ selected }) =>
        selected ? "#E4F7E9" : "#FAFDFA"};
    border-width: 1px;
    border-color: ${({ selected }) =>
        selected ? "#087F42" : "#DCE8DF"};
    border-radius: 14px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 9px;
`

const OptionText = styled.Text`
    color: ${({ selected }) =>
        selected ? "#087F42" : "#143C28"};
    font-size: 15px;
    font-weight: 700;
`

const ObjectiveOption = styled.TouchableOpacity`
    width: 100%;
    min-height: 60px;
    background-color: ${({ selected }) =>
        selected ? "#E4F7E9" : "#FAFDFA"};
    border-width: 1px;
    border-color: ${({ selected }) =>
        selected ? "#087F42" : "#DCE8DF"};
    border-radius: 14px;
    flex-direction: row;
    align-items: center;
    padding: 13px;
    gap: 12px;
    margin-bottom: 11px;
`

const ObjectiveText = styled.Text`
    flex: 1;
    color: #143C28;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px;
`

const InvestorOption = styled.TouchableOpacity`
    width: 100%;
    min-height: 83px;
    background-color: ${({ selected }) =>
        selected ? "#E4F7E9" : "#FAFDFA"};
    border-width: 1px;
    border-color: ${({ selected }) =>
        selected ? "#087F42" : "#DCE8DF"};
    border-radius: 14px;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    gap: 12px;
    margin-bottom: 11px;
`

const InvestorInfo = styled.View`
    flex: 1;
`

const InvestorTitle = styled.Text`
    color: #143C28;
    font-size: 16px;
    font-weight: 800;
`

const InvestorDescription = styled.Text`
    color: #64796C;
    font-size: 13px;
    line-height: 19px;
    margin-top: 5px;
`

const Radio = styled.View`
    width: 21px;
    height: 21px;
    border-radius: 11px;
    border-width: 2px;
    border-color: ${({ selected }) =>
        selected ? "#087F42" : "#9BAFA1"};
    align-items: center;
    justify-content: center;
`

const RadioSelected = styled.View`
    width: 11px;
    height: 11px;
    border-radius: 6px;
    background-color: #087F42;
`

const AnalysisCard = styled.View`
    width: 100%;
    background-color: #E4F7E9;
    border-width: 1px;
    border-color: #CFE8D5;
    border-radius: 18px;
    padding: 18px;
    margin-bottom: 22px;
`

const AnalysisTitle = styled.Text`
    color: #143C28;
    font-size: 16px;
    font-weight: 800;
`

const AnalysisText = styled.Text`
    color: #64796C;
    font-size: 13px;
    line-height: 20px;
    margin-top: 8px;
`

const ProgressBar = styled.View`
    width: 100%;
    height: 9px;
    background-color: #C8E5D0;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 15px;
`

const Progress = styled.View`
    height: 100%;
    background-color: #087F42;
    border-radius: 8px;
`

const ProgressLabel = styled.Text`
    color: #087F42;
    font-size: 16px;
    font-weight: 800;
`

const Button = styled.TouchableOpacity`
    width: 100%;
    min-height: 60px;
    background-color: #087F42;
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 7px;
`

const ButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 800;
`

const FooterText = styled.Text`
    color: #819487;
    font-size: 12px;
    line-height: 19px;
    text-align: center;
    margin-top: 18px;
`

export {
    Container,
    ScrollContent,
    Header,
    Logo,
    LogoGo,
    Skip,
    Content,
    Title,
    TitleGreen,
    Description,
    Card,
    CardHeading,
    CardIcon,
    CardTitle,
    Label,
    Input,
    Row,
    Option,
    OptionText,
    ObjectiveOption,
    ObjectiveText,
    InvestorOption,
    InvestorInfo,
    InvestorTitle,
    InvestorDescription,
    Radio,
    RadioSelected,
    AnalysisCard,
    AnalysisTitle,
    AnalysisText,
    ProgressBar,
    Progress,
    ProgressLabel,
    Button,
    ButtonText,
    FooterText,
}
