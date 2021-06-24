import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.background,
    // alignItems: 'center',
  },
  headerContainer: {
    padding: 20,
    paddingTop: 30,
    height: 70,
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    // backgroundColor: 'red',
  },
  headerNewPostText: {
    fontSize: 20,
  },
  headerPostText: {
    fontSize: 20,
    color: colors.primary,
  },
  keyInfoContainer: {
    padding: 20,
  },
  titleInput: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.borderGrey,
    borderRadius: 5,
    minWidth: '90%',
    height: 44,
    padding: 10,
    marginVertical: 15,
  },
  descriptionInput: {
    borderWidth: 2,
    backgroundColor: colors.white,
    borderColor: colors.borderGrey,
    borderRadius: 5,
    minWidth: '90%',
    minHeight: 136,
    padding: 10,
  },

  photosContainer: {
    padding: 20,
  },
  addPhotosContainer: {
    minHeight: 76,
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.borderGrey,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    flexDirection: 'row',
  },
  addPhoto: {
    borderColor: colors.borderGrey,
    borderRadius: 4,
    borderWidth: 2,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceTextContainer: {
    padding: 20,
  },
  addPriceContainer: {
    minHeight: 76,
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.borderGrey,
    justifyContent: 'center',
    padding: 20,
  },
  priceCashContainer: {
    flexDirection: 'row',
    borderColor: colors.borderGrey,
    borderWidth: 2,
    borderRadius: 6,
  },
  priceInputContainer: {
    backgroundColor: colors.white,

    width: '85%',
    minHeight: 44,
    padding: 10,
  },
  cashInputContainer: {
    width: '15%',
    minHeight: 44,
    justifyContent: 'center',
  },
  cashTextInput: {
    color: colors.primary,
  },
  mainActionSheet: {
    height: '70%',
  },
  titleActionSheet: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextActionSheet: {
    fontSize: 20,
    fontStyle: 'italic',
    color: colors.grey,
  },
  chooseContainerActionSheet: {
    height: 60,

    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.borderGrey,
  },
  chooseTextActionSheet: {
    color: colors.primary,
    fontSize: 20,
  },
});
export default styles;
