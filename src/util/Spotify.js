const clientId = "e9bab03f069a49d0bf18003db870650b";
const redirectUri = "http://localhost:3000/"
let accessToken = "";

const Spotify = {
  
    getAccessToken () {
        if (accessToken) {
            return accessToken;
        }
        
        const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
        const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

        if (urlAccessToken && urlExpiresIn) {
            accessToken = urlAccessToken[1];
            const expiresIn = Number(urlExpiresIn[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
        } else {
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
        }

    },


    search(term, searchType) {
        const accessToken = Spotify.getAccessToken();
        console.log(`https://api.spotify.com/v1/search?&q=${term}&type=${searchType}`)
        return fetch(`https://api.spotify.com/v1/search?&q=${term}&type=${searchType}`, {
            headers: {
            Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {

          if (jsonResponse.tracks) {
              if (!jsonResponse.tracks) {
              return [];
              }
              return jsonResponse.tracks.items.map(track => ({
              id: track.id,
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              uri: track.uri
              }));
          }

          else if (jsonResponse.artists) {
              if (!jsonResponse.artists) {
              return [];
              }

              const artist = jsonResponse.artists.items[0].name
              const accessToken = Spotify.getAccessToken();
              return fetch (`https://api.spotify.com/v1/search?type=track&q=artist:${artist}`, {
                headers: {
                Authorization: `Bearer ${accessToken}`
                },
                params: {
                limit: 10,
                }
              }).then(response => {
                return response.json();
            }).then(jsonResponse => {
              return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                title: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
                }))
            })
          }

         else { 
            if (!jsonResponse.albums) {
            return [];
            }
            return jsonResponse.albums.items.map(track => ({
            id: track.id,
            artist: track.artists[0].name,
            album: track.name
    
            }));
        }
        }

      );
    },

    savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
          return;
        }
    
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;
    
        return fetch('https://api.spotify.com/v1/me', {headers: headers}
        ).then(response => response.json()
        ).then(jsonResponse => {
          userId = jsonResponse.id;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({name: name})
          }).then(response => response.json()
          ).then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
              headers: headers,
              method: 'POST',
              body: JSON.stringify({uris: trackUris})
            });
          });
        });
      }
}



export default Spotify;