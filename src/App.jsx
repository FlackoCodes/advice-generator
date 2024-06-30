import { useState , useEffect } from 'react'
import iconDice from './images/icon-dice.svg'
import mobileDivider from './images/pattern-divider-mobile.svg'
import desktopDivider from './images/pattern-divider-desktop.svg'


function App() {
  const [ advice , setAdvice ] = useState('');
  const [ id , setId ] = useState(null);
  
  const advieApi = 'https://api.adviceslip.com/advice'

 
  const fetchAdvice = async ()=>{
    try {
      const res = await fetch(advieApi)
      const data = await res.json()
      setId(data.slip.id)
      setAdvice(data.slip.advice)      
    } catch (error) {
      console.log('Error fecthing data', error);
    }
  }
 useEffect(()=>{
  fetchAdvice()
 }, [])

 
  return (
    <>
      <div className="container">
          <h3 className="advice-id">
          Advice #{id}
          </h3>
          <p className="quote">
            {advice}
          </p>
          <picture>
                <source media="(min-width:768px)" srcSet={desktopDivider} />
                <source media="(min-width:465px)" srcSet="img_white_flower.jpg" />
                <img src={mobileDivider} alt="img-divider" />
              </picture>
                </div>
        <div className='dice'>
        <img 
        onClick={fetchAdvice}
            className='icon-dice'
              src={iconDice} 
              alt="icon-dice" />
        </div>
      
    </>
  )
}

export default App
