import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/home/Home';
import List from './Pages/List/List';
import Login from './Pages/Login/Login';
import New from './Pages/New/New';
import Single from './Pages/Single/Single';
function App() {
  return (
    <div>
      <Routes>
        <Route index path="/" element={<Home></Home>}/>
        <Route path="Login"  element={<Login></Login>}/>
        <Route path="user">
          <Route index element={<List></List>}></Route>
          <Route path=':userId' element={<Single/>}></Route>
          <Route path='new' element={<New/>}/>
        </Route>
        <Route path="products">
          <Route index element={<List></List>}></Route>
          <Route path=':productsId' element={<Single/>}></Route>
          <Route path='new' element={<New/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
