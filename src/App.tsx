export interface AppProps {}
export const App = ({}: AppProps) => {
    return (
        <div className="flex flex-col justify-center items-center" w="full">
            <header p="x-4 y-2">
                <h1 font="bold">Vite Stater</h1>
            </header>
            <div className="flex flex-col justify-center items-center gap-2">
                <div className="flex justify-center items-center gap-2">
                    <p>Content</p>
                </div>
            </div>
        </div>
    );
};
