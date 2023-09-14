import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProductList from "../../components/Card/ProductList"
import { useState } from "react"
import img1 from '../../components/Card/assets/younglacompress.webp';
import img2 from '../../components/Card/assets/youngla.png'
const Home = function (){
    const [isOpen, setIsOpen] = useState(false)
    // On click sidebar opens
    const openSidebar = ()=>{
        setIsOpen(()=> true)
    }
    // On click sidebar closes
    const closeSidebar = ()=>{
        setIsOpen(()=> false)
    }

    const [countOne, setCountOne] = useState(1);
    const [countTwo, setCountTwo] = useState(1);
    const [countThree, setCountThree] = useState(1);
    const [countFour, setCountFour] = useState(1);
    const [countFive, setCountFive] = useState(1);
    const [countSix, setCountSix] = useState(1);
    const [countSeven, setCountSeven] = useState(1);
    const [countEight, setCountEight] = useState(1);
    const [countNine, setCountNine] = useState(1);
    
    const handleAddOne = () => {
      setCountOne((prev)=> prev + 1)
  }

  const handleMinusOne = () => {
    setCountOne((prev)=> prev - 1)
  };
///////////////////////////

  const handleAddTwo = () => {
      setCountTwo((prev)=> prev + 1)
  }

  const handleMinusTwo = () => {
    setCountTwo((prev)=> prev - 1)
  };

  /////////////////

  const handleAddThree = () => {
    setCountThree((prev)=> prev + 1)
}

const handleMinusThree = () => {
  setCountThree((prev)=> prev - 1)
};

//////////////
const handleAddFour = () => {
  setCountFour((prev)=> prev + 1)
}

const handleMinusFour = () => {
setCountFour((prev)=> prev - 1)
};

//////////
const handleAddFive = () => {
  setCountFive((prev)=> prev + 1)
}

const handleMinusFive = () => {
setCountFive((prev)=> prev - 1)
};

////////////

const handleAddSix = () => {
  setCountSix((prev)=> prev + 1)
}

const handleMinusSix = () => {
setCountSix((prev)=> prev - 1)
};
////////////
const handleAddSeven = () => {
  setCountSeven((prev)=> prev + 1)
}

const handleMinusSeven = () => {
setCountSeven((prev)=> prev - 1)
};
//////////////
const handleAddEight = () => {
  setCountEight((prev)=> prev + 1)
}

const handleMinusEight = () => {
setCountEight((prev)=> prev - 1)
};
////////

const handleAddNine = () => {
  setCountNine((prev)=> prev + 1)
}

const handleMinusNine = () => {
setCountNine((prev)=> prev - 1)
};

    
  
    const product = [
     {
      img: img1,
      name: 'SUPERHERO SHIRT',
      price: '38.00',
      inStock: 7,
      count: countOne,
      handleAdd: handleAddOne,
      handleMinus: handleMinusOne,
      id: 1
     },
      {
      img: img2,
      name: 'CLASSIC T-SHIRT',
      price: '48.00',
      inStock: 8,
      count: countTwo,
      handleAdd: handleAddTwo,
      handleMinus: handleMinusTwo,
      id: 2,
     },
      {
      img: img1,
      name: 'SUPERHERO SHIRT',
      price: '38.00',
      inStock: 10,
      count: countThree,
      handleAdd: handleAddThree,
      handleMinus: handleMinusThree,
      id: 3,
     },
      {
      img: img2,
      name: 'CLASSIC T-SHIRT',
      price: '48.00',
      inStock: 1,
      count: countFour,
      handleAdd: handleAddFour,
      handleMinus: handleMinusFour,
      id: 4,
     },
      {
      img: img1,
      name: 'CLASSIC T-SHIRT',
      price: '48.00',
      inStock: 30,
      count: countFive,
      handleAdd: handleAddFive,
      handleMinus: handleMinusFive,
      id: 5,
     },
      {
      img: img2,
      name: 'SUPERHERO SHIRT',
      price: '38.00',
      inStock: 10,
      count: countSix,
      handleAdd: handleAddSix,
      handleMinus: handleMinusSix,
      id: 6,
     },
      {
      img: img1,
      name: 'CLASSIC T-SHIRT',
      price: '48.00',
      inStock: 3,
      count: countSeven,
      handleAdd: handleAddSeven,
      handleMinus: handleMinusSeven,
      id: 7,
     }, 
      {
      img: img2,
      name: 'SUPERHERO SHIRT',
      price: '38.00',
      inStock: 7,
      count: countEight,
      handleAdd: handleAddEight,
      handleMinus: handleMinusEight,
      id: 8,
     },
      {
      img: img1,
      name: 'CLASSIC T-SHIRT',
      price: '48.00',
      inStock: 4,
      count: countNine,
      handleAdd: handleAddNine,
      handleMinus: handleMinusNine,
      id: 9,
     }
    ];
  

    const [cart, setCart] = useState([]);

    const addToCart = (productToAdd) => {
  
      const isProductInCart = cart.some((product) => product.id === productToAdd.id);
  
      if (!isProductInCart) {
        setCart([...cart, productToAdd]);
      }
    };
const cartCount = cart.length

console.log(cartCount)
    const removeFromCart = (productId) => {

        const newCart = cart.filter((product) => product.id !== productId);
        setCart(newCart)
    };
    
    // const deleteFromPlaylist = (trackToRemove)=>{
    //   const removeFromPlaylist = playlist.filter((track => track !== trackToRemove))
    //   setPlaylist(removeFromPlaylist)
    // }
  
  

    return(
        <div>
            <Navbar
            cartCount={cartCount}
            handleAddOne={handleAddOne} handleMinusOne={handleMinusOne} 
            handleAddTwo={handleAddTwo} handleMinusTwo={handleMinusTwo} 
            handleAddThree={handleAddThree} handleMinusThree={handleMinusThree} 
            handleAddFour={handleAddFour} handleMinusFour={handleMinusFour} 
            handleAddFive={handleAddFive} handleMinusFive={handleMinusFive} 
            handleAddSix={handleAddSix} handleMinusSix={handleMinusSix} 
            handleAddSeven={handleAddSeven} handleMinusSeven={handleMinusSeven}
            handleAddEight={handleAddEight} handleMinusEight={handleMinusEight}
            handleAddNine={handleAddNine} handleMinusNine={handleMinusNine} 
            removeFromCart={removeFromCart} cart={cart} isOpen={isOpen} openSidebar={openSidebar} closeSidebar={closeSidebar} 
            />
            <ProductList 
            isOpen={isOpen}
            product={product} 
            addToCart={addToCart}
            handleAddOne={handleAddOne} handleMinusOne={handleMinusOne} 
            handleAddTwo={handleAddTwo} handleMinusTwo={handleMinusTwo} 
            handleAddThree={handleAddThree} handleMinusThree={handleMinusThree} 
            handleAddFour={handleAddFour} handleMinusFour={handleMinusFour} 
            handleAddFive={handleAddFive} handleMinusFive={handleMinusFive} 
            handleAddSix={handleAddSix} handleMinusSix={handleMinusSix} 
            handleAddSeven={handleAddSeven} handleMinusSeven={handleMinusSeven}
            handleAddEight={handleAddEight} handleMinusEight={handleMinusEight}
            handleAddNine={handleAddNine} handleMinusNine={handleMinusNine}
            />
            <Footer />
        </div>
    )
}

export default Home