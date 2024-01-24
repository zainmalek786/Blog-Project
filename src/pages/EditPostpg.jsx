import React,{useState,useEffect} from 'react';
// import { Container,PostForm } from 'postcss';
import  Container  from '../components/container/Container';
import  PostForm  from '../components/post-form/PostForm';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import service from '../appwrite/config';

function EditPostpg() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
service.getPost(slug).then((post)=>{
    if(post){
        setPosts(post)
    }
})
        } else{
            navigate("/")
        }
    }, [slug,navigate]);
    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ): null

     
}

export default EditPostpg;