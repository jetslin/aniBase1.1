import React, {useContext, useState} from 'react';
import { SearchContext } from '../context/search';
import {FormControl, Input, IconButton, Grid} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Home.scss';
import {useNavigate} from 'react-router-dom'; // redirects our page

const Home = () => {
    const search = useContext(SearchContext);
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        search.search(input).then((data) => {
            search.setData(data.data);
            localStorage.setItem('myData', JSON.stringify(data.data));
            navigate("/aniBase/results");
        });
    };

    return  (
    <Grid container direction="column" justify="center" alignContent="center" alignItems="center">
        <Grid item>
            <Grid item>
                <img 
                  alt="chisato_takina"
                  src={`${process.env.PUBLIC_URL}/chisato_takina.png`} 
                  height={420} 
                  width={550}
                  />
            </Grid>
            <Grid item>
                <form className="home__search">
                    <FormControl type="submit" className="home__formControl">
                        <SearchIcon className="home__searchIcon"/>
                        <Input
                          disableUnderline
                          className="home__input"
                          placeholder="Search anime..."
                          value={input}
                          onChange={(event) => setInput(event.target.value)} 
                          />
                        <IconButton 
                          className="home__iconButton"
                          variant="contained"
                          color="primary"
                          type="submit"
                          disabled={!input}
                          onClick={handleSearch}
                          >
                        </IconButton>
                    </FormControl>
                </form>
            </Grid>
        </Grid>
    </Grid>
    );
};

export default Home