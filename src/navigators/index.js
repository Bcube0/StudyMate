import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabBar from "../components/MyTabBar";
import SplashContainer from "../screens/Splash/SplashContainer";
import HomeContainer from "../screens/Home/HomeContainer";
import ProfileContainer from "../screens/Profile/ProfileContainer";
import { Images } from "../utils/Theme";
import MessageContainer from "../screens/Messages/MessageContainer";
import CoursesContainer from "../screens/Courses/CoursesContainer";
import { navigationRef } from "../utils/rootNavigation";
import CreateNoteContainer from "../screens/CreateNote/CreateNoteContainer";
import FolderDetailsContainer from "../screens/FolderDetails/FolderDetailsContainer";
import AddNoteContainer from "../screens/AddNote/AddNoteContainer";
import NoteDetailsContainer from "../screens/NoteDetails/NoteDetailsContainer";
import QuizContainer from "../screens/Quiz/QuizContainer";
import QuizTwoContainer from "../screens/QuizTwo/QuizTwoContainer";
import AddQuestionsContainer from "../screens/AddQuestions/AddQuestionsContainer";

const SplashStack = createStackNavigator();
const SplashScreen = () => (
  <SplashStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SplashContainer"
  >
    <SplashStack.Screen name="SplashContainer" component={SplashContainer} />
  </SplashStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={{ headerShown: false }}
    tabBar={(props) => <MyTabBar {...props} />}
  >
    <HomeStack.Screen
      options={() => ({
        title: "Home",
        imageS: Images.home_s,
        imageUn: Images.home_Un,
      })}
      name="HomeContainer"
      component={HomeTabScreen}
    />
    <HomeStack.Screen
      options={() => ({
        title: "Courses",
        imageS: Images.appoitment_s,
        imageUn: Images.appoitment_Un,
      })}
      name="CoursesContainer"
      component={AppointmentTabScreen}
    />
    {/* <HomeStack.Screen
      options={() => ({
        title: 'Create',
        imageS: Images.appoitment_s,
        imageUn: Images.appoitment_Un,
      })}
      name="CreateNoteContainer"
      component={CreateTabScreen}
    /> */}

    <HomeStack.Screen
      options={() => ({
        title: "About us",
        imageS: Images.profile_s,
        imageUn: Images.prof_un,
      })}
      name="ProfileContainer"
      component={ProfileTabScreen}
    />
  </Tabs.Navigator>
);

const TabCombineStack = createStackNavigator();
const TabCombineScreen = () => (
  <TabCombineStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="TabsScreen"
  >
    <TabCombineStack.Screen name="TabsScreen" component={TabsScreen} />
    <TabCombineStack.Screen
      name="FolderDetailsContainer"
      component={FolderDetailsContainer}
    />
    <TabCombineStack.Screen
      name="AddNoteContainer"
      component={AddNoteContainer}
    />
    <TabCombineStack.Screen
      name="NoteDetailsContainer"
      component={NoteDetailsContainer}
    />
    <TabCombineStack.Screen
      name="QuizTwoContainer"
      component={QuizTwoContainer}
    />
    <TabCombineStack.Screen name="QuizContainer" component={QuizContainer} />
    <TabCombineStack.Screen
      name="AddQuestionsContainer"
      component={AddQuestionsContainer}
    />
  </TabCombineStack.Navigator>
);

const HomeTabStack = createStackNavigator();
const HomeTabScreen = () => (
  <HomeTabStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="HomeContainer"
  >
    <HomeTabStack.Screen name="HomeContainer" component={HomeContainer} />
  </HomeTabStack.Navigator>
);

const ProfileTabStack = createStackNavigator();
const ProfileTabScreen = () => (
  <ProfileTabStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="ProfileContainer"
  >
    <ProfileTabStack.Screen
      name="ProfileContainer"
      component={ProfileContainer}
    />
  </ProfileTabStack.Navigator>
);

const AppointmentTabStack = createStackNavigator();
const AppointmentTabScreen = () => (
  <AppointmentTabStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="CoursesContainer"
  >
    <AppointmentTabStack.Screen
      name="CoursesContainer"
      component={CoursesContainer}
    />
  </AppointmentTabStack.Navigator>
);

const CreateTabStack = createStackNavigator();
const CreateTabScreen = () => (
  <CreateTabStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="CreateNoteContainer"
  >
    <CreateTabStack.Screen
      name="CreateNoteContainer"
      component={CreateNoteContainer}
    />
  </CreateTabStack.Navigator>
);

const AvailabilityTabStack = createStackNavigator();
const AvailabilityTabScreen = () => (
  <AvailabilityTabStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="MessageContainer"
  >
    <AvailabilityTabStack.Screen
      name="MessageContainer"
      component={MessageContainer}
    />
  </AvailabilityTabStack.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      swipeEdgeWidth: 0,
      gestureEnabled: false,
    }}
    drawerStyle={{}}
    drawerContent={(props) => <></>}
  >
    <Drawer.Screen
      options={{ drawerType: "front", drawerLabel: "TabsScreen" }}
      name="TabsScreen"
      component={TabCombineScreen}
    />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={SplashScreen}
  >
    <RootStack.Screen
      name="Splash"
      component={SplashScreen}
      options={{
        animationEnabled: false,
      }}
    />

    <RootStack.Screen
      name="Tab"
      component={DrawerScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <RootStack.Screen
      name="Home"
      component={HomeTabScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <RootStack.Screen
      name="Appointment"
      component={AppointmentTabScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </RootStack.Navigator>
);
function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackScreen />
    </NavigationContainer>
  );
}
export default AppNavigator;
