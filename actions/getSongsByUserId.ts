import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import {cookies} from 'next/headers'

const getSongsByUserId = async ():Promise<Song[]> => {
    const supabase = createServerComponentClient({
        cookies: cookies
    })

    const {data:sessionData,error:sessionError} = await supabase.auth.getSession() // session le ga agr user shankhat hogya

    if(sessionError){
        console.log(sessionError.message);
        return [];
    }
    

   const {data, error} = await supabase
   .from('songs')
   .select('*')
   .eq('user_id', sessionData?.session?.user?.id) // Yani yay aik condition hai k user id login krnay walay bnday ka hai k nhi. Kiu k hum sirf usi user ka song chahiye jo us nai upload kia hai.
   .order('created_at', { ascending: false })

   if(error){
    console.log(error.message);
   }
   
   return (data as any) || []; // Hum data ko kisi bhi type mai ho return krrhay hai ya uski jgha khali array ajay gi 
}

export default getSongsByUserId