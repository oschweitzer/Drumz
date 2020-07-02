import React from 'react';
import DrumElement from '../DrumElement/DrumElement';
import snareSound from '../../sound/snare.wav';
import kickSound from '../../sound/kick.wav';
import hiTomSound from '../../sound/hitom.wav';
import middleTomSound from '../../sound/middletom.wav';
import lowTomSound from '../../sound/lowtom.wav';
import hiHatSound from '../../sound/hihat.wav';
import crashSound from '../../sound/crash.wav';
import rideSound from '../../sound/ride.wav';

const Drum = () => {

  const drums = [
    {
      name: 'Hi Hat',
      audioFile: hiHatSound,
      key: 'e',
      image: ''
    },
    {
      name: 'Crash',
      audioFile: crashSound,
      key: 'r',
      image: ''
    },
    {
      name: 'Ride',
      audioFile: rideSound,
      key: 'y',
      image: ''
    },
    {
      name: 'Snare',
      audioFile: snareSound,
      key: 'd',
      image: ''
    },
    {
      name: 'Hi Tom',
      audioFile: hiTomSound,
      key: 'f',
      image: ''
    },
    {
      name: 'Middle Tom',
      audioFile: middleTomSound,
      key: 'g',
      image: ''
    },
    {
      name: 'Low Tom',
      audioFile: lowTomSound,
      key: 'h',
      image: ''
    },
    {
      name: 'Kick',
      audioFile: kickSound,
      key: 'v',
      image: ''
    },
  ];


  return <div className={"Drum"}>
    {
      drums.map(drumElement => <DrumElement
          key={drumElement.name}
          triggerKey={drumElement.key}
          drumElementName={drumElement.name}
          audioFile={drumElement.audioFile}
      />)
    }
  </div>


};

export default Drum;
