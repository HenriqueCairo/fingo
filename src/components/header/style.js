
import styled from "styled-components/native"

const HeaderContainer = styled.View`
    width: 100%;
    background-color: #F3FAF0;

    border-bottom-width: 1px;
    border-bottom-color: #E0EBDF;
`

const HeaderContent = styled.View`
    width: 100%;
    min-height: 76px;

    padding: 10px 20px 12px 20px;

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
    width: 50px;
    height: 50px;

    border-radius: 25px;

    background-color: #D8F2D8;

    border-width: 2px;
    border-color: #14B85C;

    align-items: center;
    justify-content: center;

    margin-right: 12px;
    overflow: hidden;
`

const AvatarInitial = styled.Text`
    color: #087C3D;
    font-size: 22px;
    font-weight: 700;
`

const UserInfo = styled.View`
    flex: 1;
    justify-content: center;
`

const WelcomeText = styled.Text`
    color: #63746B;
    font-size: 13px;
    margin-bottom: 4px;
`

const UserName = styled.Text`
    color: #163C29;
    font-size: 19px;
    font-weight: 700;
`

const ProfileButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;

    border-radius: 23px;
    background-color: #FFFFFF;

    align-items: center;
    justify-content: center;

    margin-left: 12px;
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
    ProfileButton,
}
