import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICourseLevel } from 'app/shared/model/course-level.model';
import { getEntities as getCourseLevels } from 'app/entities/course-level/course-level.reducer';
import { ICourseCategory } from 'app/shared/model/course-category.model';
import { getEntities as getCourseCategories } from 'app/entities/course-category/course-category.reducer';
import { ICourseType } from 'app/shared/model/course-type.model';
import { getEntities as getCourseTypes } from 'app/entities/course-type/course-type.reducer';
import { IUser } from 'app/shared/model/user.model';
import { getUsers } from 'app/modules/administration/user-management/user-management.reducer';
import { getEntity, updateEntity, createEntity, reset } from './course.reducer';
import { ICourse } from 'app/shared/model/course.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CourseUpdate = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const courseLevels = useAppSelector(state => state.courseLevel.entities);
  const courseCategories = useAppSelector(state => state.courseCategory.entities);
  const courseTypes = useAppSelector(state => state.courseType.entities);
  const users = useAppSelector(state => state.userManagement.users);
  const courseEntity = useAppSelector(state => state.course.entity);
  const loading = useAppSelector(state => state.course.loading);
  const updating = useAppSelector(state => state.course.updating);
  const updateSuccess = useAppSelector(state => state.course.updateSuccess);
  const handleClose = () => {
    props.history.push('/course' + props.location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(props.match.params.id));
    }

    dispatch(getCourseLevels({}));
    dispatch(getCourseCategories({}));
    dispatch(getCourseTypes({}));
    dispatch(getUsers({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...courseEntity,
      ...values,
      courseLevel: courseLevels.find(it => it.id.toString() === values.courseLevel.toString()),
      courseCategory: courseCategories.find(it => it.id.toString() === values.courseCategory.toString()),
      courseType: courseTypes.find(it => it.id.toString() === values.courseType.toString()),
      user: users.find(it => it.id.toString() === values.user.toString()),
      reviewer: users.find(it => it.id.toString() === values.reviewer.toString()),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...courseEntity,
          courseLevel: courseEntity?.courseLevel?.id,
          courseCategory: courseEntity?.courseCategory?.id,
          courseType: courseEntity?.courseType?.id,
          user: courseEntity?.user?.id,
          reviewer: courseEntity?.reviewer?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="charuVidyaApp.course.home.createOrEditLabel" data-cy="CourseCreateUpdateHeading">
            <Translate contentKey="charuVidyaApp.course.home.createOrEditLabel">Create or edit a Course</Translate>
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
                  id="course-id"
                  label={translate('charuVidyaApp.course.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('charuVidyaApp.course.courseTitle')}
                id="course-courseTitle"
                name="courseTitle"
                data-cy="courseTitle"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 600, message: translate('entity.validation.maxlength', { max: 600 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseDescription')}
                id="course-courseDescription"
                name="courseDescription"
                data-cy="courseDescription"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseObjectives')}
                id="course-courseObjectives"
                name="courseObjectives"
                data-cy="courseObjectives"
                type="text"
                validate={{
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseSubTitle')}
                id="course-courseSubTitle"
                name="courseSubTitle"
                data-cy="courseSubTitle"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 120, message: translate('entity.validation.maxlength', { max: 120 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.coursePreviewURL')}
                id="course-coursePreviewURL"
                name="coursePreviewURL"
                data-cy="coursePreviewURL"
                type="text"
                validate={{
                  maxLength: { value: 1000, message: translate('entity.validation.maxlength', { max: 1000 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseLength')}
                id="course-courseLength"
                name="courseLength"
                data-cy="courseLength"
                type="text"
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseLogo')}
                id="course-courseLogo"
                name="courseLogo"
                data-cy="courseLogo"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseCreatedOn')}
                id="course-courseCreatedOn"
                name="courseCreatedOn"
                data-cy="courseCreatedOn"
                type="date"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseUpdatedOn')}
                id="course-courseUpdatedOn"
                name="courseUpdatedOn"
                data-cy="courseUpdatedOn"
                type="date"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseRootDir')}
                id="course-courseRootDir"
                name="courseRootDir"
                data-cy="courseRootDir"
                type="text"
                validate={{
                  maxLength: { value: 255, message: translate('entity.validation.maxlength', { max: 255 }) },
                }}
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.amount')}
                id="course-amount"
                name="amount"
                data-cy="amount"
                type="text"
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.isDraft')}
                id="course-isDraft"
                name="isDraft"
                data-cy="isDraft"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.isApproved')}
                id="course-isApproved"
                name="isApproved"
                data-cy="isApproved"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.isPublished')}
                id="course-isPublished"
                name="isPublished"
                data-cy="isPublished"
                check
                type="checkbox"
              />
              <ValidatedField
                label={translate('charuVidyaApp.course.courseApprovalDate')}
                id="course-courseApprovalDate"
                name="courseApprovalDate"
                data-cy="courseApprovalDate"
                type="date"
              />
              <ValidatedField
                id="course-courseLevel"
                name="courseLevel"
                data-cy="courseLevel"
                label={translate('charuVidyaApp.course.courseLevel')}
                type="select"
              >
                <option value="" key="0" />
                {courseLevels
                  ? courseLevels.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="course-courseCategory"
                name="courseCategory"
                data-cy="courseCategory"
                label={translate('charuVidyaApp.course.courseCategory')}
                type="select"
              >
                <option value="" key="0" />
                {courseCategories
                  ? courseCategories.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="course-courseType"
                name="courseType"
                data-cy="courseType"
                label={translate('charuVidyaApp.course.courseType')}
                type="select"
              >
                <option value="" key="0" />
                {courseTypes
                  ? courseTypes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField id="course-user" name="user" data-cy="user" label={translate('charuVidyaApp.course.user')} type="select">
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.login}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="course-reviewer"
                name="reviewer"
                data-cy="reviewer"
                label={translate('charuVidyaApp.course.reviewer')}
                type="select"
              >
                <option value="" key="0" />
                {users
                  ? users.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.login}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/course" replace color="info">
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

export default CourseUpdate;
