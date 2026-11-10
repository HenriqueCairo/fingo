
import React, { useState } from "react"
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
    Content,
    LogoArea,
    LogoText,
    LogoGo,
    Subtitle,
    Card,
    Title,
    Description,
    Row,
    FieldGroup,
    Label,
    InputWrapper,
    Input,
    PasswordToggle,
    GenderOptions,
    GenderButton,
    Radio,
    RadioSelected,
    GenderText,
    Button,
    ButtonText,
    LoginRow,
    LoginText,
    LoginLink,
    FooterText,
} from "./style"

const onlyNumbers = (value) => value.replace(/\D/g, "")

const formatCPF = (value) => {
    const digits = onlyNumbers(value).slice(0, 11)

    return digits
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1-$2")
}

const formatPhone = (value) => {
    const digits = onlyNumbers(value).slice(0, 11)

    if (digits.length <= 2) {
        return digits ? `(${digits}` : ""
    }

    if (digits.length <= 6) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    }

    if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const SignUp = () => {
    const navigation = useNavigation()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [gender, setGender] = useState("")
    const [cpf, setCpf] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleSignUp = () => {
        Keyboard.dismiss()

        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !day ||
            !month ||
            !year ||
            !gender ||
            !cpf ||
            !phone ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            Alert.alert(
                "Campos obrigatórios",
                "Preencha todos os campos para continuar."
            )
            return
        }

        const dayNumber = Number(day)
        const monthNumber = Number(month)
        const yearNumber = Number(year)

        const birthDate = new Date(
            yearNumber,
            monthNumber - 1,
            dayNumber
        )

        const today = new Date()

        if (
            year.length !== 4 ||
            birthDate.getFullYear() !== yearNumber ||
            birthDate.getMonth() !== monthNumber - 1 ||
            birthDate.getDate() !== dayNumber ||
            birthDate > today
        ) {
            Alert.alert(
                "Data inválida",
                "Informe uma data de nascimento válida."
            )
            return
        }

        if (onlyNumbers(cpf).length !== 11) {
            Alert.alert(
                "CPF inválido",
                "O CPF deve conter 11 dígitos."
            )
            return
        }

        if (onlyNumbers(phone).length < 10) {
            Alert.alert(
                "Telefone inválido",
                "Informe um telefone com DDD."
            )
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email.trim())) {
            Alert.alert(
                "E-mail inválido",
                "Informe um endereço de e-mail válido."
            )
            return
        }

        if (password.length < 8) {
            Alert.alert(
                "Senha muito curta",
                "Sua senha deve conter pelo menos 8 caracteres."
            )
            return
        }

        if (password !== confirmPassword) {
            Alert.alert(
                "Senhas diferentes",
                "A confirmação deve ser igual à senha."
            )
            return
        }

        Alert.alert(
            "Formulário validado",
            "Os dados foram validados localmente. O cadastro real será ativado após a integração com o backend.",
            [{ text: "Entendi" }]
        )
    }

    return (
        <Container>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
                <Content>
                    <LogoArea>
                        <LogoText>
                            Fin<LogoGo>Go</LogoGo>
                        </LogoText>

                        <Subtitle>
                            Educação financeira gamificada
                        </Subtitle>
                    </LogoArea>

                    <Card>
                        <Title>Crie sua conta</Title>

                        <Description>
                            Comece sua jornada rumo a uma
                            vida financeira mais consciente.
                        </Description>

                        <Row>
                            <FieldGroup style={{ flex: 1 }}>
                                <Label>Nome</Label>

                                <InputWrapper>
                                    <Input
                                        placeholder="Seu nome"
                                        placeholderTextColor="#98A89C"
                                        value={firstName}
                                        onChangeText={setFirstName}
                                        autoCapitalize="words"
                                    />
                                </InputWrapper>
                            </FieldGroup>

                            <FieldGroup style={{ flex: 1 }}>
                                <Label>Sobrenome</Label>

                                <InputWrapper>
                                    <Input
                                        placeholder="Sobrenome"
                                        placeholderTextColor="#98A89C"
                                        value={lastName}
                                        onChangeText={setLastName}
                                        autoCapitalize="words"
                                    />
                                </InputWrapper>
                            </FieldGroup>
                        </Row>

                        <FieldGroup>
                            <Label>Data de nascimento</Label>

                            <Row>
                                <InputWrapper style={{ flex: 1 }}>
                                    <Input
                                        placeholder="Dia"
                                        placeholderTextColor="#98A89C"
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        value={day}
                                        onChangeText={(value) =>
                                            setDay(onlyNumbers(value))
                                        }
                                    />
                                </InputWrapper>

                                <InputWrapper style={{ flex: 1 }}>
                                    <Input
                                        placeholder="Mês"
                                        placeholderTextColor="#98A89C"
                                        keyboardType="number-pad"
                                        maxLength={2}
                                        value={month}
                                        onChangeText={(value) =>
                                            setMonth(onlyNumbers(value))
                                        }
                                    />
                                </InputWrapper>

                                <InputWrapper style={{ flex: 1.4 }}>
                                    <Input
                                        placeholder="Ano"
                                        placeholderTextColor="#98A89C"
                                        keyboardType="number-pad"
                                        maxLength={4}
                                        value={year}
                                        onChangeText={(value) =>
                                            setYear(onlyNumbers(value))
                                        }
                                    />
                                </InputWrapper>
                            </Row>
                        </FieldGroup>

                        <FieldGroup>
                            <Label>Sexo</Label>

                            <GenderOptions>
                                {[
                                    { label: "Masculino", value: "M" },
                                    { label: "Feminino", value: "F" },
                                ].map((option) => (
                                    <GenderButton
                                        key={option.value}
                                        onPress={() =>
                                            setGender(option.value)
                                        }
                                        activeOpacity={0.8}
                                    >
                                        <Radio>
                                            {gender === option.value && (
                                                <RadioSelected />
                                            )}
                                        </Radio>

                                        <GenderText>
                                            {option.label}
                                        </GenderText>
                                    </GenderButton>
                                ))}
                            </GenderOptions>
                        </FieldGroup>

                        <FieldGroup>
                            <Label>CPF</Label>

                            <InputWrapper>
                                <Input
                                    placeholder="000.000.000-00"
                                    placeholderTextColor="#98A89C"
                                    keyboardType="number-pad"
                                    maxLength={14}
                                    value={cpf}
                                    onChangeText={(value) =>
                                        setCpf(formatCPF(value))
                                    }
                                />
                            </InputWrapper>
                        </FieldGroup>

                        <FieldGroup>
                            <Label>Telefone</Label>

                            <InputWrapper>
                                <Input
                                    placeholder="(11) 99999-9999"
                                    placeholderTextColor="#98A89C"
                                    keyboardType="phone-pad"
                                    maxLength={15}
                                    value={phone}
                                    onChangeText={(value) =>
                                        setPhone(formatPhone(value))
                                    }
                                />
                            </InputWrapper>
                        </FieldGroup>

                        <FieldGroup>
                            <Label>E-mail</Label>

                            <InputWrapper>
                                <Input
                                    placeholder="seuemail@exemplo.com"
                                    placeholderTextColor="#98A89C"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoComplete="email"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </InputWrapper>
                        </FieldGroup>

                        <FieldGroup>
                            <Label>Senha</Label>

                            <InputWrapper>
                                <Input
                                    placeholder="Mínimo de 8 caracteres"
                                    placeholderTextColor="#98A89C"
                                    secureTextEntry={!showPassword}
                                    autoCapitalize="none"
                                    value={password}
                                    onChangeText={setPassword}
                                />

                                <PasswordToggle
                                    onPress={() =>
                                        setShowPassword(!showPassword)
                                    }
                                >
                                    <MaterialCommunityIcons
                                        name={
                                            showPassword
                                                ? "eye-off-outline"
                                                : "eye-outline"
                                        }
                                        size={23}
                                        color="#64796C"
                                    />
                                </PasswordToggle>
                            </InputWrapper>
                        </FieldGroup>

                        <FieldGroup>
                            <Label>Confirmar senha</Label>

                            <InputWrapper>
                                <Input
                                    placeholder="Repita sua senha"
                                    placeholderTextColor="#98A89C"
                                    secureTextEntry={!showConfirmPassword}
                                    autoCapitalize="none"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                />

                                <PasswordToggle
                                    onPress={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    <MaterialCommunityIcons
                                        name={
                                            showConfirmPassword
                                                ? "eye-off-outline"
                                                : "eye-outline"
                                        }
                                        size={23}
                                        color="#64796C"
                                    />
                                </PasswordToggle>
                            </InputWrapper>
                        </FieldGroup>

                        <Button
                            onPress={handleSignUp}
                            activeOpacity={0.85}
                        >
                            <ButtonText>
                                Criar conta
                            </ButtonText>

                            <MaterialCommunityIcons
                                name="arrow-right"
                                size={22}
                                color="#FFFFFF"
                            />
                        </Button>

                        <LoginRow>
                            <LoginText>
                                Já tem uma conta?
                            </LoginText>

                            <LoginLink
                                onPress={() =>
                                    navigation.navigate("Login")
                                }
                            >
                                Entrar
                            </LoginLink>
                        </LoginRow>
                    </Card>

                    <FooterText>
                        Aprenda hoje. Evolua sempre.
                    </FooterText>
                </Content>
            </KeyboardAvoidingView>
        </Container>
    )
}

export default SignUp
