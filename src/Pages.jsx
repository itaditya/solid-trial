import { lazy } from 'solid-js';
import { Routes, Route, Link } from 'solid-app-router';

import { createGetList } from './api/list';

const Home = lazy(() => import('./pages/home/Home.page.jsx'));

function Users() {
  return <div>Users</div>;
}

function NotFound() {
  return <div>NotFound</div>;
}

export function Pages() {
  return (
    <>
      <h1>Awesome Site</h1>
      <Link class="nav" href="/">
        Home
      </Link>
      <Link class="nav" href="/users">
        Users
      </Link>
      <Routes>
        <Route path="/users" element={<Users />} />
        {/* <Route path="/users/:id" element={<User />}>
          <Route path="/" element={<UserHome />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/*all" element={<UserNotFound />} />
        </Route> */}
        <Route path="/" element={<Home />} data={createGetList} />
        <Route path="/*all" element={<NotFound />} />
      </Routes>
    </>
  );
}
