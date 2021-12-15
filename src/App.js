import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import MovingGradientCanvas from './components/MovingGradientCanvas';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import AfterHours from './pages/AfterHours';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route exact path="/work" component={Work} />
			<Route exact path="/after-hours" component={AfterHours} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
			<MovingGradientCanvas></MovingGradientCanvas>
			{/* <Canvas
				colorManagement
				camera={{ position: [0, 0, 120], fov: 20 }}></Canvas> */}
		</BrowserRouter>
	);
}

export default App;
