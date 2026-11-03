
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
        paddingBottom: 40,
    },
})`
    flex: 1;
`

const PageTitle = styled.Text`
    color: #143C28;
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 8px;
`

const PageSubtitle = styled.Text`
    color: #64796C;
    font-size: 15px;
    line-height: 23px;
    margin-bottom: 24px;
`

const ModuleCard = styled.View`
    width: 100%;
    background-color: #087F42;
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 22px;
`

const ModuleLabel = styled.Text`
    color: #D9F7E4;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    margin-bottom: 12px;
`

const ModuleTitle = styled.Text`
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 800;
    line-height: 31px;
    margin-bottom: 12px;
`

const ModuleDescription = styled.Text`
    color: #E0F7E9;
    font-size: 15px;
    line-height: 23px;
`

const TrailArea = styled.View`
    width: 100%;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 18px;
`

const TrailItem = styled.View`
    width: 100%;
    min-height: 164px;
    align-items: ${({ position }) =>
        position === "left"
            ? "flex-start"
            : position === "right"
            ? "flex-end"
            : "center"};

    padding-left: ${({ position }) =>
        position === "left" ? "8%" : "0px"};

    padding-right: ${({ position }) =>
        position === "right" ? "8%" : "0px"};

    position: relative;
    margin-bottom: 12px;
`

const TrailPath = styled.View`
    position: absolute;
    top: -28px;
    left: 50%;
    width: 5px;
    height: 32px;
    background-color: #DCEEE0;
    border-radius: 4px;
`

const StepButton = styled.TouchableOpacity`
    width: 78px;
    height: 78px;
    border-radius: 39px;

    background-color: ${({ available }) =>
        available ? "#12B85B" : "#E1E8E2"};

    border-width: 5px;
    border-color: #FFFFFF;

    align-items: center;
    justify-content: center;

    elevation: 3;
`

const StepCaption = styled.View`
    max-width: 240px;
    min-width: 180px;
    background-color: #FFFFFF;
    border-radius: 14px;
    padding: 11px 14px;
    align-items: center;
    margin-top: 10px;
`

const StepTitle = styled.Text`
    color: #143C28;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`

const StepSubtitle = styled.Text`
    color: #64796C;
    font-size: 12px;
    text-align: center;
    margin-top: 4px;
`

const FinishCard = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 18px;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`

const FinishIcon = styled.View`
    width: 58px;
    height: 58px;
    border-radius: 16px;
    background-color: #E0F5E7;
    align-items: center;
    justify-content: center;
    margin-right: 14px;
`

const FinishTitle = styled.Text`
    color: #143C28;
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 5px;
`

const FinishDescription = styled.Text`
    color: #64796C;
    font-size: 13px;
    line-height: 20px;
`

export {
    Container,
    Content,
    PageTitle,
    PageSubtitle,
    ModuleCard,
    ModuleLabel,
    ModuleTitle,
    ModuleDescription,
    TrailArea,
    TrailPath,
    TrailItem,
    StepButton,
    StepCaption,
    StepTitle,
    StepSubtitle,
    FinishCard,
    FinishIcon,
    FinishTitle,
    FinishDescription,
}



