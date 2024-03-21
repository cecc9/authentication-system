'use server';

import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';

export const signOutAction = async () => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signOut();

    if (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }

    return null;
};
