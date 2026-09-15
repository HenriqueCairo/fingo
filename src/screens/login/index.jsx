import {Container, LogoArea, LogoText, LogoGo, Subtitle, LoginContainer, Title, Description,
    Input, ForgotPassword, ForgotPasswordText, Btn, BtnTitle, AccountText, SignUpText
} from "./style"


const Login = () => {

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
                    Insira suas credenciais para acessar seu arquivo.
                </Description>

                <Input
                    placeholder="ENDEREÇO DE E-MAIL"
                    placeholderTextColor="#777"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <Input
                    placeholder="SENHA"
                    placeholderTextColor="#777"
                    secureTextEntry
                />

                <ForgotPassword>
                    <ForgotPasswordText>
                        Esqueceu sua senha?
                    </ForgotPasswordText>
                </ForgotPassword>

                <Btn>
                    <BtnTitle>
                        Entrar
                    </BtnTitle>
                </Btn>

                <AccountText>
                    Não tem uma conta?
                </AccountText>

                <SignUpText>
                    Cadastre-se agora
                </SignUpText>

            </LoginContainer>

        </Container>
    )
}


export default Login