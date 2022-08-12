import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Signin from './components/signin/signin';
// import Signup from './components/signup/signup';
// import TakeNoteOne from './components/TakeANoteOne/TakeNoteOne';
// import TakeNoteTwo from './components/TakeANoteTwo/TakeNoteTwo';
// import TakeNoteThree from './components/TakeANoteThree/TakeNoteThree';
// import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
       {/*<Signin/>
      <Signup/> 
      <Header/>
      <TakeNoteOne/>
      <TakeNoteTwo/>
      <TakeNoteThree/> */}  
      <Dashboard/>
    </div>
  );
}

export default App;
