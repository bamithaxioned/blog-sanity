import sanityClient  from '../client';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import HomepageSection from './homepage/HomepageSection';
import ListingCategory from './homepage/ListingCategory';


const Homepage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "page" && (slug.current == '/' || title == 'Homepage')] {
          _id,
          title,
          'slug': slug.current,
          content[]{
            'id': _key,
            "type": _type,
            _type == "section" => {
              sectionheading,
              description,
              bannerimage {
                'url': asset->url,
                attribution
              }
            },
            _type == "listingcategory" => {
              sectionheading,
              description,
              categories[]->{
                categoryname,
                "slug": categoryslug.current,
                shortDescription,
                poster {
                  "url": asset->url,
                  attribution
                }
              }
            },
          }
      }`
    ).then((content) => {
      setData(content[0]);
      console.log(content[0]);
    })
    .catch(console.error);
  }, [])

  return (
    <>
      <section className="homepage">
        <div className="wrapper flex items-center justify-center text-center flex-col py-5">
          <h2 className='uppercase font-bold text4xl tracking-wide mb-5 md:text-6xl lg:text-8xl'>Teen Blog</h2>
          <Link to={'/blog'} className='py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold'>Visit Blog Page</Link>
        </div>
      </section>
      {data.content?.length && data.content?.map((section) => {
          let type = section.type;
          let id = section.id;
          if(type === 'section') {
            return <HomepageSection data={section} key={id} />
          } else if(type === 'listingcategory') {
            return <ListingCategory data={section} key={id} />
          }
        })}
    </>
  )
}

export default Homepage