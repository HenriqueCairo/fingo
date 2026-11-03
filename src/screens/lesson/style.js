
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
    contentContainerStyle: {
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 36,
    },
})`
    flex: 1;
`

const LessonTitle = styled.Text`
    color: #143C28;
    font-size: 28px;
    font-weight: 800;
    line-height: 35px;
    margin-bottom: 8px;
`

const LessonSubtitle = styled.Text`
    color: #64796C;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 24px;
`

const VideoArea = styled.View`
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 18px;
`

const VideoPlaceholder = styled.View`
    width: 100%;
    min-height: 200px;
    background-color: #183D29;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
`

const VideoText = styled.Text`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    margin-top: 12px;
`

const Card = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 22px;
    margin-bottom: 18px;
`

const SectionTitle = styled.Text`
    color: #143C28;
    font-size: 21px;
    font-weight: 800;
    line-height: 28px;
    margin-bottom: 14px;
`

const Paragraph = styled.Text`
    color: #465D50;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 12px;
`

const InfoCard = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 22px;
    margin-bottom: 16px;
`

const InfoTitle = styled.Text`
    color: #087F42;
    font-size: 20px;
    font-weight: 800;
    line-height: 27px;
    margin-bottom: 12px;
`

const InfoText = styled.Text`
    color: #465D50;
    font-size: 16px;
    line-height: 26px;
`

const ExampleBox = styled.View`
    width: 100%;
    background-color: #E0F5E7;
    border-radius: 20px;
    padding: 22px;
    margin-bottom: 26px;
`

const ExampleTitle = styled.Text`
    color: #087F42;
    font-size: 19px;
    font-weight: 800;
    margin-bottom: 12px;
`

const ExampleText = styled.Text`
    color: #465D50;
    font-size: 16px;
    line-height: 26px;
`

const NextText = styled.Text`
    color: #64796C;
    font-size: 13px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
`

const PrimaryButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 58px;
    background-color: #087F42;
    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 14px;
    margin-bottom: 14px;
`

const PrimaryButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 17px;
    font-weight: 700;
    margin-right: 10px;
`

const SecondaryButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 56px;
    background-color: #FFFFFF;
    border-width: 1px;
    border-color: #D5E5D5;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    padding: 12px;
    margin-bottom: 16px;
`

const SecondaryButtonText = styled.Text`
    color: #087F42;
    font-size: 16px;
    font-weight: 700;
`

const QuestionCard = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 18px;
`

const QuestionNumber = styled.Text`
    color: #087F42;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 12px;
`

const QuestionTitle = styled.Text`
    color: #143C28;
    font-size: 19px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 20px;
`

const AnswerOption = styled.TouchableOpacity`
    width: 100%;
    min-height: 64px;

    background-color: ${({ selected, correct, incorrect }) =>
        correct
            ? "#E2F7E5"
            : incorrect
            ? "#FCE8E8"
            : selected
            ? "#EAF8E9"
            : "#FFFFFF"};

    border-width: 1.5px;

    border-color: ${({ selected, correct, incorrect }) =>
        correct
            ? "#08A63E"
            : incorrect
            ? "#D64545"
            : selected
            ? "#08A63E"
            : "#DDE8DD"};

    border-radius: 14px;
    flex-direction: row;
    align-items: center;
    padding: 14px;
    margin-bottom: 12px;
`

const AnswerText = styled.Text`
    color: #263D30;
    font-size: 16px;
    line-height: 23px;
    flex: 1;
    margin-left: 12px;
`

const FeedbackBox = styled.View`
    background-color: ${({ correct }) =>
        correct ? "#EAF8E9" : "#FCE8E8"};
    border-radius: 14px;
    padding: 18px;
    margin-top: 10px;
`

const FeedbackTitle = styled.Text`
    color: ${({ correct }) =>
        correct ? "#176B3A" : "#B53232"};
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 8px;
`

const FeedbackText = styled.Text`
    color: #465D50;
    font-size: 15px;
    line-height: 24px;
`

const ResultCard = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 24px;
    padding: 32px;
    align-items: center;
    margin-bottom: 22px;
`

const ResultScore = styled.Text`
    color: #087F42;
    font-size: 46px;
    font-weight: 800;
    margin-top: 14px;
`

const ResultLabel = styled.Text`
    color: #64796C;
    font-size: 16px;
    margin-top: 8px;
`

const HelpButton = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
    bottom: 18px;
    width: 52px;
    height: 52px;
    border-radius: 26px;
    background-color: #F5A800;
    border-width: 2px;
    border-color: #D98500;
    align-items: center;
    justify-content: center;
    elevation: 5;
    z-index: 10;
`

const HelpText = styled.Text`
    color: #222222;
    font-size: 23px;
    font-weight: 800;
`

const LessonBody = styled.View`
    flex: 1;
    position: relative;
`

export {
    Container,
    Content,
    LessonTitle,
    LessonSubtitle,
    VideoArea,
    VideoPlaceholder,
    VideoText,
    Card,
    SectionTitle,
    Paragraph,
    InfoCard,
    InfoTitle,
    InfoText,
    ExampleBox,
    ExampleTitle,
    ExampleText,
    NextText,
    PrimaryButton,
    PrimaryButtonText,
    SecondaryButton,
    SecondaryButtonText,
    QuestionCard,
    QuestionNumber,
    QuestionTitle,
    AnswerOption,
    AnswerText,
    FeedbackBox,
    FeedbackTitle,
    FeedbackText,
    ResultCard,
    ResultScore,
    ResultLabel,
    HelpButton,
    HelpText,
    LessonBody,
}
