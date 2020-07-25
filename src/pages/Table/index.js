import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

export default function Table() {
    return (
        <View style={styles.contentMain}>
            <View style={styles.viewUserInput}>
                <Text style={styles.text}>Digite um número</Text>
                <View style={styles.viewInput}>
                    <TextInput style={styles.input} 
                        maxLength={3}
                        keyboardType='numeric'
                        placeholder='0'
                        placeholderTextColor='#7B7B7B'
                    />
                </View>
            </View>

        </View>
    );
}
