import Link from 'next/link';
import ArrowForwardIcon from '../icons/arrowforward-icon';

interface Props {
    pathRedirect: string;
    title: string;
}

const EmailAuthWithButton = ({ pathRedirect, title }: Props) => {
    return (
        <div>
            <Link
                href={pathRedirect}
                className='inline-block px-2 text-blue-700 border-b border-b-transparent hover:border-b hover:border-b-blue-700'
            >
                <span className='flex items-center gap-2 text-base'>
                    {title}
                    <ArrowForwardIcon />
                </span>
            </Link>
        </div>
    );
};

export default EmailAuthWithButton;
