package in.codersage.charuvidya.service;

import in.codersage.charuvidya.service.dto.CourseDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link in.codersage.charuvidya.domain.Course}.
 */
public interface CourseService {
    /**
     * Save a course.
     *
     * @param courseDTO the entity to save.
     * @return the persisted entity.
     */
    CourseDTO save(CourseDTO courseDTO);

    /**
     * Partially updates a course.
     *
     * @param courseDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<CourseDTO> partialUpdate(CourseDTO courseDTO);

    /**
     * Get all the courses.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<CourseDTO> findAll(Pageable pageable);

    /**
     * Get the "id" course.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<CourseDTO> findOne(Long id);

    /**
     * Delete the "id" course.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
