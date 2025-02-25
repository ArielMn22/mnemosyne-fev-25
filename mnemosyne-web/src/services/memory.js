const API_URL = "http://localhost:3001";

const getMemories = async () => {

    const response = await fetch(`${API_URL}/memories`); // Busquei os dados

    const memories = await response.json(); // Converte a requisição para JSON.

    return memories;

}

export default { getMemories };