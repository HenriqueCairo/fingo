import {
    Container, Content, ModuleCard, ModuleTitle,
    ModuleProgress, TrailArea, TrailLine, Step, StepText,
    LessonButton, LessonButtonText, PlayButton,
    PlayText, LockedStep,LockText,
} from "./style"
import { useNavigation } from "@react-navigation/native"
import BottomMenu from "../../components/bottom-menu"
import Header from "../../components/header"


const Trail = () => {
     const navigation = useNavigation()

    return (
        <Container>

          <Header />


            <Content>

                <ModuleCard>

                    <ModuleTitle>
                        Básicos: Poupança e Dívida
                    </ModuleTitle>

                    <ModuleProgress>
                        50% - Concluído
                    </ModuleProgress>

                </ModuleCard>


                <TrailArea>

                    <TrailLine />


                    <Step>
                        <StepText>✓</StepText>
                    </Step>


                    <Step>
                        <StepText>✓</StepText>
                    </Step>


                    <Step>
                        <StepText>✓</StepText>
                    </Step>


                    <LessonButton>
                        <LessonButtonText>
                            Intro a Investimentos
                        </LessonButtonText>
                    </LessonButton>


                    <PlayButton>
                        <PlayText>▶</PlayText>
                    </PlayButton>


                    <LockedStep>
                        <LockText>♙</LockText>
                    </LockedStep>


                    <ModuleCard onPress={() => navigation.navigate("Lesson")}>

                        <ModuleTitle>
                            Entendendo CDB/CDI
                        </ModuleTitle>

                        <ModuleProgress>
                            Bloqueado
                        </ModuleProgress>

                    </ModuleCard>


                    <LockedStep>
                        <LockText>♙</LockText>
                    </LockedStep>


                    <LockedStep>
                        <LockText>♙</LockText>
                    </LockedStep>

                </TrailArea>

            </Content>


          <BottomMenu active="Trail" />


        </Container>
    )
}


export default Trail