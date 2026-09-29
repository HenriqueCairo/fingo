import styled from "styled-components/native"


const Container = styled.View`
    flex: 1;
    background-color: #F4FFF1;
`


const Header = styled.View`
    width: 100%;
    height: 52px;

    background-color: #FFFFFF;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 14px;

    border-bottom-width: 1px;
    border-bottom-color: #E8EEE8;
`


const HeaderButton = styled.TouchableOpacity`
    width: 34px;
    height: 34px;

    background-color: #F0F4F0;

    border-radius: 17px;

    align-items: center;
    justify-content: center;
`


const HeaderTitle = styled.Text`
    color: #222222;
    font-size: 13px;
    font-weight: bold;
`


const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 110
    },
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    padding: 16px;
`


const LessonTitle = styled.Text`
    color: #222222;
    font-size: 22px;
    font-weight: bold;

    margin-bottom: 6px;
`


const LessonSubtitle = styled.Text`
    color: #777777;
    font-size: 12px;

    margin-bottom: 20px;
`


const VideoArea = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    padding: 8px;
    border-radius: 10px;

    margin-bottom: 14px;
`


const VideoPlaceholder = styled.View`
    width: 100%;
    height: 175px;

    background-color: #303A38;

    align-items: center;
    justify-content: center;

    border-radius: 6px;
`


const VideoText = styled.Text`
    color: #FFFFFF;

    font-size: 12px;
    font-weight: bold;

    text-align: center;

    margin-top: 10px;
`


const Card = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-radius: 12px;

    padding: 18px;

    margin-bottom: 14px;

    border-width: 1px;
    border-color: #E5EEE5;
`


const SectionTitle = styled.Text`
    color: #176B3A;

    font-size: 17px;
    font-weight: bold;

    margin-bottom: 12px;
`


const Paragraph = styled.Text`
    color: #555555;

    font-size: 14px;
    line-height: 23px;

    margin-bottom: 12px;
`


const InfoCard = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-radius: 12px;

    padding: 18px;

    margin-bottom: 14px;

    border-width: 1px;
    border-color: #E5EEE5;
`


const InfoTitle = styled.Text`
    color: #176B3A;

    font-size: 16px;
    font-weight: bold;

    margin-bottom: 12px;
`


const InfoText = styled.Text`
    color: #555555;

    font-size: 14px;
    line-height: 23px;
`


const ExampleBox = styled.View`
    width: 100%;

    background-color: #EAF8E9;

    border-radius: 10px;

    padding: 18px;

    border-left-width: 4px;
    border-left-color: #08A63E;

    margin-bottom: 24px;
`


const ExampleTitle = styled.Text`
    color: #176B3A;

    font-size: 15px;
    font-weight: bold;

    margin-bottom: 10px;
`


const ExampleText = styled.Text`
    color: #555555;

    font-size: 13px;
    line-height: 22px;
`


const NextText = styled.Text`
    color: #666666;

    font-size: 11px;
    font-weight: bold;

    text-align: center;

    margin-bottom: 14px;
`


const PrimaryButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 50px;

    background-color: #08A63E;

    border-radius: 9px;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 12px;

    margin-bottom: 12px;
`


const PrimaryButtonText = styled.Text`
    color: #FFFFFF;

    font-size: 14px;
    font-weight: bold;

    margin-right: 8px;
`


const SecondaryButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 48px;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #D5E5D5;

    border-radius: 9px;

    align-items: center;
    justify-content: center;

    margin-bottom: 15px;
`


const SecondaryButtonText = styled.Text`
    color: #176B3A;

    font-size: 14px;
    font-weight: bold;
`


const QuestionCard = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-radius: 12px;

    padding: 18px;

    margin-bottom: 16px;

    border-width: 1px;
    border-color: #E5EEE5;
`


const QuestionNumber = styled.Text`
    color: #08A63E;

    font-size: 11px;
    font-weight: bold;

    margin-bottom: 12px;
`


const QuestionTitle = styled.Text`
    color: #222222;

    font-size: 16px;
    font-weight: bold;
    line-height: 24px;

    margin-bottom: 16px;
`


const AnswerOption = styled.TouchableOpacity`
    width: 100%;
    min-height: 54px;

    background-color: ${({ selected, correct, incorrect }) =>
        correct
            ? "#E2F7E5"
            : incorrect
            ? "#FCE8E8"
            : selected
            ? "#EAF8E9"
            : "#FFFFFF"};

    border-width: 1px;

    border-color: ${({ selected, correct, incorrect }) =>
        correct
            ? "#08A63E"
            : incorrect
            ? "#D64545"
            : selected
            ? "#08A63E"
            : "#DDDDDD"};

    border-radius: 8px;

    flex-direction: row;
    align-items: center;

    padding: 12px;

    margin-bottom: 10px;
`


const AnswerText = styled.Text`
    color: #333333;

    font-size: 13px;
    line-height: 20px;

    flex: 1;

    margin-left: 10px;
`


const FeedbackBox = styled.View`
    background-color: ${({ correct }) =>
        correct ? "#EAF8E9" : "#FCE8E8"};

    border-radius: 8px;

    padding: 14px;

    margin-top: 8px;
`


const FeedbackTitle = styled.Text`
    color: ${({ correct }) =>
        correct ? "#176B3A" : "#B53232"};

    font-size: 14px;
    font-weight: bold;

    margin-bottom: 8px;
`


const FeedbackText = styled.Text`
    color: #444444;

    font-size: 13px;
    line-height: 21px;
`


const ResultCard = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-radius: 14px;

    border-width: 1px;
    border-color: #D5EBD8;

    padding: 28px;

    align-items: center;

    margin-bottom: 20px;
`


const ResultScore = styled.Text`
    color: #176B3A;

    font-size: 38px;
    font-weight: bold;

    margin-top: 12px;
`


const ResultLabel = styled.Text`
    color: #777777;

    font-size: 13px;

    margin-top: 5px;
`


const HelpButton = styled.TouchableOpacity`
    position: absolute;

    right: 16px;
    bottom: 16px;

    width: 48px;
    height: 48px;

    border-radius: 24px;

    background-color: #F5A800;

    border-width: 3px;
    border-color: #D98500;

    align-items: center;
    justify-content: center;

    elevation: 5;
`


const HelpText = styled.Text`
    color: #222222;

    font-size: 22px;
    font-weight: bold;
`


export {
    Container,
    Header,
    HeaderButton,
    HeaderTitle,
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
    HelpText
}