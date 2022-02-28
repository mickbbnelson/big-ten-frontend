import { Switch, Route } from 'react-router-dom'
import DivisionIndex from './divisionIndex'

const Pages = () => {
    return (
        <div>
            <Switch>
                <Route exact path="colleges" component={routerProps => <CollegeIndex routerProps={routerProps} />} />
                <Route exact path="divisions" component={routerProps => <DivisionIndex routerProps={routerProps} />} />
            </Switch>
        </div>
    )
}

export default Pages  