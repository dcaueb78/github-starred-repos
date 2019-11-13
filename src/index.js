import React from 'react';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    </>
  );
}