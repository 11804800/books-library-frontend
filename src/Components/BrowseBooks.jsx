import { useState } from "react";
import { BOOKS } from "../utils/DummyBooks";

function BrowseBooks()
{
    const [books,setBooks]=useState(BOOKS);
    console.log(books);
    return (
        <div>
            {
                books.map((item)=>{
                    return (
                        <div>
                            {item.id}
                            <img src={item?.cover_image} alt={item.title}/>
                            {item?.title}
                            {item?.author}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default BrowseBooks;