const PersonForm = ({onSubmit, nameValue, numberValue,
                     nameInputChange, numberInputChange}) => (
                        
    <form onSubmit={onSubmit}>
      <div>name: <input value={nameValue} onChange={nameInputChange}/></div>
      <div>number: <input value={numberValue} onChange={numberInputChange}/></div>
      <div><button type="submit">add</button></div>
    </form>
)

export default PersonForm