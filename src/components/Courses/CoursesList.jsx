import CoursePreview from './Course/CoursePreview';
import coursesData from '../../data/coursesData';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './CoursesList.module.css';

function CoursesList() {
    return (
        <>
            {Object.keys(coursesData).map(courseTitle => (
                <section className={classes.section} key={courseTitle}>
                    <h2 className={classes.title}>{courseTitle}</h2>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={25}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        className={classes.swiper}
                    >
                        {Object.keys(coursesData[courseTitle]).map(courseKey => (
                            <SwiperSlide key={courseKey}
                                className={classes.swiper__slide}>

                                <CoursePreview
                                    key={courseKey}
                                    image={coursesData[courseTitle][courseKey].image}
                                    title={coursesData[courseTitle][courseKey].title}
                                    description={coursesData[courseTitle][courseKey].description}
                                    link={coursesData[courseTitle][courseKey].link}
                                    linkName={coursesData[courseTitle][courseKey].linkName}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            ))}
        </>
    );
}

export default CoursesList;
