import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

function Layout() {
	return (
		<>
			<Menu />
			<div className="page">
				<Outlet />
			</div>
		</>
	)
}

export default Layout