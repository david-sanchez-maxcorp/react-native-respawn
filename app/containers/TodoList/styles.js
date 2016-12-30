import { StyleSheet } from 'react-native';
import flexbox from '../../_shared/styles/flexbox';

const styles = StyleSheet.create({
  todoListContainer: {
    ...flexbox.container
  },
  todoListInputWrapper: {
    ...flexbox.layoutRow,
    ...flexbox.layoutAlignStartCenter,
    margin: 15
  },
  todoListInputWrap: {
    flex: 4,
    borderWidth: 1,
    borderColor: '#424242',
    height: 40,
    padding: 5
  },
  todoListInput: {
    flex: 1
  },
  todoListInputButtonWrap: {
    flex: 2,
    marginLeft: 5
  },
  todoListInputButton: {
    ...flexbox.layoutColumn,
    ...flexbox.layoutAlignCenterStretch,
    height: 40,
    backgroundColor: '#1976D2',
    borderWidth: 1,
    borderColor: '#424242'
  },
  todoListInputButtonText: {
    color: '#FFF',
    textAlign: 'center'
  },
  emptyTodoListView: {
    ...flexbox.layoutColumn,
    ...flexbox.layoutAlignCenterStretch
  },
  emptyTodoListText: {
    color: '#9E9E9E',
    textAlign: 'center'
  },
  todoCompleted: {
    textDecorationLine: 'line-through'
  },
  bodyAndFooterWrapper: {
    ...flexbox.flex,
    ...flexbox.layoutColumn,
    ...flexbox.layoutAlignSpaceBetweenStretch
  },
  todoListFooter: {
    ...flexbox.layoutRow,
    ...flexbox.layoutAlignCenterCenter,
    height: 40
  },
  todoListFilterText: {
    ...flexbox.flex,
    textAlign: 'center',
    lineHeight: 40,
    height: 40
  },
  todoListFilterTextActive: {
    color: '#1976D2'
  }
});

export default styles;
