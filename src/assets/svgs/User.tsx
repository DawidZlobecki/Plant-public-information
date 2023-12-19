import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function User(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M12.2 0a6 6 0 110 12 6 6 0 010-12zm0 15c6.63 0 12 2.685 12 6v3H.2v-3c0-3.315 5.37-6 12-6z"
        fill="#212221"
      />
    </Svg>
  );
}

export default User;
