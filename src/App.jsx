import './App.css'
import { Button } from './componentes/Button'
import RandomComponent from './componentes/RandomComponent'
import CompWithProps from './componentes/CompWithProps';

function App() {
  return (
    <>
      <h1>Mi pagina con vite..!!</h1>
      <Button />
      <RandomComponent /> {}
      <CompWithProps /> {}
    </>
  )
}


//prueba 3
/*function App(){
  return (
    <>
      <h1>PUEBA 3</h1>
      <Button/>
    </>
  )
}*/



/*import { List } from './componentes/List'
import { WapperList } from './componentes/WrapperList'

function App(){
  return(
  <>
    <WapperList>
      <List/>
    </WapperList>
  </>
  )
}*/
/*import { Button } from './componentes/Button'
function App() {

  const buttonText = "Count : "
  return (
    <>
      <h1>probando  en vite</h1>
      <Button text={buttonText}/>
    </>
  )
}*/

export default App
