import NavBar from './components/NavBar.js';
import './App.css';
import Home from './pages/Home';
import Tippt from './pages/Tippt';
import Footer from './components/Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Route exact path="/" component={Home} />
			<Route exact path="/tippt" component={Tippt} />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
