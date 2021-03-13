import NavBar from './components/NavBar.js';
import './App.css';
import Home from './pages/Home';
import Tippt from './pages/Tippt';
import Footer from './components/Footer';
import DoodleVr from './pages/DoodleVr';
import ScrollToTop from './ScrollToTop';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
			<ScrollToTop />
			<NavBar />
			<Route exact path="/" component={Home} />
			<Route exact path="/tippt" component={Tippt} />
			<Route exact path="/doodlevr" component={DoodleVr} />

			<Footer />
		</BrowserRouter>
	);
}

export default App;
