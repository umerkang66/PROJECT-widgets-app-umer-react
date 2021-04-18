import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from '../config.js';

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState('');
  const [debouncingText, setDebouncingText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncingText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const fetchingTranslation = async () => {
      try {
        const { data } = await axios.post(
          'https://translation.googleapis.com/language/translate/v2',
          {},
          {
            params: {
              q: debouncingText,
              target: language.value,
              key: API_KEY,
            },
          }
        );

        console.log(data);

        setTranslatedText(data.data.translations[0].translatedText);
      } catch (err) {
        console.error(err);
      }
    };

    fetchingTranslation();
  }, [language, debouncingText]);

  return (
    <div>
      <h1>{translatedText}</h1>
    </div>
  );
};

export default Convert;
