import React from 'react'
import {uuid} from 'uuidv4'

const Posts = ({ posts, loading }) => {

    if (loading) {
        return <tr><td><h2>Loading...</h2></td></tr>
    }

    return (
        <>
            {posts.map(post => (
                <tr key={uuid()}>
                    <td> {post.name} </td>
                    <td> {post._id} </td>
                    <td> {post.index} </td>
                    <td>
                        {(post.isActive) ? ('Active') : ('Inactive')}
                    </td>
                    <td>
                        <img src={post.picture} />
                    </td>
                    <td>
                        {post.tags.map(tag => (
                            <li key={uuid()} className="list-group-item">{tag}</li>
                        ))}
                    </td>
                </tr>
            ))}
        </>
    )
}

export default Posts