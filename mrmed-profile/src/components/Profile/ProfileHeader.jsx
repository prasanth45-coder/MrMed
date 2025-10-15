import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Person, Phone, Envelope, ShieldCheck } from 'react-bootstrap-icons';

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <Container>
        <Row className="align-items-center">
          <Col xs="auto">
            <div className="profile-avatar">
              <Person size={45} color="white" />
            </div>
          </Col>
          <Col>
            <div className="d-flex align-items-center mb-2">
              <h3 className="mb-0 me-3">Prasanthi</h3>
              <Badge bg="success" className="security-badge">
                <ShieldCheck size={14} className="me-1" />
                Verified
              </Badge>
            </div>
            <p className="mb-1">
              <Envelope size={16} className="me-2" />
              prasanth875436@gmail.com
            </p>
            <p className="mb-0">
              <Phone size={16} className="me-2" />
              +91 8754369375
            </p>
          </Col>
          <Col xs="auto">
            <div className="text-end text-white-50">
              <div className="fw-bold">Member Since</div>
              <div className="fs-5">2024</div>
              <div className="small">Trusted Patient</div>
            </div>
          </Col>
        </Row>
        
        {/* Stats Cards */}
        <Row className="mt-4">
          <Col md={3}>
            <div className="gradient-card text-center">
              <h5>Total Savings</h5>
              <h3>₹3,240.50</h3>
              <small>With MrMed</small>
            </div>
          </Col>
          <Col md={3}>
            <div className="gradient-card text-center">
              <h5>Ongoing Orders</h5>
              <h3>2</h3>
              <small>Active prescriptions</small>
            </div>
          </Col>
          <Col md={3}>
            <div className="gradient-card text-center">
              <h5>Completed</h5>
              <h3>1</h3>
              <small>Successful deliveries</small>
            </div>
          </Col>
          <Col md={3}>
            <div className="gradient-card text-center">
              <h5>Health Score</h5>
              <h3>85%</h3>
              <small>Excellent</small>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfileHeader;