import { useState } from 'react';

export default function FavoriteButton({artPiecesState} ) {
  
    const {artPiecesInfo, setArtPiecesInfo} = artPiecesState;
    console.log("artPiecesInfo", artPiecesInfo);

  const toggleFavorite = (imageId) => {
    if (artPiecesInfo.includes(imageId)) {
      setArtPiecesInfo(artPiecesInfo.filter(id => id !== imageId));
    } else {
      setArtPiecesInfo([...artPiecesInfo, imageId]);
    }
  };

 
  return(
    <div><h2>hello</h2></div>
  )

  return (
    <div className='toggleButton'>
      {artPiecesInfo.map(image => (
        <div key={image.id}>
          {/* <img src={image.src} alt={`Image ${image.id}`} /> */}
          <button onClick={() => toggleFavorite(image.id)}>
            {artPiecesInfo.includes(image.id) ? '👍' : '👎'}
          </button>
        </div>
      ))}
    </div>
  );
}