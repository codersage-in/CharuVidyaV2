package in.codersage.charuvidya.service;

import in.codersage.charuvidya.service.dto.CourseLevelDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link in.codersage.charuvidya.domain.CourseLevel}.
 */
public interface CourseLevelService {
    /**
     * Save a courseLevel.
     *
     * @param courseLevelDTO the entity to save.
     * @return the persisted entity.
     */
    CourseLevelDTO save(CourseLevelDTO courseLevelDTO);

    /**
     * Partially updates a courseLevel.
     *
     * @param courseLevelDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<CourseLevelDTO> partialUpdate(CourseLevelDTO courseLevelDTO);

    /**
     * Get all the courseLevels.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<CourseLevelDTO> findAll(Pageable pageable);

    /**
     * Get the "id" courseLevel.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<CourseLevelDTO> findOne(Long id);

    /**
     * Delete the "id" courseLevel.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
