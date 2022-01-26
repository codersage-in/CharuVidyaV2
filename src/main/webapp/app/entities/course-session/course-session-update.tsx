import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICourseSection } from 'app/shared/model/course-section.model';
import { getEntities as getCourseSections } from 'app/entities/course-section/course-section.reducer';
import { getEntity, updateEntity, createEntity, reset } from './course-session.reducer';
import { ICourseSession } from 'app/shared/model/course-session.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CourseSessionUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const courseSections = useAppSelector(state => state.courseSection.entities);
  const courseSessionEntity = useAppSelector(state => state.courseSession.entity);
  const loading = useAppSelector(state => state.courseSession.loading);
  const updating = useAppSelector(state => state.courseSession.updating);
  const updateSuccess = useAppSelector(state => state.courseSession.updateSuccess);
  const handleClose = () => {
    props.history.push('/course-session' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getCourseSections({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    values.sessionDuration = convertDateTimeToServer(values.sessionDuration);

    const entity = {
      ...courseSessionEntity,
      ...values,
      courseSection: courseSections.find(it => it.id.toString() === values.courseSection.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {
          sessionDuration: displayDefaultDateTime(),
        }
      : {
          ...courseSessionEntity,
          sessionDuration: convertDateTimeFromServer(courseSessionEntity.sessionDuration),
          courseSection: courseSessionEntity?.courseSection?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="charuVidyaApp.courseSession.home.createOrEditLabel" data-cy="CourseSessionCreateUpdateHeading">
            <Translate contentKey="charuVidyaApp.courseSession.home.createOrEditLabel">Create or edit a CourseSession</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="course-session-id"
                  label={translate('charuVidyaApp.courseSession.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionTitle')}
                id="course-session-sessionTitle"
                name="sessionTitle"
                data-cy="sessionTitle"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionDescription')}
                id="course-session-sessionDescription"
                name="sessionDescription"
                data-cy="sessionDescription"
                type="text"
                validate={{
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionVideo')}
                id="course-session-sessionVideo"
                name="sessionVideo"
                data-cy="sessionVideo"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 300, message: translate('entity.validation.maxlength', { max: 300 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionDuration')}
                id="course-session-sessionDuration"
                name="sessionDuration"
                data-cy="sessionDuration"
                type="datetime-local"
                placeholder="YYYY-MM-DD HH:mm"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionOrder')}
                id="course-session-sessionOrder"
                name="sessionOrder"
                data-cy="sessionOrder"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  validate: v => isNumber(v) || translate('entity.validation.number'),
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionResource')}
                id="course-session-sessionResource"
                name="sessionResource"
                data-cy="sessionResource"
                type="text"
                validate={{
                  maxLength: { value: 300, message: translate('entity.validation.maxlength', { max: 300 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.sessionQuiz')}
                id="course-session-sessionQuiz"
                name="sessionQuiz"
                data-cy="sessionQuiz"
                type="text"
                validate={{
                  maxLength: { value: 300, message: translate('entity.validation.maxlength', { max: 300 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.isPreview')}
                id="course-session-isPreview"
                name="isPreview"
                data-cy="isPreview"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.isDraft')}
                id="course-session-isDraft"
                name="isDraft"
                data-cy="isDraft"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.isApproved')}
                id="course-session-isApproved"
                name="isApproved"
                data-cy="isApproved"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('charuVidyaApp.courseSession.isPublished')}
                id="course-session-isPublished"
                name="isPublished"
                data-cy="isPublished"
                check
                type="checkbox"
              />
              <ValidatedField
                id="course-session-courseSection"
                name="courseSection"
                data-cy="courseSection"
                label={translate('charuVidyaApp.courseSession.courseSection')}
                type="select"
              >
                <option value="" key="0" />
                {courseSections
                  ? courseSections.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.sectionTitle}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/course-session" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default CourseSessionUpdate;
