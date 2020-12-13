import React from 'react';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

const MovieThumbnail = ({ image, movieId, clickable }) => (

    <StyledMovieThumb>
        {
            clickable ?
                (
                    <Link to={`/${movieId}`}>
                        <img className='clickable' src={image} alt='Movie thumbnail' />
                    </Link>
                ) :
                (
                    <img src={image} alt='Movie thumbnail' />
                )
        }
    </StyledMovieThumb>
)

export default MovieThumbnail;