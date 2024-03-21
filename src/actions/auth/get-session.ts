'use server';

import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';

export const getSessionClient = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    return { session, error };
};
