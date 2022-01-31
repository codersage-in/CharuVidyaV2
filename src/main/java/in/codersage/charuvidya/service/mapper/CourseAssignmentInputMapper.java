package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseAssignmentInput;
import in.codersage.charuvidya.service.dto.CourseAssignmentInputDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseAssignmentInput} and its DTO {@link CourseAssignmentInputDTO}.
 */
@Mapper(componentModel = "spring", uses = { CourseAssignmentMapper.class, UserMapper.class })
public interface CourseAssignmentInputMapper extends EntityMapper<CourseAssignmentInputDTO, CourseAssignmentInput> {
    @Mapping(target = "courseAssignment", source = "courseAssignment", qualifiedByName = "assignmentTitle")
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    CourseAssignmentInputDTO toDto(CourseAssignmentInput s);
}
