import { Link, Navigate, Route, Routes } from "react-router-dom"
import { HomePage, AboutPage, LoginPage } from "./"
import { UserProvider } from "./context/UserProvider"
import { Navbar } from "./Navbar"
export const MainApp = () => {
  return (
    <UserProvider>
      {/* <h1>Mainx  App</h1> */}
      <Navbar/>
    
      <hr />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* /Not Found */}
        {/* <Route path='/*' element={<LoginPage/>}/> */}

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  )
}
