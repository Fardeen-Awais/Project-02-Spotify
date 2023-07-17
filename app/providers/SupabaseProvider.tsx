'use client'
// Import necessary modules and components
import { Database } from "@/types_db"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import React, { useState } from "react";

// Define the props for the SupabaseProvider component
interface SupabaseProviderProps {
    children: React.ReactNode;
}

// Create the SupabaseProvider component
const SupabaseProvider : React.FC<SupabaseProviderProps> = ({children}) =>{

    // Set up a state variable to store the Supabase client
    const [supabaseClient] =  useState(()=>
    createClientComponentClient<Database>()
    );

    // Render the SessionContextProvider component and pass the supabaseClient as a prop
    return (
        <SessionContextProvider supabaseClient={supabaseClient}>
            {children}
        </SessionContextProvider>
    )
}

// Export the SupabaseProvider component
export default SupabaseProvider
