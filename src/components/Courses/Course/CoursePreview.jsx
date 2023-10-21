import './CoursePreview.css'


function CoursePreview(props) {
    return (
        <>
            <li className='course__item'>
                <img src={props.image} alt="courses image" className="course__image" />
                <h3 className="course__name">{props.title} </h3>
                <p className="course__description">{props.description}</p>
                <a href={props.link} className="course__link">{props.linkName}</a>
            </li>
        </>
    );
}

export default CoursePreview;