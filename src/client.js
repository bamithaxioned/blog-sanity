import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: 'lwyxhjw4',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-07-06', //yyyy-mm-dd
})