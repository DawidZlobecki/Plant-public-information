import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Hamburger(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={24}
      viewBox="0 0 31 24"
      fill="none"
      {...props}>
      <Path
        d="M.5 3a3 3 0 013-3h24a3 3 0 110 6h-24a3 3 0 01-3-3zM.5 12a3 3 0 013-3h24a3 3 0 110 6h-24a3 3 0 01-3-3zM.5 21a3 3 0 013-3h24a3 3 0 110 6h-24a3 3 0 01-3-3z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Hamburger;
