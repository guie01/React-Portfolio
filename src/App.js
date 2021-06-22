import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigationbar from './components/Navbar'
import Welcome from './components/Welcome'
import About from './components/About'
import Project from './components/Project'
import Footer from './components/Footer'
import "./App.css"


export const App = () => {
    return (
        <div class = "main">
            <Navigationbar/>
            <Welcome/>
            <About/>
            <Project/>
            <Footer />
        </div>
    )
}

export default App
