import React, { useState, useEffect } from 'react';
import axios from 'axios';

// We are using the hooks that react give us
// Here you can see the magic of closures
const Search = () => {
  const [term, setTerm] = useState('programming');
  const [debouncedTerm, setdebouncedTerm] = useState(term);
  const [data, setData] = useState([]);

  // in the useEffect, the second argument can be  nothing it will execute whenever the the component will rerender
  // Empty array is just like componentDidMount, it will render only one time
  // If we add parameters in array it will execute when those parameters will change
  // If the useEffect has more than one callback in the array, it will execute if anyone of them changes
  // We cannot use async await directly on the callback function but we can define another function and use async await as we want and then call that function after that.

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setdebouncedTerm(term);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    if (!debouncedTerm) {
      setTimeout(() => {
        setData([]);
      }, 500);

      return;
    }

    const searchWikipedia = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      const dataSearch = response.data.query.search;
      setData(dataSearch);
    };

    searchWikipedia();
  }, [debouncedTerm]);

  /*
  useEffect(() => {
    if (!term) {
      setTimeout(() => {
        setData([]);
      }, 500);
      return;
    }

    const searchWikipedia = async () => {
      const response = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      const dataSearch = response.data.query.search;
      setData(dataSearch);
    };

    if (term && !data.length) {
      searchWikipedia();
    }

    const timeoutId = setTimeout(() => {
      searchWikipedia();
    }, 500);
    // After the term changes the whole useEffect function will called but it will return this arrow function but not call it, it will be called when the second term is changed (the returned function will be called first), then the whole function is called, and it returns this arrow function again, and this process repeats itself again and again
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term, data.length]);
*/

  const renderedResults = data.map(dataEl => {
    return (
      <div key={dataEl.pageid} className="item">
        <div className="right floated content">
          <a
            target="_blank"
            href={`https://en.wikipedia.org?curid=${dataEl.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{dataEl.title}</div>
          <span dangerouslySetInnerHTML={{ __html: dataEl.snippet }}></span>
        </div>
      </div>
    );
  });

  const onInputChange = e => setTerm(e.target.value);
  return (
    <div className="ui container">
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="form__input">Search</label>
            <input
              value={term}
              onChange={onInputChange}
              type="text"
              name="form__input"
              id="form__input"
            />
          </div>
        </form>
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
