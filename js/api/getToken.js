const clientId = "62fadbc4dc924040b1a52eee288390e8";
const clientSecretId = "9d69bc38c204432b836c0e64207d270d";

const getToken = async () => {
  try {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecretId),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    return data.access_token;
  } catch (error) {
    console.log(error, error.message);
  }

 
};
export default getToken;
