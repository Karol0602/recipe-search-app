import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get('https://api.edamam.com/search', {
        params: {
          q: query,
          app_id: 'your-app-id',
          app_key: 'your-app-key',
        },
      });
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (query) => {
    fetchRecipes(query);
  };

  return (
    <div>
      <Header />
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
        <SearchComponent onSearch={fetchRecipes} />
      </div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;