package in.codersage.charuvidya.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CourseAssignmentMapperTest {

    private CourseAssignmentMapper courseAssignmentMapper;

    @BeforeEach
    public void setUp() {
        courseAssignmentMapper = new CourseAssignmentMapperImpl();
    }
}
