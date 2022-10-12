import React, { useEffect, useContext, useState } from 'react';
import { SearchContext } from '../context/search';
import { Typography } from '@mui/material';
import SingleAnime from '../components/SingleAnime';

const SingleView = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(true);

    // useEffect(() => {
    //     console.log(search.singleData);
    // }, [search]);

    useEffect(() => {
        if (search.singleData === undefined || Object.keys(search.singleData).length === 0) {
            try {
                search.setSingle(JSON.parse(localStorage.getItem('singleData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
    }, [search]);

    return  (
      <div>
        {(dataExists && <SingleAnime info={search.singleData.data}/>) || 
        (<Typography variant="h4" component="h2">
            No Data Exists
        </Typography>
        )}
      </div>
    );
};

export default SingleView
