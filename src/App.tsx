import './App.css'
import HeadComponent from './Components/Header/headComponent'
import TitleComponent from './Components/Title/titleComponent'
import SearchRD from './Components/Search/SearchRD'

function App() {
  return (
    <div className='app-container'>
      <HeadComponent></HeadComponent>
      <TitleComponent></TitleComponent>
      <SearchRD></SearchRD>
    </div>
  )
}

export default App
