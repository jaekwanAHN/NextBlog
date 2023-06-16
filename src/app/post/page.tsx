'use client';

import axios from 'axios';

export const PostPage = () => {
  const fetch = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => console.log(res));
  };

  return (
    <div>
      <p>this is post page</p>
      <button onClick={fetch}>api call test</button>
    </div>
  );
};

export default PostPage;
