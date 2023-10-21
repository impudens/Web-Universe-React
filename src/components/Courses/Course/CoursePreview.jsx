import classes from './CoursePreview.module.css'


function CoursePreview(props) {
    return (
        <>
            <li className={classes.item}>
                <img src={props.image} alt="course image" className={classes.image} />
                <h3 className={classes.title}>{props.title} </h3>
                <p className={classes.description}>{props.description}</p>
                <a href={props.link} className={classes.link}>{props.linkName}</a>
            </li>
        </>
    );
}

export default CoursePreview;