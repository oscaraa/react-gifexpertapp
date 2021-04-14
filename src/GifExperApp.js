import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handlerAdd = () => {
    //     let prueva = [ ... categories, 'HunterXHubter'];
    //     setCategories(prueva);
    // }
    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCategory={setCategories}/>
            <hr />
            
            <ol>
                {
                    categories.map((category, idx) => (
                        <GifGrid 
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp;