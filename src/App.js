import NavBar from './components/NavBar.js';
import './App.css';
import Home from './pages/Home';
import Tippt from './pages/Tippt';
import Footer from './components/Footer';
import DoodleVr from './pages/DoodleVr';
import ScrollToTop from './ScrollToTop';
import Work from './pages/Work.js';
import styled from 'styled-components';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter,
} from 'react-router-dom';

const Layout = styled.div`
	display: flex;
	flex-direction: column;
`;

function App() {
	return (
		<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
			<ScrollToTop />
			<Layout>
				<NavBar />

				<span>
					<Route exact path="/" component={Home} />
					<Route exact path="/tippt" component={Tippt} />
					<Route exact path="/doodlevr" component={DoodleVr} />
					<Route exact path="/work" component={Work} />
				</span>

				<Footer />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
