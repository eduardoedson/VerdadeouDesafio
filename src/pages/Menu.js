import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Menu = ({ navigation }) => {
    const [verdade, setVerdade] = useState(true)
    const [desafio, setDesafio] = useState(false)

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/icon.png')}
                style={styles.imagem}
            />

            <Button
                icon={ <Icon name='child' size={50} color='black' /> }
                iconRight
                containerStyle={styles.buttonContainer}
                buttonStyle={[styles.button, { backgroundColor: '#3BA445' }]}
                titleStyle={styles.buttonTitle}
                title='Infatil'
                onPress={() =>  navigation.navigate('Jogo', { categoria : 'Infantil', cor: '#3BA445', tipo: verdade ? 'Verdade' : 'Desafio' })}
            />

            <Button
                icon={ <Icon name='user' size={50} color='black' /> }
                iconRight
                containerStyle={styles.buttonContainer}
                buttonStyle={[styles.button, { backgroundColor: '#FFDA00' }]}
                titleStyle={styles.buttonTitle}
                title='Clássico'
                onPress={() =>  navigation.navigate('Jogo', { categoria : 'Clássico', cor: '#FFDA00', tipo: verdade ? 'Verdade' : 'Desafio' })}
            />

            <Button
                icon={ <Icon name='fire' size={50} color='black' /> }
                iconRight
                containerStyle={styles.buttonContainer}
                buttonStyle={[styles.button, { backgroundColor: '#ED1B24' }]}
                titleStyle={styles.buttonTitle}
                title='Adulto'
                onPress={() =>  navigation.navigate('Jogo', { categoria : 'Adulto', cor: '#ED1B24', tipo: verdade ? 'Verdade' : 'Desafio' })}
            />

            <View style={styles.containerCheckbox}>
                <CheckBox
                    center
                    title='Verdades'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={verdade}
                    onPress={() => {
                        setVerdade(true)
                        setDesafio(false)
                    }}
                    containerStyle={styles.checkbox}
                />

                <CheckBox
                    center
                    title='Desafios'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={desafio}
                    onPress={() => {
                        setVerdade(false)
                        setDesafio(true)
                    }}
                    containerStyle={styles.checkbox}
                />

            </View>

        </View>
    )
}

export default Menu;

const styles = StyleSheet.create({
	container: { 
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#DDD', 
    },
	buttonContainer: {
        width: '55%',
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 10
    },
    button: {
        justifyContent: 'space-between', 
        paddingLeft: 20,
        paddingRight: 20, 
        backgroundColor: '#AA0000'
    },
    buttonTitle: {
        fontSize: 30,
        color: 'black'
    },
    imagem: { 
        width: 180, 
        height: 180, 
        margin: 50 
    },
    containerCheckbox: { 
        flexDirection: 'row', 
    },
    checkbox: {
        backgroundColor: '#DDD', 
        borderColor: '#DDD'
    }
});