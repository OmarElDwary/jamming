let token = "";
const clientID = "ea547afca4f74694be4347cbc5f100fa";
const redirectURI = "https://www.dwary.surge.sh";
const Spotify = {
    getAccessToken() {
        return new Promise((resolve, reject) => {
            if (token) {
                resolve(token);
            } else {
                const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
                const urlExpiration = window.location.href.match(/expires_in=([^&]*)/);
                if (urlAccessToken && urlExpiration) {
                    token = urlAccessToken[1];
                    const expiresIn = Number(urlExpiration[1]);
                    window.setTimeout(() => (token = ""), expiresIn * 1000);
                    window.history.pushState("Access Token", null, "/");
                    resolve(token);
                } else {
                    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
                    window.location.href = redirect;
                }
            }
        });
    },
    search(term) {
        return Spotify.getAccessToken().then((token) => {
            return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then((jsonResponse) => {
                if (!jsonResponse.tracks) {
                    return [];
                }
                return jsonResponse.tracks.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    artist: track.artists[0].name,
                    album: track.album.name,
                    uri: track.uri
                }));
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                return [];
            });
        });
    },
    savePlaylistName(name, trackURIs) {
        if (!name || !trackURIs) return;
        return Spotify.getAccessToken()
            .then((token) => {
                const headers = { Authorization: `Bearer ${token}` };
                return fetch(`https://api.spotify.com/v1/me`, { headers: headers });
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                const userId = jsonResponse.id;
                return Spotify.getAccessToken().then((token) => {
                    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                        headers: headers,
                        method: "POST",
                        body: JSON.stringify({ name: name })
                    })
                });
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                const playlistId = jsonResponse.id;
                return Spotify.getAccessToken().then((token) => {
                    const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
                    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                        headers: headers,
                        method: "POST",
                        body: JSON.stringify({ uris: trackURIs })
                    })
                });
            })
            .catch((error) => {
                console.error('Error saving playlist:', error);
            });
    }
    
};

export { Spotify };
