import { Routes, Route } from 'react-router-dom'
import DivisionIndex from './divisionIndex'
import CollegeIndex from './collegeIndex'

const Pages = () => {
    return (
        <div>
            <Routes>
                <Route exact path="/colleges" element={<CollegeIndex />} />
                <Route exact path="/divisions" element={<DivisionIndex />} />
            </Routes>
        </div>
    )
}

export default Pages  