import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFDFD',
        paddingTop: Constants.statusBarHeight + 24,
        alignItems: 'center',
    },

    inputComponent: {
        alignItems: 'center',
    },

    description: {
        fontSize: 22,
        color: '#000',
        paddingBottom: 8,
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
    },

    operationsContent: {
        alignItems: "center",
        paddingTop: 24,
    },

    buttonBox: {
        width: 280,
        paddingTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        backgroundColor: '#85AEE2',
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    operationText: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
    }

});