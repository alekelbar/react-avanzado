import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg'
import { routes } from '../01-lazy-load/routes/routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>


          <Routes>
            {
              routes.map(({ Component, path }) =>
                <Route key={path} path={path} element={<Component />} />
              )
            }
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}