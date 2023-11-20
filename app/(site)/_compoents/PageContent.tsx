'use client'

import { Song } from "@/types"
import SongsItem from "./SongsItem"
import useOnPlay from "@/app/hooks/useOnPlay"

interface PageContentProps {
    songs: Song[]
}

const PageContent = ({songs}:PageContentProps) => {
    const onPlay = useOnPlay(songs);
    if(songs.length === 0) {
        return (
            <div className='mt-4 text-neutral-300'>
                No songs found
            </div>
        )
    }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-4">
        {songs.map((item)=>(
            <SongsItem onClick={(id:string) => onPlay(id)} key={item.id} data={item} />
        ))}
    </div>
  )
}

export default PageContent