import {
    Container, Header, Logo,Skip, Content, Title,
    TitleGreen,Description,Card,CardTitle, Label,
    Input, Row,Option,OptionText,ObjectiveOption,
    ObjectiveText, InvestorOption, InvestorTitle,
    InvestorDescription,AnalysisCard, AnalysisTitle, 
    AnalysisText, ProgressBar,Progress
} from "./style"


const ProfileSetup = () => {

    return (
        <Container>

            <Header>
                <Logo>FinGo</Logo>
                <Skip>Pular</Skip>
            </Header>


            <Content>

                <Title>
                    Olá! Vamos
                </Title>

                <TitleGreen>
                    Evoluir Juntos.
                </TitleGreen>


                <Description>
                    Para criarmos o melhor plano para você,
                    precisamos te conhecer um pouco melhor.
                    Leva só um minutinho.
                </Description>


                {/* QUEM É VOCÊ */}

                <Card>

                    <CardTitle>
                        ♙ Quem é você?
                    </CardTitle>

                    <Label>
                        Como quer ser chamado?
                    </Label>

                    <Input
                        placeholder="Seu nome"
                        placeholderTextColor="#999999"
                    />

                </Card>


                {/* MOMENTO FINANCEIRO */}

                <Card>

                    <CardTitle>
                        ▣ Seu Momento Financeiro
                    </CardTitle>

                    <Label>
                        Renda Mensal Aproximada
                    </Label>

                    <Input
                        placeholder="R$ 0,00"
                        placeholderTextColor="#999999"
                        keyboardType="numeric"
                    />


                    <Label>
                        Você possui dívidas ativas?
                    </Label>

                    <Row>

                        <Option>
                            <OptionText>
                                Sim, possuo
                            </OptionText>
                        </Option>

                        <Option>
                            <OptionText>
                                Não, tudo limpo
                            </OptionText>
                        </Option>

                    </Row>

                </Card>


                {/* OBJETIVOS */}

                <Card>

                    <CardTitle>
                        ⚑ Seus Objetivos
                    </CardTitle>

                    <Label>
                        O que você mais deseja alcançar?
                    </Label>


                    <ObjectiveOption>
                        <ObjectiveText>
                            ⌂ Comprar uma casa
                        </ObjectiveText>
                    </ObjectiveOption>


                    <ObjectiveOption>
                        <ObjectiveText>
                            ✈ Aposentadoria Antecipada
                        </ObjectiveText>
                    </ObjectiveOption>


                    <ObjectiveOption>
                        <ObjectiveText>
                            ◇ Reserva de Emergência
                        </ObjectiveText>
                    </ObjectiveOption>

                </Card>


                {/* PERFIL INVESTIDOR */}

                <Card>

                    <CardTitle>
                        ▥ Perfil de Investidor
                    </CardTitle>


                    <InvestorOption>

                        <InvestorTitle>
                            Seguro
                        </InvestorTitle>

                        <InvestorDescription>
                            Baixo risco
                        </InvestorDescription>

                    </InvestorOption>


                    <InvestorOption>

                        <InvestorTitle>
                            Equilibrado
                        </InvestorTitle>

                        <InvestorDescription>
                            Risco moderado
                        </InvestorDescription>

                    </InvestorOption>


                    <InvestorOption>

                        <InvestorTitle>
                            Crescimento
                        </InvestorTitle>

                        <InvestorDescription>
                            Maior risco
                        </InvestorDescription>

                    </InvestorOption>

                </Card>


                {/* ANÁLISE */}

                <AnalysisCard>

                    <AnalysisTitle>
                        ✨ Analisando seu perfil...
                    </AnalysisTitle>

                    <AnalysisText>
                        Com base nas suas respostas, estamos
                        preparando uma estratégia personalizada
                        para ajudar você a organizar suas finanças
                        e alcançar seus objetivos.
                    </AnalysisText>


                    <ProgressBar>
                        <Progress />
                    </ProgressBar>

                </AnalysisCard>


            </Content>

        </Container>
    )
}


export default ProfileSetup