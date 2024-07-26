import { List } from "./List/List";
import { User } from "./User/User";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
 
const Stack=createStackNavigator();

export const Navigator = () => {
  return (
       <Stack.Navigator>
        <Stack.Screen name="List" component={List}/>
         <Stack.Screen name="User" component={User}/>
       </Stack.Navigator>

   

  );
};
