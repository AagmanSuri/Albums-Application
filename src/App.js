import { useState, useEffect } from "react";
import Photo from "./Photo";
function App() {
  const AlbumsUrl = "https://jsonplaceholder.typicode.com/albums";
  const PhotosUrl = "https://jsonplaceholder.typicode.com/photos";
  const [albumData, setAlbumData] = useState([]);
  const [PhotoData, setPhotoData] = useState([]);

  useEffect(() => {
    fetch(AlbumsUrl)
      .then((response) => response.json())
      .then((data) => setAlbumData(data));
    fetch(PhotosUrl)
      .then((response) => response.json())
      .then((data) => setPhotoData(data));
  }, []);

  console.log(PhotoData);
  return (
    <div className="App">
      {albumData
        .filter((album) => {
          return album.id <= 5;
        })
        .map((filterAlbum) => {
          return (
            <div key={filterAlbum.id}>
              <h1>{filterAlbum.title} </h1>

              {PhotoData.map((item) => {
                if (item.albumId === filterAlbum.id) {
                  return (
                    <div>
                      <p>{item.title}</p>
                      <p>${Math.floor(Math.random() * 250) + 50}</p>
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
    </div>
  );
}

export default App;

// {/* <div key={album.id}>
// <h5>{album.title}</h5>
// </div> */}

// {
//   /* <h6>{Math.floor(Math.random() * 250) + 50}</h6> */
// }
// {
//   /* {PhotoData.map((photo) => {
//               return <div></div>;
//             })} */
// }
