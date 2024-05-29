import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/HomePage';

function App() {
	return (
		<>
			<div className=''>
				<Navbar />
				<Home />
				<AboutUs />
				{/* <Carousel /> */}
			</div>
		</>
	);
}

export default App;
