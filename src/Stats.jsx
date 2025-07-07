import './App.css'

function Stats(props) {
    return (
    <div className='stat-div'>
        <h2>{props.data}</h2>
        <p className='name-style'>{props.name}</p>
    </div>
    )
}

export default Stats;