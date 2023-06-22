import classes from "./modal.module.css"
import { Fragment } from "react"
import ReactDOM from "react-dom"

const Backdorp = (props) =>{
    return <div className={classes.backdorp} />

}
const ModalOverlay = (props) =>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const portalElement = document.getElementById("overlays")
const Modal = (props) =>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdorp/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>

}

export default Modal