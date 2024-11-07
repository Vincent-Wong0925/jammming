const clientId = 'c324c328b00d405e9d265928836addc9';
const redirectUri = 'http://localhost:3000/';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const responseType = 'token';

let accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken !== '') {
            return accessToken;
        }

        const hash = window.location.hash;

        if (hash) {
            accessToken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
            const expiresIn = hash.substring(1).split('&').find(elem => elem.startsWith('expires_in')).split('=')[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            return accessToken;
        } else {
            const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=playlist-modify-public`;
            window.location.href = accessUrl;
        }
    },

    logout() {
        accessToken = '';
        window.location.href = redirectUri;
        console.log('log out');
        console.log(accessToken);
    },

    search(term) {
        const token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            console.log(jsonResponse);
            if (!jsonResponse.tracks) {
                return [];
            } else {
                return (jsonResponse.tracks.items.map((track) => {
                    return {
                        song: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri,
                        id: track.id
                    };
                }));
            }
        });
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const token = Spotify.getAccessToken();
        const headers = {
            Authorization: `Bearer ${token}`
        };
        let userId;

        return fetch('https://api.spotify.com/v1/me', {headers: headers})
            .then(response => response.json())
            .then(jsonResponse => {
                userId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({name: name})
                })
                .then(response => response.json())
                .then(jsonResponse => {
                    const playlistId = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({uris: trackUris})
                    });
                });
            });
    }
}

export default Spotify;