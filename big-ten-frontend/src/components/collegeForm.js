import React from 'react'

class CollegeForm extends React.Component {
    state = {
        name: '',
        city: '',
        state: '',
        mascot: '',
        division_id: '',
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
            <form>
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

export default CollegeForm