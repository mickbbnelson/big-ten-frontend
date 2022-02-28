import { Switch, Route } from 'react-router-dom'

const Pages = () => {
    return (
        <div>
            <Switch>
                <Route exact path="colleges" component={routerProps => <CollegeIndex routerProps={routerProps} />} />
            </Switch>
        </div>
    )
}

export default Pages  