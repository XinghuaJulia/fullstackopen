import Parts from "./Parts"



const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => <Parts key={part.id} name={part.name} exercises={part.exercises} />)}
        </div>
    )
}

export default Content