import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
    // justifyContent: 'center',
    alignItems: 'flex-end',
  },
  settings: {
    // position: 'absolute',
    right: 10,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // position: 'absolute',
  },
  viewerContainer: {
    // flex: 1,
    // paddingTopS: 30,
    borderBottomWidth: 3,
    borderBottomColor: colors.borderGrey,
    minHeight: '30%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
