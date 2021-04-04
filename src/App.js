import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Posts, Pagination } from './components'
import { uuid } from 'uuidv4';

const API = 'api/pic/100.json'

const App = () => {
  //Create states
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)
  
  //Fetching but only for once, working as componentDidMount
  useEffect(() => {
    //Create an async fetch function (since [async, await] can only be used on a function)
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(API)
      setPosts(res.data)
      setLoading(false)
    }
    //Fetch
    fetchPosts()
  }, [])
  
  //Calculate the index of the last post on the page
  const indexOfLastPost = currentPage * postsPerPage
  //Calculate the index of the first post on the page
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  //Slice the array which contains all the posts, from the index of the first post to index of the last post
  //Which are the posts to render
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  //A function working as a prop, which will be triggered when one of the page number is clicked
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  //List of table headings will be rendered
  const table_heads = ['Name', '_id', 'Index', 'Status', 'Picture', 'Tags']

  return (
    <div className='container mt-5'>
      <h1 className="text-primary mb-3">Table View</h1>
      <table class="table">
        <thead class="thead-light">
          <tr>
            {table_heads.map(heading => (
              <th key={uuid()} scope="col">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <Posts posts={currentPosts} loading={loading} />
        </tbody>
      </table>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>     
    </div>
  )
}

export default App;
