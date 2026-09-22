import styled from "styled-components/native"


const Container = styled.ScrollView`
    flex: 1;

    background-color: #F4FFF1;
`


const Header = styled.View`
    width: 100%;
    height: 45px;

    padding: 0 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: #F4FFF1;
`


const Logo = styled.Text`
    color: #00863F;

    font-size: 14px;

    font-weight: bold;
`


const Skip = styled.Text`
    color: #00863F;

    font-size: 11px;
`


const Content = styled.View`
    width: 100%;

    padding: 15px 18px 35px 18px;
`


const Title = styled.Text`
    color: #151515;

    font-size: 26px;

    font-weight: bold;

    text-align: center;
`


const TitleGreen = styled.Text`
    color: #00863F;

    font-size: 26px;

    font-weight: bold;

    text-align: center;
`


const Description = styled.Text`
    color: #555555;

    font-size: 11px;

    line-height: 16px;

    text-align: center;

    margin: 12px 15px 20px 15px;
`


const Card = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #DDEDDD;

    border-radius: 10px;

    padding: 12px;

    margin-bottom: 12px;
`


const CardTitle = styled.Text`
    color: #222222;

    font-size: 12px;

    font-weight: bold;

    margin-bottom: 10px;
`


const Label = styled.Text`
    color: #444444;

    font-size: 9px;

    margin-bottom: 5px;
`


const Input = styled.TextInput`
    width: 100%;
    height: 35px;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #D7E3D7;

    border-radius: 5px;

    padding: 0 10px;

    color: #222222;

    font-size: 10px;

    margin-bottom: 12px;
`


const Row = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: space-between;

    gap: 8px;
`


const Option = styled.TouchableOpacity`
    flex: 1;

    height: 35px;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #DDE8DD;

    border-radius: 5px;

    align-items: center;
    justify-content: center;
`


const OptionText = styled.Text`
    color: #333333;

    font-size: 9px;

    font-weight: 500;
`


const ObjectiveOption = styled.TouchableOpacity`
    width: 100%;

    height: 36px;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #DDE8DD;

    border-radius: 5px;

    justify-content: center;

    padding-left: 10px;

    margin-bottom: 7px;
`


const ObjectiveText = styled.Text`
    color: #333333;

    font-size: 9px;

    font-weight: 500;
`


const InvestorOption = styled.TouchableOpacity`
    width: 100%;

    min-height: 55px;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #DDE8DD;

    border-radius: 5px;

    align-items: center;
    justify-content: center;

    margin-bottom: 7px;
`


const InvestorTitle = styled.Text`
    color: #222222;

    font-size: 10px;

    font-weight: bold;
`


const InvestorDescription = styled.Text`
    color: #777777;

    font-size: 8px;

    margin-top: 3px;
`


const AnalysisCard = styled.View`
    width: 100%;

    background-color: #E8F7E8;

    border-width: 1px;
    border-color: #CFE8CF;

    border-radius: 10px;

    padding: 14px;

    margin-bottom: 20px;
`


const AnalysisTitle = styled.Text`
    color: #00863F;

    font-size: 11px;

    font-weight: bold;

    margin-bottom: 8px;
`


const AnalysisText = styled.Text`
    color: #555555;

    font-size: 9px;

    line-height: 14px;
`


const ProgressBar = styled.View`
    width: 100%;
    height: 4px;

    background-color: #D1E7D1;

    border-radius: 5px;

    margin-top: 15px;
`


const Progress = styled.View`
    width: 80%;
    height: 4px;

    background-color: #00863F;

    border-radius: 5px;
`


export {
    Container,
    Header,
    Logo,
    Skip,
    Content,
    Title,
    TitleGreen,
    Description,
    Card,
    CardTitle,
    Label,
    Input,
    Row,
    Option,
    OptionText,
    ObjectiveOption,
    ObjectiveText,
    InvestorOption,
    InvestorTitle,
    InvestorDescription,
    AnalysisCard,
    AnalysisTitle,
    AnalysisText,
    ProgressBar,
    Progress
}