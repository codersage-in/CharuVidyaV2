package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.CourseSection;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourseSection entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseSectionRepository extends JpaRepository<CourseSection, Long>, JpaSpecificationExecutor<CourseSection> {}
