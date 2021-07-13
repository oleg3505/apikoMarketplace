import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  addPhotosContainer: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.borderGrey,
    alignItems: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
  },
  addPhoto: {
    borderColor: colors.borderGrey,
    borderRadius: 4,
    borderWidth: 1,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
});

export default styles;
