import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.greyLigth,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    minWidth: '90%',
    borderRadius: 5,
    height: '120%',
  },
  filterIcon: {
    paddingHorizontal: 10,
  },

  searchIcon: {
    paddingHorizontal: 10,
  },

  searchInput: {
    minWidth: '80%',
  },
});

export default styles;
