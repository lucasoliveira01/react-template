import React from 'react';
import 'react-native-gesture-handler';
import createRouter from './routes';
import { setNavigator } from './services/navigation';

function App() {
  const Routes = createRouter();

  return <Routes ref={setNavigator} />;
}

export default App;
