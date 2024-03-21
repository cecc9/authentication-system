import React from 'react';
import { UserMetadata } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';

import { getSessionClient } from '@/actions/auth/get-session';
import { getUserClient } from '@/actions/auth/get-user';

const DashboardPage = async () => {
    const { session } = await getSessionClient();

    if (!session) {
        redirect('/login');
    }

    const { user } = await getUserClient();

    return (
        <div className=' w-full h-full flex flex-col items-center justify-center gap-4'>
            <h2 className='text-3xl font-semibold'>Panel de Control</h2>
            <p className='italic font-medium'>
                Bienvenido:
                <span className='bg-orange-400 p-2 rounded-lg ml-2'>
                    {user?.user_metadata.username} - {user?.email}
                </span>
            </p>
        </div>
    );
};

export default DashboardPage;
