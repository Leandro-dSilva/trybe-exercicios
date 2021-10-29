import './App.css';
import Tasksli from './component'
import data from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <Tasksli data={data} />
        
      </header>
    </div>
  );
}

export default App;
