import Link

from "next/link";
export default function Layout({ children }) {
return (
  <body>
    <nav>
      <Link href="/">Home</Link>
    </nav>
    {children}
  </body>
)
}