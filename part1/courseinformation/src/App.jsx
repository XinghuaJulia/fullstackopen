const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.course} {props.num}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts
  const exercise1 = parts[0]
  const exercise2 = parts[1]
  const exercise3 = parts[2]

  return (
    <div>
      <Part course={exercise1.name} num={exercise1.exercises}/>
      <Part course={exercise2.name} num={exercise2.exercises}/>
      <Part course={exercise3.name} num={exercise3.exercises}/>
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts
  return (
    <div>
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

export default App