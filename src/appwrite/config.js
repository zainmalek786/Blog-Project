import config from "../conf/conf";
import { Client,ID,Databases,Query,Storage } from "appwrite";

export class Service{
 client = new Client();
 databases;
 bucket;
 constructor(){
    this.client
    .setEndpoint(config.appwriteurl)
    .setProject(config.projectid);

    this.databases = new Databases(this.client)
    this.bucket = new Storage(this.client)

 }
 async createPost({title,slug,content,featuredImage,userId,status}){
    try{
 return await this.databases.createDocument(config.databaseid,config.collectionid,slug,{
    title,
    content,
    featuredImage,
    status,
    userId
 })
    }
catch(error){
    console.log("createPost ::Error",error)
}
 }

 async updatePost(slug,{title,content,featuredImage,status}){

    try{
return await this.databases.updateDocument(
    config.databaseid,
    config.collectionid,
    slug,
    {
        title,
        content,
        featuredImage,
        status
    })}
    catch(error){
        console.log("error in update post",error)
    }

 }

 async deletePost(slug){
try{
   await this.databases.deleteDocument(
    config.databaseid,
    config.collectionid,
    slug,
)
return true
}
catch(error){
console.log("error in delete post",error)
return false
}
 }

 async getPost(slug){
try{

    return await this.databases.getDocument(
        config.databaseid,
        config.collectionid,
        slug
    )
} catch(error){
    console.log("error in getPost",error)

    return false
}
 }

 async getPosts(queries = [Query.equal("status","active")]){
    try{
return await this.databases.listDocuments(
    config.databaseid,
    config.collectionid,
    queries
)
    }
    catch(error){
console.log("error in get posts",error)
return false
    }
 }
 async uploadFile(file){
try{
return await this.bucket.createFile(
    config.bucketid,
    ID.unique(),
    file
)
}
catch(error){
    console.log("error in upload file",error)
    return false
}
 }

 async deleteFile(fileId){
    try{
return await this.bucket.deleteFile(
    config.bucketid,
    fileId
)

    } catch(error){
        console.log("error in delete file",error)
        return false
    }
 }

 getFilePreview(fileId){
    return this.bucket.getFilePreview(
        config.bucketid,
        fileId
    )
 }
}

const service = new Service

export default service