import React, { createContext, useState } from 'react';

// Crea el contexto
export const Context = createContext();

// Provee el contexto
export const ContextProvider = ({ children }) => {
  const [nameCons, setNameCons] = useState('');
  const [idCons, setIdCons] = useState('');
  const [invoiceNumberCons, setInvoiceNumberCons] = useState('');

  // constancia credito
  const [walletEmail, setWalletEmail] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [email, setEmail] = useState('');

  // solicitud cambio de fecha
  const [city, setCity] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentPaymentDay, setCurrentPaymentDay] = useState('');

  return (
    <Context.Provider
      value={{
        nameCons,
        setNameCons,
        idCons,
        setIdCons,
        invoiceNumberCons,
        setInvoiceNumberCons,
        // constancia credito
        walletEmail,
        setWalletEmail,
        whatsappNumber,
        setWhatsappNumber,
        name,
        setName,
        id,
        setId,
        cellphone,
        setCellphone,
        email,
        setEmail,
        // solicitud cambio de fecha
        city,
        setCity,
        currentDate,
        setCurrentDate,
        currentPaymentDay,
        setCurrentPaymentDay,
      }}
    >
      {children}
    </Context.Provider>
  );
};
