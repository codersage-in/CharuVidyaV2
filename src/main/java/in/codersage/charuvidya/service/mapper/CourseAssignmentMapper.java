package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseAssignment;
import in.codersage.charuvidya.service.dto.CourseAssignmentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseAssignment} and its DTO {@link CourseAssignmentDTO}.
 */
@Mapper(componentModel = "spring", uses = { CourseSectionMapper.class })
public interface CourseAssignmentMapper extends EntityMapper<CourseAssignmentDTO, CourseAssignment> {
    @Mapping(target = "courseSection", source = "courseSection", qualifiedByName = "sectionTitle")
    CourseAssignmentDTO toDto(CourseAssignment s);

    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseAssignmentDTO toDtoId(CourseAssignment courseAssignment);
}
