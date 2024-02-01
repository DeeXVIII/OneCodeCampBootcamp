import { useState, useEffect } from "react";
import BlogList from "./BlogList";


// const Home = () => {
//     //let name = 'mario';
//     //using useState
//     const [name, setName] = useState('mario');
//     const[age, setAge] = useState(25);

//     const handleClick = () =>
//     {
//         // console.log('Hello!', e);
//         //name = 'luigi';
//         // console.log(name);

//         //using useState
//         setName('luigi');
//         setAge(30);
        
//     }

//     const handleClickAgain = (name) =>
//     {
//         //console.log('hello ' + name, e.target);
//     }

//     return ( 
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old.</p>
//             <button onClick={handleClick}>Click Me</button>
//             {/* <button onClick={(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}
//         </div>
//      );
// }
 
const Home = () =>
{
    const [blogs, setBlogs] = useState([
        {title: "My new website", body: 'lorem ipsum ...', author: 'mario', id: 1},
        {title: "Welcome party!", body: 'lorem ipsum ...', author: 'yoshi', id: 2},
        {title: "Web dec top tips", body: 'lorem ipsum ...', author: 'mario', id: 3}
    ]);

    //props is just passing a value from a parent element to a child element example BlogList
    //.filter - filters the array
    // return(
    //     <div className="home">
    //         <BlogList blogs={blogs} title="All Blogs!"></BlogList>
    //         <BlogList blogs={blogs.filter ((blog) => blog.author === "mario")} title="Mario's Blog"></BlogList>
    //     </div>
    //  );

    const handleDelete = (id) =>
    {
        const newBlogs = blogs.filter(blogs => blogs.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => 
    {
        console.log('use effect ran');
    });

    return(
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}></BlogList>
        </div>
     );
}


export default Home;