import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dados } from '../services/Dados'

const Jogo = ({ navigation, route }) => {
    const [perguntas, setPerguntas] = useState(null)
    const [titulo, setTitulo] = useState('')
    const [texto, setTexto] = useState('')

    const random = () => {
        setTexto(perguntas[Math.floor(Math.random() * perguntas.length)])
    }

    useEffect(() => {
        navigation.setOptions({ 
            title: route.params.categoria,
            headerStyle: { backgroundColor: route.params.cor }
        })

        setTitulo(route.params.tipo)
        setPerguntas(dados[route.params.tipo][route.params.categoria])

        return () => { null }
    }, [])

    useEffect(() => {
        if(perguntas) {
            random()
        }
    }, [perguntas])

    return (
        <View style={styles.container}>

            <View style={[styles.boxContainer, { borderColor: route.params.cor }]}>
                <Text style={[styles.boxTitulo, { color: route.params.cor }]}>{titulo}</Text>
                <Text style={styles.boxTexto}>{texto}</Text>
            </View>

            <Button
                iconRight
                containerStyle={styles.buttonContainer}
                buttonStyle={[styles.button, { backgroundColor: route.params.cor }]}
                titleStyle={styles.buttonTitle}
                title='Próximo'
                onPress={random}
            />
        </View>
    )
}

export default Jogo;

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    boxTitulo: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 5,
    },
    boxTexto: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    boxContainer: { 
        margin: 15, 
        borderWidth: 2, 
        alignItems: 'center',
        height: Dimensions.get('window').height / 2 - 125 
    },
    buttonContainer: {
        alignSelf: 'center',
        marginTop: 5,
        borderRadius: 3,
        marginLeft: 30,
        marginRight: 30,
    },
    button: {
        justifyContent: 'space-between', 
        paddingLeft: 20,
        paddingRight: 20, 
        backgroundColor: '#AA0000'
    },
    buttonTitle: {
        fontSize: 20,
        color: 'white'
    },
})