import { type NextRequest } from 'next/server';
import { createClient } from '@/supabase/middleware';

export async function middleware(request: NextRequest) {
    console.log('middle path: ', request.nextUrl.pathname);

    const { supabase, response } = createClient(request);
    await supabase.auth.getSession();
    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */

        // para que se activen todas las rutas
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
};
