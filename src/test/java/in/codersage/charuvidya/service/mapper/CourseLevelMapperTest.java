package in.codersage.charuvidya.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CourseLevelMapperTest {

    private CourseLevelMapper courseLevelMapper;

    @BeforeEach
    public void setUp() {
        courseLevelMapper = new CourseLevelMapperImpl();
    }
}
