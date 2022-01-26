package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseSessionProgress;
import in.codersage.charuvidya.service.dto.CourseSessionProgressDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseSessionProgress} and its DTO {@link CourseSessionProgressDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class, CourseSessionMapper.class })
public interface CourseSessionProgressMapper extends EntityMapper<CourseSessionProgressDTO, CourseSessionProgress> {
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    @Mapping(target = "courseSession", source = "courseSession", qualifiedByName = "id")
    CourseSessionProgressDTO toDto(CourseSessionProgress s);
}
