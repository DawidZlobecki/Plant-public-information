import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function WateringCanIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={18}
      viewBox="0 0 20 18"
      fill="none"
      {...props}>
      <Path
        d="M16.5 3.97c-.74.73-.93 1.78-.58 2.68L13 9.57V7.5c0-.55-.45-1-1-1h-1.03c.03-.17.03-.33.03-.5C11 2.96 8.54.5 5.5.5A5.497 5.497 0 002 10.24v6.26c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-4.11l4.33-4.33c.9.35 1.95.17 2.67-.56l-3.5-3.53zM2.05 6.5C2.03 6.33 2 6.17 2 6c0-1.93 1.57-3.5 3.5-3.5S9 4.07 9 6c0 .17-.03.33-.05.5m2.05 9H4v-7h7v7z"
        fill="#585D58"
      />
    </Svg>
  );
}

export default WateringCanIcon;
