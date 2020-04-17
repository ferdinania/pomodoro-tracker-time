import React, { useState, useEffect } from 'react'

import { View, StyleSheet, Text, Button, ImageBackground } from 'react-native'

let intervalTime;
let countDownDate;

const pomodoro = props => {
    const [time, setTime] = useState('30:00')
    const [timeIsRunning, setTimeIsRunning] = useState(false)

    const playPressedHandler = () => {
        countDownDate = new Date()
        countDownDate.setMinutes(countDownDate.getMinutes() + parseInt(time.substring(0, 2)))
        countDownDate.setSeconds(countDownDate.getSeconds() + parseInt(time.substring(3)))

        setTimeIsRunning(value => !value)
    }

    const resetPressedHandler = () => {
        setTime('30:00')
    }

    useEffect(() => {
        if (countDownDate && timeIsRunning)
            intervalTime = setInterval(updateCountdown, 1000)
            // FIXME: no se esta reflejando enseguida el timer actualizado
        else {
            clearInterval(intervalTime)
        }
    }, [timeIsRunning])


    const updateCountdown = () => {
        let now = new Date().getTime()

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for minutes and seconds
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let timeString = (minutes<10 ? `0${minutes}` : minutes) + ':' + (seconds<10 ? `0${seconds}` : seconds)

        // If the count down is finished, make sure time was run out 
        if (distance < 1) {
            timeString = '00:00'
            setTimeIsRunning(false)
        }

        setTime(timeString)
    }

    return (
        <View style={styles.containerApp}>
            <ImageBackground source={require('../assets/bg.png')} style={styles.image}>
                <Text style={{ fontSize: 70, color: '#F09694' }}>{time}</Text>
                <View style={styles.buttons}>
                    <View style={styles.btn}>
                        <Button color='#F0685E' disabled={time==='00:00' && !timeIsRunning} title={timeIsRunning ? 'PAUSE' : 'PLAY'} onPress={playPressedHandler} />
                    </View>
                    <View style={styles.btn}>
                        <Button color='#F0A481' title='RESET' disabled={timeIsRunning} onPress={resetPressedHandler} />
                    </View>
                </View>
                // TODO: Personalizar el intervalo de tiempos,
                // a través de una pantalla de configuracion
            </ImageBackground>
      </View>
    )
}


const styles = StyleSheet.create({
    containerApp: {
        flex: 1,
        // backgroundColor: '#EFDAD7',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    buttons: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around'
    },
    btn: {
        width: '20%'
    },
    image: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: "center"
    },
})


export default pomodoro