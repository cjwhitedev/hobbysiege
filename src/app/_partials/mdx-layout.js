import Hero from "./hero"
import Breadcrumbs from "./breadcrumbs"

export default function MdxLayout({ children, heroImage, pageName }) {
  return (
    <div className="page">
      <Hero imagePath={heroImage}/>
      <div className="wrapper">
        
        <Breadcrumbs pageName={pageName}/>
        <main className="container">
          {children}
        </main>
      </div>
    </div>
  )
}