import React from 'react';
import AnimeCard from './AnimeCard';
//import {Grid} from '@mui/material';
import './AnimeList.scss'


const AnimeList = (props) => {
  console.log(props.data);
  return (
    <div className="animeList__list">
      {props.data.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>

      // <Grid
      //   className="animeList__list"
      //   container
      //   wrap="nowrap"
      //   spacing={2}
      //   alignItems="stretch"
      //  // columns={{ xs: 4, sm: 8, md: 12 }}
      //   >
      //   {props.data.map((anime) => (
      //     <Grid item xs={3} key={anime}>
      //       <AnimeCard key={anime.mal_id} anime={anime} />
      //     </Grid>
      //   ))}
      // </Grid>

  );
};

export default AnimeList