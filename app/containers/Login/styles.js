import { StyleSheet } from 'react-native';
import flexbox from '../../_shared/styles/flexbox';

const styles = StyleSheet.create({
  ...flexbox,
  controlsWrapper: {
    paddingBottom: 20
  },
  formWrapper: {
    padding: 40
  },
  inputWrap: {
    marginVertical: 10,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#424242'
  },
  inputPasswordWrap: {
    marginBottom: 20
  },
  input: {
    paddingHorizontal: 10,
    color: '#212121',
    textAlign: 'center'
  },
  rememberWrapper: {
    height: 30,
    marginBottom: 20
  },
  rememberUsernameText: {
    color: '#424242'
  },
  button: {
    backgroundColor: '#1976D2',
    height: 45
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
  },
  accountWrapper: {
    height: 40,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0'
  },
  forgotPasswordText: {
    color: '#9E9E9E',
    fontSize: 12
  },
  forgotPasswordLinkText: {
    color: '#1976D2',
    marginLeft: 5,
    fontSize: 12,
    fontWeight: '500'
  }
});

export default styles;
