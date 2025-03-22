import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteService from '../appwrite/config'
import { Container, PostForm } from '../components'


function EditPosts() {
  const [post, setPosts] = useState({})
  const { slug } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((posts) => {
        if (posts) {
          setPosts(posts)
        }
      })
    } else {
      navigate('/')
    }
  }, [slug])


  return post ? (<div className="py-8">
    <Container>
      <PostForm post={post} />
    </Container>

  </div>) : null
}

export default EditPosts