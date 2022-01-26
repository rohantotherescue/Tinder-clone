import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import './Swuttons.css';

function Swuttons() {
  return <div className='Swuttons'>
      <IconButton className='swipebuttons__close'>
      <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipebuttons__repeat'>
      <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipebuttons__star'>
      <StarIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipebuttons__fav'>
      <FavoriteIcon fontSize='large'/>
      </IconButton>
  </div>;
}

export default Swuttons;
