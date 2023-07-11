import Image from 'next/image';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function Home() {
  return (
    <div className='bg-neutral-900 rounded-lg overflow-hidden h-screen w-full '>
      <Header>
        <div className='mt-6'>
          <h1 className='text-white text-3xl font-semibold'>Welcome back</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
          <ListItem image='/images/liked.png' href='liked' name='Liked songs'/>
        </div>
        <div className='mt-7 mb-3 px-2'>
          <div className='flex justify-between items-center'>
            <h1 className='text-white text-2xl font-semibold'>Newest Songs</h1>
          </div>
          <div className='text-sm mt-2 '>
            List of Songs
          </div>
        </div>
      </Header>
    </div>
  );
}
