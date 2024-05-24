import './App.css';
import Landing from './components/landing-page/land';
import Bt from './components/vigsec-1/vig-1.js';
import Vig3 from './components/vigsec-3/vig-3.js';
import Card from './components/our-strenght/card.js';
import Vig2 from './components/vigsec-2/vig-2.js';
import Contact from './components/contact/contact.js';
import { useRef } from 'react';
function App() {

  const contentRef = useRef(null);


  return (
   <>
 

<div ref={contentRef} id="content">
        <Landing />
        <Bt />
        <Vig2 />
        <Vig3 />
      </div>

        {/* <Viewer contentRef={contentRef} ref={viewerRef} /> */}
    

      <Card />
      <Contact />
      </>
  );
}

export default App;
