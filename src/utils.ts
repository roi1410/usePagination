

 export interface IAllData {
  body:string
  id:number
  title:string
  userId:number
}




export async function fetchPosts(pageNum = 1):Promise<IAllData[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`
  );
  return response.json();
}

export async function fetchComments(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}

export async function deletePost(postId: number) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { method: "DELETE" }
  );
  return response.json();
}