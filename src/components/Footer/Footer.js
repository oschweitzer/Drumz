import React, {useState} from 'react';
import Help from '../Help/Help';

const Footer = () => {

  const [state, setState] = useState({
    showHelp: false,
  });

  const helpClickHandler = () => {
    setState({
      showHelp: !state.showHelp,
    });
  };

  let helpSection= null;
  if (state.showHelp) {
    helpSection = <React.Fragment>
      <button className={"HelpButton active"} onClick={helpClickHandler}>Reduce help</button><Help />
    </React.Fragment>;
  } else {
    helpSection = <button className={"HelpButton"} onClick={helpClickHandler}>Display help</button>;
  }

  return <footer className={"Footer"}>
    { helpSection }
  </footer>
}

export default Footer;
