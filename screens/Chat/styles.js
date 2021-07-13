import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  sendMessageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderColor: colors.borderGrey,
  },
  messageInput: {
    // backgroundColor: 'red',
    width: '90%',
    height: 40,
    borderRadius: 4,
    borderColor: colors.borderGrey,
    borderWidth: 1,
    padding: 5,
  },
});
export default styles;
