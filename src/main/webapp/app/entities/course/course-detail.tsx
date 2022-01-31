import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './course.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CourseDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const courseEntity = useAppSelector(state => state.course.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="courseDetailsHeading">
          <Translate contentKey="charuVidyaApp.course.detail.title">Course</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{courseEntity.id}</dd>
          <dt>
            <span id="courseTitle">
              <Translate contentKey="charuVidyaApp.course.courseTitle">Course Title</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseTitle}</dd>
          <dt>
            <span id="courseDescription">
              <Translate contentKey="charuVidyaApp.course.courseDescription">Course Description</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseDescription}</dd>
          <dt>
            <span id="courseObjectives">
              <Translate contentKey="charuVidyaApp.course.courseObjectives">Course Objectives</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseObjectives}</dd>
          <dt>
            <span id="courseSubTitle">
              <Translate contentKey="charuVidyaApp.course.courseSubTitle">Course Sub Title</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseSubTitle}</dd>
          <dt>
            <span id="coursePreviewURL">
              <Translate contentKey="charuVidyaApp.course.coursePreviewURL">Course Preview URL</Translate>
            </span>
          </dt>
          <dd>{courseEntity.coursePreviewURL}</dd>
          <dt>
            <span id="courseLength">
              <Translate contentKey="charuVidyaApp.course.courseLength">Course Length</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseLength}</dd>
          <dt>
            <span id="courseLogo">
              <Translate contentKey="charuVidyaApp.course.courseLogo">Course Logo</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseLogo}</dd>
          <dt>
            <span id="courseCreatedOn">
              <Translate contentKey="charuVidyaApp.course.courseCreatedOn">Course Created On</Translate>
            </span>
          </dt>
          <dd>
            {courseEntity.courseCreatedOn ? (
              <TextFormat value={courseEntity.courseCreatedOn} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="courseUpdatedOn">
              <Translate contentKey="charuVidyaApp.course.courseUpdatedOn">Course Updated On</Translate>
            </span>
          </dt>
          <dd>
            {courseEntity.courseUpdatedOn ? (
              <TextFormat value={courseEntity.courseUpdatedOn} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="courseRootDir">
              <Translate contentKey="charuVidyaApp.course.courseRootDir">Course Root Dir</Translate>
            </span>
          </dt>
          <dd>{courseEntity.courseRootDir}</dd>
          <dt>
            <span id="amount">
              <Translate contentKey="charuVidyaApp.course.amount">Amount</Translate>
            </span>
          </dt>
          <dd>{courseEntity.amount}</dd>
          <dt>
            <span id="isDraft">
              <Translate contentKey="charuVidyaApp.course.isDraft">Is Draft</Translate>
            </span>
          </dt>
          <dd>{courseEntity.isDraft ? 'true' : 'false'}</dd>
          <dt>
            <span id="isApproved">
              <Translate contentKey="charuVidyaApp.course.isApproved">Is Approved</Translate>
            </span>
          </dt>
          <dd>{courseEntity.isApproved ? 'true' : 'false'}</dd>
          <dt>
            <span id="isPublished">
              <Translate contentKey="charuVidyaApp.course.isPublished">Is Published</Translate>
            </span>
          </dt>
          <dd>{courseEntity.isPublished ? 'true' : 'false'}</dd>
          <dt>
            <span id="courseApprovalDate">
              <Translate contentKey="charuVidyaApp.course.courseApprovalDate">Course Approval Date</Translate>
            </span>
          </dt>
          <dd>
            {courseEntity.courseApprovalDate ? (
              <TextFormat value={courseEntity.courseApprovalDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <Translate contentKey="charuVidyaApp.course.courseLevel">Course Level</Translate>
          </dt>
          <dd>{courseEntity.courseLevel ? courseEntity.courseLevel.title : ''}</dd>
          <dt>
            <Translate contentKey="charuVidyaApp.course.courseCategory">Course Category</Translate>
          </dt>
          <dd>{courseEntity.courseCategory ? courseEntity.courseCategory.title : ''}</dd>
          <dt>
            <Translate contentKey="charuVidyaApp.course.courseType">Course Type</Translate>
          </dt>
          <dd>{courseEntity.courseType ? courseEntity.courseType.title : ''}</dd>
          <dt>
            <Translate contentKey="charuVidyaApp.course.user">User</Translate>
          </dt>
          <dd>{courseEntity.user ? courseEntity.user.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/course" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/course/${courseEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CourseDetail;
