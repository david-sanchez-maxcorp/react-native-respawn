import { StyleSheet } from 'react-native';
import flexbox from '../../_shared/styles/flexbox';

const simpleButton = {
  ...flexbox.flex,
  ...flexbox.layoutAlignCenterCenter,
  backgroundColor: '#FFFFFF',
  height: 40,
  margin: 12
};

const styles = StyleSheet.create({
  counterContainer: {
    ...flexbox.container,
    ...flexbox.layoutColumn,
    ...flexbox.layoutAlignStartStretch
    /* any extra custom properties */
  },

  buttonGroup: {
    ...flexbox.layoutRow,
    ...flexbox.layoutAlignCenterCenter
    /* any extra custom properties */
  },

  simpleButton,

  button: {
    ...simpleButton,
    borderWidth: 1,
    borderColor: '#0D47A1'
  },

  buttonText: {
    color: '#0D47A1',
    fontSize: 24
  },

  counterText: {
    fontSize: 72,
    textAlign: 'center',
    margin: 48
  }
});

export default styles;
