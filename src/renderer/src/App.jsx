import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import SearchBar from './Search-bar/SearchBar'
import '../src/App.css/App.css'
import Topic from './Topic/Topic'

function App() {
  return (
    <div className='container'>
      <Topic />
      <div className='searchBar'>
        <SearchBar />
      </div>
    </div>

  )
}

export default App

