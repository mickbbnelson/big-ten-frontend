import React from "react"
import { connect } from "react-redux"
import { getColleges } from '../collegeActions'
import CollegeCard from './collegeCard'

class CollegeIndex extends React.Component {

    componentDidMount(){
        this.props.dispatchColleges()
    }

    render() {
        const list = () => this.props.colleges.map((college) => <li>{<CollegeCard key={college.id} college={college} />}</li>)
        return (
        <div>
            <h1>Colleges</h1>
            <div>
            <ul>{list()}</ul>
            </div>
        </div>
    )}

}

function mapStateToProps(state){
    console.log(state)
    return {
        colleges: state
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchColleges: () => dispatch(getColleges())
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(CollegeIndex)