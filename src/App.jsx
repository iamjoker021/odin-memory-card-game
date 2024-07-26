import { useEffect, useState } from 'react'
import Header from './Header'
import Gameboard from './Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState({bestScore: 0});
  const [imageList, setImageList] = useState([]);

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
    console.log(event.target)
    if (imageList) {
      if (imageList[event.target.dataset.id].clicked) {
        console.log(imageList[event.target.dataset.id].clicked);
        setBestScore({bestScore: Math.max(score, bestScore.bestScore)})
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
        bestScore={bestScore.bestScore}
      />
      <Gameboard 
        imageList={imageList}
        handleClick={updateScoreOnClick}
      />
    </>
  )
}

export default App
