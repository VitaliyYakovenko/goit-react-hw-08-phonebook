import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store ,persistor} from './redux/store';
import  App  from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <App />
  </BrowserRouter>
  </PersistGate>  
  </Provider>

);

//  <React.StrictMode></React.StrictMode>

// alex666
// alex666@gmail.com
// alex666


//hello555
//hello555@gmail.com 
//hello5555