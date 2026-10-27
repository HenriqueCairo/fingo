
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #F4FFF1;
`

/* HEADER */

const Header = styled.View`
    width: 100%;
    height: 55px;
    background-color: #FFFFFF;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 15px;

    border-bottom-width: 1px;
    border-bottom-color: #E8E8E8;
`

const ProfileArea = styled.View`
    flex-direction: row;
    align-items: center;
`

const Avatar = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 15px;

    background-color: #D9F1D7;

    align-items: center;
    justify-content: center;

    margin-right: 8px;
`

const ProfileText = styled.View``

const Name = styled.Text`
    color: #00863F;
    font-size: 11px;
    font-weight: bold;
`

const Level = styled.Text`
    color: #777777;
    font-size: 7px;
`

const PointsArea = styled.View`
    flex-direction: row;
    align-items: center;
`

const Points = styled.Text`
    color: #222222;
    font-size: 9px;
    margin-right: 10px;
`

const Bell = styled.View`
    align-items: center;
    justify-content: center;
`

/* CONTEÚDO */

const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: "center",
        paddingBottom: 100
    }
})`
    flex: 1;
    padding: 12px;
`

const ModuleCard = styled.View`
    width: 90%;
    min-height: 45px;

    background-color: #FFFFFF;
    border-radius: 6px;

    align-items: center;
    justify-content: center;

    padding: 8px;

    z-index: 5;
`

const ModuleTitle = styled.Text`
    color: #333333;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
`

const ModuleProgress = styled.Text`
    color: #00863F;
    font-size: 7px;
    margin-top: 3px;
    text-align: center;
`

/* TRILHA */

const TrailArea = styled.View`
    width: 100%;
    align-items: center;
    padding-top: 12px;
    position: relative;
`

const TrailLine = styled.View`
    position: absolute;
    top: 0;
    width: 3px;
    height: 650px;
    background-color: #DDE8DD;
`

const Step = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;

    background-color: #00863F;

    border-width: 4px;
    border-color: #FFFFFF;

    align-items: center;
    justify-content: center;

    margin-bottom: 25px;
    z-index: 3;
`

const StepText = styled.Text`
    color: #FFFFFF;
    font-size: 14px;
    font-weight: bold;
`

const LessonButton = styled.TouchableOpacity`
    width: 90%;
    height: 42px;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #00B950;
    border-radius: 6px;

    align-items: center;
    justify-content: center;

    margin: 15px 0;
    z-index: 4;
`

const LessonButtonText = styled.Text`
    color: #00863F;
    font-size: 11px;
    font-weight: bold;
`

const PlayButton = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    border-radius: 26px;

    background-color: #FFFFFF;

    border-width: 4px;
    border-color: #00C853;

    align-items: center;
    justify-content: center;

    margin: 8px 0 28px 0;
    z-index: 4;
`

const PlayText = styled.Text`
    color: #00B950;
    font-size: 17px;
    margin-left: 3px;
`

const LockedStep = styled.View`
    width: 40px;
    height: 40px;
    border-radius: 20px;

    background-color: #E8EEE8;

    border-width: 2px;
    border-color: #D7E2D7;

    align-items: center;
    justify-content: center;

    margin: 20px 0;
    z-index: 3;
`

const LockText = styled.Text`
    color: #BBC8BB;
    font-size: 14px;
`



export {
    Container,
    Header,
    ProfileArea,
    Avatar,
    ProfileText,
    Name,
    Level,
    PointsArea,
    Points,
    Bell,
    Content,
    ModuleCard,
    ModuleTitle,
    ModuleProgress,
    TrailArea,
    TrailLine,
    Step,
    StepText,
    LessonButton,
    LessonButtonText,
    PlayButton,
    PlayText,
    LockedStep,
    LockText,
}

