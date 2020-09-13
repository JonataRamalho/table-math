import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useFonts, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { AppLoading } from 'expo';

import styles from './styles';

export default function Table() {

    const [calculationNumber, setCalculationNumber] = useState('');
    const [calculationOperation, setCalculationOperation] = useState('');

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let [fontsLoaded] = useFonts({
        Quicksand_500Medium,
        Quicksand_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    function checkCalculationNumberAndCalculate(operation) {
    
        try {
            
            checkCalculationNumber();
            
            calculate(operation);
            
        } catch(err) {
            Alert.alert(
                "Ops!",
                `${err}`,
                [
                    {
                        text: "Ok",
                    },
                ],

                { cancelable: false }
            );
        }
    }

    function checkCalculationNumber() {
        if(calculationNumber > 100) {
            throw "Escolha um número maior que 0 e menor que 100.";
        } else if(calculationNumber === "") {
            throw "Está vazio, digite um número."
        } else if(checkNumber()) {
            throw "Não podemos calcular com caractere especial."
        } 

    }

    function checkNumber() {
        const expression = /[a-zA-Z\W]/;

        return expression.test(calculationNumber);
    }

    function calculate(operation) {
        add(operation);

        changeNumbersAccording(operation);

    }

    function add(operation) {
        setCalculationOperation(operation);
    }

    function changeNumbersAccording(operation) {
        if(operation === "-") {
            numbers.forEach((item, index) => {
                numbers[index] = parseInt(calculationNumber) + index;
            });
        } else if (operation === "÷") {
            numbers.forEach((item, index) => {
                numbers[index] = parseInt(calculationNumber) * item;
            });
        } 
    }

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.inputComponent}>
                    <Text style={styles.description}>Digite um número</Text>
                    <TextInput style={styles.input} 
                        maxLength={3}
                        keyboardType='numeric'
                        placeholder='0'
                        placeholderTextColor='#7B7B7B'
                        onChangeText={number => setCalculationNumber(number)}
                        value={calculationNumber}
                    />
                </View>

                <View style={styles.operationsContent}>
                    <Text style={styles.description}>Escolha uma operação</Text>
                    <View style={styles.buttonBox}>
                        <TouchableOpacity style={styles.button}
                        onPress={() => checkCalculationNumberAndCalculate('+')}
                        >
                            <Text style={styles.operationText}>+</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={styles.button}
                        onPress={() => checkCalculationNumberAndCalculate('-')}
                        >
                            <Text style={styles.operationText}>-</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                        onPress={() => checkCalculationNumberAndCalculate('÷')}
                        >
                            <Text style={styles.operationText}>÷</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                        onPress={() => checkCalculationNumberAndCalculate('x')}
                        >
                            <Text style={styles.operationText}>x</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.resultContent}>
                    <View style={styles.resultTable}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Tabuada</Text>
                        </View>
                        <View style={styles.resultBox}>
                            <View>
                                <Text style={styles.result}>1 { calculationOperation } 0 = 0</Text>
                                <Text style={styles.result}>1 { calculationOperation } 1 = 1</Text>
                                <Text style={styles.result}>1 { calculationOperation } 2 = 2</Text>
                                <Text style={styles.result}>1 { calculationOperation } 3 = 3</Text>
                                <Text style={styles.result}>1 { calculationOperation } 4 = 4</Text>
                            </View>

                            <View>
                                <Text style={styles.result}>1 { calculationOperation } 5 = 5</Text>
                                <Text style={styles.result}>1 { calculationOperation } 6 = 6</Text>
                                <Text style={styles.result}>1 { calculationOperation } 7 = 7</Text>
                                <Text style={styles.result}>1 { calculationOperation } 8 = 8</Text>
                                <Text style={styles.result}>1 { calculationOperation } 9 = 9</Text>
                                <Text style={styles.result}>1 { calculationOperation } 10 = 10</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
