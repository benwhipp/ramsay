import { Square, type SquareProps } from '@/components/Results/More/Square';

export const More = () => {
    const squareArray: SquareProps[] = [
        {
            image: '/img-2.jpg',
            href: '/',
            content: 'Orthopaedics',
        },
        {
            image: '/img-1.jpg',
            href: '/',
            content: 'Oncology',
        },
        {
            image: '/img.jpg',
            href: '/',
            content: 'General Surgery',
        },
    ];

    const renderSquares = () =>
        squareArray.map((square) => (
            <Square
                {...square}
                key={`moreSquare${square.content}`}
            />
        ));

    return (
        <div className="flex w-full flex-col gap-[50px]">
            <h3 className="text-[28px] font-medium text-dark-blue">More from Ramsay Health</h3>
            <div className="flex gap-[26px]">{renderSquares()}</div>
        </div>
    );
};
