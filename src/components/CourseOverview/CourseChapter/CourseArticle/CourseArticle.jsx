import classes from './CourseArticle.module.css';
import { useParams } from 'react-router-dom';
import PDFViewerComponent from './PDFViewerComponent/PDFViewerComponent';

function CourseOverview(props) {
    const { articleId } = useParams();
    const urlLink = `${props.fullLink}${articleId}`
    return (
        <>
            <h1 className={classes.title}>Заголовок #</h1>
            <PDFViewerComponent urlLink={urlLink} />
        </>
    );
}

export default CourseOverview;
