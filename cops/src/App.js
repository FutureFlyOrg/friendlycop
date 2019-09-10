import React, { Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import routers from './router';
import './assets/scss/style.scss';

function App() {
    return (
        <HashRouter>
            <Suspense fallback={<div>Please wait...</div>}>
                <Switch>
                    {routers.map((router, inx) => {
                        let { component: DisplayComponent, ...options } = router;
                        return (
                            <Route
                                {...options}
                                render={props => {
                                    return (
                                        <DisplayComponent {...props} />
                                    )
                                }}
                                key={'route-' + inx}
                            />
                        )
                    })}
                </Switch>
            </Suspense>
        </HashRouter>
    );
}

export default App;
