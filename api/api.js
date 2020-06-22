const fakeUrl = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server'

const getAll = (url) => {
  return fetch(fakeUrl + url)
    .then(response => response.json());
};

export const getPost = () => getAll('/posts');
export const getUsers = () => getAll('/users');
export const getComments = () => getAll('/comments');


export const getPreparedPosts = async () => {
  const postFromServer = await getPost();
  const userFromServer = await getUsers();
  const commentsFromServer = await getComments();

  const preparedListOfPosts = postFromServer.map(item => ({
    ...item,
    user: userFromServer.find(item => item.id === 'bb495996-f02d-4185-9895-2cf887ea78c0'),
    comments: commentsFromServer.filter(postId => (postId.post === item.id)),
    posts: postFromServer.filter(authorpost => authorpost.author === item.author )
  }));

  return preparedListOfPosts;
};