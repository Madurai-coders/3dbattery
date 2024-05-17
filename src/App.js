import './App.css';
import Vig from './components/vig';
// import B1 from './components/b1';
import Bt from './components/bt';
// import Display from './components/display';
import Viewer from './components/viewer';
import Vig3 from './components/vig-3';
import Card from './components/card';
import Vig2 from './components/vig-2';
import Contact from './components/contact';
import { useRef } from 'react';
function App() {

  const contentRef = useRef(null);
  const viewerRef = useRef(null);


  return (
   <>
   {/* <B1/>
   <Card/> */}

<div ref={contentRef} id="content">
        <Vig />
        <Bt />
        <Vig2 />
        <Vig3 />
      </div>

        <Viewer contentRef={contentRef} ref={viewerRef} />
    

      <Card />
      <Contact />
      </>
  );
}

export default App;
