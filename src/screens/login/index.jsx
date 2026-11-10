
import React, { useState } from "react"
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import {
    Container,
    Content,
    LogoArea,
    LogoText,
    LogoGo,
    Subtitle,
    LoginContainer,
    Title,
    Description,
    FieldGroup,
    FieldLabel,
    InputWrapper,
    InputIcon,
    Input,
    PasswordToggle,
    ForgotPassword,
    ForgotPasswordText,
    Btn,
    BtnTitle,
    AccountRow,
    AccountText,
    RegisterLink,
    FooterText,
} from "./style"

const Login = () => {
    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    // Navegação temporária enquanto a autenticação
    // com o Spring Boot não estiver integrada.
    const handleLogin = () => {
        Keyboard.dismiss()
        navigation.navigate("Trail")
    }

    const handleSignUp = () => {
        navigation.navigate("SignUp")
    }

    const handleForgotPassword = () => {
        Alert.alert(
            "Recuperação de senha",
            "Essa funcionalidade será integrada ao backend posteriormente."
        )
    }

    return (
        <Container>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={
                    Platform.OS === "ios"
                        ? "padding"
                        : undefined
                }
            >
                <TouchableWithoutFeedback
                    onPress={Keyboard.dismiss}
                    accessible={false}
                >
                    <Content>
                        <LogoArea>
                            <LogoText>
                                Fin<LogoGo>Go</LogoGo>
                            </LogoText>

                            <Subtitle>
                                Educação financeira gamificada
                            </Subtitle>
                        </LogoArea>

                        <LoginContainer>
                            

                            <Title>
                                Bem-vindo de volta!
                            </Title>

                            <Description>
                                Entre na sua conta e continue
                                sua jornada financeira.
                            </Description>

                            <FieldGroup>
                                <FieldLabel>
                                    E-mail
                                </FieldLabel>

                                <InputWrapper>
                                    <InputIcon>
                                        <MaterialCommunityIcons
                                            name="email-outline"
                                            size={22}
                                            color="#819487"
                                        />
                                    </InputIcon>

                                    <Input
                                        placeholder="seuemail@exemplo.com"
                                        placeholderTextColor="#98A89C"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        autoComplete="email"
                                        autoCorrect={false}
                                        value={email}
                                        onChangeText={setEmail}
                                        returnKeyType="next"
                                    />
                                </InputWrapper>
                            </FieldGroup>

                            <FieldGroup>
                                <FieldLabel>
                                    Senha
                                </FieldLabel>

                                <InputWrapper>
                                    <InputIcon>
                                        <MaterialCommunityIcons
                                            name="lock-outline"
                                            size={22}
                                            color="#819487"
                                        />
                                    </InputIcon>

                                    <Input
                                        placeholder="Digite sua senha"
                                        placeholderTextColor="#98A89C"
                                        secureTextEntry={!showPassword}
                                        autoCapitalize="none"
                                        autoComplete="password"
                                        value={password}
                                        onChangeText={setPassword}
                                        returnKeyType="done"
                                    />

                                    <PasswordToggle
                                        onPress={() =>
                                            setShowPassword(
                                                !showPassword
                                            )
                                        }
                                        accessibilityRole="button"
                                        accessibilityLabel={
                                            showPassword
                                                ? "Ocultar senha"
                                                : "Mostrar senha"
                                        }
                                    >
                                        <MaterialCommunityIcons
                                            name={
                                                showPassword
                                                    ? "eye-off-outline"
                                                    : "eye-outline"
                                            }
                                            size={23}
                                            color="#64796C"
                                        />
                                    </PasswordToggle>
                                </InputWrapper>
                            </FieldGroup>

                            <ForgotPassword
                                onPress={handleForgotPassword}
                            >
                                <ForgotPasswordText>
                                    Esqueceu sua senha?
                                </ForgotPasswordText>
                            </ForgotPassword>

                            <Btn
                                onPress={handleLogin}
                                activeOpacity={0.85}
                            >
                                <BtnTitle>
                                    Entrar
                                </BtnTitle>

                                <MaterialCommunityIcons
                                    name="arrow-right"
                                    size={22}
                                    color="#FFFFFF"
                                />
                            </Btn>

                            <AccountRow>
                                <AccountText>
                                    Ainda não tem uma conta?
                                </AccountText>

                                <RegisterLink
                                    onPress={handleSignUp}
                                >
                                    Cadastre-se
                                </RegisterLink>
                            </AccountRow>
                        </LoginContainer>

                        <FooterText>
                            Aprenda hoje. Evolua sempre.
                        </FooterText>
                    </Content>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default Login

