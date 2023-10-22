import classes from './CourseChapter.module.css';
import { useParams } from 'react-router-dom';

function CourseOverview(props) {
    const layoutData = props.data;
    const { chapterId } = useParams();
    return (
        <>
            <section className={classes.course}>
                <h2 className={classes.title}>Оглавление раздела</h2>
                <ol className={classes.list}>
                    {layoutData.map((element, index) => (
                        <li className={classes.item} key={index} >
                            {element.video ? (
                                <video src={element.video} controls className={classes.video}></video>
                            ) : (
                                <>
                                    <a href={element.link} className={classes.link}>
                                        {element.title}
                                    </a>
                                    {element.description && (
                                        <p className={classes.description}>{element.description}</p>
                                    )}
                                </>
                            )}
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
}

export default CourseOverview;
