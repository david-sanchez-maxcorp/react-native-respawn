import { StyleSheet } from 'react-native';
import flexbox from '../../_shared/styles/flexbox';

export const tabBarActiveTextColor = '#FFFFFF';
export const tabBarInactiveTextColor = '#B2EBF2';
export const tabBarBackgroundColor = '#00BCD4';

const styles = StyleSheet.create({
  ...flexbox,
  scrollableTabViewStyles: {
    backgroundColor: '#FFFFFF'
  },
  logoText: {
    fontSize: 25,
    color: '#E53935',
    textAlign: 'center',
    fontWeight: '600'
  },
  tabBarTextStyle: {
    fontSize: 15
  },
  tabBarUnderlineStyle: {
    height: 2,
    backgroundColor: '#FF6D00'
  },
  tabStyle: {
    paddingBottom: 0,
    marginTop: 20
  }
});

export default styles;

