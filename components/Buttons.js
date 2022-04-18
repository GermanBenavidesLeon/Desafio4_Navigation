import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export function Buttons(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#84ffff'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: 'black',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsSucces(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.buttonSc,
                backgroundColor: 'black'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonTextSc,
                    color: '#ffeb3b',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsBack(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.button,
                backgroundColor: '#69f0ae'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: 'black',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsStart(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.buttonStart,
                backgroundColor: '#ffeb3b'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonText,
                    color: 'black',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsIngresar(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.buttonDetail,
                backgroundColor: 'black'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonTextDt,
                    color: '#F6ED0E',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

export function ButtonsCancelar(props) {
    const { onPress, text } = props

    return(
        <TouchableOpacity
            style = {{
                ...styles.buttonDetail,
                backgroundColor: '#f44336'
            }}
            onPress = { onPress }
        >
            <Text
                style = {{
                    ...styles.buttonTextDt,
                    color: 'black',
                }}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: 100,
        height: 60,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    buttonText: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'OpenSansRegular',
        lineHeight: 60,
    },
    buttonSc: {
        borderRadius: 10,
        width: 110,
        height: 40,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    buttonTextSc: {
        fontSize: 16,
        lineHeight: 40,
        textAlign: 'center',
    },
    buttonStart: {
        width: 240,
        height: 60,
        marginVertical: 20,
        borderRadius: 10,
    },
    buttonDetail: {
        borderRadius: 10,
        width: 130,
        height: 50,
        marginHorizontal: 5,
        marginVertical: 10,
    },
    buttonTextDt: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'OpenSansRegular',
        lineHeight: 50,
    },
})