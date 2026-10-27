
import React from "react"
import { Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { Ionicons } from "@expo/vector-icons"

import {
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
} from "./style"

const Header = ({
    user = {
        name: "Henrique",
        avatar: null,
        level: 1,
        levelName: "Iniciante",
        xp: 2450,
        progress: 65
    }
}) => {

    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const firstName = user.name?.trim().split(" ")[0] || "Usuário"

    const initial = firstName.charAt(0).toUpperCase()

    const progress = Math.max(
        0,
        Math.min(100, Number(user.progress) || 0)
    )

    const formattedXP = Number(user.xp || 0)
        .toLocaleString("pt-BR")

    return (
        <HeaderContainer
            style={{ paddingTop: insets.top }}
        >

            <HeaderContent>

                <UserArea>

                    <AvatarButton
                        onPress={() => navigation.navigate("Profile")}
                        activeOpacity={0.8}
                    >

                        {user.avatar ? (
                            <Image
                                source={{ uri: user.avatar }}
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 22
                                }}
                            />
                        ) : (
                            <AvatarInitial>
                                {initial}
                            </AvatarInitial>
                        )}

                    </AvatarButton>

                    <UserInfo>

                        <WelcomeText>
                            Bem-vindo de volta!
                        </WelcomeText>

                        <UserName numberOfLines={1}>
                            {firstName}
                        </UserName>

                        <LevelArea>

                            <Ionicons
                                name="flash"
                                size={12}
                                color="#14A956"
                            />

                            <LevelText>
                                Nível {user.level} · {user.levelName}
                            </LevelText>

                        </LevelArea>

                    </UserInfo>

                </UserArea>

                <RightArea>

                    <XPArea>

                        <XPRow>

                            <Ionicons
                                name="star"
                                size={16}
                                color="#D69A1E"
                            />

                            <XPText>
                                {formattedXP}
                            </XPText>

                        </XPRow>

                        <XPLabel>
                            XP acumulado
                        </XPLabel>

                    </XPArea>

                    <NotificationButton
                        activeOpacity={0.8}
                        accessibilityLabel="Notificações"
                    >

                        <Ionicons
                            name="notifications-outline"
                            size={21}
                            color="#163C29"
                        />

                    </NotificationButton>

                </RightArea>

            </HeaderContent>

            <ProgressArea>

                <ProgressLabels>

                    <ProgressLabel>
                        Progresso para o nível {user.level + 1}
                    </ProgressLabel>

                    <ProgressPercent>
                        {progress}%
                    </ProgressPercent>

                </ProgressLabels>

                <ProgressTrack>

                    <ProgressFill
                        style={{ width: `${progress}%` }}
                    />

                </ProgressTrack>

            </ProgressArea>

        </HeaderContainer>
    )
}

export default Header
