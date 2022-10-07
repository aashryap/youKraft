import { StyleSheet, Text, View, Button, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { useUserDetailsContext } from '../context/userDetails.context';
import { PrimaryButton } from '../common/Button';

const UserDetails = ({ navigation, route }) => {
    const {userDetails} = useUserDetailsContext();
    return <View style={styles.page}>
        <View style={styles.userDetailsContainer}>
            {
                (Object.keys(userDetails) || []).map(keyName => {
                    return  <View style={styles.userLabel}><Text style={styles.userLabelText} >{keyName}</Text><Text style={styles.userPropertyText}>{userDetails?.[keyName]}</Text></View>
                })  
            }
        </View>
        <View>
            <PrimaryButton title={'BACK'} onPress={() => {
                navigation.pop()
            }} />
        </View>
    </View>
};


export default UserDetails;

const styles = StyleSheet.create({
    page: {
        height: '100%',
        paddingVertical: 40,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },  
    userDetailsContainer: {
      margin: 12,
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 8,
    },
    userLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    userLabelText: {
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'capitalize'
    },
    userPropertyText: {
        fontSize: 20
    },  
    errorInput: {
        borderColor: 'red'
    },  
    errorMessage: {
        marginVertical: 2,
        marginHorizontal: 12,
        color: 'red'
    },
    inputContainer: {
        marginVertical: 5
    }
  });