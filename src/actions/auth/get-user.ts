'use server';

import { createClient } from '@/supabase/server';
import { cookies } from 'next/headers';
import { User } from '@supabase/supabase-js';

export const getUserClient = async (): Promise<{ user: User | null }> => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser();

    return { user };
};
