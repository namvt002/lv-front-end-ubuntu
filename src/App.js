import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/footer.component";
import Nav from "./components/Nav";
import route from "./Router";


function App() {

	let menu = route.map((item, idx) => {
		return <Route key={idx} path={item.path} element={item.component} />
	})

	const { pathname } = useLocation();

	useEffect(() => {
	  window.scrollTo(0, 0);
	}, [pathname]);


  return (
    <div className="App">
			<Nav></Nav>
			<Routes>
				{menu}
			</Routes>
			<Footer />
    </div>
  );
}

export default App;
