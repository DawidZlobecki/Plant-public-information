import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Check(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}>
      <Path
        d="M10 3L4.5 8.5 2 6"
        stroke="#ECFFEB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Check;
