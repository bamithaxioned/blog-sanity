import React from 'react'

const HomepageSection = ({data}) => {
  // const bannerUrl = data.bannerimage.asset;
  const bannerImageUrl = data.bannerimage?.url || '',
    bannerImageAlt = data.bannerimage?.attribution || '',
    description = data.description || '',
    sectionHeading = data.sectionheading || '';

  return (
    <>
      <section className="default-section p-10">
        {bannerImageUrl && <figure>
          <img src={bannerImageUrl} alt={bannerImageAlt} />
        </figure>}
        <div className="wrapper xl:max-w-6xl xl:mx-auto">
            {sectionHeading && <h2 className='title uppercase font-bold text-2xl tracking-wide mt-2 mb-5'>{sectionHeading}</h2>}
            {description && <h2 className='heading'>{description}</h2>}
        </div>
      </section>
    </>
  )
}

export default HomepageSection;