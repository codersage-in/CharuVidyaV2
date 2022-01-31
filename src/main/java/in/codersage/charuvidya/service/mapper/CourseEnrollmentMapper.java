package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseEnrollment;
import in.codersage.charuvidya.service.dto.CourseEnrollmentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseEnrollment} and its DTO {@link CourseEnrollmentDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class, CourseMapper.class })
public interface CourseEnrollmentMapper extends EntityMapper<CourseEnrollmentDTO, CourseEnrollment> {
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    @Mapping(target = "course", source = "course", qualifiedByName = "courseTitle")
    CourseEnrollmentDTO toDto(CourseEnrollment s);
}
