import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Table() {
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
                <Text style={styles.description}>Escolha uma Operação</Text>
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
        </View>
    );
}
