import Link from 'next/link'

const Links = [
  {route: '/', label:'Home'},
  {route: '/projects', label: "Proyectos"},
  {route: '/blog', label: "Blog"},
  {route: '/contacto', label: "Contacto"}]

export default function Navigation(){
    return(
        <header>
          <nav>
            <ul>
              {Links.map(({ route, label }) => (
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
            </ul>
          </nav>
        </header>
    )
}