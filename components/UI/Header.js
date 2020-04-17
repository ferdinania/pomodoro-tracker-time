import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


const header = props => (
    <View style={styles.header}>
        <Text style={styles.headerText}>{props.title}</Text>
        // TODO: Agregar item de menu para registrar intervalos de tiempos (pendientes, finalizados)
    </View>
)

const styles = StyleSheet.create({
    header: {
        marginTop: 25,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#F01200'
    },
    headerText: {
        color: '#fff',
        // fontWeight: 'bold',
        fontSize: 25
    }
})

export default header