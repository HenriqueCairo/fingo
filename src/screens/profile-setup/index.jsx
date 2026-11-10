
import React, { useMemo, useState } from "react"
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    View,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import {
    Container,
    ScrollContent,
    Header,
    Logo,
    LogoGo,
    Skip,
    Content,
    Title,
    TitleGreen,
    Description,
    Card,
    CardHeading,
    CardIcon,
    CardTitle,
    Label,
    Input,
    Row,
    Option,
    OptionText,
    ObjectiveOption,
    ObjectiveText,
    InvestorOption,
    InvestorInfo,
    InvestorTitle,
    InvestorDescription,
    Radio,
    RadioSelected,
    AnalysisCard,
    AnalysisTitle,
    AnalysisText,
    ProgressBar,
    Progress,
    ProgressLabel,
    Button,
    ButtonText,
    FooterText,
} from "./style"

const OBJECTIVES = [
    {
        id: "house",
        label: "Comprar uma casa",
        icon: "home-outline",
    },
    {
        id: "retirement",
        label: "Planejar a aposentadoria",
        icon: "beach",
    },
    {
        id: "emergency",
        label: "Criar uma reserva de emergência",
        icon: "shield-check-outline",
    },
]

const INVESTOR_PROFILES = [
    {
        id: "safe",
        title: "Conservador",
        description: "Prefiro preservar meu dinheiro e evitar riscos.",
        icon: "shield-outline",
    },
    {
        id: "balanced",
        title: "Moderado",
        description: "Aceito algum risco em busca de crescimento.",
        icon: "scale-balance",
    },
    {
        id: "growth",
        title: "Arrojado",
        description: "Aceito oscilações maiores em busca de retorno.",
        icon: "trending-up",
    },
]

const formatCurrency = (value) => {
    const digits = value.replace(/\D/g, "")

    if (!digits) return ""

    const amount = Number(digits) / 100

    return amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}

const ProfileSetup = () => {
    const navigation = useNavigation()

    const [name, setName] = useState("")
    const [income, setIncome] = useState("")
    const [hasDebts, setHasDebts] = useState(null)
    const [objectives, setObjectives] = useState([])
    const [investorProfile, setInvestorProfile] = useState(null)

    const progress = useMemo(() => {
        const completed = [
            name.trim().length > 0,
            income.length > 0,
            hasDebts !== null,
            objectives.length > 0,
            investorProfile !== null,
        ].filter(Boolean).length

        return Math.round((completed / 5) * 100)
    }, [name, income, hasDebts, objectives, investorProfile])

    const toggleObjective = (id) => {
        setObjectives((current) =>
            current.includes(id)
                ? current.filter((item) => item !== id)
                : [...current, id]
        )
    }

    const handleSkip = () => {
        Alert.alert(
            "Pular configuração?",
            "Você poderá preencher essas informações futuramente.",
            [
                { text: "Continuar preenchendo", style: "cancel" },
                {
                    text: "Pular",
                    onPress: () => navigation.replace("Trail"),
                },
            ]
        )
    }

    const handleFinish = () => {
        Keyboard.dismiss()

        if (progress < 100) {
            Alert.alert(
                "Configuração incompleta",
                "Preencha os campos e selecione suas preferências para continuar."
            )
            return
        }

        // Estrutura dos dados para integração futura.
        // O contrato será ajustado conforme a API Spring Boot.
        const profileData = {
            name: name.trim(),
            monthlyIncomeCents: Number(
                income.replace(/\D/g, "")
            ),
            hasDebts,
            objectives,
            investorProfile,
        }

        // Não enviar dados reais enquanto o backend
        // não estiver integrado.
        Alert.alert(
            "Configuração preenchida",
            "Suas respostas estão prontas para integração. Elas ainda não foram salvas no servidor.",
            [
                {
                    text: "Continuar",
                    onPress: () => navigation.replace("Trail"),
                },
            ]
        )
    }

    return (
        <Container>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <ScrollContent>
                    <Header>
                        <Logo>
                            Fin<LogoGo>Go</LogoGo>
                        </Logo>

                        <Skip onPress={handleSkip}>
                            Pular
                        </Skip>
                    </Header>

                    <Content>
                        <Title>Vamos construir</Title>
                        <TitleGreen>sua jornada.</TitleGreen>

                        <Description>
                            Conte um pouco sobre você para
                            personalizarmos sua experiência
                            de educação financeira.
                        </Description>

                        <AnalysisCard>
                            <Row
                                style={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <AnalysisTitle>
                                    Seu progresso
                                </AnalysisTitle>

                                <ProgressLabel>
                                    {progress}%
                                </ProgressLabel>
                            </Row>

                            <ProgressBar>
                                <Progress
                                    style={{ width: `${progress}%` }}
                                />
                            </ProgressBar>

                            <AnalysisText>
                                Preencha as informações abaixo.
                                Você poderá revisá-las depois.
                            </AnalysisText>
                        </AnalysisCard>

                        <Card>
                            <CardHeading>
                                <CardIcon>
                                    <MaterialCommunityIcons
                                        name="account-outline"
                                        size={23}
                                        color="#087F42"
                                    />
                                </CardIcon>

                                <CardTitle>
                                    Sobre você
                                </CardTitle>
                            </CardHeading>

                            <Label>
                                Como quer ser chamado?
                            </Label>

                            <Input
                                placeholder="Digite seu nome"
                                placeholderTextColor="#98A89C"
                                value={name}
                                onChangeText={setName}
                                autoCapitalize="words"
                                returnKeyType="done"
                            />
                        </Card>

                        <Card>
                            <CardHeading>
                                <CardIcon>
                                    <MaterialCommunityIcons
                                        name="wallet-outline"
                                        size={23}
                                        color="#087F42"
                                    />
                                </CardIcon>

                                <CardTitle>
                                    Seu momento financeiro
                                </CardTitle>
                            </CardHeading>

                            <Label>
                                Renda mensal aproximada
                            </Label>

                            <Input
                                placeholder="R$ 0,00"
                                placeholderTextColor="#98A89C"
                                keyboardType="number-pad"
                                value={income}
                                onChangeText={(value) =>
                                    setIncome(formatCurrency(value))
                                }
                            />

                            <Label>
                                Você possui dívidas ativas?
                            </Label>

                            <Row>
                                {[
                                    { label: "Sim", value: true },
                                    { label: "Não", value: false },
                                ].map((item) => {
                                    const selected =
                                        hasDebts === item.value

                                    return (
                                        <Option
                                            key={item.label}
                                            selected={selected}
                                            onPress={() =>
                                                setHasDebts(item.value)
                                            }
                                        >
                                            <MaterialCommunityIcons
                                                name={
                                                    selected
                                                        ? "radiobox-marked"
                                                        : "radiobox-blank"
                                                }
                                                size={20}
                                                color={
                                                    selected
                                                        ? "#087F42"
                                                        : "#819487"
                                                }
                                            />

                                            <OptionText
                                                selected={selected}
                                            >
                                                {item.label}
                                            </OptionText>
                                        </Option>
                                    )
                                })}
                            </Row>
                        </Card>

                        <Card>
                            <CardHeading>
                                <CardIcon>
                                    <MaterialCommunityIcons
                                        name="flag-outline"
                                        size={23}
                                        color="#087F42"
                                    />
                                </CardIcon>

                                <CardTitle>
                                    Seus objetivos
                                </CardTitle>
                            </CardHeading>

                            <Label>
                                O que você deseja alcançar?
                            </Label>

                            <AnalysisText
                                style={{ marginBottom: 14 }}
                            >
                                Você pode selecionar mais de uma opção.
                            </AnalysisText>

                            {OBJECTIVES.map((item) => {
                                const selected =
                                    objectives.includes(item.id)

                                return (
                                    <ObjectiveOption
                                        key={item.id}
                                        selected={selected}
                                        onPress={() =>
                                            toggleObjective(item.id)
                                        }
                                    >
                                        <MaterialCommunityIcons
                                            name={item.icon}
                                            size={24}
                                            color="#087F42"
                                        />

                                        <ObjectiveText>
                                            {item.label}
                                        </ObjectiveText>

                                        <MaterialCommunityIcons
                                            name={
                                                selected
                                                    ? "checkbox-marked"
                                                    : "checkbox-blank-outline"
                                            }
                                            size={23}
                                            color={
                                                selected
                                                    ? "#087F42"
                                                    : "#9BAFA1"
                                            }
                                        />
                                    </ObjectiveOption>
                                )
                            })}
                        </Card>

                        <Card>
                            <CardHeading>
                                <CardIcon>
                                    <MaterialCommunityIcons
                                        name="chart-line"
                                        size={23}
                                        color="#087F42"
                                    />
                                </CardIcon>

                                <CardTitle>
                                    Preferência de investimento
                                </CardTitle>
                            </CardHeading>

                            <AnalysisText
                                style={{ marginBottom: 15 }}
                            >
                                Qual alternativa mais combina com você?
                                Essa escolha é apenas educativa e não
                                constitui uma avaliação de risco.
                            </AnalysisText>

                            {INVESTOR_PROFILES.map((item) => {
                                const selected =
                                    investorProfile === item.id

                                return (
                                    <InvestorOption
                                        key={item.id}
                                        selected={selected}
                                        onPress={() =>
                                            setInvestorProfile(item.id)
                                        }
                                    >
                                        <MaterialCommunityIcons
                                            name={item.icon}
                                            size={25}
                                            color="#087F42"
                                        />

                                        <InvestorInfo>
                                            <InvestorTitle>
                                                {item.title}
                                            </InvestorTitle>

                                            <InvestorDescription>
                                                {item.description}
                                            </InvestorDescription>
                                        </InvestorInfo>

                                        <Radio selected={selected}>
                                            {selected && (
                                                <RadioSelected />
                                            )}
                                        </Radio>
                                    </InvestorOption>
                                )
                            })}
                        </Card>

                        <Button
                            onPress={handleFinish}
                            activeOpacity={0.85}
                        >
                            <ButtonText>
                                Concluir configuração
                            </ButtonText>

                            <MaterialCommunityIcons
                                name="arrow-right"
                                size={22}
                                color="#FFFFFF"
                            />
                        </Button>

                        <FooterText>
                            Suas informações serão salvas quando
                            a integração com sua conta estiver ativa.
                        </FooterText>
                    </Content>
                </ScrollContent>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default ProfileSetup
