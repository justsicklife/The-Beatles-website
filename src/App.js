import { useState, useCallback } from 'react';
import './App.css';
import Discography from './Component/Discography/Discography.js';
import Modal from './Component/Modal/Modal.js';
import * as initialObj from './api/Initial/InitialObj';
import Profile_List from './Component/Profile_List/Profile_List';
import Navigation from "./Component/Navigation/Navigation.js";

function App() {
  const [sliderObj, setSliderObj] = useState(initialObj.initialSliderObj)
  const [discography, setDiscography] = useState(initialObj.initialDiscography);
  const [isModal, setIsModal] = useState(false);
  const [albumIndex, setAlbumIndex] = useState(null);
  const [musicIndex, setMusicIndex] = useState(null);

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

  // 반응형으로 navbar 메뉴 처럼 만들기
  // 모달창 어떻게하지.

  return (
    <div className="App">
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
        <a id="Discography_page">
          <Discography
            discography={discography}
            musicClickToggle={musicClickToggle}
            modalClickToggle={modalClickToggle}
          />
        </a>
        <a id="Profile_page"
        >
          <Profile_List
            sliderObj={sliderObj}
          />
        </a>
      </main>
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
