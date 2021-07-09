import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  owner: {
    alignItems: 'flex-end',
    padding: 2,

    margin: 2,
  },
  ownerCont: {
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  notOwnerCont: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.borderGrey,
    margin: 2,
    alignItems: 'flex-end',
  },
  text: {
    paddingHorizontal: 10,
  },
  notOwner: {
    alignItems: 'flex-start',
  },
});
export default styles;
