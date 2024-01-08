import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BellIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2zm11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7z"
        fill="#585D58"
      />
    </Svg>
  );
}

export default BellIcon;
