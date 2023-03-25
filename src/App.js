import './App.css';
import Banner from './sections/Banner';
import Footer from './sections/Footer';
import Receipies from './sections/Receipies';


function App() {
  return (
    <div className="lg:w-3/4 md:w-full w-full m-auto">
   <Banner></Banner>
   <Receipies></Receipies>
   <Footer></Footer>

    </div>
  );
}

export default App;
