//IMPORTS
import './App.css';
import MyNavbar from './components/MainNavbar/MyNavbar.component';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './components/MainFooter/MyFooter.component';
import MyAlert from './components/MainAlert/MyAlert.component';
import AllTheBooks from './components/AllTheBook/AllTheBooks.component';

//COMP
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <MyAlert />
      <AllTheBooks />
      <MyFooter />
    
    </div>
  );
}

export default App;
