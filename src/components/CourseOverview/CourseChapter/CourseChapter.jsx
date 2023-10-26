import classes from './CourseChapter.module.css';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

function CourseOverview(props) {
    const layoutData = props.data;
    const { chapterId } = useParams();
    return (
        <>
            <section className={classes.course}>
                <h2 className={classes.title}>Оглавление раздела</h2>
                <ol className={classes.list}>
                    {layoutData.map((element, index) => {
                        let content = null;

                        if (element.video) {
                            content = <video src={element.video} controls className={classes.video}></video>;
                        } else if (element.otherLink) {
                            content = <a className={classes.otherLink} href={element.otherLink} rel='noreferrer' target='_blank'>{element.title}</a>;
                        } else {
                            content = (
                                <>
                                    <NavLink to={element.link} className={classes.link}>
                                        {element.title}
                                    </NavLink>
                                    {element.description && (
                                        <p className={classes.description}>{element.description}</p>
                                    )}
                                </>
                            );
                        }

                        return (
                            <li className={classes.item} key={index}>
                                {content}
                            </li>
                        );
                    })}
                </ol>
            </section>
        </>
    );
}

export default CourseOverview;
