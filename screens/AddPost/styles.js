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

  headerNewPostText: {
    fontSize: 20,
  },
  headerPostText: {
    fontSize: 20,
    color: colors.primary,
  },

  titleInput: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    borderRadius: 5,
    height: 44,
    padding: 10,
    marginVertical: 15,
    marginHorizontal: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderColor: colors.borderGrey,
    borderRadius: 5,
    minHeight: 136,
    padding: 10,
    marginHorizontal: 20,
  },

  photosContainer: {
    padding: 20,
  },

  addPriceContainer: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderGrey,
    justifyContent: 'center',
    padding: 20,
  },
});
export default styles;
