package in.codersage.charuvidya.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.time.LocalDate;
import javax.persistence.*;
import javax.validation.constraints.*;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 * A CourseEnrollment.
 */
@Entity
@Table(name = "course_enrollment")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CourseEnrollment implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "enrollement_date", nullable = false)
    private LocalDate enrollementDate;

    @NotNull
    @Column(name = "last_accessed_date", nullable = false)
    private LocalDate lastAccessedDate;

    @ManyToOne(optional = false)
    @NotNull
    private User user;

    @ManyToOne(optional = false)
    @NotNull
    @JsonIgnoreProperties(value = { "courseLevel", "courseCategory", "courseType", "user" }, allowSetters = true)
    private Course course;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public CourseEnrollment id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getEnrollementDate() {
        return this.enrollementDate;
    }

    public CourseEnrollment enrollementDate(LocalDate enrollementDate) {
        this.setEnrollementDate(enrollementDate);
        return this;
    }

    public void setEnrollementDate(LocalDate enrollementDate) {
        this.enrollementDate = enrollementDate;
    }

    public LocalDate getLastAccessedDate() {
        return this.lastAccessedDate;
    }

    public CourseEnrollment lastAccessedDate(LocalDate lastAccessedDate) {
        this.setLastAccessedDate(lastAccessedDate);
        return this;
    }

    public void setLastAccessedDate(LocalDate lastAccessedDate) {
        this.lastAccessedDate = lastAccessedDate;
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public CourseEnrollment user(User user) {
        this.setUser(user);
        return this;
    }

    public Course getCourse() {
        return this.course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }

    public CourseEnrollment course(Course course) {
        this.setCourse(course);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CourseEnrollment)) {
            return false;
        }
        return id != null && id.equals(((CourseEnrollment) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CourseEnrollment{" +
            "id=" + getId() +
            ", enrollementDate='" + getEnrollementDate() + "'" +
            ", lastAccessedDate='" + getLastAccessedDate() + "'" +
            "}";
    }
}
