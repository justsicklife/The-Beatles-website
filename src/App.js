import { createContext, useState } from 'react';
import './App.css';
import Logo from './Component/Logo/Logo.js';
import Slider from './Component/Slider/Slider.js'
import Discography from './Component/Discography/Discography.js';
import Modal from './Component/Modal/Modal.js';
import * as initialObj from './api/Initial/InitialObj';

export const AppContext = createContext(null);

function App() {
  const [sliderObj, setSliderObj] = useState(initialObj.initialSliderObj)
  const [slideIndex, setSlideIndex] = useState(0);
  const [discography, setDiscography] = useState(initialObj.initialDiscography);
  const [isModal, setIsModal] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(null);
  const [musicIndex, setMusicIndex] = useState(null);

  const arrowRightClick = () => {
    let nextIndex = slideIndex + 1;
    nextIndex %= sliderObj.length;
    setSlideIndex(nextIndex)
  }

  const arrowLeftClick = () => {
    let nextIndex = slideIndex - 1;
    nextIndex = nextIndex === -1 ? sliderObj.length - 1 : nextIndex;
    setSlideIndex(nextIndex)
  }

  const modalClickToggle = (index = null) => {
    if (index !== null) {
      setAlbumIndex(index);
    }
    setIsModal(!isModal);
    setMusicIndex(null);
  }

  const musicClickToggle = (index) => {
    if (index === musicIndex) {
      setMusicIndex(null);
      return
    }
    setMusicIndex(index);
  }

  return (
    <AppContext.Provider value={{ musicIndex, musicClickToggle, albumIndex, modalClickToggle, arrowLeftClick, arrowRightClick, sliderObj, slideIndex, discography }}>
      <div className="App">
        <Logo />
        <Slider />
        <Discography />
        {isModal ? <Modal /> : null}
      </div>
    </AppContext.Provider>
  );
}

export default App;
