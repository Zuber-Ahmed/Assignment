import Head from 'next/head';
import { Temp } from './Comp1';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Revest Solutions</title>
      </Head>

      <main>
        <Temp />
      </main>
    </div>
  );
}
