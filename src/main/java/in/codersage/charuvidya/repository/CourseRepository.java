package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.Course;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Course entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseRepository extends JpaRepository<Course, Long>, JpaSpecificationExecutor<Course> {
    @Query("select course from Course course where course.user.login = ?#{principal.username}")
    List<Course> findByUserIsCurrentUser();
}
