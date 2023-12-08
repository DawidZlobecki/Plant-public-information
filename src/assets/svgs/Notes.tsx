import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Notes(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={22}
      viewBox="0 0 23 22"
      fill="none"
      {...props}>
      <Path
        d="M15.8 7h5.5l-5.5-5.5V7zm-9-7h10l6 6v10a2 2 0 01-2 2h-14a2 2 0 01-2-2V2a2 2 0 012-2zm-4 4v16h18v2h-18a2 2 0 01-2-2V4h2z"
        fill="#212221"
      />
    </Svg>
  );
}

export default Notes;
