import { Link } from 'solid-app-router';

export function Header() {
  return (
    <header>
      <div>
        <h1>Youthube</h1>
      </div>
      <div>Search Box</div>
      <nav>
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/users">
        Users
      </Link>
      <Link href="/channels">
        Channels
      </Link>
      <Link href="/channels/123">
        Channel 123
      </Link>
    </header>
  );
}
