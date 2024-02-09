import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Login from './Screens/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobList from './Screens/JobList';
import AppliedJobList from './Screens/AppliedJobList';
import Profile from './Screens/Profile';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import JobDetails from './Screens/JobDetails';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <GestureHandlerRootView style={{flex: 1}}>
       
        <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown : false}} initialRouteName="login">
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={HomeTabs}/>
            <Stack.Screen name="jobdetails" component={JobDetails}/>
          </Stack.Navigator>
        </NavigationContainer>
     
    </GestureHandlerRootView>
  );
}

function HomeTabs()
{


  return (
    <Tab.Navigator >
      <Tab.Screen  name="JOB LIST"  options={{tabBarIcon : ({focused,color,size})=>{
        if(focused){  return  <MaterialCommunityIcons name="home-city" color={color} size={size} />}
        return  <MaterialCommunityIcons name="home-outline" color={color} size={size} />
          
      }}} component={JobList} />
      <Tab.Screen name="APPLIED JOB" component={AppliedJobList} options={ {tabBarIcon : ({focused,color,size})=>{
        if(focused){  return <MaterialCommunityIcons name="playlist-check" color={color} size={size}/>}
        return <MaterialCommunityIcons name="navigation-variant-outline" color={color} size={size}/>

      }}}/>
      <Tab.Screen name="PROFILE" component={Profile} options={{tabBarIcon : ({focused,color,size})=>{
        if(focused){ return <MaterialCommunityIcons name="face-man" color={color} size={size}/>}
        return <MaterialCommunityIcons name="face-man-outline" color={color} size={size}/>

      }}}/>
    </Tab.Navigator>
  );


}
