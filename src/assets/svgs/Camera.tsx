import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Camera(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M4.4 4h3l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2h-16a2 2 0 01-2-2V6a2 2 0 012-2zm8 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"
        fill="#212221"
      />
    </Svg>
  );
}

export default Camera;
