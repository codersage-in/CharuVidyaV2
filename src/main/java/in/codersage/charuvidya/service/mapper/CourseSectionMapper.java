package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseSection;
import in.codersage.charuvidya.service.dto.CourseSectionDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseSection} and its DTO {@link CourseSectionDTO}.
 */
@Mapper(componentModel = "spring", uses = { CourseMapper.class })
public interface CourseSectionMapper extends EntityMapper<CourseSectionDTO, CourseSection> {
    @Mapping(target = "course", source = "course", qualifiedByName = "courseTitle")
    CourseSectionDTO toDto(CourseSection s);

    @Named("sectionTitle")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "sectionTitle", source = "sectionTitle")
    CourseSectionDTO toDtoSectionTitle(CourseSection courseSection);
}
