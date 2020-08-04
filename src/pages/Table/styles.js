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
        fontFamily: 'Quicksand_700Bold',
    },

    input: {
        width: 280,
        height: 50,
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        elevation: 3,
        paddingLeft: 24,
        fontFamily:'Quicksand_500Medium',
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
        alignItems: 'center',
    },

    operationText: {
        color: '#FFF',
        fontSize: 40,
        fontFamily: 'Quicksand_700Bold',
        marginTop: -3,
        marginRight: 1,
    },

    resultContent: {
        width: 300,
        height: 300,
        marginTop: 24,
        alignItems: 'center',
    },

    resultTable: {
        backgroundColor: '#F8F8F8',
        width: 290,
        height: 285,
        borderRadius: 16,
        elevation: 6,
        alignItems: 'center',
    },

    titleContainer: {
        marginTop: 8,
        marginBottom: 8, 
    },

    title: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 24,
        color: '#000',
    },

    resultBox: {
        width: 230,
        paddingTop: 8,
        marginLeft: 12,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    result: {
        fontFamily:'Quicksand_500Medium',
        fontSize: 16,
        marginBottom: 16,
    }

});