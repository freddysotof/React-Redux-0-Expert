import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute, PublicRoute } from '../router'
export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path='/login/*' element={
          <PublicRoute>
            <Routes>
              <Route path='/*' element={<LoginPage/>}/>
            </Routes>
          </PublicRoute>
        } />

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
        {/* <Route path='login' element={<LoginPage />}></Route> */}
        {/* <Route path='/*' element={<HeroesRoutes/>}></Route> */}
      </Routes>
    </>
  )
}
