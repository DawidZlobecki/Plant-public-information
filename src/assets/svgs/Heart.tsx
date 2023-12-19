import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Heart(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      {...props}>
      <Path
        d="M12.6 21.35l-1.45-1.32C6 15.36 2.6 12.27 2.6 8.5 2.6 5.41 5.02 3 8.1 3c1.74 0 3.41.81 4.5 2.08C13.69 3.81 15.36 3 17.1 3c3.08 0 5.5 2.41 5.5 5.5 0 3.77-3.4 6.86-8.55 11.53l-1.45 1.32z"
        fill="#212221"
      />
    </Svg>
  );
}

export default Heart;
