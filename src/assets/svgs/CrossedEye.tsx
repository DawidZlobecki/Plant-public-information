import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CrossedEye(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill="none"
      {...props}>
      <Path
        d="M10.83 6.5L14 9.66V9.5a3 3 0 00-3-3h-.17zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 003 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 01-5-5c0-.79.2-1.53.53-2.2zM1 1.77l2.28 2.28.45.45C2.08 5.8.78 7.5 0 9.5 1.73 13.89 6 17 11 17c1.55 0 3.03-.3 4.38-.84l.43.42 2.92 2.92L20 18.23 2.27.5m8.73 4a5 5 0 015 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75C20.27 5.11 16 2 11 2c-1.4 0-2.74.25-4 .7l2.17 2.15c.57-.22 1.18-.35 1.83-.35z"
        fill="#B2B6B2"
      />
    </Svg>
  );
}

export default CrossedEye;
