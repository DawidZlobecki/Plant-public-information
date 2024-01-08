import React, { ReactNode } from 'react';
import { Dimensions } from 'react-native';
import { Svg, G, Ellipse } from 'react-native-svg';

interface DontHaveAnAccountProps {
  children?: ReactNode;
}

function DontHaveAnAccountWrapper({
  children,
  ...props
}: DontHaveAnAccountProps) {
  const width = Dimensions.get('window').width;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={79}
      viewBox="0 0 428 79"
      fill="none"
      {...props}>
      <G opacity={0.2}>
        <Ellipse cx={202} cy={107.5} rx={256} ry={107.5} fill="#C2FFBD" />
        <Ellipse
          cx={202}
          cy={107.5}
          rx={256}
          ry={107.5}
          fill="#000"
          fillOpacity={0.2}
        />
      </G>
      {children}
    </Svg>
  );
}

export default DontHaveAnAccountWrapper;
