package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.CourseEnrollment;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourseEnrollment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseEnrollmentRepository extends JpaRepository<CourseEnrollment, Long>, JpaSpecificationExecutor<CourseEnrollment> {
    @Query("select courseEnrollment from CourseEnrollment courseEnrollment where courseEnrollment.user.login = ?#{principal.username}")
    List<CourseEnrollment> findByUserIsCurrentUser();
}
