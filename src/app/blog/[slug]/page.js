export default async function Page({ params }) {
  const { slug } = await params
  const { default: Post } = await import(`../posts/${slug}.mdx`)
 
  return <Post />
}
 
export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'a-new-post' }]
}
 
export const dynamicParams = false;