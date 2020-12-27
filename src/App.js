import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';
import Logo from './Component/Logo/Logo.js';
// import Slider from './Component/Slider/Slider.js'
import Discography from './Component/Discography/Discography.js';
import Modal from './Component/Modal/Modal.js';
import * as initialObj from './api/Initial/InitialObj';
import Profile_List from './Component/Profile_List/Profile_List';
import { useScrollFadeIn } from './api/hooks/useScrollFadeIn.js';

function App() {
  const [sliderObj, setSliderObj] = useState(initialObj.initialSliderObj)
  // const [slideIndex, setSlideIndex] = useState(0);
  const [discography, setDiscography] = useState(initialObj.initialDiscography);
  const [isModal, setIsModal] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(null);
  const [musicIndex, setMusicIndex] = useState(null);

  // const [scrollY, setScrollY] = useState(null);
  // const [windowHeight, setWindowHeight] = useState(null);

  // const scrollEvent = () => {
  //   setScrollY(window.scrollY);
  //   setWindowHeight(window.innerHeight);
  // }

  // const arrowRightClick = () => {
  //   let nextIndex = slideIndex + 1;
  //   nextIndex %= sliderObj.length;
  //   setSlideIndex(nextIndex)
  // }

  // const arrowLeftClick = () => {
  //   let nextIndex = slideIndex - 1;
  //   nextIndex = nextIndex === -1 ? sliderObj.length - 1 : nextIndex;
  //   setSlideIndex(nextIndex)
  // }

  const modalClickToggle = useCallback(
    (index = null) => {
      if (index !== null) {
        setAlbumIndex(index);
      }
      setIsModal(!isModal);
      setMusicIndex(null);
    },
    [albumIndex]
  );

  const musicClickToggle = useCallback(
    (index) => {
      if (index === musicIndex) {
        setMusicIndex(null);
        return
      }
      setMusicIndex(index);
    },
    [musicIndex]
  );

  return (
    <div className="App">
      <Logo />
      {/* <Slider /> */}
      {/* <div className="block"></div> */}
      <Discography
        discography={discography}
        musicClickToggle={musicClickToggle}
        modalClickToggle={modalClickToggle}
      />
      <Profile_List
        sliderObj={sliderObj}
      />
      {isModal ? <Modal
        modalClickToggle={modalClickToggle}
        musicClickToggle={musicClickToggle}
        albumIndex={albumIndex}
        musicIndex={musicIndex}
        discography={discography}
      />
        : null}
    </div>
  );
}

export default App;
