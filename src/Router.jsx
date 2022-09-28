import ProductManager from './pages/Admin/ProductManager'
import TagManager from './pages/Admin/TagManager'
import Home from './pages/Home'
import CategoryDetail from './pages/Home/Dashboard/CategoryDetail'
import NewsDetail from './pages/Home/Dashboard/NewsDetail'
import ProductDetail from './pages/Home/Dashboard/ProductDetail'
import NotFound from './pages/_404'

export const route = [
    { path: '/', exact:true,  name: 'Home', component: <Home /> },
    { path: '/san-pham/:id',  name: 'ProductDetail', component: <ProductDetail /> },
    { path: '/danh-muc/:seo', name: 'CategoryDetail', component: <CategoryDetail /> },
    { path: '/tin-tuc/:seo', name: 'NewsDetail', component: <NewsDetail /> },

    { path: '/quanly/sanpham', name: 'ProductManager', component: <ProductManager /> },
    { path: '/quanly/tag', name: 'ProductManager', component: <TagManager /> },
    { path: '*', name: 'Page Note Found', component: <NotFound/>},

]

export const routeAdmin = [
    
]
