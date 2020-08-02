import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { AppLoading } from 'expo';
import styles from './styles';

export default function Table() {
    
    let [fontsLoaded] = useFonts({
        Quicksand_500Medium,
        Quicksand_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputComponent}>
                <Text style={styles.description}>Digite um número</Text>
                <TextInput style={styles.input} 
                    maxLength={3}
                    keyboardType='numeric'
                    placeholder='0'
                    placeholderTextColor='#7B7B7B'
                />
            </View>

            <View style={styles.operationsContent}>
                <Text style={styles.description}>Escolha uma operação</Text>
                <View style={styles.buttonBox}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.operationText}>+</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.operationText}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.operationText}>÷</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
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
                            <Text style={styles.result}>1 x 0 = 0</Text>
                            <Text style={styles.result}>1 x 1 = 1</Text>
                            <Text style={styles.result}>1 x 2 = 2</Text>
                            <Text style={styles.result}>1 x 3 = 3</Text>
                            <Text style={styles.result}>1 x 4 = 4</Text>
                        </View>

                        <View>
                            <Text style={styles.result}>1 x 5 = 5</Text>
                            <Text style={styles.result}>1 x 6 = 6</Text>
                            <Text style={styles.result}>1 x 7 = 7</Text>
                            <Text style={styles.result}>1 x 8 = 8</Text>
                            <Text style={styles.result}>1 x 9 = 9</Text>
                            <Text style={styles.result}>1 x 10 = 10</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
