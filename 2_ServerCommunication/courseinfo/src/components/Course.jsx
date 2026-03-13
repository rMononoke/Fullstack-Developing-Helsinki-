const Header = (props) => <h1>{props.course}</h1>

const Total = ({parts}) => {
  const sum = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
  
  return <p>Number of exercises {sum}</p>
}

const Content = ({parts}) => (
  <div>
    {parts.map(part => <div key={part.id}><Part part={part} /></div>)}
    <Total parts={parts} />
  </div>
)

const Part = ({part}) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({course}) => (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts}/>
  </div>
)

export default Course