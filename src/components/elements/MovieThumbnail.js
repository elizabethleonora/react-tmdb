import React from 'react';

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

const MovieThumbnail = ({ image, movieId, clickable }) => (

    <StyledMovieThumb>
        {
            clickable ?
                (
                    <img className='clickable' src={image} alt='Movie thumbnail' />
                ) :
                (
                    <img src={image} alt='Movie thumbnail' />
                )
        }
    </StyledMovieThumb>
)

export default MovieThumbnail;