
import styled from "styled-components/native"

const HeaderContainer = styled.View`
    width: 100%;
    background-color: #F3FAF0;

    border-bottom-width: 1px;
    border-bottom-color: #E0EBDF;
`

const HeaderContent = styled.View`
    width: 100%;
    min-height: 78px;

    padding: 12px 15px 8px 15px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const UserArea = styled.View`
    flex: 1;
    min-width: 0;

    flex-direction: row;
    align-items: center;
`

const AvatarButton = styled.TouchableOpacity`
    width: 48px;
    height: 48px;

    border-radius: 24px;

    background-color: #D8F2D8;

    border-width: 2px;
    border-color: #14B85C;

    align-items: center;
    justify-content: center;

    margin-right: 10px;

    overflow: hidden;
`

const AvatarInitial = styled.Text`
    color: #087C3D;

    font-size: 21px;
    font-weight: bold;
`

const UserInfo = styled.View`
    flex: 1;
    justify-content: center;
`

const WelcomeText = styled.Text`
    color: #63746B;
    font-size: 10px;
`

const UserName = styled.Text`
    color: #163C29;

    font-size: 16px;
    font-weight: bold;

    margin-top: 2px;
`

const LevelArea = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 3px;
`

const LevelText = styled.Text`
    color: #087C3D;
    font-size: 10px;
    font-weight: 500;

    margin-left: 3px;
`

const RightArea = styled.View`
    flex-direction: row;
    align-items: center;

    margin-left: 8px;
`

const XPArea = styled.View`
    align-items: flex-end;

    margin-right: 10px;
`

const XPRow = styled.View`
    flex-direction: row;
    align-items: center;
`

const XPText = styled.Text`
    color: #163C29;

    font-size: 14px;
    font-weight: bold;

    margin-left: 4px;
`

const XPLabel = styled.Text`
    color: #63746B;
    font-size: 9px;

    margin-top: 2px;
`

const NotificationButton = styled.TouchableOpacity`
    width: 36px;
    height: 36px;

    border-radius: 18px;

    background-color: #FFFFFF;

    align-items: center;
    justify-content: center;
`

const ProgressArea = styled.View`
    width: 100%;

    padding: 0 15px 12px 15px;
`

const ProgressLabels = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 6px;
`

const ProgressLabel = styled.Text`
    color: #63746B;
    font-size: 10px;
`

const ProgressPercent = styled.Text`
    color: #087C3D;

    font-size: 10px;
    font-weight: bold;
`

const ProgressTrack = styled.View`
    width: 100%;
    height: 5px;

    background-color: #D7E8D9;

    border-radius: 5px;

    overflow: hidden;
`

const ProgressFill = styled.View`
    height: 100%;

    background-color: #18C85B;

    border-radius: 5px;
`

export {
    HeaderContainer,
    HeaderContent,
    UserArea,
    AvatarButton,
    AvatarInitial,
    UserInfo,
    WelcomeText,
    UserName,
    LevelArea,
    LevelText,
    RightArea,
    XPArea,
    XPRow,
    XPText,
    XPLabel,
    NotificationButton,
    ProgressArea,
    ProgressLabels,
    ProgressLabel,
    ProgressPercent,
    ProgressTrack,
    ProgressFill
}
