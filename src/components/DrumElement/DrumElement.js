import React, {useEffect, useRef} from 'react';
import './DrumElement.css';
import useSound from 'use-sound';

const DrumElement = (props) => {

  const buttonRef = useRef(null);
  const [play] = useSound(props.audioFile);

  const handleKeyDown = (event) => {
    if(event.key === props.triggerKey) {
      play();
      buttonRef.current.classList.add('active');
    }
  }

  const handleKeyUp = () => {
    buttonRef.current.classList.remove('active');
  }

  useEffect(() => {
    window.addEventListener('keydown',  handleKeyDown);
    window.addEventListener('keyup', handleKeyUp)
    return () => {  // Cleanup step
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    }
  });

  return (<button ref={buttonRef} onClick={play} className={'DrumElement'}>
    {props.drumElementName}</button>);
}

export default DrumElement;
