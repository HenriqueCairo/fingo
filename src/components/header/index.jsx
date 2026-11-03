

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
    ProfileButton,
} from "./style"

const Header = ({ user = null }) => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    const name = user?.name?.trim()
    const firstName = name?.split(" ")[0]
    const initial = firstName?.charAt(0)?.toUpperCase() || "?"

    const openProfile = () => {
        navigation.navigate("Profile")
    }

    return (
        <HeaderContainer
            style={{ paddingTop: insets.top }}
        >
            <HeaderContent>
                <UserArea>
                    <AvatarButton
                        onPress={openProfile}
                        activeOpacity={0.8}
                        accessibilityLabel="Abrir perfil"
                    >
                        {user?.avatar ? (
                            <Image
                                source={{ uri: user.avatar }}
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                }}
                            />
                        ) : firstName ? (
                            <AvatarInitial>
                                {initial}
                            </AvatarInitial>
                        ) : (
                            <Ionicons
                                name="person-outline"
                                size={25}
                                color="#087C3D"
                            />
                        )}
                    </AvatarButton>

                    <UserInfo>
                        <WelcomeText>
                            Bem-vindo ao FinGo!
                        </WelcomeText>

                        <UserName numberOfLines={1}>
                            {firstName || "Minha jornada"}
                        </UserName>
                    </UserInfo>
                </UserArea>

                <ProfileButton
                    onPress={openProfile}
                    activeOpacity={0.8}
                    accessibilityLabel="Acessar meu perfil"
                >
                    <Ionicons
                        name="person-circle-outline"
                        size={27}
                        color="#087C3D"
                    />
                </ProfileButton>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header

