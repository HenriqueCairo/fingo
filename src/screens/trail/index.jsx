
import React from "react"
import { Alert, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Header from "../../components/header"
import BottomMenu from "../../components/bottom-menu"

import {
    Container,
    Content,
    PageTitle,
    PageSubtitle,
    ModuleCard,
    ModuleLabel,
    ModuleTitle,
    ModuleDescription,
    TrailArea,
    TrailPath,
    TrailItem,
    StepButton,
    StepCaption,
    StepTitle,
    StepSubtitle,
    FinishCard,
    FinishIcon,
    FinishTitle,
    FinishDescription,
} from "./style"

// Catálogo temporário para desenvolver a interface.
// Futuramente virá do backend Spring Boot.
const lessons = [
    {
        id: "cdb-cdi",
        title: "Entendendo CDB e CDI",
        subtitle: "Renda fixa básica",
        icon: "book-open-page-variant-outline",
        available: true,
    },
    {
        id: "poupanca",
        title: "Poupança",
        subtitle: "Conceitos fundamentais",
        icon: "piggy-bank-outline",
        available: false,
    },
    {
        id: "juros",
        title: "Juros compostos",
        subtitle: "Como o dinheiro cresce",
        icon: "chart-line",
        available: false,
    },
    {
        id: "planejamento",
        title: "Planejamento financeiro",
        subtitle: "Organize suas finanças",
        icon: "wallet-outline",
        available: false,
    },
    {
        id: "investimentos",
        title: "Primeiros investimentos",
        subtitle: "Conheça suas opções",
        icon: "finance",
        available: false,
    },
]

const Trail = () => {
    const navigation = useNavigation()

    const openLesson = (lesson) => {
        if (!lesson.available) {
            Alert.alert(
                "Lição indisponível",
                "Esta lição ainda não está disponível. O desbloqueio será integrado ao backend."
            )
            return
        }

        // O conteúdo demonstrativo atual da tela Lesson
        // é sobre CDB e CDI.
        navigation.navigate("Lesson")
    }

    return (
        <Container>
            <Header />

            <Content>
                <PageTitle>Minha trilha</PageTitle>

                <PageSubtitle>
                    Cada lição é um passo na sua jornada financeira.
                </PageSubtitle>

                <ModuleCard>
                    <ModuleLabel>MÓDULO 1</ModuleLabel>

                    <ModuleTitle>
                        Fundamentos financeiros
                    </ModuleTitle>

                    <ModuleDescription>
                        Aprenda os conceitos essenciais para
                        cuidar melhor do seu dinheiro.
                    </ModuleDescription>
                </ModuleCard>

                <TrailArea>
                    {lessons.map((lesson, index) => {
                        const isAvailable = lesson.available

                        // Caminho alternado: centro, direita, centro,
                        // esquerda e centro.
                        const positions = [
                            "center",
                            "right",
                            "center",
                            "left",
                            "center",
                        ]

                        return (
                            <TrailItem
                                key={lesson.id}
                                position={positions[index % positions.length]}
                            >
                                {index > 0 && (
                                    <TrailPath />
                                )}

                                <StepButton
                                    available={isAvailable}
                                    activeOpacity={0.8}
                                    onPress={() => openLesson(lesson)}
                                    accessibilityLabel={lesson.title}
                                >
                                    <MaterialCommunityIcons
                                        name={
                                            isAvailable
                                                ? lesson.icon
                                                : "lock-outline"
                                        }
                                        size={32}
                                        color={
                                            isAvailable
                                                ? "#FFFFFF"
                                                : "#91A29A"
                                        }
                                    />
                                </StepButton>

                                <StepCaption>
                                    <StepTitle>
                                        {lesson.title}
                                    </StepTitle>

                                    <StepSubtitle>
                                        {isAvailable
                                            ? "Toque para aprender"
                                            : "Indisponível"}
                                    </StepSubtitle>
                                </StepCaption>
                            </TrailItem>
                        )
                    })}
                </TrailArea>

                <FinishCard>
                    <FinishIcon>
                        <MaterialCommunityIcons
                            name="trophy-outline"
                            size={30}
                            color="#087F42"
                        />
                    </FinishIcon>

                    <View style={{ flex: 1 }}>
                        <FinishTitle>
                            Conclusão do módulo
                        </FinishTitle>

                        <FinishDescription>
                            Complete as lições quando estiverem disponíveis.
                        </FinishDescription>
                    </View>
                </FinishCard>
            </Content>

            <BottomMenu active="Trail" />
        </Container>
    )
}

export default Trail

