const getArtist = async (token) => {
  const result = await fetch(
    "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await result.json();
  console.log(data);
};
export default getArtist;