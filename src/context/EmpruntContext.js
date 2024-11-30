import React, { createContext, useState } from 'react';
export const EmpruntContext = createContext();
export const EmpruntProvider = ({ children }) => {
    const [livres, setLivres] = useState([]); 
    const [emprunts, setEmprunts] = useState([]); 
    const [message, setMessage] = useState(null);
    const emprunterLivre = (livre) => {
        if (!livre.disponible) {
            setMessage({ type: 'error', message: `Le livre "${livre.titre}" est déjà emprunté.` });
            return;  
        }
        setLivres(livres.filter((l) => l.id !== livre.id));
        setEmprunts([...emprunts, { ...livre, disponible: false }]);
        setMessage({ type: 'success', message: `Le livre "${livre.titre}" a été emprunté avec succès.` });
    };
    const retournerLivre = (livre) => {
        setEmprunts(emprunts.filter((e) => e.id !== livre.id));
        setLivres([...livres, { ...livre, disponible: true }]);
        setMessage({ type: 'success', message: `Le livre "${livre.titre}" a été retourné.` });
    };
    return (
        <EmpruntContext.Provider value={{ livres, setLivres, emprunts, emprunterLivre, retournerLivre, message, setMessage }}>
            {children}
        </EmpruntContext.Provider>
    );
};
