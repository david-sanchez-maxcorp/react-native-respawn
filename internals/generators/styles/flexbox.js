import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flex: {flex: 1},
  layout: {flexDirection: 'column'},
  layoutColumn: {flexDirection: 'column'},
  layoutRow: {flexDirection: 'row'},
  layoutAlign: {justifyContent: 'flex-start', alignItems: 'stretch'},
  layoutAlignStartStart: {justifyContent: 'flex-start', alignItems: 'flex-start'},
  layoutAlignStartCenter: {justifyContent: 'flex-start', alignItems: 'center'},
  layoutAlignStartEnd: {justifyContent: 'flex-start', alignItems: 'flex-end'},
  layoutAlignStartStretch: {justifyContent: 'flex-start', alignItems: 'stretch'},
  layoutAlignCenterStart: {justifyContent: 'center', alignItems: 'flex-start'},
  layoutAlignCenterCenter: {justifyContent: 'center', alignItems: 'center'},
  layoutAlignCenterEnd: {justifyContent: 'center', alignItems: 'flex-end'},
  layoutAlignCenterStretch: {justifyContent: 'center', alignItems: 'stretch'},
  layoutAlignEndStart: {justifyContent: 'flex-end', alignItems: 'flex-start'},
  layoutAlignEndCenter: {justifyContent: 'flex-end', alignItems: 'center'},
  layoutAlignEndEnd: {justifyContent: 'flex-end', alignItems: 'flex-end'},
  layoutAlignEndStretch: {justifyContent: 'flex-end', alignItems: 'stretch'},
  layoutAlignSpaceAroundStart: {justifyContent: 'space-around', alignItems: 'flex-start'},
  layoutAlignSpaceAroundCenter: {justifyContent: 'space-around', alignItems: 'center'},
  layoutAlignSpaceAroundEnd: {justifyContent: 'space-around', alignItems: 'flex-end'},
  layoutAlignSpaceAroundStretch: {justifyContent: 'space-around', alignItems: 'stretch'},
  layoutAlignSpaceBetweenStart: {justifyContent: 'space-between', alignItems: 'flex-start'},
  layoutAlignSpaceBetweenCenter: {justifyContent: 'space-between', alignItems: 'center'},
  layoutAlignSpaceBetweenEnd: {justifyContent: 'space-between', alignItems: 'flex-end'},
  layoutAlignSpaceBetweenStretch: {justifyContent: 'space-between', alignItems: 'stretch'}
});

export default styles;
