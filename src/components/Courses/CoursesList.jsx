import CoursePreview from './Course/CoursePreview';
import './CoursesList.css';
import coursesData from '../../data/coursesData';

function CoursesList() {
    return (

        <div>
            {Object.keys(coursesData).map(courseTitle => (
                <section className="courses__section" key={courseTitle}>
                    <h2 className="courses__title">{courseTitle}</h2>
                    <ul className="courses__list">
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
        </div>
    );
}

export default CoursesList;