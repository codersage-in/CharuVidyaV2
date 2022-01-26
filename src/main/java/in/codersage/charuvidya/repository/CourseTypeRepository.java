package in.codersage.charuvidya.repository;

import in.codersage.charuvidya.domain.CourseType;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the CourseType entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CourseTypeRepository extends JpaRepository<CourseType, Long>, JpaSpecificationExecutor<CourseType> {}
