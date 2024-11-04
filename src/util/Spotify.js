import React from "react";
import { useState, useEffect } from 'react';

const clientId = 'c324c328b00d405e9d265928836addc9';
const redirectUri = 'http://localhost:3000';
const authEndpoint = 'https://accounts.spotify.com/authorize';
const responseType = 'token';

let accessToken = '';

const Spotify = {
    getAccessToken() {
        if (accessToken === '') {
            window.location = `${authEndpoint}?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}`;
            const hash = window.location.hash;
            accessToken = hash.substring(1).split('&').find(elem => elem.startsWith('access_token')).split('=')[1];
            expiresIn = hash.substring(1).split('&').find(elem => elem.startsWith('expires_in')).split('=')[1];
            
        }

        console.log(accessToken);

        return accessToken;
    },

    search(term) {
        const token = Spotify.getAccessToken();

        return fetch(`https://api.spotify.com/v1/search?q=${term}&type=track`, {
            header: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => console.log(jsonResponse));
    }
}

export default Spotify;

//http://localhost:3000/#access_token=BQACi_huzRE17JL8lwwb403htOddMhvBoO-3xmbFTZIhG6TVWacqpW8VnH0PWTVBuEKSUHAk3IOyaHdWfTrwx9qjeD0UXWrjIQiV4RywF_un56mAcKRiTxOVd00MhBqmOtybKjB4bSizwOhV_Qy3Uv1tTwfWs-CPuM3JyDnQZ9eM6UwbhwW_UcXrLLTDzLym2OWW9S8oc4I&token_type=Bearer&expires_in=3600