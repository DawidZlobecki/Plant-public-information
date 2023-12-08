import React from 'react';
import {View, Text} from 'react-native';

interface BottomNavigationItemProps {
  title: string;
  icon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

const BottomNavigationItem = ({title, icon}: BottomNavigationItemProps) => {
  // const ClonedItem = React.cloneElement(icon, {});
  return (
    <View>
      {/* <ClonedItem /> */}
      <Text>{title}</Text>
    </View>
  );
};

export default BottomNavigationItem;
