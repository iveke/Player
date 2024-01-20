const getTraks = async (token) => {
    const result = await fetch("https://api.spotify.com/v1/tracks/22zmqOwiH7YOVpNi6TII7Q", {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
        }
        
    });
    const response = await result.json();
    return response;
}

export default getTraks;