import React from 'react';
import Type from '../../components/Type';

const Homepage = () => (
  <div>
    <Type
      strings="A Crypto Merchants Network"
      speed={45}
      deleteSpeed={100}
      pause={1000}
      deleteChars={7}
      replaceWith="<strong>community<strong>"
      replaceSpeed={70}
    />
  </div>
);

export default Homepage;
