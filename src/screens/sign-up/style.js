import styled from "styled-components/native"


const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: "center",
        paddingBottom: 30
    }
})`
    flex: 1;

    background-color: F3FCEF;

    padding: 10px 25px;
`


const PageTitle = styled.Text`
    width: 100%;

    color: #B5B5B5;

    font-size: 22px;

    margin-bottom: 15px;
`


const Card = styled.View`
    width: 100%;

    background-color: #007D3D;

    border-radius: 18px;

    padding: 35px 12px 30px 12px;

    margin-top: 150px;
`


const Title = styled.Text`
    color: #FFFFFF;

    font-size: 18px;

    font-weight: bold;

    text-align: center;
`


const Description = styled.Text`
    color: #BFE0CA;

    font-size: 9px;

    text-align: center;

    margin-top: 4px;
    margin-bottom: 28px;
`


const Row = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: space-between;

    gap: 8px;

    margin-bottom: 8px;
`


const Input = styled.TextInput`
    flex: 1;

    height: 25px;

    background-color: #F4FFF1;

    padding: 0 10px;

    color: #222222;

    font-size: 9px;

    margin-bottom: 8px;
`


const SmallInput = styled.TextInput`
    flex: 1;

    height: 25px;

    background-color: #F4FFF1;

    padding: 0 8px;

    color: #222222;

    font-size: 9px;
`


const Label = styled.Text`
    color: #FFFFFF;

    font-size: 10px;

    font-weight: bold;

    margin-bottom: 5px;
`


const GenderContainer = styled.View`
    flex: 1;
`


const GenderOption = styled.View`
    flex-direction: row;

    align-items: center;

    height: 25px;
`


const Radio = styled.View`
    width: 8px;
    height: 8px;

    border-radius: 4px;

    border-width: 1px;

    border-color: #FFFFFF;

    margin-right: 4px;
`


const GenderText = styled.Text`
    color: #D6EBDD;

    font-size: 7px;

    margin-right: 10px;
`


const Button = styled.TouchableOpacity`
    width: 90%;

    height: 25px;

    background-color: #FFFFFF;

    align-self: center;

    align-items: center;
    justify-content: center;

    margin-top: 2px;
`


const ButtonText = styled.Text`
    color: #142316;

    font-size: 11px;

    font-weight: bold;
`


const LoginText = styled.Text`
    color: #BFE0CA;

    font-size: 10px;

    text-align: center;

    margin-top: 10px;
`


const LoginLink = styled.Text`
    color: #FFFFFF;;

    font-size: 11px;

    font-weight: bold;

    text-align: center;

    margin-top: 7px;
`


export {Container, PageTitle, Card, Title, Description, Row, Input, SmallInput, Label, 
    GenderContainer,GenderOption, Radio, GenderText, Button, ButtonText, 
    LoginText,LoginLink
}