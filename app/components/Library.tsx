import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';
import useAuthModal from '../hooks/useAuthmodal';
import { useUser } from '@supabase/auth-helpers-react';
import useUploadModal from '../hooks/useUploadModal';
import { Song } from '@/types';
import MediaItems from './MediaItems';

interface LibraryProps {
    songs: Song[]
}

const Library: React.FC<LibraryProps> = ({ songs }) => {

    const authModal = useAuthModal(); // getting the login modal
    const user = useUser() // Getting the user 
    const UploadModal = useUploadModal()
    const onClick = () => {
        if (!user) {
            console.info('There is no user')
            return authModal.onOpen(); //Popup if user is not login 
        }
        // TODO: Check for subscription 
        return UploadModal.onOpen();
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className='text-neutral-400 cursor-pointer' size={26} />
                    <p className='text-neutral-400 font-medium text-base'>Your Library</p>
                </div>
                <AiOutlinePlus onClick={onClick} size={20} className='text-neutral-400 cursor-pointer transition hover:text-white ml-auto' />
            </div>
            <div className='flex flex-col gap-y-2 mt-4 px-3'>
                {songs.map((item) => (
                    <MediaItems
                        onClick={() => { }}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;
