import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {firsName} from './components/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Header></Header> */}
        <h1>hello world</h1>
        <h1>my name is {firsName}</h1>
    </div>
  );
}

export default App;
