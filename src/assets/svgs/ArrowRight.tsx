import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ArrowRight(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="#363936"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowRight;
