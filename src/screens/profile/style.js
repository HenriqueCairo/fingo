import styled from "styled-components/native"


const Container = styled.View`
    flex: 1;

    background-color: #F4FFF1;
`


const Header = styled.View`
    width: 100%;
    height: 48px;

    background-color: #FFFFFF;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 14px;

    border-bottom-width: 1px;
    border-bottom-color: #E5EEE5;
`


const Avatar = styled.Text`
    font-size: 16px;
`


const Logo = styled.Text`
    color: #00863F;

    font-size: 12px;

    font-weight: bold;
`


const Points = styled.Text`
    color: #D58B00;

    font-size: 9px;

    background-color: #FFF4D0;

    padding: 4px 7px;

    border-radius: 10px;
`


const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 90
    },
    showsVerticalScrollIndicator: false
})`
    flex: 1;

    padding: 14px;
`


const ProfileCard = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #DFEADF;

    border-radius: 8px;

    align-items: center;

    padding: 18px 12px;

    margin-bottom: 12px;
`


const Greeting = styled.Text`
    color: #222222;

    font-size: 16px;

    font-weight: bold;
`


const Level = styled.Text`
    color: #777777;

    font-size: 8px;

    margin-top: 6px;
`


const ProgressText = styled.Text`
    color: #00863F;

    font-size: 7px;

    margin-top: 7px;
    margin-bottom: 15px;
`


const ScoreCircle = styled.View`
    width: 75px;
    height: 75px;

    border-radius: 38px;

    border-width: 6px;
    border-color: #00863F;

    background-color: #FFFFFF;

    align-items: center;
    justify-content: center;
`


const Score = styled.Text`
    color: #222222;

    font-size: 24px;

    font-weight: bold;
`


const ScoreLabel = styled.Text`
    color: #777777;

    font-size: 6px;
`


const SectionCard = styled.View`
    width: 100%;

    background-color: #FFFFFF;

    border-width: 1px;
    border-color: #DFEADF;

    border-radius: 8px;

    padding: 12px;

    margin-bottom: 12px;
`


const SectionHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
`


const SectionTitle = styled.Text`
    color: #333333;

    font-size: 10px;

    font-weight: bold;

    margin-bottom: 10px;
`


const ViewAll = styled.Text`
    color: #00863F;

    font-size: 6px;

    font-weight: bold;
`


const AchievementsRow = styled.View`
    width: 100%;

    flex-direction: row;

    gap: 8px;

    margin-bottom: 8px;
`


const Achievement = styled.TouchableOpacity`
    flex: 1;

    height: 70px;

    background-color: #FFF7DD;

    border-width: 1px;
    border-color: #F1DFAC;

    border-radius: 6px;

    align-items: center;
    justify-content: center;

    padding: 5px;
`


const AchievementIcon = styled.Text`
    color: #A36D00;

    font-size: 17px;

    margin-bottom: 5px;
`


const AchievementTitle = styled.Text`
    color: #4B4130;

    font-size: 7px;

    font-weight: bold;

    text-align: center;
`


const Certificate = styled.View`
    width: 100%;

    min-height: 68px;

    flex-direction: row;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-color: #EEEEEE;

    padding: 8px 0;
`


const CertificateIcon = styled.Text`
    width: 32px;
    height: 32px;

    border-radius: 5px;

    background-color: #DDF6E4;

    color: #00863F;

    text-align: center;
    line-height: 32px;

    margin-right: 10px;
`


const CertificateInfo = styled.View`
    flex: 1;
`


const CertificateTitle = styled.Text`
    color: #333333;

    font-size: 9px;

    font-weight: bold;
`


const CertificateDescription = styled.Text`
    color: #777777;

    font-size: 7px;

    line-height: 11px;

    margin-top: 4px;
`


const DownloadButton = styled.TouchableOpacity`
    width: 25px;
    height: 25px;

    align-items: center;
    justify-content: center;
`


const BottomText = styled.Text`
    color: #888888;

    font-size: 7px;

    text-align: center;

    margin-top: 12px;
`


const BottomMenu = styled.View`
    width: 100%;
    height: 62px;

    background-color: #FFFFFF;

    position: absolute;

    bottom: 0;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    border-top-width: 1px;
    border-top-color: #EEEEEE;
`


const MenuItem = styled.TouchableOpacity`
    flex: 1;

    align-items: center;
    justify-content: center;
`


const MenuIcon = styled.Text`
    color: #8AA294;

    font-size: 14px;

    margin-bottom: 3px;
`


const MenuText = styled.Text`
    color: #809087;

    font-size: 7px;
`


const ActiveMenu = styled.TouchableOpacity`
    flex: 1;

    align-items: center;
    justify-content: center;
`


const ActiveIcon = styled.Text`
    width: 34px;
    height: 34px;

    border-radius: 17px;

    background-color: #00B950;

    color: #FFFFFF;

    font-size: 14px;

    text-align: center;
    line-height: 34px;

    margin-bottom: 2px;
`


export {
    Container,
    Header,
    Avatar,
    Logo,
    Points,
    Content,
    ProfileCard,
    Greeting,
    Level,
    ProgressText,
    ScoreCircle,
    Score,
    ScoreLabel,
    SectionCard,
    SectionHeader,
    SectionTitle,
    ViewAll,
    AchievementsRow,
    Achievement,
    AchievementIcon,
    AchievementTitle,
    Certificate,
    CertificateIcon,
    CertificateInfo,
    CertificateTitle,
    CertificateDescription,
    DownloadButton,
    BottomText,
    BottomMenu,
    MenuItem,
    MenuIcon,
    MenuText,
    ActiveMenu,
    ActiveIcon
}