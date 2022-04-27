import './assets/css/App.css';
import Grafica from "./components/grafica";
import Header from "./components/header";
import Select from './components/select';

function App() {
  return (
    <div>
      <Header />
      <Select />
      <Grafica />
    </div>
  );
}

export default App;
