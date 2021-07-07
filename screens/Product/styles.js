import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imgContainer: {
    width: '100%',
    // minHeight: '20%',
    height: 300,
    marginBottom: 5,
  },
  titlePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  titleTextContainer: {
    fontSize: 20,
    // padding: 5,
  },
  priceTextContainer: {
    fontSize: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderColor: colors.borderGrey,
    borderBottomWidth: 2,
  },

  descriptionContainer: {
    margin: 10,
    borderBottomWidth: 2,
    borderColor: colors.borderGrey,
    height: 48,
  },
  ownerIdContainer: {
    padding: 10,
    height: 48,
    borderBottomWidth: 2,
    borderColor: colors.borderGrey,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row',
  },
  sendMessageButton: {
    backgroundColor: colors.blue,
    minWidth: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  callButton: {
    backgroundColor: colors.primary,
    minWidth: '45%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    flexDirection: 'row',
  },
  messageInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'flex-end',
  },
  messageInput: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    minHeight: 40,
    maxHeight: 150,
    width: '90%',
    padding: 5,
  },
});
export default styles;
