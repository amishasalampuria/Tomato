import {createContext, useEffect, useState} from 'react';
import { food_list } from '../assets/frontend_assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});

    const addToCart =(itemId)=>{
            if(!cartItems[itemId]){
                // setCartItems((prev)=>([...prev, {itemId:1}]))
                // setCartItems([...StoreContext.itemId, {itemId:1}])
                // setCartItems(prevItems => ({ ...prevItems, [itemId]: 1 }));
            }
            else{
                // setCartItems((prev)=>([...prev, {itemId:prev[itemId]+1}]))
                // setCartItems([...StoreContext.itemId, {itemId:itemId+1}])
                // setCartItems(prevItems => ({ ...prevItems, [itemId]: prevItems[itemId] + 1 }));
            }

            setCartItems(prevItems => {
                const updatedItems = { ...prevItems };
                if (!updatedItems[itemId]) {
                    updatedItems[itemId] = 1;
                } else {
                    updatedItems[itemId] += 1;
                }
                return updatedItems;
            });
    }

    const removeFromCart =(itemId)=>{
        // setCartItems((prev)=>([...prev, {itemId:prev[itemId]-1}]))
        // setCartItems([...StoreContext.itemId, {itemId:itemId-1}])
        // if (cartItems[itemId] > 1) {
        //     setCartItems(prevItems => ({ ...prevItems, [itemId]: prevItems[itemId] - 1 }));
        // } else {
        //     const updatedItems = { ...cartItems };
        //     delete updatedItems[itemId];
        //     setCartItems(updatedItems);
        // }

        setCartItems(prevItems => {
            const updatedItems = { ...prevItems };
            if (updatedItems[itemId] > 1) {
                updatedItems[itemId] -= 1;
            } else {
                delete updatedItems[itemId];
            }
            return updatedItems;
        });
    }

    useEffect(()=>{
        console.log(cartItems)
    }, [cartItems])

    //test
    // for(const item in cartItems){
    //     console.log('item '+ item)
    //     console.log('value '+ cartItems[item])
    // }

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for (const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount
    }

    const contextValue ={
         //now we can access it anywhere
        food_list,     
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }
    return(
        
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

