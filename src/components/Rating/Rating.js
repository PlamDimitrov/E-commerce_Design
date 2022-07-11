import React, { useEffect, useState, useRef } from 'react';
import styles from './Rating.module.css';

const Rating = (props) => {
    let [rating, setRating] = useState(props.rating);
    let afterDecimal = useRef(0);

    const calculateRating = () => {
        afterDecimal.current = rating % 1;
        if (rating > 6) {
            setRating(6);
            afterDecimal = 0;
        } else if (rating < 0) {
            setRating(0);
        } else {
            setRating(Math.floor(rating));
        }
    }

    const rate = (rate) => {
        // implement rate functionality here
    }

    const passRating = () => {
        let stars = [];
        for (let j = 0; j < rating; j++) {
            stars.push(<i onClick={rate} key={j} className="fa-solid fa-star"></i>);
        }
        if (afterDecimal.current > 0) {
            stars.push(<i onClick={rate} key={Math.ceil(rating)} className="fa-solid fa-star-half-stroke"></i>);
            for (let i = rating + 1; i < 6; i++) {
                stars.push(<i onClick={rate} key={i} className="fa-regular fa-star"></i>);
            }
        } else {
            for (let i = rating; i < 6; i++) {
                stars.push(<i onClick={rate} key={i} className="fa-regular fa-star"></i>);
            }
        }
        return stars;
    }

    useEffect(() => {
        calculateRating();
    }, [])

    return <div className={`${styles["rating"]}`}>
        {passRating()}
    </div>
};

export default Rating;