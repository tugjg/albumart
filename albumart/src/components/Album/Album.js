import React from 'react';


export const Album = (name, image) => {
    return(
        <div>
            <img src={ image } />
            <span> { name } </span>
        </div>
    );
}