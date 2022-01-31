package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseCategory;
import in.codersage.charuvidya.service.dto.CourseCategoryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseCategory} and its DTO {@link CourseCategoryDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CourseCategoryMapper extends EntityMapper<CourseCategoryDTO, CourseCategory> {
    @Named("title")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "title", source = "title")
    CourseCategoryDTO toDtoTitle(CourseCategory courseCategory);
}
