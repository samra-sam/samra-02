import Link from "next/link"
export default function Navbar(){
    return(
        <div className="main">
     <Link href="/"> Home Page</Link>
            <br />
    <Link href="/about"> About Page</Link>
    <br />
    <Link href="/job"> Job Page</Link>
    <br />
    <Link href="/job/programming">Programming Page</Link>
    <br />
        </div>
    )

}