import React from 'react'
import { Link } from 'react-router-dom';

const ListingCategory = ({data}) => {
  const heading = data.sectionheading || null,
    description = data.description || null,
    categories = data.categories || null;

  return (
    <>
      <section className="listing-category p-10">
        <div className="wrapper xl:max-w-6xl xl:mx-auto">
          { heading && <h2 className="title text-center uppercase font-bold text-2xl tracking-wide mt-2 mb-5">{heading}</h2> }
          { description && <p className='mb-5'>{description}</p> }
          {categories.length && <ul className='flex flex-wrap'>
            {categories.map(category => {
              const catImageUrl = category.poster?.url || null,
                 catImageAlt = category.poster?.attribution || null,
                catName = category.categoryname || null,
                shortDescription = category.shortDescription || null,
                slug = category.slug || null;

              return <li key={slug} className='program-list mb-5 even:mr-5'>
                <figure className='program-list-figure'>
                  <img className='program-cat-image' src={catImageUrl} alt={catImageAlt} />
                  </figure>
                  <h3 className="heading mr-5 lg:text-lg"><Link to={`/category/${slug}`} >{catName}</Link></h3>
              </li>
            })}
          </ul>}
        </div>
      </section>
    </>
  )
}

export default ListingCategory