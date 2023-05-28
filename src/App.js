import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
function App() {
  const [progress , setProgress] = useState(10);
  return (
    <Router>
    <LoadingBar
        color='#7cc1d6'
        progress={progress}
      />
    <Navbar/>
      <Routes>

        <Route index={true} key="top"  element={<News category="top" setProgress={setProgress}/>}/>
        <Route exact path='/sports' key="sports"  element={<News category="sports" setProgress={setProgress}/>}/>
        <Route exact path='/technology' key="technology"  element={<News category="technology" setProgress={setProgress}/>}/>
        <Route exact path='/business' key="business"  element={<News category={"business"} setProgress={setProgress}/>}/>
        <Route exact path='/entertainment' key="entertainment"  element={<News category="entertainment" setProgress={setProgress}/>}/>
        <Route exact path='/health' key="health"  element={<News category="health" setProgress={setProgress}/>}/>
        <Route exact path='/science' key="science"  element={<News category="science" setProgress={setProgress}/>}/>
   
      </Routes>
    </Router>
  );
}

export default App;
