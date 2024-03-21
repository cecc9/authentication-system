import { ReactNode } from 'react';

import { Button } from '../ui/button';

import GithubIcon from '../icons/github-icon';
import TwitterIcon from '../icons/twitter-icon';
import GoogleIcon from '../icons/google-icon';
import Separator from '../separator';

interface Props {
    children: ReactNode;
    title: string;
}

const AuthPreferencePanel = ({ title, children }: Props) => {
    return (
        <div className=' max-w-[370px] flex flex-col text-center gap-6 p-4'>
            <h2 className='text-3xl font-extrabold'>{title}</h2>
            <div className='flex flex-col w-full gap-4'>
                <Button variant='outline' className='w-full gap-3 py-6'>
                    <GithubIcon />
                    <span>Continuar con GitHub</span>
                </Button>
                <Button variant='outline' className='gap-3 py-6'>
                    <GoogleIcon />
                    <span>Continuar con Google</span>
                </Button>
                <Button variant='outline' className='gap-3 py-6'>
                    <TwitterIcon />
                    <span>Continuar con Twitter</span>
                </Button>
            </div>
            <Separator description='o continuar con: ' />
            {children}
            {/* provider auth button - PARA LOS BOTONES */}
        </div>
    );
};

export default AuthPreferencePanel;
