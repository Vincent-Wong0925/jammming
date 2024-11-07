const clientId = 'c324c328b00d405e9d265928836addc9';
const redirectUri = 'http://localhost:3000/';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const responseType = 'token';

let accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken !== '') {
            console.log(0);
            return accessToken;
        }

        const hash = window.location.hash;
        console.log(hash);

        if (hash) {
            console.log(1);
            accessToken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
            const expiresIn = hash.substring(1).split('&').find(elem => elem.startsWith('expires_in')).split('=')[1];
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            return accessToken;
        } else {
            console.log(2);
            const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
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
    }
}

export default Spotify;

//http://localhost:3000/#access_token=BQACi_huzRE17JL8lwwb403htOddMhvBoO-3xmbFTZIhG6TVWacqpW8VnH0PWTVBuEKSUHAk3IOyaHdWfTrwx9qjeD0UXWrjIQiV4RywF_un56mAcKRiTxOVd00MhBqmOtybKjB4bSizwOhV_Qy3Uv1tTwfWs-CPuM3JyDnQZ9eM6UwbhwW_UcXrLLTDzLym2OWW9S8oc4I&token_type=Bearer&expires_in=3600