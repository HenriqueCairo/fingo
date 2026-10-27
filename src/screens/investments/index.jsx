import {
    Container,
    Content,
    SectionLabel,
    Balance,
    Profit,
    ChartCard,
    ChartHeader,
    ChartTitle,
    PeriodButton,
    PeriodText,
    ChartArea,
    ChartLine,
    ChartPoint,
    InvestmentTitle,
    InvestmentCard,
    InvestmentIcon,
    InvestmentInfo,
    InvestmentName,
    InvestmentSubtitle,
    InvestmentValue,
    InvestmentProfit,
    NewsCard,
    NewsTitle,
    NewsText,
    NewsHighlight,
    NewsHighlightText,
    InvestButton,
    InvestButtonText,
} from "./style"

import BottomMenu from "../../components/bottom-menu"
import Header from "../../components/header"

const Investments = () => {

    return (
        <Container>

             <Header />


            <Content>

                <SectionLabel>
                    PORTFÓLIO SIMULADO
                </SectionLabel>

                <Balance>
                    R$ 10.000,00
                </Balance>

                <Profit>
                    ↗ +R$ 250,00 este mês
                </Profit>


                <ChartCard>

                    <ChartHeader>

                        <ChartTitle>
                            Rendimento
                        </ChartTitle>

                        <PeriodButton>
                            <PeriodText>1 Mês⌄</PeriodText>
                        </PeriodButton>

                    </ChartHeader>


                    <ChartArea>

                        <ChartLine />

                        <ChartPoint />

                    </ChartArea>

                </ChartCard>


                <InvestmentTitle>
                    Meus Investimentos
                </InvestmentTitle>


                <InvestmentCard>

                    <InvestmentIcon>
                        $
                    </InvestmentIcon>

                    <InvestmentInfo>

                        <InvestmentName>
                            CDB Simulado
                        </InvestmentName>

                        <InvestmentSubtitle>
                            Banco 100% do CDI
                        </InvestmentSubtitle>

                    </InvestmentInfo>


                    <InvestmentValue>
                        R$ 10.000,00
                    </InvestmentValue>

                    <InvestmentProfit>
                        +1,45% a.m.
                    </InvestmentProfit>

                </InvestmentCard>


                <NewsCard>

                    <NewsTitle>
                        🟡 Na Vida Real
                    </NewsTitle>

                    <NewsText>
                        O CDB é um título de Renda Fixa. Basicamente,
                        é um empréstimo que você faz para o banco.
                    </NewsText>

                    <NewsText>
                        Quando você investe em um CDB que rende 100%
                        do CDI, significa que seu dinheiro vai crescer
                        acompanhando uma das principais taxas da
                        economia brasileira.
                    </NewsText>


                    <NewsHighlight>

                        <NewsHighlightText>
                            Rentabilidade é um indicador importante,
                            mas sempre considere prazo, risco e
                            liquidez antes de investir.
                        </NewsHighlightText>

                    </NewsHighlight>

                </NewsCard>


                <InvestButton>

                    <InvestButtonText>
                        ◉ Investir Mais
                    </InvestButtonText>

                </InvestButton>

            </Content>

            <BottomMenu active="Investments" />


        </Container>
    )
}


export default Investments