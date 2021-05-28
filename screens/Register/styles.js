import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputsContainer: {
    minHeight: '90%',
  },
  emailInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#349A89',
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
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
  registerButton: {
    padding: 20,
    backgroundColor: '#349A89',
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
