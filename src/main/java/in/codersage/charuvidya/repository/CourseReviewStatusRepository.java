package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.CourseReviewStatus;
import java.util.List;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourseReviewStatus entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseReviewStatusRepository
    extends JpaRepository<CourseReviewStatus, Long>, JpaSpecificationExecutor<CourseReviewStatus> {
    @Query(
        "select courseReviewStatus from CourseReviewStatus courseReviewStatus where courseReviewStatus.user.login = ?#{principal.username}"
    )
    List<CourseReviewStatus> findByUserIsCurrentUser();
}
