import { View, Text } from 'react-native';
import Proptypes from 'prop-types';

const Saludar = ({ title = 'Nepe' }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

Saludar.propTypes = {
  title: Proptypes.string.isRequired
}

export default Saludar;