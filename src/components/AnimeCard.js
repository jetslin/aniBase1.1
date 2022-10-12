import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../context/search';
import {  Link } from '@mui/material';
import './AnimeCard.scss'
import './AnimeList.scss'

const AnimeCard = (props) => {
  const navigate = useNavigate();
  const search = useContext(SearchContext)
  const onClickHandler = () => {
    // console.log(props.anime.mal_id);
    fetch(`https://api.jikan.moe/v4/anime/${props.anime.mal_id}`)
    .then((response) => response.json())
    .then((data) => {
      search.setSingle(data);
      localStorage.setItem('singleData', JSON.stringify(data));
      navigate("/single-view");
    })
  }

  const title = props.anime.title.length > 20 ? `${props.anime.title.substring(0, 20)}...`: props.anime.title;
  const imgUrl = props.anime.images.jpg.image_url;
  // const synopsis = 
  //   (props.anime.synopsis != null &&
  //    props.anime.synopsis.length > 30)
  //    ? `${props.anime.synopsis.substring(0, 30)}...`
  //    : props.anime.synopsis;

  return (
    <article className="animeCard__paper">
      <Link component="button" variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
        <figure>
          <img
            className="animeCards"
            src={imgUrl}
            alt={title} />
        </figure>
        <h3>{title}</h3>
      </Link>
    </article>
  // <Grid container item xs={10} className="animeCard__container">
  //   <Paper className="animeCard__paper">
  //     <img src={imgUrl} alt={title} style={{maxHeight: 300, maxWidth: 345 }}/>
  //     <Typography variant="h5" component="h2">{title}</Typography>
  //     <Typography variant="body2" component="h2" paragraph={true}>
  //       {synopsis}
  //     </Typography>
  //     <Link component="button" variant="body1" style={{marginBottom: 0}} onClick={onClickHandler}>
  //       Learn More
  //     </Link>
  //   </Paper>
    
  // </Grid>
  );
};

export default AnimeCard