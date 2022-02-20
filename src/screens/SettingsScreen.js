import { SafeAreaView, Text, Button } from "react-native";

const SettingsScreen = ({ navigation }) => {

  const goToHome = () => {
    navigation.navigate('Home');
  }

  return (
    <SafeAreaView>
      <Text>Settings Screen</Text>
      <Button title="Go to Home" onPress={goToHome} />
    </SafeAreaView>
  );
};

export default SettingsScreen;