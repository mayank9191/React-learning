import conf from '../conf/config.js';
import { Client, Account, ID, Databases, Storage, Query } from 'appwrite';


export class Service {
  client = new Client()
  databases;
  bucket;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, feautredImage, status, userId }) {
    try {

      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          feautredImage,
          status,
          userId,
        }
      )

    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error)
    }

  }

  async updateDocument(slug, { title, content, feautredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          feautredImage,
          status,
        }
      )

    } catch (error) {
      console.log("Appwrite service :: updateDocument :: error", error)
    }

  }

  async deleteDocument(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
      )
      return true

    } catch (error) {
      console.log("Appwrite service :: deleteDocument :: error", error)

      return false
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,)

    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error)
    }
  }

  async getPosts(queries = [Query.equal("status", ["active"])]) {

    try {

      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        [
          queries
        ],
      )

    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error)
    }

  }

  // file upload service

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file)
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error)
      return false
    }

  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(
        conf.appwriteBucketId,
        fileId,
      )

      return true


    } catch (error) {
      console.log("Appwrite service :: deleteFile:: error", error)
      return false
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(
      conf.appwriteBucketId,
      fileId,
    )

  }


}


const service = new Service();

export default service


