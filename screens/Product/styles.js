import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  imgContainer: {
    width: '100%',
    minHeight: '70%',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    height: 72,
  },
  ownerIdContainer: {
    padding: 10,
    height: 72,
    borderBottomWidth: 2,
    borderColor: colors.borderGrey,
  },
});
export default styles;
