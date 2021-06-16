import React,{useContext, useState} from 'react';
import ReactDOM from 'react-dom';

import Formulario from './componentes/Formulario'
import MostrarPDF from './componentes/MostrarPDF';

import PdfState from './context/PDFState';



function App() {

  return (
<PdfState>
  <div className="container-fluid vh-100">
    <div className="row">
      <div className="col-6">
        <Formulario/>
      </div>
      <div className="col-6 vh-100 d-inline-block">
          <MostrarPDF/>
      </div>
    </div>
  </div>
</PdfState>
  );
}

export default App;
