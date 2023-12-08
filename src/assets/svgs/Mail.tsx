import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Mail(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="none"
      {...props}>
      <Path
        d="M18 4l-8 5-8-5V2l8 5 8-5m0-2H2C.89 0 0 .89 0 2v12a2 2 0 002 2h16a2 2 0 002-2V2a2 2 0 00-2-2z"
        fill="#B2B6B2"
      />
    </Svg>
  );
}

export default Mail;
