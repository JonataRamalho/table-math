import React from 'react';
import { View, Text, TextInput } from 'react-native';
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
        </View>
    );
}
