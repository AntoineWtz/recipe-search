import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import CuisineFilter from './components/CuisineFilter';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [cuisineType, setCuisineType] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(20);

  const fetchRecipes = async (query: string, cuisineType: string, from: number, to: number) => {
    const appId = 'eec6bf53';
    const appKey = 'ca0c5ea482f317dfc748846fa27cd36e';
    try {
      let url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=${from}&to=${to}`;
      if (cuisineType) {
        url += `&cuisineType=${cuisineType}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data);

      if (data.hits && Array.isArray(data.hits)) {
        setRecipes(prevRecipes => [
          ...prevRecipes,
          ...data.hits.map((hit: any) => ({
            label: hit.recipe.label,
            image: hit.recipe.image,
            url: hit.recipe.url,
            ingredients: hit.recipe.ingredients,
            source: hit.recipe.source,
            cuisineType: hit.recipe.cuisineType
          }))
        ]);
      } else {
        console.error('Unexpected response format:', data);
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (query: string) => {
    setQuery(query);
    setFrom(0);
    setTo(20);
    setRecipes([]);
    fetchRecipes(query, cuisineType, 0, 20);
  };

  const loadMoreRecipes = () => {
    const newFrom = from + 20;
    const newTo = to + 20;
    setFrom(newFrom);
    setTo(newTo);
    fetchRecipes(query, cuisineType, newFrom, newTo);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Recipe Search</h1>
      <p className="text-center text-gray-700 mb-4">Find recipes for your favorite dishes!</p>
      <CuisineFilter setCuisineType={setCuisineType} />
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
      <div className="flex justify-center mt-8">
        <button
          onClick={loadMoreRecipes}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More Recipes
        </button>
      </div>
    </div>
  );
};

export default App;
