import {
    Container,Header, ProfileArea, Avatar, ProfileText, Name, Level,
    PointsArea, Points, Bell, Content, ModuleCard, ModuleTitle,
    ModuleProgress, TrailArea, TrailLine, Step, StepText,
    LessonButton, LessonButtonText, PlayButton,
    PlayText, LockedStep,LockText, BottomMenu,
    MenuItem, MenuIcon, MenuText, ActiveMenu, ActiveIcon
} from "./style"


const Trail = () => {

    return (
        <Container>

            <Header>

                <ProfileArea>

                    <Avatar>
                        👤
                    </Avatar>

                    <ProfileText>
                        <Name>FinGo</Name>
                        <Level>Lvl. 1</Level>
                    </ProfileText>

                </ProfileArea>


                <PointsArea>
                    <Points>2450 XP</Points>
                    <Bell>♧</Bell>
                </PointsArea>

            </Header>


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


            <BottomMenu>

                <MenuItem>
                    <MenuIcon>⌂</MenuIcon>
                    <MenuText>Aprender</MenuText>
                </MenuItem>


                <MenuItem>
                    <MenuIcon>⌁</MenuIcon>
                    <MenuText>Simular</MenuText>
                </MenuItem>


                <ActiveMenu>
                    <ActiveIcon>♜</ActiveIcon>
                    <MenuText>Trilha</MenuText>
                </ActiveMenu>


                <MenuItem>
                    <MenuIcon>♙</MenuIcon>
                    <MenuText>Perfil</MenuText>
                </MenuItem>

            </BottomMenu>

        </Container>
    )
}


export default Trail