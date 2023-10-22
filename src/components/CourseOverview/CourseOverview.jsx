import classes from './CourseOverview.module.css';
import { NavLink } from 'react-router-dom'

function CourseModule(props) {
    const layoutData = props.data;
    return (
        <>
            <section className={classes.course}>
                <h2 className={classes.title}>Оглавление курса</h2>
                <ol className={classes.list}>
                    {layoutData.map((element, index) => (
                        <li className={classes.item} key={index}>
                            <NavLink to={element.link} className={classes.link}>{element.title}</NavLink>
                            <p className={classes.description}>{element.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
}

export default CourseModule;
