import FavouriteSites from "./components/FavouriteSites"
import Profile from"./components/Profile"
import Gallery from"./components/Gallery"
import "./App.css"
function App() {

  return (
    <div className="App">
      <div id="FavouriteSites" className="content"><FavouriteSites /></div>
      <div id="Profile" className="content"><Profile /></div>
      <div id="Gallery" className="content"><Gallery /></div>
    </div>
  )
}

export default App;
