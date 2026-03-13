const Filter = ({currentValue, changeCurrentValue}) => (
    <div>
      filter shown with: <input value={currentValue} onChange={changeCurrentValue}/>
    </div>
)

export default Filter