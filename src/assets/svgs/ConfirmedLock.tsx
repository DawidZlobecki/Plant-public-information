import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function ConfirmedLock(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={19}
      height={21}
      viewBox="0 0 19 21"
      fill="none"
      {...props}>
      <Path
        d="M15 12c.34 0 .67.04 1 .09V9a2 2 0 00-2-2h-1V5c0-2.76-2.24-5-5-5S3 2.24 3 5v2H2a2 2 0 00-2 2v10c0 1.11.89 2 2 2h7.81C9.3 20.12 9 19.1 9 18c0-3.31 2.69-6 6-6zM5 5c0-1.66 1.34-3 3-3s3 1.34 3 3v2H5V5zm3 11a2 2 0 112-2c0 1.11-.89 2-2 2zm10.5.25L13.75 21 11 18l1.16-1.16 1.59 1.59 3.59-3.59 1.16 1.41z"
        fill="#B2B6B2"
      />
    </Svg>
  );
}

export default ConfirmedLock;
