import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'


function AllPosts() {
  const [posts, setPosts] = useState([])
  const userData = useSelector((state) => state.auth.userData)

  useEffect(() => {
    appwriteService.getPosts(userData.$id).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])


  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id}>
              <PostCard {...post} />
            </div>

          ))}
        </div>

      </Container>
    </div>

  )
}


export default AllPosts