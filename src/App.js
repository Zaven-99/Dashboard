import './App.css';
import FinalizePage from './Components/pages/finalize/FinalizePage';
import MainPage from './Components/pages/main/MainPage';
import ResultPage from './Components/pages/result/ResultPage';
import './Components/resetStyles/reset.css'

import {Routes , Route} from 'react-router-dom'
 
function App() {
  return (
    <div className="App">
        <Routes>
        <Route index path = '/' element = {<MainPage/>}/>
        <Route index path = 'Finalize/' element = {<FinalizePage/>}/>
        <Route index path = 'Result/' element = {<ResultPage/>}/>

        </Routes>

        
    </div>
  );
}

export default App;
