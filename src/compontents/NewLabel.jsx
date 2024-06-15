import clsx from 'clsx';

export default function NewLabel({ newLabel }) {
    const labels = clsx(
       "absolute top-4 right-1 z-10 bg-fuchsia-400 rounded-full text-xs px-4 py-1 text-center font-bold text-black ",
        {'hidden': !newLabel },
        
    );

    return newLabel ? <span className={labels}>NEW</span> : null;
}
