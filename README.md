# Recipe Search

An intuitive Recipe Search application built with React, TypeScript, and Tailwind CSS, utilizing the Edamam API.

## Usage

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your Edamam API credentials:
    `REACT_APP_EDAMAM_APP_ID=your_app_id`
    `REACT_APP_EDAMAM_APP_KEY=your_app_key`
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description

The Recipe Search app allows users to search for recipes by ingredient. It fetches data from the Edamam API and displays the results.*

### Features

* Search for recipes by ingredient.
* Filter recipes by cuisine type.
* View recipe details, including ingredients and source.
* Load more recipes on demand.

## File Structure

* `src/components/SearchBar.tsx`: Search bar component for user input.
* `src/components/RecipeList.tsx`: Component to display the list of recipes.
* `src/components/RecipeCard.tsx`: Component to display individual recipe details.
* `src/components/CuisineFilter.tsx`: Component for filtering recipes by cuisine type.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* Edamam API

## Demo

[DemoLink](https://antoinewtz.github.io/recipe-search/)

