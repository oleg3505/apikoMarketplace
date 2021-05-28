import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  emailInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#349A89',
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  inputsContainer: {
    minHeight: '90%',
  },
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  emailBlock: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  passwordInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#349A89',
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
    color: '#349A89',
  },

  forgotPasswardBlock: {
    alignItems: 'flex-end',
    padding: 10,
  },
});
export default styles;
