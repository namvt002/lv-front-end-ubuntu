import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import route from "./Router";


function App() {

	let menu = route.map((item, idx) => {
		return <Route key={idx} path={item.path} element={item.component} />
	})


  return (
    <div className="App">
			<Nav></Nav>
			<Routes>
				{menu}
			</Routes>
    </div>
  );
}

export default App;
