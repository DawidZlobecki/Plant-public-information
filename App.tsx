import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import store from './src/redux/store';
import AppNavigator from './src/navigation';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/i18n';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </I18nextProvider>
  );
};

AppRegistry.registerComponent(appName, () => App);

export default App;
