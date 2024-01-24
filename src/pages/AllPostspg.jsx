import React,{useEffect,useState} from 'react';
import service from '../appwrite/config';
import PostCard from '../components/PostCard';
import { Container } from '../components';

function AllPostpg() {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        service.getPosts([]).then((posts)=> {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, []);
    return ( 
        <div className="w-full py-8">
            <Container>
                <div className="flex flexwrap">

                {posts.map((post)=>(
                    <div className="p-2 w-1/4" key={post.$id}>
                    <PostCard  post={post}/>
                    </div>
                ))}
                </div>
            </Container>
        </div>

     );
}

export default AllPostpg;
