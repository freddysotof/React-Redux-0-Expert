import { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAddCategory = (value) => {
        // categories.push('Valorant');
        if (categories.includes(value)) return;
        setCategories([...categories, value]);
        // setCategories(cat=> [...cat,'Valorant']);
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onAddCategory={handleAddCategory}
            // currentCategories={categories}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} 
                        />
                ))
            }
        </>
    )
}
