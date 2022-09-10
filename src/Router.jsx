import Home from './pages/Home'
import NotFound from './pages/_404'

const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/*', exact: true, name: 'Product detail', component: <NotFound/>},
]

export default route