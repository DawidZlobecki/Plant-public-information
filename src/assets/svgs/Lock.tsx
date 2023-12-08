import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Lock(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={22}
      viewBox="0 0 16 22"
      fill="none"
      {...props}>
      <Path
        d="M8 16.5a2 2 0 100-4 2 2 0 000 4zm6-9a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2v-10a2 2 0 012-2h1v-2a5 5 0 1110 0v2h1zm-6-5a3 3 0 00-3 3v2h6v-2a3 3 0 00-3-3z"
        fill="#B2B6B2"
      />
    </Svg>
  );
}

export default Lock;
