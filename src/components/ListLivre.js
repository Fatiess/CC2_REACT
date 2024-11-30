import React, { useContext, useEffect } from 'react';
import { EmpruntContext } from '../context/EmpruntContext';
import Message from './Message';
import axios from 'axios';

const ListLivre = () => {
    const { livres, setLivres, emprunterLivre, message, setMessage } = useContext(EmpruntContext);

    useEffect(() => {
        async function fetchLivres() {
            try {
                const response = await axios.get('https://gahi-said.com/apis/auteurs.php');
                setLivres(response.data); 
            } catch (error) {
                console.error('Erreur lors de la récupération des livres:', error);
                setMessage({ type: 'error', message: 'Impossible de charger les livres disponibles.' });
            }
        }
        fetchLivres();
    }, [setLivres, setMessage]);

    return (
        <div>
            <h2 className="text-center mb-4">Liste des Livres en notre bibliotheque</h2>
            {message && <Message message={message.message} />} 
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Disponibilité</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livres.length > 0 ? (
                            livres.map((livre) => (
                                <tr key={livre.id}>
                                    <td>{livre.titre}</td>
                                    <td>{livre.auteur}</td>
                                    <td>{livre.disponible ? 'Disponible' : 'Emprunté'}</td>
                                    <td>
                                        {livre.disponible ? (
                                            <button
                                                className="btn btn-success"
                                                onClick={() => emprunterLivre(livre)}
                                            >
                                                Emprunter
                                            </button>
                                        ) : (
                                            <button className="btn btn-danger" disabled>
                                                Emprunté
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">Aucun livre disponible.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListLivre;
