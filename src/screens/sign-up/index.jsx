import {Container, Card, Title, Description, Row, Input, SmallInput, Label,
    GenderContainer, GenderOption, Radio, GenderText, Button, ButtonText, LoginText, LoginLink
} from "./style"


const SignUp = () => {

    return (
        <Container>


            <Card>

                <Title>Junte-se a nós.</Title>

                <Description>
                    Crie uma conta para receber ofertas exclusivas
                </Description>


                <Row>

                    <Input
                        placeholder="Nome"
                        placeholderTextColor="#777777"
                    />

                    <Input
                        placeholder="Sobrenome"
                        placeholderTextColor="#777777"
                    />

                </Row>


                <Label>Data de nascimento</Label>

                <Row>

                    <SmallInput
                        placeholder="Dia"
                        placeholderTextColor="#777777"
                        keyboardType="numeric"
                    />

                    <SmallInput
                        placeholder="Mês"
                        placeholderTextColor="#777777"
                        keyboardType="numeric"
                    />

                    <SmallInput
                        placeholder="Ano"
                        placeholderTextColor="#777777"
                        keyboardType="numeric"
                    />

                </Row>


                <Row>

                    <GenderContainer>

                        <Label>Sexo</Label>

                        <GenderOption>

                            <Radio />

                            <GenderText>
                                Masculino
                            </GenderText>

                            <Radio />

                            <GenderText>
                                Feminino
                            </GenderText>

                        </GenderOption>

                    </GenderContainer>


                    <GenderContainer>

                        <Label>CPF</Label>

                        <Input
                            placeholder="00000000000"
                            placeholderTextColor="#777777"
                            keyboardType="numeric"
                        />

                    </GenderContainer>

                </Row>


                <Input
                    placeholder="Telefone: (xx) 0 0000 - 0000"
                    placeholderTextColor="#777777"
                    keyboardType="phone-pad"
                />


                <Input
                    placeholder="ENDEREÇO DE E-MAIL"
                    placeholderTextColor="#777777"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />


                <Input
                    placeholder="SENHA"
                    placeholderTextColor="#777777"
                    secureTextEntry
                />


                <Button>

                    <ButtonText>
                        Criar Conta
                    </ButtonText>

                </Button>


                <LoginText>
                    Já tem uma conta?
                </LoginText>


                <LoginLink>
                    Entrar
                </LoginLink>

            </Card>

        </Container>
    )
}


export default SignUp