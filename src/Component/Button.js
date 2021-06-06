import PropTypes from "prop-types"
//button on top of the form,doesnt really do anything
const Button = ({color , text, onClick}) => {


   return <button onClick={onclick} style={{ backgroundColor : color}}
    className="btn">{text}
    </button>
}
Button.defaultProps ={
    color:"steelblue"
}
Button.propTypes ={
    text : PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
