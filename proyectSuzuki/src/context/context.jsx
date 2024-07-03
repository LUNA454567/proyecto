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
  const [requestedPaymentDay, setRequestedPaymentDay] = useState('');
  const [exchangeValue, setExchangeValue] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

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
        requestedPaymentDay,
        setRequestedPaymentDay,
        exchangeValue,
        setExchangeValue,
        clientName,
        setClientName,
        clientId,
        setClientId,
        clientPhone,
        setClientPhone,
        clientEmail,
        setClientEmail,
      }}
    >
      {children}
    </Context.Provider>
  );
};
