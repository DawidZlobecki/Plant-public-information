import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ShovelIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M15.1 1.81l-2.83 2.83c-.77.78-.77 2.05 0 2.83l1.41 1.41-4.55 4.55-2.82-2.83L4.89 12c-4.95 5-1.39 8.5-1.39 8.5S7 24 12 19.09l1.41-1.41-2.8-2.8 4.54-4.54 1.39 1.39c.78.77 2.05.77 2.83 0L22.2 8.9l-7.1-7.09zm2.83 8.47L16.55 8.9l-1.44-1.44-1.4-1.4 1.41-1.41 4.23 4.23-1.42 1.4z"
        fill="#585D58"
      />
    </Svg>
  );
}

export default ShovelIcon;
