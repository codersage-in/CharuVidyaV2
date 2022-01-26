package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.Course;
import in.codersage.charuvidya.service.dto.CourseDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Course} and its DTO {@link CourseDTO}.
 */
@Mapper(componentModel = "spring", uses = { CourseLevelMapper.class, CourseCategoryMapper.class, CourseTypeMapper.class, UserMapper.class })
public interface CourseMapper extends EntityMapper<CourseDTO, Course> {
    @Mapping(target = "courseLevel", source = "courseLevel", qualifiedByName = "id")
    @Mapping(target = "courseCategory", source = "courseCategory", qualifiedByName = "id")
    @Mapping(target = "courseType", source = "courseType", qualifiedByName = "id")
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    @Mapping(target = "reviewer", source = "reviewer", qualifiedByName = "login")
    CourseDTO toDto(Course s);

    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseDTO toDtoId(Course course);

    @Named("courseTitle")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "courseTitle", source = "courseTitle")
    CourseDTO toDtoCourseTitle(Course course);
}
