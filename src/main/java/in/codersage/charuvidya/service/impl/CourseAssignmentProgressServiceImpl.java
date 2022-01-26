package in.codersage.charuvidya.service.impl;

import in.codersage.charuvidya.domain.CourseAssignmentProgress;
import in.codersage.charuvidya.repository.CourseAssignmentProgressRepository;
import in.codersage.charuvidya.service.CourseAssignmentProgressService;
import in.codersage.charuvidya.service.dto.CourseAssignmentProgressDTO;
import in.codersage.charuvidya.service.mapper.CourseAssignmentProgressMapper;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link CourseAssignmentProgress}.
 */
@Service
@Transactional
public class CourseAssignmentProgressServiceImpl implements CourseAssignmentProgressService {

    private final Logger log = LoggerFactory.getLogger(CourseAssignmentProgressServiceImpl.class);

    private final CourseAssignmentProgressRepository courseAssignmentProgressRepository;

    private final CourseAssignmentProgressMapper courseAssignmentProgressMapper;

    public CourseAssignmentProgressServiceImpl(
        CourseAssignmentProgressRepository courseAssignmentProgressRepository,
        CourseAssignmentProgressMapper courseAssignmentProgressMapper
    ) {
        this.courseAssignmentProgressRepository = courseAssignmentProgressRepository;
        this.courseAssignmentProgressMapper = courseAssignmentProgressMapper;
    }

    @Override
    public CourseAssignmentProgressDTO save(CourseAssignmentProgressDTO courseAssignmentProgressDTO) {
        log.debug("Request to save CourseAssignmentProgress : {}", courseAssignmentProgressDTO);
        CourseAssignmentProgress courseAssignmentProgress = courseAssignmentProgressMapper.toEntity(courseAssignmentProgressDTO);
        courseAssignmentProgress = courseAssignmentProgressRepository.save(courseAssignmentProgress);
        return courseAssignmentProgressMapper.toDto(courseAssignmentProgress);
    }

    @Override
    public Optional<CourseAssignmentProgressDTO> partialUpdate(CourseAssignmentProgressDTO courseAssignmentProgressDTO) {
        log.debug("Request to partially update CourseAssignmentProgress : {}", courseAssignmentProgressDTO);

        return courseAssignmentProgressRepository
            .findById(courseAssignmentProgressDTO.getId())
            .map(existingCourseAssignmentProgress -> {
                courseAssignmentProgressMapper.partialUpdate(existingCourseAssignmentProgress, courseAssignmentProgressDTO);

                return existingCourseAssignmentProgress;
            })
            .map(courseAssignmentProgressRepository::save)
            .map(courseAssignmentProgressMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<CourseAssignmentProgressDTO> findAll(Pageable pageable) {
        log.debug("Request to get all CourseAssignmentProgresses");
        return courseAssignmentProgressRepository.findAll(pageable).map(courseAssignmentProgressMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<CourseAssignmentProgressDTO> findOne(Long id) {
        log.debug("Request to get CourseAssignmentProgress : {}", id);
        return courseAssignmentProgressRepository.findById(id).map(courseAssignmentProgressMapper::toDto);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete CourseAssignmentProgress : {}", id);
        courseAssignmentProgressRepository.deleteById(id);
    }
}
