import CoursePreview from './Course/CoursePreview';
import classes from './CoursesList.module.css';
import coursesData from '../../data/coursesData';

function CoursesList() {
    return (

        <>
            {Object.keys(coursesData).map(courseTitle => (
                <section className={classes.section} key={courseTitle}>
                    <h2 className={classes.title}>{courseTitle}</h2>
                    <ul className={classes.list}>
                        {Object.keys(coursesData[courseTitle]).map(courseKey => (
                            <CoursePreview
                                key={courseKey}
                                image={coursesData[courseTitle][courseKey].image}
                                title={coursesData[courseTitle][courseKey].title}
                                description={coursesData[courseTitle][courseKey].description}
                                link={coursesData[courseTitle][courseKey].link}
                                linkName={coursesData[courseTitle][courseKey].linkName}
                            />
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}

export default CoursesList;