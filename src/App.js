import Header from './header.js';
import GreetMsg from './greet.js';
import GameTypes from './content list.js';
import Footer from './footer.js';

function App() {
  return (
    <div className="App">
        <Header/>
          <GreetMsg/>
        <GameTypes/>
        <Footer/>
    </div>
  );
}

export default App;
