import React, { useState } from 'react';

const Cc = () => {

    return ( 
        <div className="w-full my-16 tablet:mx-auto tablet:container p-4 text-black bg-black rounded shadow-md">
            <div>
                <h1 className='text-white'>Payment method</h1>
            </div>
          <form>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                <h1 className='text-white'>Card Number</h1>
              </label>
              <input
                type="number"
                placeholder="CardNumber"

                className="mt-1 block w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
       
                className="block text-sm font-medium text-gray-700"
              >
               <h1 className='text-white'> Expiration Date</h1>
              </label>
              <input
                type="number"
                id="expirationDate"
                className="mt-1 block w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardHolder"
                className="block text-sm font-medium text-gray-700"
              >
                <h1 className='text-white'> Card Holder</h1>
              </label>
              <input
                type="ssssssssss"
                id="cardHolder"
                className="mt-1 block w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cvv"
                className="block text-sm font-medium text-gray-700"
              >
                <h1 className='text-white'> CVV</h1>
              </label>
              <input
                type="number"
                id="cvv"
                className="mt-1 block w-full p-2 pl-10 text-sm text-gray-700"
              />
            </div>
      
          
            <button
              type="submit"
              className="bg-accent hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Pay
            </button>
          </form>
        </div>
      );
    }
    
   
export default Cc;