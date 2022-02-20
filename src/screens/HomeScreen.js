import { SafeAreaView, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {

  const goToSettings = () => {
    navigation.navigate('Settings');
  }

  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button title="Go to Settings" onPress={goToSettings} />
    </SafeAreaView>
  );
};

export default HomeScreen;