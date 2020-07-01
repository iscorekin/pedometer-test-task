import React from 'react';
import { Provider } from 'react-redux';
import Layout from './layouts/Layout';
import Router from './modules/Router';
import createStore from './store';

const store = createStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
}

export default App;
