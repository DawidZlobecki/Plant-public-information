import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Colors from '../../styles/colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ElipseWrapperProps {
  children: React.ReactNode;
}

const width = Dimensions.get('window').width;

const ElipseWrapper = ({children}: ElipseWrapperProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View style={[{alignItems: 'center'}]}>
      <View style={[s.outerWrapper]}>
        <View
          style={[
            s.innerWrapper,
            {
              marginTop: top,
            },
          ]}>
          {children}
        </View>
      </View>
    </View>
  );
};

export default ElipseWrapper;

const s = StyleSheet.create({
  outerWrapper: {
    minHeight: width * 0.5,
    width: width * 1.1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    borderBottomLeftRadius: width / 2,
    borderBottomRightRadius: width / 2,
    paddingBottom: width / 5,
  },
  innerWrapper: {
    width: width,
  },
});
