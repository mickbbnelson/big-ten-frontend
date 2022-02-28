import React from "react"
import { connect } from "react-redux"
import { getColleges } from '../collegeActions'

class CollegeIndex extends React.Component {

    componentDidMount(){
        this.props.dispatchColleges()
    }

    render() {
        return (
        <div>
            <h1>Colleges</h1>
            <div>
               <ul>{this.props.colleges.map((college) => <li>{college.name}</li>)}</ul>
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