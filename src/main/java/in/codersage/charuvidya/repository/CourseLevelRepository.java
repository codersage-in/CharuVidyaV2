package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.CourseLevel;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourseLevel entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseLevelRepository extends JpaRepository<CourseLevel, Long>, JpaSpecificationExecutor<CourseLevel> {}
