import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomBlock: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'grey',
    height: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  registerButton: {
    padding: 5,
    backgroundColor: '#349A89',

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
    color: '#349A89',
    // fontWeight; '900'
  },

  loginButton: {
    padding: 5,
    backgroundColor: '#349A89',
    borderRadius: 20,
    alignItems: 'center',
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
