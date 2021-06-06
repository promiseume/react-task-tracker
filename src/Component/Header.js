import Button from './Button'
//to-do list header
const Header = () => {
    
    return (
        <header className="header">
            <h1>TO-DO LIST</h1>
            <Button color="blue" text="Add" onClick={onclick} />
        </header>
    )
}

export default Header
