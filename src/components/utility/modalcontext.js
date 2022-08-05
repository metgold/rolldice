import React from 'react';
import { createContext, useState } from "react";

const ModalContext = createContext({});

export function ModalProvider({children}) {
    const [visible, setVisible] = useState(false);
     const [box, setBox] = useState(false);

    //  const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const hidePassword = () => setEdit(false);
    const hideWithdraw = () => setWithdraw(false);
    const hidePrivacy = () => setPrivacy(false);
    const hideSignout = () => setSignout(false);
    const[edit, setEdit] = useState(false);
    const[withdraw, setWithdraw] = useState(false);
    const[privacy, setPrivacy] = useState(false);
    const[password, setPassword] = useState(false);
    const[signout, setSignout] = useState(false);
    
    const handlePress = () => {
        setVisible(true);
        setBox(false)
    };
    const handlePassword = () => {
        setEdit(true)
        setBox(false)
    };
    const handleWithdraw = () => {
        setWithdraw(true)
        setBox(false)
    };
    const handlePrivacy = () => {
        setPrivacy(true)
        setBox(false)
    };
    const handleSignout= () => {
        setSignout(true)
        setBox(false)
    };
    return (
        <ModalContext.Provider value={{ handlePress, handlePassword, handleWithdraw, handlePrivacy, handleSignout, visible, setVisible,  hideModal, hidePassword, hideWithdraw, hidePrivacy, hideSignout, setEdit, edit, setWithdraw, withdraw, setPrivacy, privacy, setPassword, password, setSignout, signout, box, setBox}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;