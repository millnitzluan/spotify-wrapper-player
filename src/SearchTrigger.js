import spotify from './Spotify';
import renderAlbums from './AlbumList';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const albumList = document.getElementById('album-list');

function makeRequest() {
  spotify.search.albums(searchInput.value)
    .then(data => renderAlbums(data.albums.items, albumList));
}

export default function searchEnterTrigger() {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    makeRequest();
  });
}