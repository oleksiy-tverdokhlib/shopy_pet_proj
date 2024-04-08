import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import Footer from '../Footer/Footer'
import Help from '../Help/Help'
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions'
import { ROUTES } from '../../common/routes'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../redux/categories/categoriesSlice'
import { fetchproducts } from '../../redux/products/productsSlice'
import ProductPage from '../Products/ProductPage'
import CategoryPage from '../Categories/CategoryPage'
import UserForm from '../User/UserForm'
import Profile from '../Profile/Profile'
import Cart from '../Cart/Cart'
import Payment from '../Payment/Payment'

const App = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchCategories())
		dispatch(fetchproducts())
	}, [dispatch])
	return (
		<BrowserRouter>
			<div className="app">
				<Header />
				<UserForm />
				<div className="container">
					<Sidebar />
					<Routes>
						<Route index element={<Home />} />
						<Route path={ROUTES.HELP} element={<Help />} />
						<Route path={ROUTES.TERMS} element={<TermsAndConditions />} />
						<Route path={ROUTES.PRODUCT} element={<ProductPage />} />
						<Route path={ROUTES.SINGLE_CATEGORY} element={<CategoryPage />} />
						<Route path={ROUTES.PROFILE} element={<Profile />} />
						<Route path={ROUTES.CART} element={<Cart />} />
						<Route path={ROUTES.PAYMENT} element={<Payment />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
