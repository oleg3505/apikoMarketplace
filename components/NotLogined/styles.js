import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // height: '100%',
    padding: 30,
  },
  textContainer: {
    color: colors.grey,
    padding: 5,
  },
  loginButton: {
    padding: 5,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
    width: 100,
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    // height: 30,
    // width: 30,
    paddingVertical: 10,
    // paddingVertical: 50,
    // paddingHorizontal: 100,
  },
  loginText: {
    justifyContent: 'center',
  },
});
export default styles;
