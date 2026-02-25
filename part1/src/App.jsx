// always capitalise your custom component.
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}


const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a * b)

  const friends = [ 'Peter', 'Maya']

  return (
    <div>
      <p>Hello world</p>
      <Hello name='Gwog'/>
      <Hello name='Greg'/>
      <Hello />
      <Hello />
      <p>{friends}</p>
      
    </div>
  )
}

export default App