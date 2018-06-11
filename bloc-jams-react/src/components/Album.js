import React from 'react';

const Album = () => (
  <section className="Album">
    {this.props.match.params.slug} Album will go here 
  </section>
);
export default Album;