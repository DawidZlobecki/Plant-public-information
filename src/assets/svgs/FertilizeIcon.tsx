import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function FertilizeIcon(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      {...props}>
      <Path
        d="M7 4c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1zM4 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zM2 3c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm3-1c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm6 0c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm4 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4 4c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm3.5 5.07c0 .71-.26 1.39-.69 1.93.42.54.69 1.22.69 1.93 0 1.73-1.43 3.14-3.16 3.14l-.43-.03A3.15 3.15 0 018 20a3.15 3.15 0 01-2.91-1.96l-.43.03c-1.74 0-3.16-1.41-3.16-3.14 0-.71.26-1.39.69-1.93-.42-.54-.69-1.22-.69-1.93 0-1.73 1.43-3.14 3.16-3.14l.43.03A3.15 3.15 0 018 6c1.31 0 2.44.81 2.91 1.96l.43-.03c1.73 0 3.16 1.41 3.16 3.14zm-11 0c0 .43.27.83.67 1.03l.88.4c.12-.72.51-1.36 1.06-1.81l-.81-.56c-.18-.13-.4-.2-.64-.2-.63 0-1.16.51-1.16 1.14zm2.62 4.24c-.56-.45-.95-1.09-1.07-1.81l-.88.4c-.4.2-.67.6-.67 1.02 0 .63.53 1.14 1.16 1.14.23 0 .45-.06.65-.2l.81-.55zm3.02 1.59l-.11-1.09c-.32.12-.67.19-1.03.19s-.7-.07-1-.19l-.14 1.09c.02.6.52 1.1 1.14 1.1.62 0 1.12-.5 1.14-1.1zm0-7.8C9.12 8.5 8.62 8 8 8c-.62 0-1.12.5-1.14 1.1L7 10.19c.3-.12.64-.19 1-.19s.71.07 1.03.19l.11-1.09zm3.36 5.82c0-.42-.27-.84-.67-1.03l-.88-.42c-.12.74-.51 1.38-1.06 1.83l.81.57c.18.13.4.2.64.2.63 0 1.16-.51 1.16-1.15zm0-3.85c0-.63-.53-1.14-1.16-1.14-.23 0-.45.07-.65.2l-.82.56c.56.45.95 1.09 1.07 1.81l.88-.4c.41-.2.68-.6.68-1.03z"
        fill="#585D58"
      />
    </Svg>
  );
}

export default FertilizeIcon;
