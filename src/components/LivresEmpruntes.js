import React, { useContext } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';
import Message from './Message';

const LivresEmpruntes = () => {
  const { emprunts, retournerLivre, message } = useContext(EmpruntContext);

  return (
    <div>
      <h2>Livres Empruntés</h2>
      {emprunts.length > 0 ? (
        <ul>
          {emprunts.map((livre) => (
            <li key={livre.id}>
              {livre.titre} par {livre.auteur}{' '}
              <button onClick={() => retournerLivre(livre)}>Retourner</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun livre emprunté.</p>
      )}
      {message && <Message type={message.type} message={message.message} />}
    </div>
  );
};

export default LivresEmpruntes;
