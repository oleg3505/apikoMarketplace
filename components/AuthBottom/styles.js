import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  bottomBlock: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.grey,
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 76,
  },
  registerButton: {
    backgroundColor: colors.primary,

    alignItems: 'center',
  },
  registerContainer: {
    flex: 1,

    paddingHorizontal: 5,
  },
  registerText: {
    justifyContent: 'center',
    color: colors.primary,
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
  },
  loginText: {
    justifyContent: 'center',
    color: colors.white,
  },
});
export default styles;
