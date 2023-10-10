'use client';

import axios from 'axios';
import { useState } from 'react';

interface PostPageProps {
  params: { postId: string };
}

export const PostPage = ({ params }: PostPageProps) => {
  const [tempState, setTempState] = useState('noting in here');
  const fetch = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${params.postId}`)
      .then((res) => setTempState(res.data.title));
  };

  return (
    <div>
      <p>this is post page</p>
      <button onClick={fetch}>api call test</button>
      <p>{tempState}</p>
    </div>
  );
};

export default PostPage;
