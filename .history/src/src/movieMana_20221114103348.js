import'./index.css'
function MoiveMana(){
    return(
        <div className="header"><hr/>
            <div className="navbar">
                <div className="menu">
                    <ul>
                        <li>Movie App</li>
                        <li><a hreft="#">Movies</a></li>
                        <li><a hreft="#">TV shows</a></li>
                        <li><a hreft="">Actors</a></li>
                    </ul>
                </div>
                <div className="search">
                    <input type="text" placeholder="search"/>
                </div>
            </div>
        </div>
    )
}
export default MoiveMana;