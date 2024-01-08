import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SprinklerIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={20}
      viewBox="0 0 12 20"
      fill="none"
      {...props}>
      <Path
        d="M10.22 8.43C8.18 6.39 8 2.66 8 2H6.5v2h-4V2h-2c0-1.1.9-2 2-2h7v1c0 .08.04 4.63 1.78 6.37l-1.06 1.06zM10.5 0v2h1V0h-1zm-2 10c-2-2-2-5-2-5h-4v2c0 1 0 1-1 2s-1 2-1 2v7c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-8z"
        fill="#585D58"
      />
    </Svg>
  );
}

export default SprinklerIcon;
