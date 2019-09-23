import React from 'react';
import Album from '../Album/Album';

// options will be certain options such as how many per row, size of each album or random sizes under certain specs, etc

export const Collage = ( albums, options ) => {
    return(
        <div>
            { albums.map(album => {
              return (
                  <Album
                    name={ album.name }
                    image={ album.image }
                  />
              );
            })}
        </div>
    );
}