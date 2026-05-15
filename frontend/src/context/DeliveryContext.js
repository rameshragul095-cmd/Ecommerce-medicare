import { createContext, useState } from "react";

export const DeliveryContext =
  createContext();

export default function DeliveryProvider({
  children
}) {

  const [deliveryAddress,
    setDeliveryAddress] =
    useState(null);

  const [selectedStore,
    setSelectedStore] =
    useState(null);

  return (

    <DeliveryContext.Provider
      value={{

        deliveryAddress,
        setDeliveryAddress,

        selectedStore,
        setSelectedStore

      }}
    >

      {children}

    </DeliveryContext.Provider>

  );

}