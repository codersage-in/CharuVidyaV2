import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './course-category.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CourseCategoryDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const courseCategoryEntity = useAppSelector(state => state.courseCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="courseCategoryDetailsHeading">
          <Translate contentKey="charuVidyaApp.courseCategory.detail.title">CourseCategory</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{courseCategoryEntity.id}</dd>
          <dt>
            <span id="title">
              <Translate contentKey="charuVidyaApp.courseCategory.title">Title</Translate>
            </span>
          </dt>
          <dd>{courseCategoryEntity.title}</dd>
          <dt>
            <span id="logo">
              <Translate contentKey="charuVidyaApp.courseCategory.logo">Logo</Translate>
            </span>
          </dt>
          <dd>{courseCategoryEntity.logo}</dd>
          <dt>
            <span id="isParent">
              <Translate contentKey="charuVidyaApp.courseCategory.isParent">Is Parent</Translate>
            </span>
          </dt>
          <dd>{courseCategoryEntity.isParent ? 'true' : 'false'}</dd>
          <dt>
            <span id="parentId">
              <Translate contentKey="charuVidyaApp.courseCategory.parentId">Parent Id</Translate>
            </span>
          </dt>
          <dd>{courseCategoryEntity.parentId}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="charuVidyaApp.courseCategory.description">Description</Translate>
            </span>
          </dt>
          <dd>{courseCategoryEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/course-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/course-category/${courseCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CourseCategoryDetail;
