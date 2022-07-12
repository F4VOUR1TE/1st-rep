const Header = (props) => {
    
    return(
    <div className="Header">
        <div>
            <img src="" alt="" className=""/>
        </div>
        <div className="nav-bar">
            {
            props.menu.map((ele) => {
                return <div className="nav-item">{ele}</div>;
                })
            }
        </div>
    </div>
)
}
export default Header