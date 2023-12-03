import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './navigation';
import store from './redux/store';
import {name as appName} from '../app.json';

const ReduxApp: React.FC = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
