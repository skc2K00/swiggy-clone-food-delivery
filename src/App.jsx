
import './App.css'

import Head from "./Components/Head";
import Body from './Components/Body';
import { Outlet } from 'react-router-dom';
import Context from './utils/Context';
import { Provider } from 'react-redux';
import { store } from './utils/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <Context.Provider value="siv">
        <Head />
        <Outlet />
        </Context.Provider> 
      </Provider>
      

    </>
  )
}

export default App
