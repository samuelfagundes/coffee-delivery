import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
