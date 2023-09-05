import localPosts from "../data/local-database.json";
import { Post } from "./05-dependency-b";

export abstract class PostProvider {
    abstract getPosts(): Promise<Post[]>
}

export class HttpClient {
    
    async get ( url: string ) {
        const resp = await fetch( url );
        const data = await resp.json();

        return { data, status: resp.status }
    }

}

export class LocalDataBaseService implements PostProvider {

    constructor() {}

    async getPosts() {
        return [
            {
                'userId': 1,
                'id': 1,
                'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                'body': 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
            },
            {
                'userId': 1,
                'id': 2,
                'title': 'qui est esse',
                'body': 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
            }]
    }

}

export class JsonDataBaseService implements PostProvider {

    async getPosts() {
        return localPosts;
    }
}

//WebApiPostService, PostProvider
// https://jsonplaceholder.typicode.com/posts

export class WebApiPostService implements PostProvider {

    constructor( private http: HttpClient ) {}

    async getPosts(): Promise<Post[]>  {

        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');

        // const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data: Post[] = await resp.json();

        return data 
    }
}