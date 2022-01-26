package in.codersage.charuvidya.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CourseSessionProgressMapperTest {

    private CourseSessionProgressMapper courseSessionProgressMapper;

    @BeforeEach
    public void setUp() {
        courseSessionProgressMapper = new CourseSessionProgressMapperImpl();
    }
}
