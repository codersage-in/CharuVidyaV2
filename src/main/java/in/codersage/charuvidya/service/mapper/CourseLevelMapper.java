package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseLevel;
import in.codersage.charuvidya.service.dto.CourseLevelDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseLevel} and its DTO {@link CourseLevelDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CourseLevelMapper extends EntityMapper<CourseLevelDTO, CourseLevel> {
    @Named("id")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CourseLevelDTO toDtoId(CourseLevel courseLevel);
}
