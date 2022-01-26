package in.codersage.charuvidya.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link in.codersage.charuvidya.domain.CourseReviewStatus} entity.
 */
public class CourseReviewStatusDTO implements Serializable {

    @NotNull
    private Long id;

    @Size(max = 20)
    private String status;

    private LocalDate statusUpdatedOn;

    @Size(max = 200)
    private String feedback;

    private UserDTO user;

    private CourseSessionDTO courseSession;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDate getStatusUpdatedOn() {
        return statusUpdatedOn;
    }

    public void setStatusUpdatedOn(LocalDate statusUpdatedOn) {
        this.statusUpdatedOn = statusUpdatedOn;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public UserDTO getUser() {
        return user;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public CourseSessionDTO getCourseSession() {
        return courseSession;
    }

    public void setCourseSession(CourseSessionDTO courseSession) {
        this.courseSession = courseSession;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CourseReviewStatusDTO)) {
            return false;
        }

        CourseReviewStatusDTO courseReviewStatusDTO = (CourseReviewStatusDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, courseReviewStatusDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CourseReviewStatusDTO{" +
            "id=" + getId() +
            ", status='" + getStatus() + "'" +
            ", statusUpdatedOn='" + getStatusUpdatedOn() + "'" +
            ", feedback='" + getFeedback() + "'" +
            ", user=" + getUser() +
            ", courseSession=" + getCourseSession() +
            "}";
    }
}
