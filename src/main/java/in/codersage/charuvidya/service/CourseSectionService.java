package in.codersage.charuvidya.service;

import in.codersage.charuvidya.service.dto.CourseSectionDTO;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link in.codersage.charuvidya.domain.CourseSection}.
 */
public interface CourseSectionService {
    /**
     * Save a courseSection.
     *
     * @param courseSectionDTO the entity to save.
     * @return the persisted entity.
     */
    CourseSectionDTO save(CourseSectionDTO courseSectionDTO);

    /**
     * Partially updates a courseSection.
     *
     * @param courseSectionDTO the entity to update partially.
     * @return the persisted entity.
     */
    Optional<CourseSectionDTO> partialUpdate(CourseSectionDTO courseSectionDTO);

    /**
     * Get all the courseSections.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<CourseSectionDTO> findAll(Pageable pageable);

    /**
     * Get the "id" courseSection.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<CourseSectionDTO> findOne(Long id);

    /**
     * Delete the "id" courseSection.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}
