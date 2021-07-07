import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  priceInputContainer: {
    backgroundColor: colors.white,
    width: '90%',
    padding: 10,
  },
  addPriceContainer: {
    minHeight: 44,
    borderColor: colors.borderGrey,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    borderWidth: 2,
    borderRadius: 6,
  },
});

export default styles;
