import Breadcrumbs from "./breadcrumbs"

export default function MdxLayout({ children, pageName }) {
  // Create any shared layout or styles here
  return (
    <div className="page">
      <div className="wrapper">
        <Breadcrumbs pageName={pageName}/>
        <main className="container">
          {children}
        </main>
      </div>
    </div>
  )
}