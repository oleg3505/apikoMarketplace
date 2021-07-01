import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputsContainer: {
    minHeight: '87%',
  },
  emailInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  emailBlock: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  fullNameInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  fullNameBlock: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  passwordInput: {
    borderRadius: 5,
    borderWidth: 2,
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
    // position: 'absolute',
    // left: 12,
    // top: -10,
    // backgroundColor: 'white',
    paddingHorizontal: 8,
    color: colors.primary,
  },
  registerButton: {
    padding: 20,
    backgroundColor: colors.primary,
    borderRadius: 30,
    alignItems: 'center',
  },
  containerButton: {
    paddingVertical: 50,
    paddingHorizontal: 100,
  },
  textButton: {
    justifyContent: 'center',
  },
  forgotPasswardBlock: {
    alignItems: 'flex-end',
    padding: 10,
  },
});

export default styles;
