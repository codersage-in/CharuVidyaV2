package in.codersage.charuvidya.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CourseAssignmentProgressMapperTest {

    private CourseAssignmentProgressMapper courseAssignmentProgressMapper;

    @BeforeEach
    public void setUp() {
        courseAssignmentProgressMapper = new CourseAssignmentProgressMapperImpl();
    }
}
