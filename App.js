import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Login from "./src/screens/login"
import SignUp from "./src/screens/sign-up"
import ProfileSetup from "./src/screens/profile-setup"
import Trail from "./src/screens/trail"
import Lesson from "./src/screens/lesson"
import Investments from "./src/screens/investments"
import Profile from "./src/screens/profile"



const Stack = createNativeStackNavigator()


export default function App() {

    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >

                <Stack.Screen
                    name="Login"
                    component={Login}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />
                <Stack.Screen
                   name="ProfileSetup"
                   component={ProfileSetup}
                />
                <Stack.Screen
                  name="Trail"
                  component={Trail}
                />
                <Stack.Screen
                  name="Lesson"
                  component={Lesson}
                />
                <Stack.Screen
                   name="Investments"
                   component={Investments}
                />
                <Stack.Screen
                  name="Profile"
                  component={Profile}
                />

            </Stack.Navigator>

        </NavigationContainer>
    )
}