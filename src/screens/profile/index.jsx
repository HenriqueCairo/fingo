
import React from "react"
import { Alert, Image, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

import BottomMenu from "../../components/bottom-menu"

import {
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
} from "./style"

const Profile = ({
    user = null,
    progress = null,
    achievements = [],
    certificates = [],
}) => {
    const navigation = useNavigation()

    const name = user?.name?.trim()
    const firstName = name?.split(" ")[0]
    const initial = firstName?.charAt(0)?.toUpperCase()

    const lessonsCompleted = progress?.lessonsCompleted

    const openTrail = () => {
        navigation.navigate("Trail")
    }

    const showSettings = () => {
        Alert.alert(
            "Configurações",
            "As configurações de conta serão integradas futuramente."
        )
    }

    const openCertificate = () => {
        Alert.alert(
            "Certificados",
            "A visualização e o download dos certificados serão integrados ao backend."
        )
    }

    return (
        <Container>
            <Content>
                <PageHeading>
                    <View style={{ flex: 1 }}>
                        <PageTitle>Meu perfil</PageTitle>

                        <PageSubtitle>
                            Sua jornada de educação financeira
                        </PageSubtitle>
                    </View>

                    <ActionButton
                        onPress={showSettings}
                        accessibilityLabel="Configurações"
                    >
                        <MaterialCommunityIcons
                            name="cog-outline"
                            size={25}
                            color="#087F42"
                        />
                    </ActionButton>
                </PageHeading>

                <ProfileCard>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Avatar>
                            {user?.avatar ? (
                                <Image
                                    source={{ uri: user.avatar }}
                                    style={{
                                        width: 64,
                                        height: 64,
                                        borderRadius: 32,
                                    }}
                                />
                            ) : initial ? (
                                <AvatarInitial>
                                    {initial}
                                </AvatarInitial>
                            ) : (
                                <MaterialCommunityIcons
                                    name="account-outline"
                                    size={34}
                                    color="#087F42"
                                />
                            )}
                        </Avatar>

                        <ProfileInfo>
                            <ProfileName numberOfLines={1}>
                                {name || "Minha jornada"}
                            </ProfileName>

                            <ProfileDescription>
                                Perfil de estudante
                            </ProfileDescription>
                        </ProfileInfo>
                    </View>

                    <ProfileMessage>
                        Aprenda, pratique e acompanhe sua
                        evolução financeira.
                    </ProfileMessage>
                </ProfileCard>

                <StatsRow>
                    <StatCard>
                        <MaterialCommunityIcons
                            name="book-open-page-variant-outline"
                            size={27}
                            color="#087F42"
                        />

                        <StatLabel>
                            Lições concluídas
                        </StatLabel>

                        <StatValue>
                            {Number.isFinite(lessonsCompleted)
                                ? lessonsCompleted
                                : "—"}
                        </StatValue>
                    </StatCard>

                    <StatCard>
                        <MaterialCommunityIcons
                            name="trophy-outline"
                            size={27}
                            color="#087F42"
                        />

                        <StatLabel>
                            Conquistas
                        </StatLabel>

                        <StatValue>
                            {progress?.achievementsCount != null
                                ? progress.achievementsCount
                                : "—"}
                        </StatValue>
                    </StatCard>
                </StatsRow>

                <SectionCard>
                    <SectionTitle>
                        Minhas conquistas
                    </SectionTitle>

                    {achievements.length === 0 ? (
                        <EmptyState>
                            <MaterialCommunityIcons
                                name="medal-outline"
                                size={40}
                                color="#87A994"
                            />

                            <EmptyTitle>
                                Sua coleção começa aqui
                            </EmptyTitle>

                            <EmptyDescription>
                                As conquistas aparecerão quando
                                estiverem disponíveis na sua conta.
                            </EmptyDescription>
                        </EmptyState>
                    ) : (
                        achievements.map((achievement) => (
                            <AchievementCard
                                key={achievement.id}
                            >
                                <MaterialCommunityIcons
                                    name="medal-outline"
                                    size={26}
                                    color="#087F42"
                                />

                                <AchievementName>
                                    {achievement.title}
                                </AchievementName>
                            </AchievementCard>
                        ))
                    )}
                </SectionCard>

                <SectionCard>
                    <SectionTitle>
                        Meus certificados
                    </SectionTitle>

                    {certificates.length === 0 ? (
                        <EmptyState>
                            <MaterialCommunityIcons
                                name="certificate-outline"
                                size={40}
                                color="#87A994"
                            />

                            <EmptyTitle>
                                Nenhum certificado disponível
                            </EmptyTitle>

                            <EmptyDescription>
                                Seus certificados aparecerão
                                aqui quando forem emitidos.
                            </EmptyDescription>
                        </EmptyState>
                    ) : (
                        certificates.map((certificate) => (
                            <CertificateCard
                                key={certificate.id}
                                onPress={() =>
                                    openCertificate(certificate)
                                }
                            >
                                <MaterialCommunityIcons
                                    name="certificate-outline"
                                    size={29}
                                    color="#087F42"
                                />

                                <CertificateInfo>
                                    <CertificateName>
                                        {certificate.title}
                                    </CertificateName>

                                    <CertificateDescription>
                                        {certificate.description ||
                                            "Certificado disponível"}
                                    </CertificateDescription>
                                </CertificateInfo>

                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    size={25}
                                    color="#087F42"
                                />
                            </CertificateCard>
                        ))
                    )}
                </SectionCard>

                <ActionButton
                    onPress={openTrail}
                    variant="primary"
                    activeOpacity={0.85}
                >
                    <ActionButtonText>
                        Continuar aprendendo
                    </ActionButtonText>

                    <MaterialCommunityIcons
                        name="arrow-right"
                        size={21}
                        color="#FFFFFF"
                    />
                </ActionButton>
            </Content>

            <BottomMenu active="Profile" />
        </Container>
    )
}

export default Profile
