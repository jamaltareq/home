import { Component, createContext, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';
import Shop from './Components/Shop/Shop';
import './dark_mode.css'
import { useContext } from 'react';
import ThemeContextProvider from './Theme/Theme';
import DataContext from './Data/Data';

let routers = createBrowserRouter([{
  path: "", element: <Layout />, children: [
    { path: "", element: <Home /> },
    { path: "home", element: <Home /> },
    { path: "foodie", element: <Home /> },
    { path: "menu", element: <Menu /> },
    { path: "contact", element: <Contact /> },
    { path: "shop", element: <Shop /> },
  ]
}
])

function App() {
  return (
    <>
      <DataContext>
        <ThemeContextProvider>
          <RouterProvider router={routers}></RouterProvider>
        </ThemeContextProvider>
      </DataContext>
    </>
  );
}

export default App;
