import React from "react"
import ReactDOM from 'react-dom/client'
import pizzaData from "./data"
import './index.css'



function App(){
    return(
        <div className="container">

        <Header />
        <Menu />
        <Footer />
        </div>
    )
}

function Header(){
    return(
        <header className="header">
            <h1>Pizza Restaurent</h1>
        </header>
    )
}

function Menu(){
   return (
    <main className="menu">
    <h2>Pizzas Menu</h2>
    <p>
         Authentic Italian cuisine. 6 creative dishes to choose from. All
         from our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza)=><Pizza pizzaObj = {pizza} key={pizza.name} />)}
      </ul>
</main>
   )
}

function Pizza({pizzaObj}){
    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : null}`}>
            <img src={pizzaObj.photoName} alt="" />

            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price} $</span>
                <button className="btn">Order </button>
            </div>
        </li>
    )
}


function Footer(){
    const hour= new Date().toLocaleTimeString();
    const openHour = 6;
    const closeHour= 20;
    const WhenOpen = hour >= openHour && hour <= closeHour;
    console.log(hour)
    return(
        <footer className="footer">
            <p>{WhenOpen ? <p> We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
                 online.</p> : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}</p>

                 <p>&copy; 2024 Your Website</p>
                <p>Designed by <a href="https://example.com">IsaieCode</a></p>
    
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)