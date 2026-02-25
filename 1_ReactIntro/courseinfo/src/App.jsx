const Header = (props) => <h1>{props.data.name}</h1>

const Part = (props) => {
  return (
    <div>
      <p>
        {props.title} {props.lessons}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.structue.parts[0].name} lessons={props.structue.parts[0].exercises} />
      <Part title={props.structue.parts[1].name} lessons={props.structue.parts[1].exercises} />
      <Part title={props.structue.parts[2].name} lessons={props.structue.parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises {props.counts.parts[0].exercises +
                             props.counts.parts[1].exercises +
                             props.counts.parts[2].exercises}
      </p>
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
      <Header data={course} />
      <Content structue={course} />
      <Total counts={course} />
    </div>
  )
}

export default App