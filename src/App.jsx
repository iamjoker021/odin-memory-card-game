import { useEffect, useState } from 'react'
import Header from './Header'
import Gameboard from './Gameboard';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState({bestScore: 0});
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const dogImageApi = 'https://dog.ceo/api/breeds/image/random/12';
    const images = fetch(dogImageApi)
      .then(response => response.json())
      .then(data => {
        setImageList(data['message'].map((imageUrl, index) => {
          return {id: index, imageUrl: imageUrl, clicked: false}
        }))
      })
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
