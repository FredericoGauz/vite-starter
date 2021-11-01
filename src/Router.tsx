import { BrowserRouter as MainRouter, Switch, Route } from 'react-router-dom';
import { App } from './App';
import { SecondPage } from './pages';

export interface RouterProps {}

export const Router = ({}: RouterProps) => {
    console.log('object');
    return (
        <MainRouter>
            <Switch>
                <Route path="/second">
                    <SecondPage />
                </Route>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </MainRouter>
    );
};
