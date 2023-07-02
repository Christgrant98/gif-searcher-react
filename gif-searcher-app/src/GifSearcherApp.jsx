import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSearcherApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifSearcherApp</h1>
      <AddCategory 
        onNewCategory = { (value) => onAddCategory(value)}
        currentCategories ={ categories } 
       />
      
        {
          categories.map((category) => (
          <GifGrid key = {category} category={category}/>
          )
        )
        }

    </>
  )
};
