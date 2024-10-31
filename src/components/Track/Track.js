
function Track(props) {
    return (
        <div className='Track'>
            <div className='Track-info'>
                <h3>{props.song}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            <button>+</button>
        </div>
    );
}

export default Track;