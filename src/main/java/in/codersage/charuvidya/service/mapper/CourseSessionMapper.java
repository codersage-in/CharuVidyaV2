package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseSession;
import in.codersage.charuvidya.service.dto.CourseSessionDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseSession} and its DTO {@link CourseSessionDTO}.
 */
@Mapper(componentModel = "spring", uses = { CourseSectionMapper.class })
public interface CourseSessionMapper extends EntityMapper<CourseSessionDTO, CourseSession> {
    @Mapping(target = "courseSection", source = "courseSection", qualifiedByName = "sectionTitle")
    CourseSessionDTO toDto(CourseSession s);

    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseSessionDTO toDtoId(CourseSession courseSession);
}
