import './App.css';
import Header from './components/Header';
import Title from './components/Title';
import Map from './components/Map';
const App = () => {
  
  return(
    <div className='container'>
      <Header menu={['Москва','Питер']}/>
      <div className='content'>
        <Title />
        <Map />
      </div>
      <p>Здарова, гей!</p>
    </div>
  );
};

export default App;
