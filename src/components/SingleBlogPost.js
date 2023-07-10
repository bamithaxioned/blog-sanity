import React from 'react';
import { useState, useEffect } from 'react';
import sanityClient  from '../client';
import { Link, useParams } from 'react-router-dom';
import BlockContent from "@sanity/block-content-to-react";

const SingleBlogPost = () => {
  const [singlePost, setSinglePost] = useState([]); 
  const [loading, setLoading] = useState(true);
  const { slug } = useParams()

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "blog" && slug.current == "${slug}"] {
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
        publishdate
      }`
    ).then((data) => {
      setSinglePost(data[0]);
      setLoading(false);
    })
    .catch(console.error);
  }, [])

  return (
    <>
      {loading ? (<h2>loading...</h2>) : 
        <section className='px-5 xl:max-w-6xl xl:mx-auto mb-10'>
          <h2 className="title uppercase font-bold text-4xl tracking-wide mb-10 mt-5 md:text-6xl lg:text-5xl text-center">{singlePost.title}</h2>
          <img className='blog-image' src={singlePost.bannerimage.asset.url} alt={singlePost.bannerimage.alt} />
          <span className='text-right block mt-5 font-bold underline'>Published on {singlePost.publishdate.split('T')[0]}</span>
          <div className="content-area my-10">
            <BlockContent
                    blocks={singlePost.content}
                    projectId ='lwyxhjw4'
                    dataset = 'production'
            />
          </div>
          <button className='mt-5 block py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>
            <Link to={'/blog'}>Back to Blog</Link>
          </button>
        </section>
      }
    </>
  )
}

export default SingleBlogPost