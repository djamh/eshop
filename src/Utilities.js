import { useState, useEffect } from 'react';
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from './firebase'; // Import your Firestore instance


//Testing function
export const addUserBasketToFirestore = async (userId, basket) => {
  try {
    const userBasketRef = doc(db, 'userBaskets', userId);
    await setDoc(userBasketRef, { basket });
    console.log("Basket written to Firestore for user:", userId);
  } catch (error) {
    console.error("Error writing to Firestore:", error);
  }
};


//update a userBasket
export const updateUserBasket = async (userId, basket) => {
  if (!userId) return; // Ensure the user ID is provided

  try {
    const userBasketRef = doc(db, 'userBaskets', userId);
    await setDoc(userBasketRef, { basket });
  } catch (error) {
    console.error("Error updating user basket:", error);
    // Handle the error appropriately
  }
};

// Load a user basket at logIn
export const loadUserBasket = async (userId, dispatch) => {
  if (!userId) return; // Ensure the user ID is provided

  try {
    const userBasketRef = doc(db, 'userBaskets', userId);
    const docSnap = await getDoc(userBasketRef);

    if (docSnap.exists()) {
      console.log("Loaded basket:", docSnap.data().basket); // Debugging line
      const basket = docSnap.data().basket;
      // Dispatch an action to update the basket in your context or state management
      dispatch({
        type: 'SET_BASKET',
        basket: basket,
      });
    } else {
      console.log("No basket found for this user.");
      // Handle the case where there is no basket for the user
    }
  } catch (error) {
    console.error("Error loading user basket:", error);
    // Handle the error appropriately
  }
};

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }
  
      // Add event listener
      window.addEventListener('resize', handleResize);
  
      // Call handler right away so state gets updated with initial window size
      handleResize();
  
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures effect is only run on mount and unmount
  
    return isMobile;
  }
  export default useIsMobile;


  