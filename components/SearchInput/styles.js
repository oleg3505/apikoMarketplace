import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D6D6D6',

    borderWidth: 1,
    borderColor: '#A0A4B1',
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
