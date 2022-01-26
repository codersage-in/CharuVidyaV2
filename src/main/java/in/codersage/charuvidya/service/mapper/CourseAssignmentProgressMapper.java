package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseAssignmentProgress;
import in.codersage.charuvidya.service.dto.CourseAssignmentProgressDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseAssignmentProgress} and its DTO {@link CourseAssignmentProgressDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class, CourseAssignmentMapper.class })
public interface CourseAssignmentProgressMapper extends EntityMapper<CourseAssignmentProgressDTO, CourseAssignmentProgress> {
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    @Mapping(target = "courseAssignment", source = "courseAssignment", qualifiedByName = "id")
    CourseAssignmentProgressDTO toDto(CourseAssignmentProgress s);
}
