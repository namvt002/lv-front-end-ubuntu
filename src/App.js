import { useEffect } from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/footer.component";
import Nav from "./components/Nav";
import { Link, Outlet } from 'react-router-dom';
import { route } from "./Router";
import Sidebar from "./components/Sidebar";


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
		
		<Routes>
			{menu}
		</Routes>

		
    </div>
  );
}

export default App;
