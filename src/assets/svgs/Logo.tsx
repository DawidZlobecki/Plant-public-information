import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
import Colors from '../../styles/colors';

function Logo(props: any) {
  return (
    <View style={[s.mainContainer]}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={135}
        height={183}
        viewBox="0 0 135 183"
        fill="none"
        {...props}>
        <Path fill="url(#pattern0)" d="M0 0H135V183H0z" />
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}>
            <Use xlinkHref="#image0_312_296" transform="scale(.0074 .00546)" />
          </Pattern>
          <Image
            id="image0_312_296"
            width={135}
            height={183}
            xlinkHref="data:image/png;base64,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"
          />
        </Defs>
      </Svg>
    </View>
  );
}

export default Logo;

const s = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: Colors.primary_800,
    borderRadius: 30,
  },
});
