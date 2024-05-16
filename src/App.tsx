import Home from "pages/UsersApp/Home/Home"
import Layout from "pages/UsersApp/Layout/Layout"
import Users from "pages/UsersApp/Users/Users"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "styles/GlobalStyles"

function App () {
  return (
    <>
    <BrowserRouter>
      <GlobalStyles />
        <Layout>
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/users' element={<Users />}/>          
          <Route path='*' element='Page Not Found'/>
        </Routes>        

      </Layout>      
      </BrowserRouter>
    
    </>
  
  )
}

export default App
