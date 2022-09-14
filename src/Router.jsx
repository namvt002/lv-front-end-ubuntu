import Home from './pages/Home'
import ProductDetail from './pages/Home/Dashboard/ProductDetail'
import NotFound from './pages/_404'

const route = [
    { path: '/', exact: true, name: 'Home', component: <Home /> },
    { path: '/san-pham/:id', exact: true, name: 'ProductDetail', component: <ProductDetail /> },
    { path: '/*', exact: true, name: 'Product detail', component: <NotFound/>},
]

export default route