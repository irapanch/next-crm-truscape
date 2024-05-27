import { headers } from 'next/headers';
import AddCompanyButton from './components/add-company-button';
import StatusLabel, { Status } from './components/status-label';
import ServerComponent from './components/server-component';
import ClientComponent from './components/client-component';
import ServerComponentCopy from './components/server-component copy';
import MagicButton from './components/magic-button';

export default function Home() {
  console.log(headers());

  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
      <div>
        <AddCompanyButton />
      </div>
      <ServerComponent/>
      <ClientComponent><ServerComponentCopy/></ClientComponent>
    <MagicButton/>
    </main>
  );
}
