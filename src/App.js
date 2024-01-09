import './App.css';
import MainLayout from './Layout/MainLayout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import AddPage from './Pages/AddPage/AddPage';

function App() {
  return (
    <BrowserRouter >
    <Routes>
      {/* <Route element={<MainLayout></MainLayout> }
      /> */}
      <Route element={<MainLayout></MainLayout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add' element={<AddPage></AddPage>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
