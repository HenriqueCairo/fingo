
import { useState } from "react"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"

import {
    Container,
    LogoArea,
    LogoText,
    LogoGo,
    Subtitle,
    LoginContainer,
    Title,
    Description,
    Input,
    ForgotPassword,
    ForgotPasswordText,
    Btn,
    BtnTitle,
    AccountText,
    RegisterLink,
} from "./style"

const Login = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // LOGIN TEMPORÁRIO PARA TESTAR A NAVEGAÇÃO
    const handleLogin = () => {
        navigation.navigate("Trail")
    }

    // ABRIR TELA DE CADASTRO
    const handleSignUp = () => {
        navigation.navigate("SignUp")
    }

    // RECUPERAÇÃO DE SENHA (FUTURA INTEGRAÇÃO)
    const handleForgotPassword = () => {
        Alert.alert(
            "Recuperação de senha",
            "Essa funcionalidade será integrada ao backend posteriormente."
        )
    }

    return (
        <Container>

            <LogoArea>

                <LogoText>
                    Fin<LogoGo>Go</LogoGo>
                </LogoText>

                <Subtitle>
                    Educação Financeira Gamificada
                </Subtitle>

            </LogoArea>

            <LoginContainer>

                <Title>
                    Bem-vindo(a) de volta!
                </Title>

                <Description>
                    Insira suas credenciais para acessar sua conta.
                </Description>

                <Input
                    placeholder="ENDEREÇO DE E-MAIL"
                    placeholderTextColor="#777"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Input
                    placeholder="SENHA"
                    placeholderTextColor="#777"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <ForgotPassword
                    onPress={handleForgotPassword}
                >
                    <ForgotPasswordText>
                        Esqueceu sua senha?
                    </ForgotPasswordText>
                </ForgotPassword>

                <Btn onPress={handleLogin}>

                    <BtnTitle>
                        Entrar
                    </BtnTitle>

                </Btn>

                <AccountText>
                    Não tem uma conta?
                </AccountText>

                <RegisterLink
                    onPress={handleSignUp}
                >
                    Cadastre-se
                </RegisterLink>

            </LoginContainer>

        </Container>
    )
}

export default Login
