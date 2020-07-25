import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    contentMain: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        paddingTop: Constants.statusBarHeight + 24,
        alignItems: 'center',
    },

    viewUserInput: {
        alignItems: 'center',
    },

    text: {
        fontSize: 22,
        color: '#000',
    },

    viewInput: {
        alignItems: 'center',
        paddingTop: 8,
    },

    input: {
        width: 280,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        elevation: 3,
        paddingLeft: 24,
        fontSize: 18,
        color: '#000',
    }

});