import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ScissorsIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}>
      <Path
        d="M17 1l-6 6 2 2 7-7V1m-10 9.5a.5.5 0 110-1 .5.5 0 010 1zM4 18a2 2 0 110-4 2 2 0 010 4zM4 6a2 2 0 110-4 2 2 0 010 4zm3.64-.36C7.87 5.14 8 4.59 8 4a4 4 0 10-4 4c.59 0 1.14-.13 1.64-.36L8 10l-2.36 2.36C5.14 12.13 4.59 12 4 12a4 4 0 104 4c0-.59-.13-1.14-.36-1.64L10 12l7 7h3v-1L7.64 5.64z"
        fill="#363936"
      />
    </Svg>
  );
}

export default ScissorsIcon;
