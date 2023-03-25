import logo from './logo.svg';
import './App.css';
import Banner from './sections/Banner';
import Receipies from './sections/Receipies';
import RecipeModal from './sections/RecipeModal';

function App() {
  return (
    <div className="w-[1440px] m-auto">
   <Banner></Banner>
   <Receipies></Receipies>
   <RecipeModal></RecipeModal>
    </div>
  );
}

export default App;
