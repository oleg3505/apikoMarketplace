import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  mainActionSheet: {
    paddingBottom: 20,
  },

  titleTextActionSheet: {
    fontSize: 20,
    fontStyle: 'italic',
    color: colors.grey,
    textAlign: 'center',
    paddingVertical: 10,
  },
  chooseContainerActionSheet: {
    height: 60,

    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.borderGrey,
  },
  chooseTextActionSheet: {
    color: colors.primary,
    fontSize: 20,
  },
});

export default styles;
