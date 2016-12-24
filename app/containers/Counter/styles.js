import { StyleSheet } from 'react-native';
import flexbox from '../../_shared/styles/flexbox';
import colors from '../../_shared/styles/colors';

const styles = StyleSheet.create({
  ...flexbox,
  button: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderWidth: 1,
    borderColor: '#0D47A1',
    margin: 12
  },
  buttonLabel: {
    color: '#0D47A1',
    fontSize: 24
  },
  counter: {
    fontSize: 72,
    textAlign: 'center',
    margin: 48
  }
});

export default styles;
