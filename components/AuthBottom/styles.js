import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  bottomBlock: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  registerButton: {
    padding: 5,
    backgroundColor: colors.primary,

    alignItems: 'center',
  },
  registerContainer: {
    flex: 1,

    paddingHorizontal: 5,
    // height: 30,

    // width: 30
  },
  registerText: {
    justifyContent: 'center',
    color: colors.primary,
    // fontWeight; '900'
  },

  loginButton: {
    padding: 5,
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
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
