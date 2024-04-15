export function Footer() {
    return (
        <footer className={'flex justify-center pt-20 pb-4 items-center'}>
            <p className={'text-sm text-gray-400 dark:text-gray-500'}>
                &copy; {new Date().getFullYear()} Hairetsu.com
            </p>
        </footer>
    );
}