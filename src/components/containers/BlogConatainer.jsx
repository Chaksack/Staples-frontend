import React from 'react';
import BlogCard from '../Cards/BlogCard';
import blogInfo from '../../JSON/Blogs.json';

const BlogConatainer = (props) => {
  return (
    <section>
      <div className="py-5 mt-4 w-screen flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-[90%] md:w-[75%] border border-x-0 border-t-0 border-lightgrey pb-2">
          <h2 className="text-lg font-serif uppercase">
            <span className="text-primary font-serif">■</span>
            {props.head}
          </h2>
        </div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 xl:grid-cols-4 w-[90%] md:w-[75%] py-4">
          {blogInfo.map((item) => {
            return (
              <BlogCard
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogConatainer;
