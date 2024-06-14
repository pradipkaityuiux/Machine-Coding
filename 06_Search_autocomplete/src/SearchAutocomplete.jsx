import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css'; // Create a CSS file for styling

const SearchAutocomplete = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  const fetchSuggestions = async (searchTerm) => {
    if (!searchTerm) return;

    setIsLoading(true);
    try {
      const response = await axios.get(`http://localhost:8000/posts?title_like=${searchTerm}`);
      setSuggestions(response.data);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchSuggestions(query);
    }, 1000);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-autocomplete" ref={wrapperRef}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {isLoading && <div className="loader">Loading...</div>}
      {showSuggestions && (
        <ul>
          {Array.isArray(suggestions) && suggestions.map((suggestion) => (
            <li key={suggestion.id} onClick={()=>{
                setQuery(suggestion.title)
                setShowSuggestions(false)
            }}>{suggestion.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchAutocomplete;