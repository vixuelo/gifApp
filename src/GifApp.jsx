import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifApp=()=>{

    const [categories, setCategories] 
        = useState(['']);
    console.log(categories);
    const onAddCategory=(event)=>{
        if(!categories.includes(event))
        {setCategories([event,...categories,]);}
    }

    return(
        <>
            <h1>GifApp</h1>
            
            <AddCategory 
                onNewCategory={event=>onAddCategory(event)}
                />
                {categories.map(category=>{
                    console.log(category);
                    return (
                        <GifGrid key={category} category={category}
                        />
                    )
                })}
        </>
    )
}