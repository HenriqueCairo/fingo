
import styled from "styled-components/native"

const BottomMenuContainer = styled.View`
    width: 100%;
    height: 80px;

    background-color: #F4FFF1;

    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding: 5px 12px;
`

const MenuItem = styled.TouchableOpacity`
    flex: 1;
    height: 72px;

    align-items: center;
    justify-content: center;

    margin: 0 4px;
`

const ActiveMenu = styled.TouchableOpacity`
    flex: 1;
    height: 72px;

    background-color: #18C85B;

    border-radius: 40px;

    align-items: center;
    justify-content: center;

    margin: 0 4px;
`

const IconArea = styled.View`
    align-items: center;
    justify-content: center;

    margin-bottom: 4px;
`

const MenuText = styled.Text`
    color: ${({ $active }) =>
        $active ? "#103E24" : "#8A959D"};

    font-size: 13px;

    font-weight: ${({ $active }) =>
        $active ? "bold" : "normal"};
`

export {
    BottomMenuContainer,
    MenuItem,
    MenuText,
    ActiveMenu,
    IconArea
}
