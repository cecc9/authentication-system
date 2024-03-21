import { CardDescription } from '@/components/ui/card';

interface Props {
    description: string;
}

const Separator = ({ description }: Props) => {
    return (
        <div className='relative h-[40px] flex items-center justify-center'>
            <div className='relative w-full h-[1px] bg-secondary'></div>
            <CardDescription className='absolute text-sm  bg-card px-2'>
                {description}
            </CardDescription>
        </div>
    );
};

export default Separator;
