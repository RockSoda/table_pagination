import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Posts, Pagination } from './components'
import { uuid } from 'uuidv4';

const API = 'api/pic/100.json'

const App = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(20)

  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get(API)
      setPosts(res.data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

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
