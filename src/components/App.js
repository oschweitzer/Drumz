import React, {useState} from 'react';
import './App.css';
import Drum from './Drums/Drum';
import Footer from './Footer/Footer';

function App() {

  const [state, setState] = useState({
    displayDrums: false,
  });

  const startButtonHandler = () => {
    setState({
      displayDrums: true
    });
  };

  let footer = null;
  if (state.displayDrums) {
    footer = <Footer/>
  }

  return (
      <div className={"App"}>
        <header className={"AppHeader"}>
          <h1 className={"MainTitle"}>DrumZ</h1>
        </header>
        <section className={"MainContent"}>
          {
            state.displayDrums ? <React.Fragment>
              <Drum />
            </React.Fragment> : <button className={"Button"} onClick={startButtonHandler}>Start</button>
          }
        </section>
        { footer }
      </div>
  );
}

export default App;
