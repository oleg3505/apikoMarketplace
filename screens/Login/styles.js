import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  emailInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputsContainer: {
    minHeight: '87%',
  },
  mainContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  emailBlock: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  passwordInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  passwordBlock: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  label: {
    paddingHorizontal: 8,
    color: colors.primary,
  },

  forgotPasswardBlock: {
    alignItems: 'flex-end',
    padding: 10,
  },
});
export default styles;
