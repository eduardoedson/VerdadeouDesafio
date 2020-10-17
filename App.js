import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/pages/Menu.js';
import Jogo from './src/pages/Jogo.js';

const Stack = createStackNavigator();

const App = () => {
	return(
        <NavigationContainer>
			<Stack.Navigator initialRouteName='Menu'>
				<Stack.Screen 
					name='Menu'
					component={Menu} 
					options={{
						title: 'Verdade ou Desafio',
						headerStyle: { backgroundColor: '#006CB7' },
						headerTintColor: 'white',
						headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' },
						headerBackTitle: ' ',
					}}
				/>
				<Stack.Screen 
					name='Jogo'
					component={Jogo} 
					options={{
						title: 'Jogo',
						headerStyle: { backgroundColor: '#006CB7' },
						headerTintColor: 'white',
						headerTitleStyle: { fontWeight: 'bold', alignSelf: 'center' },
						headerTitleContainerStyle: { left: 0 },
						headerBackTitle: ' ',
					}}
				/>
			</Stack.Navigator>
        </NavigationContainer>
	)
}

export default App;
