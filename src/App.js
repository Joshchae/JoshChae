import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';

import Main from './component/Main/Main';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import ItemAlbum from './component/Projects/ItemAlbum';

import './App.css';


function App() {
  return (
    <>
      <div className="container">
        <CssBaseline />
        <Header />

        <main>
          <Main />
          <Projects />
          <ItemAlbum />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
