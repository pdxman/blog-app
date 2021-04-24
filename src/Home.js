import React, {useState, useEffect} from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8888/forest/wp-json/wp/v2/posts/')
                .then(res => {
                    if ( !res.ok ){
                        throw Error('could not fetch data for that resrouce')
                    }
                    return res.json()
                })
                .then(data => {
                    console.log(data)
                    setBlogs(data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }, 1000)
    }, [])

return(
    <div className="home">
        { error && <div>{ error }</div> }
        {isLoading && <div>Loading...</div>}
        
        {blogs && <BlogList blogs={blogs} title="All Blog posts!" /> }
        
        
        {/* <button onClick={() => setName('Tim')}>change name</button>
        {name}  */}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Billy")} title="Billy Blogs!"/> */}
    </div>
    )
}

export default Home; 

// How would I add a button to filter like the second instance of "BlogList"?
// using the id in handleDelete is confusing and hard to wrap my mind around
    //false to remove??

//useEffect- run code on every render
//change state in useEffect and get infinite loop
// ,[] is a dependency array on useEffect
//makes is to useEffect doesnt run on state change again 
//what is benefit ti running and not running??


//[
 //   { title: 'Godzilla', body: 'lorem ipsum...,', author: 'Billy', id: 1 },
  //  { title: 'King Kong', body: 'lorem something...,', author: 'Tim', id: 2 } ,
  //  { title: 'Sasquatch', body: 'lorem this thing...,', author: 'Billy', id: 3 }    
//]