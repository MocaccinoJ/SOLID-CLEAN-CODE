import { PostService } from './05-dependency-b';
import { HttpClient, JsonDataBaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {
    const httpClient = new HttpClient;
    // const provider = new JsonDataBaseService;
    // const provider = new LocalDataBaseService;
    const provider = new WebApiPostService( httpClient );
    

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();