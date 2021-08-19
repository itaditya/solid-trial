import { lazy } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import { createGetList } from '../api/list';
import { Header } from './components/Header';

const Home = lazy(() => import('./home/Home.page'));
const Channels = lazy(() => import('./channels/Channels.page'));
const ChannelsHome = lazy(() => import('./channels/ChannelsHome.page'));
const ChannelDetails = lazy(() => import('./channels/channelDetails/ChannelDetails.page'));

function Users() {
  return <div>Users</div>;
}

function NotFound() {
  return <div>NotFound</div>;
}

export function Pages() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/channels" element={<Channels />}>
          <Route path="/" element={<ChannelsHome />} />
          <Route path="/:id" element={<ChannelDetails />} />
        </Route>
        <Route path="/" element={<Home />} data={createGetList} />
        <Route path="/*all" element={<NotFound />} />
      </Routes>
    </>
  );
}
