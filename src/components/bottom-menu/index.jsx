
import { useNavigation } from "@react-navigation/native"
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons"

import {
    BottomMenuContainer,
    MenuItem,
    MenuText,
    ActiveMenu,
    IconArea
} from "./style"

const BottomMenu = ({ active = "Trail" }) => {

    const navigation = useNavigation()

    const menuItems = [
        {
            label: "Aprender",
            icon: "school-outline",
            library: "material",
            route: "Lesson"
        },
        {
            label: "Simular",
            icon: "trending-up",
            library: "feather",
            route: "Investments"
        },
        {
            label: "Trilha",
            icon: "chart-bar",
            library: "material",
            route: "Trail"
        },
        {
            label: "Perfil",
            icon: "user",
            library: "feather",
            route: "Profile"
        }
    ]

    return (
        <BottomMenuContainer>

            {menuItems.map((item) => {

                const isActive = active === item.route

                const Button = isActive
                    ? ActiveMenu
                    : MenuItem

                const iconColor = isActive
                    ? "#103E24"
                    : "#8A959D"

                return (
                    <Button
                        key={item.label}
                        onPress={() => {
                            if (!isActive) {
                                navigation.navigate(item.route)
                            }
                        }}
                        activeOpacity={0.8}
                    >

                        <IconArea>

                            {item.library === "material" ? (
                                <MaterialCommunityIcons
                                    name={item.icon}
                                    size={29}
                                    color={iconColor}
                                />
                            ) : (
                                <Feather
                                    name={item.icon}
                                    size={29}
                                    color={iconColor}
                                />
                            )}

                        </IconArea>

                        <MenuText $active={isActive}>
                            {item.label}
                        </MenuText>

                    </Button>
                )
            })}

        </BottomMenuContainer>
    )
}

export default BottomMenu
