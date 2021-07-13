import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  buttonContainer: {
    height: 50,
    width: 150,

    backgroundColor: '#349A89',
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  text: {
    color: colors.white,
  },
});
export default styles;
