import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import ArrowBackIcon from '../icons/arrowback-icon';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    redirectPath: string;
    title: string;
    description: string;
}

const AuthPreferenceWithEmail = ({
    children,
    redirectPath,
    title,
    description,
}: Props) => {
    return (
        <Card className='w-[350px]'>
            <CardHeader>
                <CardTitle> {title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                {children}
            </CardContent>
            <CardFooter className='flex justify-between pt-4'>
                <Link
                    href={redirectPath}
                    className='inline-block px-2 mx-auto text-blue-700 border-b border-b-transparent hover:border-b hover:border-b-blue-700'
                >
                    <span className='flex items-center gap-2 text-base'>
                        <ArrowBackIcon />
                        Ver opciones anteriores
                    </span>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default AuthPreferenceWithEmail;
