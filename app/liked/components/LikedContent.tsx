'use client'
import MediaItems from '@/app/components/MediaItems'
import { useUser } from '@/app/hooks/useUser'
import LikeButton from '@/app/search/components/LikeButton'
import { Song } from '@/types'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

interface LikedContentProps {
    songs: Song[]
}
const LikedContent:React.FC<LikedContentProps> = ({songs}) => {
    const router = useRouter()
    const {isLoading, user} = useUser()

    useEffect(() => {
        if(!isLoading && !user){
            router.replace('/')
        }
    },[isLoading, user, router])

    if(songs.length === 0){
        return (
            <div className="w-full h-full flex flex-col gap-y-2 items-center justify-center">
                No liked songs
            </div>
        )
    }

  return (
    <div className='flex flex-col gap-y-2 w-full h-full p-6'>
        {songs.map((song)=>(
            <div key={song.id} className='flex items-center gap-x-4 w-full'>
                <div className='flex-1'>
                    <MediaItems onClick={() => {}} data={song}/>
                </div>
                <LikeButton songId={song.id}/>
            </div>
        ))}
    </div>
  )
}

export default LikedContent