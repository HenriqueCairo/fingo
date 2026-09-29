import { useState } from "react"
import { Alert } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

import {
    Container,
    Header,
    HeaderButton,
    HeaderTitle,
    Content,
    LessonTitle,
    LessonSubtitle,
    VideoArea,
    VideoPlaceholder,
    VideoText,
    Card,
    SectionTitle,
    Paragraph,
    InfoCard,
    InfoTitle,
    InfoText,
    ExampleBox,
    ExampleTitle,
    ExampleText,
    NextText,
    PrimaryButton,
    PrimaryButtonText,
    SecondaryButton,
    SecondaryButtonText,
    QuestionCard,
    QuestionNumber,
    QuestionTitle,
    AnswerOption,
    AnswerText,
    FeedbackBox,
    FeedbackTitle,
    FeedbackText,
    ResultCard,
    ResultScore,
    ResultLabel,
    HelpButton,
    HelpText
} from "./style"


// ========================================
// EXEMPLO DE LIÇÃO
// Futuramente recebido da API.
// ========================================

const exampleLesson = {
    id: 1,
    title: "Entendendo CDB e CDI",
    category: "Renda Fixa Básica",
    duration: "5 minutos",

    videoUrl: null,

    introduction: [
        "Você já ouviu falar sobre investimentos de renda fixa? Nesta lição, vamos entender dois conceitos importantes: CDB e CDI.",

        "Apesar dos nomes parecidos, eles possuem funções diferentes. O CDB é um investimento; a taxa DI é uma referência utilizada para calcular a remuneração de diversos investimentos."
    ],

    sections: [
        {
            id: 1,
            title: "Como funciona o CDB?",
            content:
                "Quando você investe em um CDB, está emprestando dinheiro para uma instituição bancária. Em troca, ela se compromete a devolver o valor investido acrescido da remuneração prevista nas condições do título."
        },
        {
            id: 2,
            title: "A conexão com o CDI",
            content:
                "CDI significa Certificado de Depósito Interbancário. A taxa DI, associada a operações interbancárias elegíveis, é utilizada como referência para a rentabilidade de muitos CDBs."
        },
        {
            id: 3,
            title: "O que significa 100% do CDI?",
            content:
                "Significa que a remuneração do investimento acompanha integralmente a taxa DI de referência, conforme as condições contratadas. Isso não significa ganhar 100% de lucro."
        }
    ],

    example: {
        title: "Exemplo prático",
        content:
            "Imagine dois CDBs: um oferece 90% do CDI e outro oferece 110% do CDI. Considerando a mesma taxa de referência, o segundo apresenta uma remuneração bruta maior. Entretanto, prazo, liquidez, tributação e risco também precisam ser avaliados."
    }
}


// ========================================
// QUIZ DEMONSTRATIVO
// Futuramente gerado pelo backend com IA.
// ========================================

const exampleQuiz = [
    {
        id: 1,

        question: "O que significa CDB?",

        options: [
            "Certificado de Depósito Bancário",
            "Crédito Direto Bancário",
            "Conta de Depósito Brasileira",
            "Certificado de Distribuição Bancária"
        ],

        correctAnswer: 0,

        explanation:
            "CDB significa Certificado de Depósito Bancário. É um título de renda fixa emitido por bancos para captar recursos."
    },

    {
        id: 2,

        question: "Qual é a função da taxa DI?",

        options: [
            "Determinar o preço das ações",
            "Servir como referência para investimentos",
            "Definir a cotação do dólar",
            "Garantir que todo investimento seja seguro"
        ],

        correctAnswer: 1,

        explanation:
            "A taxa DI é utilizada como referência para a remuneração de diversos investimentos de renda fixa."
    },

    {
        id: 3,

        question: "O que significa um CDB que rende 100% do CDI?",

        options: [
            "Que o dinheiro dobra de valor",
            "Que rende 100% ao ano",
            "Que acompanha a taxa DI de referência",
            "Que não possui riscos"
        ],

        correctAnswer: 2,

        explanation:
            "Um CDB que paga 100% do CDI acompanha integralmente a taxa DI de referência, antes de impostos e eventuais custos."
    }
]


const Lesos = ({ route }) => {

    const navigation = useNavigation()

    // A lição poderá vir da tela anterior.
    const lesson = route?.params?.lesson ?? exampleLesson

    // lesson | quiz | result
    const [step, setStep] = useState("lesson")

    const [questions, setQuestions] = useState(exampleQuiz)

    const [answers, setAnswers] = useState({})

    const [score, setScore] = useState(0)


    // ========================================
    // INICIAR QUIZ
    // ========================================

    const startQuiz = () => {

        setAnswers({})
        setScore(0)

        // Futuramente:
        // solicitar perguntas à API usando lesson.id.

        setQuestions(exampleQuiz)
        setStep("quiz")
    }


    // ========================================
    // SELECIONAR ALTERNATIVA
    // ========================================

    const selectAnswer = (questionId, optionIndex) => {

        setAnswers(previous => ({
            ...previous,
            [questionId]: optionIndex
        }))
    }


    // ========================================
    // CORRIGIR RESPOSTAS
    // ========================================

    const finishQuiz = () => {

        const allAnswered = questions.every(
            question => answers[question.id] !== undefined
        )

        if (!allAnswered) {

            Alert.alert(
                "Quiz incompleto",
                "Responda todas as perguntas antes de continuar."
            )

            return
        }

        let correctCount = 0

        questions.forEach(question => {

            if (
                answers[question.id] ===
                question.correctAnswer
            ) {
                correctCount++
            }
        })

        // Futuramente a correção será feita pelo backend.

        setScore(correctCount)
        setStep("result")
    }


    // ========================================
    // VOLTAR À AULA
    // ========================================

    const backToLesson = () => {

        setStep("lesson")
        setAnswers({})
        setScore(0)
    }


    // ========================================
    // BOTÃO SUPERIOR
    // ========================================

    const handleBack = () => {

        if (step !== "lesson") {
            backToLesson()
            return
        }

        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }


    return (

        <Container>

            {/* CABEÇALHO FIXO */}

            <Header>

                <HeaderButton onPress={handleBack}>

                    <Ionicons
                        name="close"
                        size={20}
                        color="#555555"
                    />

                </HeaderButton>


                <HeaderTitle>
                    {lesson.category}
                </HeaderTitle>


                <HeaderButton onPress={backToLesson}>

                    <Ionicons
                        name="refresh"
                        size={20}
                        color="#00863F"
                    />

                </HeaderButton>

            </Header>


            <Content>

                {/* TÍTULO PERMANECE EM TODOS OS MODOS */}

                <LessonTitle>
                    {lesson.title}
                </LessonTitle>


                <LessonSubtitle>
                    {step === "lesson"
                        ? `${lesson.duration ?? "5 minutos"} de leitura`
                        : step === "quiz"
                        ? "Quiz rápido • Fixação do conteúdo"
                        : "Resultado do aprendizado"}
                </LessonSubtitle>


                {/* ====================================
                    MODO AULA
                ==================================== */}

                {step === "lesson" && (

                    <>

                        <VideoArea>

                            <VideoPlaceholder>

                                <Ionicons
                                    name="play-circle"
                                    size={42}
                                    color="#FFFFFF"
                                />

                                <VideoText>
                                    VÍDEO DA LIÇÃO
                                </VideoText>

                            </VideoPlaceholder>

                        </VideoArea>


                        <Card>

                            {lesson.introduction?.map(
                                (paragraph, index) => (

                                    <Paragraph key={index}>
                                        {paragraph}
                                    </Paragraph>

                                )
                            )}

                        </Card>


                        {lesson.sections?.map(section => (

                            <InfoCard key={section.id}>

                                <InfoTitle>
                                    {section.title}
                                </InfoTitle>

                                <InfoText>
                                    {section.content}
                                </InfoText>

                            </InfoCard>

                        ))}


                        {lesson.example && (

                            <ExampleBox>

                                <ExampleTitle>
                                    {lesson.example.title}
                                </ExampleTitle>

                                <ExampleText>
                                    {lesson.example.content}
                                </ExampleText>

                            </ExampleBox>

                        )}


                        <NextText>
                            PRONTO PARA TESTAR SEU CONHECIMENTO?
                        </NextText>


                        <PrimaryButton onPress={startQuiz}>

                            <PrimaryButtonText>
                                Iniciar Quiz rápido
                            </PrimaryButtonText>

                            <Ionicons
                                name="arrow-forward"
                                size={18}
                                color="#FFFFFF"
                            />

                        </PrimaryButton>

                    </>

                )}


                {/* ====================================
                    MODO QUIZ
                ==================================== */}

                {step === "quiz" && (

                    <>

                        <Card>

                            <SectionTitle>
                                Teste seu conhecimento
                            </SectionTitle>

                            <Paragraph>
                                Responda às perguntas abaixo.
                                Ao finalizar, você receberá uma
                                correção comentada.
                            </Paragraph>

                        </Card>


                        {questions.map((question, index) => (

                            <QuestionCard key={question.id}>

                                <QuestionNumber>
                                    PERGUNTA {index + 1} DE {questions.length}
                                </QuestionNumber>


                                <QuestionTitle>
                                    {question.question}
                                </QuestionTitle>


                                {question.options.map(
                                    (option, optionIndex) => {

                                        const selected =
                                            answers[question.id] ===
                                            optionIndex

                                        return (

                                            <AnswerOption
                                                key={optionIndex}
                                                selected={selected}
                                                onPress={() =>
                                                    selectAnswer(
                                                        question.id,
                                                        optionIndex
                                                    )
                                                }
                                            >

                                                <Ionicons
                                                    name={
                                                        selected
                                                            ? "radio-button-on"
                                                            : "radio-button-off"
                                                    }
                                                    size={20}
                                                    color={
                                                        selected
                                                            ? "#08A63E"
                                                            : "#999999"
                                                    }
                                                />

                                                <AnswerText>
                                                    {option}
                                                </AnswerText>

                                            </AnswerOption>

                                        )
                                    }
                                )}

                            </QuestionCard>

                        ))}


                        <PrimaryButton onPress={finishQuiz}>

                            <PrimaryButtonText>
                                Corrigir respostas
                            </PrimaryButtonText>

                            <Ionicons
                                name="checkmark-circle-outline"
                                size={19}
                                color="#FFFFFF"
                            />

                        </PrimaryButton>


                        <SecondaryButton onPress={backToLesson}>

                            <SecondaryButtonText>
                                Voltar à aula
                            </SecondaryButtonText>

                        </SecondaryButton>

                    </>

                )}


                {/* ====================================
                    MODO RESULTADO
                ==================================== */}

                {step === "result" && (

                    <>

                        <ResultCard>

                            <Ionicons
                                name="school-outline"
                                size={38}
                                color="#08A63E"
                            />

                            <ResultScore>
                                {score}/{questions.length}
                            </ResultScore>

                            <ResultLabel>
                                Respostas corretas
                            </ResultLabel>

                        </ResultCard>


                        {questions.map((question, index) => {

                            const selectedAnswer =
                                answers[question.id]

                            const isCorrect =
                                selectedAnswer ===
                                question.correctAnswer

                            return (

                                <QuestionCard key={question.id}>

                                    <QuestionNumber>
                                        PERGUNTA {index + 1}
                                    </QuestionNumber>


                                    <QuestionTitle>
                                        {question.question}
                                    </QuestionTitle>


                                    {question.options.map(
                                        (option, optionIndex) => {

                                            const correct =
                                                optionIndex ===
                                                question.correctAnswer

                                            const selected =
                                                optionIndex ===
                                                selectedAnswer

                                            return (

                                                <AnswerOption
                                                    key={optionIndex}
                                                    selected={selected}
                                                    correct={correct}
                                                    incorrect={
                                                        selected && !correct
                                                    }
                                                    disabled
                                                >

                                                    <Ionicons
                                                        name={
                                                            correct
                                                                ? "checkmark-circle"
                                                                : selected
                                                                ? "close-circle"
                                                                : "ellipse-outline"
                                                        }
                                                        size={20}
                                                        color={
                                                            correct
                                                                ? "#08A63E"
                                                                : selected
                                                                ? "#D64545"
                                                                : "#AAAAAA"
                                                        }
                                                    />

                                                    <AnswerText>
                                                        {option}
                                                    </AnswerText>

                                                </AnswerOption>

                                            )
                                        }
                                    )}


                                    <FeedbackBox correct={isCorrect}>

                                        <FeedbackTitle correct={isCorrect}>
                                            {isCorrect
                                                ? "Resposta correta!"
                                                : "Resposta incorreta"}
                                        </FeedbackTitle>

                                        <FeedbackText>
                                            {question.explanation}
                                        </FeedbackText>

                                    </FeedbackBox>

                                </QuestionCard>

                            )
                        })}


                        <PrimaryButton onPress={startQuiz}>

                            <PrimaryButtonText>
                                Refazer Quiz
                            </PrimaryButtonText>

                            <Ionicons
                                name="refresh"
                                size={18}
                                color="#FFFFFF"
                            />

                        </PrimaryButton>


                        <SecondaryButton onPress={backToLesson}>

                            <SecondaryButtonText>
                                Voltar à aula
                            </SecondaryButtonText>

                        </SecondaryButton>

                    </>

                )}

            </Content>


            {/* AJUDA — VISUAL DEMONSTRATIVO */}

            <HelpButton
                onPress={() =>
                    Alert.alert(
                        "Ajuda",
                        "O assistente de aprendizado será integrado futuramente."
                    )
                }
            >

                <HelpText>?</HelpText>

            </HelpButton>

        </Container>
    )
}


export default Lesson