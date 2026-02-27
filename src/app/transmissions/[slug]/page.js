export default async function Page({ params }) {
  const { slug } = await params
  const { default: Post } = await import(`../posts/${slug}.mdx`)
 
  return <Post />
}
 
export function generateStaticParams() {
  return [{ slug: 'transmissions-test-page' }]
}
 
export const dynamicParams = false;