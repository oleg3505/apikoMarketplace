import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    margin: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.borderGrey,
    width: '100%',
    padding: 10,
    backgroundColor: colors.white,
  },
  containerText: {
    fontWeight: 'bold',
  },
  logOutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: colors.borderGrey,
    width: '100%',
    padding: 10,
    backgroundColor: colors.white,
    marginTop: 20,
  },
  logOutText: {
    color: colors.primary,
    padding: 10,
  },
});

export default styles;
