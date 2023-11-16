import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

const Middleware= async(req:NextRequest) => {
    const res = NextResponse.next()
    const supabase = createMiddlewareClient({
        req,
        res
    });

    await supabase.auth.getSession();
    return res;
};
export default Middleware;
// Mukhtasaran yay middleware function hum ko ijazat deta hai k hum Supabase k Shanakhat k nazam ko apni Next.js ki application mai lga skay session management ka isatamal kr k.