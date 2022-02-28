const CollegeCard = (props) => {
    console.log(props)
    return (
        <div>
            <h2>College: {props.college.name} {props.college.mascot} - Location: {props.college.city}, {props.college.state}</h2>
        </div>
    )
}

export default CollegeCard