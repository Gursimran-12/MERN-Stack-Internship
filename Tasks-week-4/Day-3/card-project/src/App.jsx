import './App.css'
import img from './images/Nature.jpg' 
import pic from './images/nature2.jpg'
import {Card} from './components/card'

function App() {

  return (
    <>
    <Card className= "cardStyle" value= {'Card1'} img = {img} description={'Description for Card 1'}/>
    <Card className= "cardStyle" value= {'Card2'} img = {pic} description={'Descrription for card 2'}/>
    </>
  )
}

export default App
