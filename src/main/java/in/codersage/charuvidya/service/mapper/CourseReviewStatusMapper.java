package in.codersage.charuvidya.service.mapper;

import in.codersage.charuvidya.domain.CourseReviewStatus;
import in.codersage.charuvidya.service.dto.CourseReviewStatusDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CourseReviewStatus} and its DTO {@link CourseReviewStatusDTO}.
 */
@Mapper(componentModel = "spring", uses = { UserMapper.class, CourseSessionMapper.class })
public interface CourseReviewStatusMapper extends EntityMapper<CourseReviewStatusDTO, CourseReviewStatus> {
    @Mapping(target = "user", source = "user", qualifiedByName = "login")
    @Mapping(target = "courseSession", source = "courseSession", qualifiedByName = "sessionTitle")
    CourseReviewStatusDTO toDto(CourseReviewStatus s);
}
