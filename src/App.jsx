import { useEffect, useState } from 'react'
import Header from './Header'
import Gameboard from './Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imageList, setImageList] = useState([])

  useEffect(() => {
    setImageList(Array.from(
        {length: 12},
         (v, index) => { 
          return {id: index, imageUrl: "https://images.dog.ceo/breeds/hound-ibizan/n02091244_1340.jpg", clicked: false}
        }
      )
    );
  }, [bestScore])
  
  

  function updateScoreOnClick(event) {
    if (imageList) {
      if (imageList[event.target.dataset.id].clicked) {
        // Check if High Score
        if (score > bestScore) {
          setBestScore(score);
        }
        else {
          setBestScore(bestScore);
        }
        // Reset Score
        setScore(0);
      }
      else {
        imageList[event.target.dataset.id].clicked = true;
        setScore(score + 1);
      }
    }
  }


  return (
    <>
      <Header 
        score={score}
        bestScore={bestScore}
      />
      <Gameboard 
        imageList={imageList}
        handleClick={updateScoreOnClick}
      />
    </>
  )
}

export default App
