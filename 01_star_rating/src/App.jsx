import './App.css'
import StarRating from './Star Component/Star';

function App() {

  return (
    <>
      <h1>Star Rating Component</h1>
      <StarRating numberOfStars={5} color="#4763ff" size="36" />
    </>
  )
}

export default App
