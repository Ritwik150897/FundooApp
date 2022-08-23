import { Provider } from 'react-redux';
import './App.css';
// import Dashboard from './components/Dashboard/Dashboard';
// import Signin from './components/signin/signin';
// import Signup from './components/signup/signup';
// import TakeNoteOne from './components/TakeANoteOne/TakeNoteOne';
// import TakeNoteTwo from './components/TakeANoteTwo/TakeNoteTwo';
// import TakeNoteThree from './components/TakeANoteThree/TakeNoteThree';
// import Header from './components/Header/Header';
import Router1 from './components/router/router';
import store from './components/redux/store';



function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Router1 />
      </Provider>
      
      {/* <Signin />
      <Signup />
      <Header />
      <TakeNoteOne />
      <TakeNoteTwo />
      <TakeNoteThree /> 
      <Dashboard /> */}
    </div>
  );
}

export default App;
