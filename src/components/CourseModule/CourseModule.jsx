import classes from './CourseModule.module.css';
import layoutData from '../../data/layoutData';

function CourseModule() {
    return (
        <>
            <section className={classes.course}>
                <h2 className={classes.title}>Оглавление курса</h2>
                <ol className={classes.list}>
                    {layoutData.map((element, index) => (
                        <li className={classes.item} key={index}>
                            <a href={element.link} className={classes.link}>{element.title}</a>
                            <p className={classes.description}>{element.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
}

export default CourseModule;
