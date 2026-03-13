const CountryFilter = ({filterValue, changeFilterValue}) => (
    <div>
        find countries <input value={filterValue} onChange={changeFilterValue}></input>
    </div>
)

export default CountryFilter