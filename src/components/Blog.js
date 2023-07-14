import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient  from '../client';
import { Link } from 'react-router-dom';
import BlockContent from "@sanity/block-content-to-react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "blog"] {
        title,
        slug,
        content,
        bannerimage {
          asset -> {
            _id,
            url
          },
          alt
        },
        publishdate,
        blogAuthor
      }`
    ).then((data) => {
      setPosts(data);
      setisLoading(false);
    })
    .catch(console.error);
  }, [])
  

  return (
    <>
      <section className="blogs py-10 ">
        <div className="wrapper 2xl:max-w-7xl 2xl:mx-auto">
          <h2 className='font-bold text-4xl mt-5 mb-10 tracking-widest text-center nd:text-6xl lg:text-8xl'>Blogs</h2>
          <h3 className='text-xl text-center mb-10'>{`Total Blogs are ${posts.length}`}</h3>
          {isLoading && <span className='text-center font-bold text-4xl block mb-5'>Loading Blogs...</span>}
          <div className="blogs grid grid-cols-1 gap-5 md:grid-cols-2 ld:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug.current} className='border-2 border-black'>
                <figure className="post-image">
                  <img src={post.bannerimage.asset.url} alt={post.bannerimage.alt} loading="lazy" />
                </figure>
                <div className="content px-5 py-5">
                  <h2 className='mb-5'>{post.title}</h2>
                  <span className="publish-date">{`${post.publishdate.split('T')[0]} on ${post.publishdate.split('T')[1]}`}</span>
                  <button className='mt-5 block py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>
                    <Link to={`/blog/${post.slug.current}`}>Read More</Link>
                  </button>
                </div>
                {/* <div>
                <BlockContent
                  blocks={post.content}
                  projectId =' lwyxhjw4'
                  dataset = 'production'
                />
                </div> */}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog