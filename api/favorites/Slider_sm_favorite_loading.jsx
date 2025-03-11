'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider_sm from '@/components/slider_sm/Slider_sm';
import styles from './Slider_sm_favorite_loading.module.css'

const Slider_sm_favorite_loading = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    // Получение данных с API
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get('https://www.omdbapi.com/?apikey=a479eec2&s=popular&type=movie');
                setMovies(response.data.Search || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.textmain}>
            <div className={styles.text1}>Популярные</div>
            <Slider_sm movies={movies} />
        </div>);
};

export default Slider_sm_favorite_loading;
