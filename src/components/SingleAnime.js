import React, { useEffect } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import './SingleAnime.scss';

const SingleAnime = (props) => {
  console.log(props.info);
  const {title, rating, score, url, episodes} = props.info;
  const image_url = props.info.images.jpg.image_url;
  useEffect(() => {
    console.log(title, url);
  }, [title, url]);
  return (
    <Grid container spacing={10} direction="row" justify="center" alignItems="center" alignContent="center" className="singleAnime__container">
      <Grid item>
        <img src={image_url} alt={title} className="singleAnime__img" />
      </Grid>
      
      <Grid item>
      
        <Paper elevation={3} className="singleAnime__paper">
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            Score: {score}
          </Typography>
          <Typography variant="h5" component="h2">
            Episodes: {episodes}
          </Typography>
          <Typography variant="h5" component="h2">
            Rating: {rating}
          </Typography>
          <a href={url} target="_blank">MAL</a>
        </Paper>
      </Grid>
    </Grid>
  )
};

export default SingleAnime;