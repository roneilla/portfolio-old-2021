import NavBar from './components/NavBar.js';
import Footer from './components/Footer';

import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	BrowserRouter,
	Redirect,
} from 'react-router-dom';
import styled from 'styled-components';

import ScrollToTop from './ScrollToTop';

import Home from './pages/Home';
import Tippt from './pages/projects/Tippt';
import DoodleVr from './pages/projects/DoodleVr';
import Work from './pages/Work.js';
import Services from './pages/Services.js';
import NotFoundPage from './pages/NotFoundPage.js';

const Layout = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function App() {
	return (
		<BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
			<ScrollToTop />
			<Layout>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/tippt" component={Tippt} />
					<Route exact path="/doodlevr" component={DoodleVr} />
					<Route exact path="/work" component={Work} />
					<Route exact path="/services" component={Services} />
					<Route component={NotFoundPage} />
				</Switch>

				<Footer />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
