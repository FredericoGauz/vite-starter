import { BrowserRouter as MainRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { SecondPage } from './pages';

export interface RouterProps {}

export const Router = ({}: RouterProps) => {
    console.log('object');
    return (
        <MainRouter>
            <Routes>
                <Route path="/second">
                    <SecondPage />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Routes>
        </MainRouter>
    );
};
