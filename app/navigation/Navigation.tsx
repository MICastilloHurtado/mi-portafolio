import Link from 'next/link'

const Links = [
  {route: '/about', label: "About"}, {route: '/', label:'Home'}]

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