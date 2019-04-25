import React from 'react';
import addAddress from './AddAddress.jsx';

const PostList = ({ items }) => (
  <div className="addAddress">
    {items.map(item => (
      <addAddress
        item={item.address}
        key={item.id}
      />
    ))}
  </div>
);

export default PostList;
