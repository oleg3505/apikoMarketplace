import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    height: 200,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 15,
    margin: 5,
  },
  imgContainer: {
    width: '100%',
    height: '67%',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  titleContainer: {
    padding: 5,
  },
});
export default styles;
