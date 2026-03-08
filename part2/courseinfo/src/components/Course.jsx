import Header from "./Header"
import Content from "./Content"


const Course = (props) => {
    const course = props.course

    const total = course.parts.reduce((init, curr) => init + curr.exercises, 0)

    return (
        <div>
            <Header text={course.name}/>
            <Content parts={course.parts}/>
            <b>total of {total} exercises</b>
        </div>
    )
}

export default Course