import Spinner from '../components/Spinner'
import React, { useState, useEffect } from "react";
import axios from "axios";
import './grid.css'

export const Brba = () => {
const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios(
            "https://www.breakingbadapi.com/api/quote/random"
          );
          setItems(result.data);
          setIsLoading(false);
        };
    
        fetchItems();
      }, []);

    return isLoading ? (
        <>
        <Spinner />
        </>
    ) : (
        <>
        <div className="col-sm-4">
            <div className='brba'>
            <h3>Breaking Bad quotes :</h3>
            {items.map(item =>
            <React.Fragment key={item.quote_id}>
                <figure className="text-center mb-0">
              <blockquote className="blockquote mb-4">
                <p>
                  <span className="font-italic">
                      {item.quote}
                  </span>
                </p>
              </blockquote>
              <figcaption className="blockquote-footer mb-0">
              {item.author} in <cite title="Source Title">{item.series}</cite>
              </figcaption>
            </figure>
            </React.Fragment>
            )}
            </div>
        </div>
        </>
    )
}

export default Brba
