
const getAlbum = async (token) => {
    const result = await fetch("https://api.spotify.com/v1/albums/2rJ4WurqVkkWtHwaefYQIL", {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token
        }
    })
    const data = await result.json();
    console.log(data);
}

export default getAlbum;