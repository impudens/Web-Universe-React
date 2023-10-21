import classes from './CoursePreview.module.css'
import { NavLink } from 'react-router-dom'

function CoursePreview(props) {
    return (
        <>
            <li className={classes.item}>
                <div className={classes.image__block}>
                    <img src={props.image} alt="course image" className={classes.image} />
                </div>
                <h3 className={classes.title}>{props.title} </h3>
                <p className={classes.description}>{props.description}</p>
                <NavLink to={props.link} className={classes.link}>{props.linkName}</NavLink>
            </li>
        </>
    );
}

export default CoursePreview;