import {
    Container,
    Header,
    Avatar,
    Logo,
    Points,
    Content,
    ProfileCard,
    Greeting,
    Level,
    ProgressText,
    ScoreCircle,
    Score,
    ScoreLabel,
    SectionCard,
    SectionHeader,
    SectionTitle,
    ViewAll,
    AchievementsRow,
    Achievement,
    AchievementIcon,
    AchievementTitle,
    Certificate,
    CertificateIcon,
    CertificateInfo,
    CertificateTitle,
    CertificateDescription,
    DownloadButton,
    BottomText,
    BottomMenu,
    MenuItem,
    MenuIcon,
    MenuText,
    ActiveMenu,
    ActiveIcon
} from "./style"


const Profile = () => {

    return (
        <Container>

            <Header>

                <Avatar>👤</Avatar>

                <Logo>FinGo</Logo>

                <Points>♥ 4</Points>

            </Header>


            <Content>

                <ProfileCard>

                    <Greeting>
                        Olá, Mariana!
                    </Greeting>

                    <Level>
                        Investidora em Ascensão • Nível 4
                    </Level>

                    <ProgressText>
                        XP 70% para o próximo nível
                    </ProgressText>

                    <ScoreCircle>

                        <Score>78</Score>

                        <ScoreLabel>
                            SCORE
                        </ScoreLabel>

                    </ScoreCircle>

                </ProfileCard>


                <SectionCard>

                    <SectionHeader>

                        <SectionTitle>
                            🏆 Conquistas
                        </SectionTitle>

                        <ViewAll>
                            VER TODAS
                        </ViewAll>

                    </SectionHeader>


                    <AchievementsRow>

                        <Achievement>

                            <AchievementIcon>
                                ♛
                            </AchievementIcon>

                            <AchievementTitle>
                                Primeiros{"\n"}Passos
                            </AchievementTitle>

                        </Achievement>


                        <Achievement>

                            <AchievementIcon>
                                ♜
                            </AchievementIcon>

                            <AchievementTitle>
                                Mestre do CDB
                            </AchievementTitle>

                        </Achievement>

                    </AchievementsRow>


                    <AchievementsRow>

                        <Achievement>

                            <AchievementIcon>
                                ♙
                            </AchievementIcon>

                            <AchievementTitle>
                                7 Dias de Foco
                            </AchievementTitle>

                        </Achievement>


                        <Achievement>

                            <AchievementIcon>
                                ♧
                            </AchievementIcon>

                            <AchievementTitle>
                                Bloqueado
                            </AchievementTitle>

                        </Achievement>

                    </AchievementsRow>

                </SectionCard>


                <SectionCard>

                    <SectionTitle>
                        ◉ Certificados Desbloqueados
                    </SectionTitle>


                    <Certificate>

                        <CertificateIcon>
                            ◆
                        </CertificateIcon>

                        <CertificateInfo>

                            <CertificateTitle>
                                Fundamentos da Renda Fixa
                            </CertificateTitle>

                            <CertificateDescription>
                                Concluído em 15 Outubro, 2026
                            </CertificateDescription>

                        </CertificateInfo>

                        <DownloadButton>
                            ↓
                        </DownloadButton>

                    </Certificate>


                    <Certificate>

                        <CertificateIcon>
                            ◆
                        </CertificateIcon>

                        <CertificateInfo>

                            <CertificateTitle>
                                Alocação de Portfólio Inicial
                            </CertificateTitle>

                            <CertificateDescription>
                                Concluído em 30 de Novembro, 2026
                            </CertificateDescription>

                        </CertificateInfo>

                        <DownloadButton>
                            ↓
                        </DownloadButton>

                    </Certificate>


                    <BottomText>
                        Continue aprendendo na Trilha para
                        desbloquear mais.
                    </BottomText>

                </SectionCard>

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


                <MenuItem>
                    <MenuIcon>▥</MenuIcon>
                    <MenuText>Trilha</MenuText>
                </MenuItem>


                <ActiveMenu>

                    <ActiveIcon>
                        ♙
                    </ActiveIcon>

                    <MenuText>
                        Perfil
                    </MenuText>

                </ActiveMenu>

            </BottomMenu>

        </Container>
    )
}


export default Profile