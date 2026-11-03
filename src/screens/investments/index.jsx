
import React, { useMemo, useState } from "react"
import { Alert, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Svg, { Path, Line, Circle } from "react-native-svg"

import Header from "../../components/header"
import BottomMenu from "../../components/bottom-menu"

import {
    Container,
    Content,
    PageTitle,
    PageSubtitle,
    HeroCard,
    HeroLabel,
    HeroValue,
    HeroDescription,
    FormCard,
    SectionTitle,
    FieldGroup,
    FieldLabel,
    FieldInput,
    PrimaryButton,
    PrimaryButtonText,
    ResultCard,
    ResultRow,
    ResultLabel,
    ResultValue,
    ChartCard,
    ChartSubtitle,
    InfoCard,
    InfoTitle,
    InfoText,
} from "./style"

const currency = (value) =>
    new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value)

const parseNumber = (value) => {
    const normalized = String(value)
        .trim()
        .replace(/\s/g, "")
        .replace(",", ".")

    if (!normalized) return NaN

    return Number(normalized)
}

const calculateInvestment = ({
    initial,
    monthly,
    months,
    annualRate,
}) => {
    const monthlyRate = Math.pow(1 + annualRate / 100, 1 / 12) - 1

    let balance = initial
    const points = [initial]

    for (let month = 1; month <= months; month++) {
        balance = balance * (1 + monthlyRate) + monthly
        points.push(balance)
    }

    const invested = initial + monthly * months

    return {
        finalValue: balance,
        invested,
        earnings: balance - invested,
        points,
    }
}

const InvestmentChart = ({ points }) => {
    const width = 320
    const height = 180
    const padding = 14

    const maxValue = Math.max(...points, 1)
    const minValue = Math.min(0, ...points)
    const range = Math.max(maxValue - minValue, 1)

    const coordinates = points.map((value, index) => {
        const x =
            padding +
            (index / Math.max(points.length - 1, 1)) *
                (width - padding * 2)

        const y =
            height -
            padding -
            ((value - minValue) / range) *
                (height - padding * 2)

        return { x, y }
    })

    const linePath = coordinates
        .map(
            (point, index) =>
                `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
        )
        .join(" ")

    const lastPoint = coordinates[coordinates.length - 1]

    return (
        <Svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
        >
            {[0.25, 0.5, 0.75].map((fraction) => (
                <Line
                    key={fraction}
                    x1={padding}
                    y1={height * fraction}
                    x2={width - padding}
                    y2={height * fraction}
                    stroke="#E5EEE5"
                    strokeWidth={1}
                />
            ))}

            <Path
                d={linePath}
                stroke="#087F42"
                strokeWidth={3.5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <Circle
                cx={lastPoint.x}
                cy={lastPoint.y}
                r={5}
                fill="#087F42"
                stroke="#FFFFFF"
                strokeWidth={2}
            />
        </Svg>
    )
}

const Investments = () => {
    const [initial, setInitial] = useState("5000")
    const [monthly, setMonthly] = useState("200")
    const [months, setMonths] = useState("36")
    const [annualRate, setAnnualRate] = useState("10")

    const [submitted, setSubmitted] = useState({
        initial: 5000,
        monthly: 200,
        months: 36,
        annualRate: 10,
    })

    const result = useMemo(
        () => calculateInvestment(submitted),
        [submitted]
    )

    const handleCalculate = () => {
        const values = {
            initial: parseNumber(initial),
            monthly: parseNumber(monthly),
            months: parseNumber(months),
            annualRate: parseNumber(annualRate),
        }

        const valid =
            Number.isFinite(values.initial) &&
            Number.isFinite(values.monthly) &&
            Number.isFinite(values.months) &&
            Number.isFinite(values.annualRate) &&
            values.initial >= 0 &&
            values.monthly >= 0 &&
            Number.isInteger(values.months) &&
            values.months >= 1 &&
            values.months <= 600 &&
            values.annualRate > -100 &&
            values.annualRate <= 100 &&
            (values.initial > 0 || values.monthly > 0)

        if (!valid) {
            Alert.alert(
                "Confira os valores",
                "Informe valores válidos, prazo entre 1 e 600 meses e rentabilidade anual maior que -100% e até 100%."
            )
            return
        }

        setSubmitted(values)
    }

    return (
        <Container>
            <Header />

            <Content>
                <PageTitle>
                    Simulador de investimentos
                </PageTitle>

                <PageSubtitle>
                    Veja como aportes e juros compostos podem
                    influenciar seu patrimônio.
                </PageSubtitle>

                <HeroCard>
                    <MaterialCommunityIcons
                        name="chart-line"
                        size={30}
                        color="#D9F7E4"
                    />

                    <HeroLabel>
                        PATRIMÔNIO FINAL ESTIMADO
                    </HeroLabel>

                    <HeroValue>
                        {currency(result.finalValue)}
                    </HeroValue>

                    <HeroDescription>
                        Resultado ilustrativo com base nas
                        condições informadas.
                    </HeroDescription>
                </HeroCard>

                <FormCard>
                    <SectionTitle>
                        Configure sua simulação
                    </SectionTitle>

                    <FieldGroup>
                        <FieldLabel>
                            Valor inicial (R$)
                        </FieldLabel>

                        <FieldInput
                            value={initial}
                            onChangeText={setInitial}
                            keyboardType="decimal-pad"
                            placeholder="Ex.: 5000"
                            placeholderTextColor="#9BA99F"
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel>
                            Aporte mensal (R$)
                        </FieldLabel>

                        <FieldInput
                            value={monthly}
                            onChangeText={setMonthly}
                            keyboardType="decimal-pad"
                            placeholder="Ex.: 200"
                            placeholderTextColor="#9BA99F"
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel>
                            Prazo (meses)
                        </FieldLabel>

                        <FieldInput
                            value={months}
                            onChangeText={setMonths}
                            keyboardType="number-pad"
                            placeholder="Ex.: 36"
                            placeholderTextColor="#9BA99F"
                        />
                    </FieldGroup>

                    <FieldGroup>
                        <FieldLabel>
                            Rentabilidade anual (%)
                        </FieldLabel>

                        <FieldInput
                            value={annualRate}
                            onChangeText={setAnnualRate}
                            keyboardType="decimal-pad"
                            placeholder="Ex.: 10"
                            placeholderTextColor="#9BA99F"
                        />
                    </FieldGroup>

                    <PrimaryButton
                        onPress={handleCalculate}
                        activeOpacity={0.85}
                    >
                        <PrimaryButtonText>
                            Calcular investimento
                        </PrimaryButtonText>

                        <MaterialCommunityIcons
                            name="arrow-right"
                            size={22}
                            color="#FFFFFF"
                        />
                    </PrimaryButton>
                </FormCard>

                <ResultCard>
                    <SectionTitle>
                        Resultado da simulação
                    </SectionTitle>

                    <ResultRow>
                        <ResultLabel>
                            Total investido
                        </ResultLabel>

                        <ResultValue>
                            {currency(result.invested)}
                        </ResultValue>
                    </ResultRow>

                    <ResultRow>
                        <ResultLabel>
                            Rendimento estimado
                        </ResultLabel>

                        <ResultValue positive={result.earnings >= 0}>
                            {currency(result.earnings)}
                        </ResultValue>
                    </ResultRow>

                    <ResultRow>
                        <ResultLabel>
                            Patrimônio final
                        </ResultLabel>

                        <ResultValue positive>
                            {currency(result.finalValue)}
                        </ResultValue>
                    </ResultRow>
                </ResultCard>

                <ChartCard>
                    <SectionTitle>
                        Evolução do patrimônio
                    </SectionTitle>

                    <ChartSubtitle>
                        Projeção mensal ao longo de {submitted.months} meses
                    </ChartSubtitle>

                    <View style={{ marginTop: 14 }}>
                        <InvestmentChart points={result.points} />
                    </View>
                </ChartCard>

                <InfoCard>
                    <InfoTitle>
                        <MaterialCommunityIcons
                            name="lightbulb-outline"
                            size={21}
                            color="#087F42"
                        />
                        {"  "}Na vida real
                    </InfoTitle>

                    <InfoText>
                        Juros compostos são calculados sobre o
                        saldo acumulado. Com o tempo, os rendimentos
                        também podem gerar novos rendimentos.
                    </InfoText>

                    <InfoText>
                        Esta simulação considera uma taxa constante,
                        capitalização mensal e aportes realizados
                        no final de cada mês.
                    </InfoText>

                    <InfoText>
                        Os valores são brutos, sem descontar
                        impostos, taxas ou inflação. A rentabilidade
                        real pode variar, e o resultado não
                        representa garantia de retorno.
                    </InfoText>
                </InfoCard>
            </Content>

            <BottomMenu active="Investments" />
        </Container>
    )
}

export default Investments
