
import styled from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

const Container = styled(SafeAreaView).attrs({
    edges: ["top", "bottom"],
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

const PageHeading = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 26px;
`

const PageTitle = styled.Text`
    color: #143C28;
    font-size: 28px;
    font-weight: 800;
    margin-bottom: 7px;
`

const PageSubtitle = styled.Text`
    color: #64796C;
    font-size: 15px;
    line-height: 22px;
`

const ProfileCard = styled.View`
    width: 100%;
    background-color: #087F42;
    border-radius: 24px;
    padding: 22px;
    margin-bottom: 18px;
`

const Avatar = styled.View`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #D9F7E4;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-right: 14px;
`

const AvatarInitial = styled.Text`
    color: #087F42;
    font-size: 28px;
    font-weight: 800;
`

const ProfileInfo = styled.View`
    flex: 1;
`

const ProfileName = styled.Text`
    color: #FFFFFF;
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 6px;
`

const ProfileDescription = styled.Text`
    color: #D9F7E4;
    font-size: 14px;
`

const ProfileMessage = styled.Text`
    color: #E0F7E9;
    font-size: 15px;
    line-height: 23px;
    margin-top: 20px;
`

const StatsRow = styled.View`
    flex-direction: row;
    gap: 14px;
    margin-bottom: 20px;
`

const StatCard = styled.View`
    flex: 1;
    min-height: 145px;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 18px;
    justify-content: space-between;
`

const StatLabel = styled.Text`
    color: #64796C;
    font-size: 14px;
    line-height: 20px;
    margin-top: 10px;
`

const StatValue = styled.Text`
    color: #143C28;
    font-size: 26px;
    font-weight: 800;
    margin-top: 8px;
`

const SectionCard = styled.View`
    width: 100%;
    background-color: #FFFFFF;
    border-radius: 22px;
    padding: 20px;
    margin-bottom: 20px;
`

const SectionTitle = styled.Text`
    color: #143C28;
    font-size: 21px;
    font-weight: 800;
    margin-bottom: 18px;
`

const EmptyState = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-vertical: 24px;
    padding-horizontal: 10px;
`

const EmptyTitle = styled.Text`
    color: #143C28;
    font-size: 17px;
    font-weight: 700;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 8px;
`

const EmptyDescription = styled.Text`
    color: #64796C;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
`

const AchievementCard = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #EAF8E9;
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 10px;
`

const AchievementName = styled.Text`
    color: #143C28;
    font-size: 16px;
    font-weight: 700;
    margin-left: 12px;
    flex: 1;
`

const CertificateCard = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    background-color: #F4FFF1;
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 10px;
`

const CertificateInfo = styled.View`
    flex: 1;
    margin-left: 12px;
    margin-right: 8px;
`

const CertificateName = styled.Text`
    color: #143C28;
    font-size: 16px;
    font-weight: 700;
`

const CertificateDescription = styled.Text`
    color: #64796C;
    font-size: 13px;
    line-height: 20px;
    margin-top: 5px;
`

const ActionButton = styled.TouchableOpacity`
    min-width: ${({ variant }) =>
        variant === "primary" ? "100%" : "46px"};

    min-height: ${({ variant }) =>
        variant === "primary" ? "58px" : "46px"};

    background-color: ${({ variant }) =>
        variant === "primary" ? "#087F42" : "#FFFFFF"};

    border-radius: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${({ variant }) =>
        variant === "primary" ? "14px" : "8px"};

    margin-bottom: ${({ variant }) =>
        variant === "primary" ? "16px" : "0px"};
`

const ActionButtonText = styled.Text`
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    margin-right: 10px;
`

export {
    Container,
    Content,
    PageHeading,
    PageTitle,
    PageSubtitle,
    ProfileCard,
    Avatar,
    AvatarInitial,
    ProfileInfo,
    ProfileName,
    ProfileDescription,
    ProfileMessage,
    StatsRow,
    StatCard,
    StatLabel,
    StatValue,
    SectionCard,
    SectionTitle,
    EmptyState,
    EmptyTitle,
    EmptyDescription,
    AchievementCard,
    AchievementName,
    CertificateCard,
    CertificateInfo,
    CertificateName,
    CertificateDescription,
    ActionButton,
    ActionButtonText,
}
