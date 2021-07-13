import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'flex-end',
  },
  containerInFormik: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,

    // marginBottom: 10,
  },
  inputs: {
    flex: 1,
    padding: 10,
  },

  label: {
    paddingHorizontal: 8,
    color: colors.primary,
    marginTop: 10,
  },

  err: {
    color: colors.red,
  },
});

export default styles;
