import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './course-assignment.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CourseAssignmentDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const courseAssignmentEntity = useAppSelector(state => state.courseAssignment.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="courseAssignmentDetailsHeading">
          <Translate contentKey="charuVidyaApp.courseAssignment.detail.title">CourseAssignment</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.id}</dd>
          <dt>
            <span id="assignmentTitle">
              <Translate contentKey="charuVidyaApp.courseAssignment.assignmentTitle">Assignment Title</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.assignmentTitle}</dd>
          <dt>
            <span id="assignmentDescription">
              <Translate contentKey="charuVidyaApp.courseAssignment.assignmentDescription">Assignment Description</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.assignmentDescription}</dd>
          <dt>
            <span id="assignmentOrder">
              <Translate contentKey="charuVidyaApp.courseAssignment.assignmentOrder">Assignment Order</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.assignmentOrder}</dd>
          <dt>
            <span id="assignmentResource">
              <Translate contentKey="charuVidyaApp.courseAssignment.assignmentResource">Assignment Resource</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.assignmentResource}</dd>
          <dt>
            <span id="isPreview">
              <Translate contentKey="charuVidyaApp.courseAssignment.isPreview">Is Preview</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.isPreview ? 'true' : 'false'}</dd>
          <dt>
            <span id="isDraft">
              <Translate contentKey="charuVidyaApp.courseAssignment.isDraft">Is Draft</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.isDraft ? 'true' : 'false'}</dd>
          <dt>
            <span id="isApproved">
              <Translate contentKey="charuVidyaApp.courseAssignment.isApproved">Is Approved</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.isApproved ? 'true' : 'false'}</dd>
          <dt>
            <span id="isPublished">
              <Translate contentKey="charuVidyaApp.courseAssignment.isPublished">Is Published</Translate>
            </span>
          </dt>
          <dd>{courseAssignmentEntity.isPublished ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="charuVidyaApp.courseAssignment.courseSession">Course Session</Translate>
          </dt>
          <dd>{courseAssignmentEntity.courseSession ? courseAssignmentEntity.courseSession.sessionTitle : ''}</dd>
        </dl>
        <Button tag={Link} to="/course-assignment" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/course-assignment/${courseAssignmentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CourseAssignmentDetail;
