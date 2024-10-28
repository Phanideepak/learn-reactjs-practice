import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import './index.css'

function App(){
    return (
      <div className='container'>
        <Header />
        <Menu />
        <Footer />
      </div>
    
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
