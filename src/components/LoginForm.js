import { View, Text, TextInput, Button } from 'react-native';

const LoginForm = () => {
  return (
    <View>
      <Text>LoginForm</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" />
      <Button title="Login" onPress={() => console.log('Enviando')} />
    </View>
  );
};

export default LoginForm;