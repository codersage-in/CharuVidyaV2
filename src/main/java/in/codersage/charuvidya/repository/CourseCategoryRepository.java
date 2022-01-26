package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.CourseCategory;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourseCategory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseCategoryRepository extends JpaRepository<CourseCategory, Long>, JpaSpecificationExecutor<CourseCategory> {}
