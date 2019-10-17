import { StyleSheet } from 'react-native';
import metrics from './metrics';

export const styleToast = StyleSheet.create({
  containerToast: {
    marginBottom: metrics.baseMargin * 4,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    borderRadius: metrics.baseRadius * 2,
  },
});
