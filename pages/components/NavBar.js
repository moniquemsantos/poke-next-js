import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
