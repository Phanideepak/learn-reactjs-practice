import React from 'react'
import Pizza from '../Pizza/Pizza'
import pizzaData from '../../data/data'



const Menu = () => {
  return (
    <main className = 'menu'>
        <h2>Our Menu</h2>
        {
           pizzaData.length > 0 ? (
               <>
                <p> Authentic Italian cuisine. 6 creative dishes to choose from. All
                from our stone oven, all organic, all delicious.
                </p>

                <ul className='pizzas'>
                  {
                    pizzaData.map(pizza=>(
                       <Pizza key={pizza.name} pizzaObj={pizza} />
                    ))
                  }
                </ul>

               </>
           ) : (
            <p>We're still working on our menu. Please come back later :)</p>
           )
        }
    </main>
  )
}

export default Menu