import logo from './logo.svg';
import './App.css';
import { useState} from 'react';
import CountBox from './components/CountBox';
import counterStore from './stores/counterStore';


function App() {
  // const [ count, setCount ] = useState(0);
const { count, increase, decrease, increaseBy } = counterStore();
  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={() => increaseBy(10)}>10씩 증가</button>
      <CountBox/>
    </div>
  );
}

export default App;
