import React, { Suspense } from 'react'

import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

const Home = React.lazy(() => import('../pages/home/Home'))
const Stage = React.lazy(() => import('../pages/stage/Stage'))

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/stage' element={<Stage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRouter
