
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Container = styled(SafeAreaView).attrs({
    edges: ["bottom"],
})`
    flex: 1;
    background-color: #F4FFF1;
`

const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: {
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 40,
    },
})`
    flex: 1;
`

const PageTitle = styled.Text`
    color: #143C28;
    font-size: 28px;
    font-weight: 800;
    line-height: 35px;
    margin-bottom: 8px;
`

const PageSubtitle = styled.Text`
    color: #64796C;
    font-size: 15px;
    line-height: 23px;
    margin-bottom: 24px;
`

const HeroCard = styled.View`
    background-color: #087F42;
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 22px;
`

const HeroLabel = styled.Text`
    color: #D9F7E4;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.8px;
    margin-top: 18px;
    margin-bottom: 10px;
`

const HeroValue = styled.Text`
    color: #FFFFFF;
    font-size: 31px;
    font-weight: 800;
    margin-bottom: 12px;
`

const HeroDescription = styled.Text`
    color: #E0F7E9;
    font-size: 14px;
    line-height: 22px;
`

const FormCard = styled.View`
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 20px;
`

const SectionTitle = styled.Text`
    color: #143C28;
    font-size: 21px;
    font-weight: 800;
    line-height: 28px;
    margin-bottom: 18px;
`

const FieldGroup = styled.View`
    margin-bottom: 18px;
`

const FieldLabel = styled.Text`
    color: #465D50;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 9px;
`

const FieldInput = styled.TextInput`
    width: 100%;
    min-height: 54px;
    border-width: 1px;
    border-color: #DDE8DD;
    border-radius: 14px;
    background-color: #FFFFFF;
    color: #143C28;
    font-size: 17px;
    padding: 14px;
`

const PrimaryButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 58px;
    background-color: #087F42;
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-top: 4px;
`

const PrimaryButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    margin-right: 10px;
`

const ResultCard = styled.View`
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 20px;
`

const ResultRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`

const ResultLabel = styled.Text`
    color: #64796C;
    font-size: 14px;
    flex: 1;
    margin-right: 8px;
`

const ResultValue = styled.Text`
    color: ${({ positive }) =>
        positive ? "#087F42" : "#143C28"};
    font-size: 16px;
    font-weight: 800;
    text-align: right;
    flex-shrink: 1;
`

const ChartCard = styled.View`
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 20px;
`

const ChartSubtitle = styled.Text`
    color: #64796C;
    font-size: 13px;
    line-height: 20px;
`

const InfoCard = styled.View`
    background-color: #E0F5E7;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 12px;
`

const InfoTitle = styled.Text`
    color: #087F42;
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 14px;
`

const InfoText = styled.Text`
    color: #465D50;
    font-size: 15px;
    line-height: 24px;
    margin-bottom: 12px;
`

export {
    Container,
    Content,
    PageTitle,
    PageSubtitle,
    HeroCard,
    HeroLabel,
    HeroValue,
    HeroDescription,
    FormCard,
    SectionTitle,
    FieldGroup,
    FieldLabel,
    FieldInput,
    PrimaryButton,
    PrimaryButtonText,
    ResultCard,
    ResultRow,
    ResultLabel,
    ResultValue,
    ChartCard,
    ChartSubtitle,
    InfoCard,
    InfoTitle,
    InfoText,
}