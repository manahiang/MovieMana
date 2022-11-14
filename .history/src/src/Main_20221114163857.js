import Card from './components/card';
import './index.css'

function Main() {
    return (
        <div className='container'>
            <div className='header'>
                <div className='navbar'>
                    <div className='menu'>
                        <ul>
                            <li><a href='#'>Movies App</a></li>
                            <li><a href='#'>Movies </a></li>
                            <li><a href='#'>TV shows</a></li>
                            <li><a href='#'>actors</a></li>
                        </ul>
                    </div>
                    <div className='search'>
                        <input type="text" placeholder="search" />
                    </div>
                </div>

            </div>
            <hr/>
            <Card/>
        </div>
        
    )
    
}
export default Main;