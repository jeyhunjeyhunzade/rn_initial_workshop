import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import SomeComponent from "./src/screens/SomeComponent";
import Lists from "./src/screens/ListsPage";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Some: SomeComponent,
    Lists: Lists
  },
  {
    initialRouteName: "Lists",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
