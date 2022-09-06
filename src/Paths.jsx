import { Outlet, Route, Routes } from 'react-router-dom'

import App from './components/App'
import Serie from './components/Serie'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route index element={<App />} />
        <Route path=':idSerie' element={<Serie />} />
      </Route>
    </Routes>
  )
}

export default Paths
