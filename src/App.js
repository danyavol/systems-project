import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import ScrollToTop from './components/scrollToTop/scrollToTop';

import Header from './components/header/header';

import Home from './pages/home/home';
import Intro from './pages/intro/intro';
import R1_G1 from './pages/r1_g1/r1_g1';
import R1_G2 from './pages/r1_g2/r1_g2';
import R1_G3 from './pages/r1_g3/r1_g3';
import R1_G4 from './pages/r1_g4/r1_g4';
import R2_G1 from './pages/r2_g1/r2_g1';
import R2_G2 from './pages/r2_g2/r2_g2';
import R3_G1 from './pages/r3_g1/r3_g1';
import R3_G2 from './pages/r3_g2/r3_g2';
import R3_G3 from './pages/r3_g3/r3_g3';
import R4 from './pages/r4/r4';
import Zakl from './pages/zakl/zakl';
import Ss from './pages/ss/ss';

function App() {

	// window.addEventListener('scroll', (e) => {
	// 	let menu = document.getElementById('menu');
	// 	let container = document.getElementById('main-container');
	// 	if (menu != null) {
	// 		let startPoint = container.offsetHeight - 15;
	// 		let endPoint = container.offsetTop + menu.offsetHeight - window.innerHeight + 15;
	// 		if (window.scrollY > endPoint) {
	// 			menu.style.top = (window.scrollY - endPoint) + 'px';
	// 		} else {
	// 			menu.style.top = '0px';
	// 		}
	// 	}
	// })

  return (
	<Router>
		<ScrollToTop />
		<div className="container-xl my-5 main-container">
			<div className="row h-75 justify-content-start">

				<Header />
				<div className="col-8 p-0">
					<div className="content border rounded shadow-sm p-3 bg-white">
						<Switch>
							<Route exact path="/systems-project">
								<Home />
							</Route>
							<Route exact path="/systems-project/intro">
								<Intro />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-1">
								<R1_G1 />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-2">
								<R1_G2 />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-3">
								<R1_G3 />
							</Route>
							<Route exact path="/systems-project/razdel-1/glava-4">
								<R1_G4 />
							</Route>
							<Route exact path="/systems-project/razdel-2/glava-1">
								<R2_G1 />
							</Route>
							<Route exact path="/systems-project/razdel-2/glava-2">
								<R2_G2 />
							</Route>
							<Route exact path="/systems-project/razdel-3/glava-1">
								<R3_G1 />
							</Route>
							<Route exact path="/systems-project/razdel-3/glava-2">
								<R3_G2 />
							</Route>
							<Route exact path="/systems-project/razdel-3/glava-3">
								<R3_G3 />
							</Route>
							<Route exact path="/systems-project/tehnicheskoe-zadanie">
								<R4 />
							</Route>
							<Route exact path="/systems-project/zakluchenie">
								<Zakl />
							</Route>
							<Route exact path="/systems-project/ispolzovannie-istochniki">
								<Ss />
							</Route>
						</Switch>
					</div>
				</div>
				
			</div>
		</div>
    </Router>
    
  );
}

export default App;
