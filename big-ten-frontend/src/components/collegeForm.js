import React from 'react';
import { connect } from 'react-redux'
import { addCollege } from '../collegeActions'

class CollegeForm extends React.Component {
    state = {
        name: '',
        city: '',
        state: '',
        mascot: '',
        division_id: 0,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatchAdd(this.state)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>School Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                <label>City</label>
                <input type="text" name="city" onChange={this.handleChange} value={this.state.city} />
                <label>State</label>
                <input type="text" name="state" onChange={this.handleChange} value={this.state.state} />
                <label>Mascot</label>
                <input type="text" name="mascot" onChange={this.handleChange} value={this.state.mascot} />
                <label>Division</label>
                <input type="integer" name="division_id" onChange={this.handleChange} value={this.state.division_id} />
                <input type="submit" value="Add School" class="button" />
            </form>
            </div>
        )
}
}

function mapDispatchToProps(dispatch) {
    return {
    dispatchAdd: (college) => dispatch(addCollege(college))
}}

export default connect(null, mapDispatchToProps)(CollegeForm);
