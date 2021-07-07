import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,

    backgroundColor: colors.background,

    // alignItems: 'flex-end',
  },
  settings: {
    right: 10,
    paddingTop: 30,
  },
  container: {
    flex: 1,
  },
  viewerContainer: {
    borderBottomWidth: 3,
    borderBottomColor: colors.borderGrey,
    minHeight: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
