import { SafeAreaView, View } from "react-native";
import UserForm from "./UserForm";

const HomeScreen = ({ navigation }) => {
    const handleOnSubmit = () => {
      navigation.navigate('UserDetails')
    }
    return (
      <SafeAreaView>
            <UserForm onSubmit={handleOnSubmit} />
      </SafeAreaView>
    );
}

export default HomeScreen;