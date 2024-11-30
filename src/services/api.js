import axios from 'axios';
const URL = 'https://gahi-said.com/apis/auteurs.php';
export const fetchLivres = async () => {
    try {
        const response = await axios.get(URL);
        return response.data; 
    } catch (error) {
        console.error('Erreur lors de la récupération des livres:', error);
        throw error;
    }
};
