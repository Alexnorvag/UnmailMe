import React from 'react';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';

import {store} from './redux/store';
import {RootNavigation} from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
