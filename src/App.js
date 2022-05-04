import React from 'react';

import GlobalStyle from './styles/global';
import { Routers } from './routes';

import Modal from "react-modal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routers/>
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
