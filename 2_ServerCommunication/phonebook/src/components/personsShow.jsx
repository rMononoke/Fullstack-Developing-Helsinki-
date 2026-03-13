const Persons = ({persons, deleteButton}) => (
    <div>
        {persons.map(person => (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => deleteButton(person.id, person.name)}>delete</button>
          </p>
        ))}
      </div>
)

export default Persons