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
  const exercise1 = props.exercise1
  const exercise2 = props.exercise2
  const exercise3 = props.exercise3

  return (
    <div>
      <Part course={exercise1[0]} num={exercise1[1]}/>
      <Part course={exercise2[0]} num={exercise2[1]}/>
      <Part course={exercise3[0]} num={exercise3[1]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content exercise1={[part1, exercises1]} exercise2={[part2, exercises2]} exercise3={[part3, exercises3]}></Content>
      <Total total = {exercises1 + exercises2 + exercises3}></Total>
    </div>
  )
}

export default App