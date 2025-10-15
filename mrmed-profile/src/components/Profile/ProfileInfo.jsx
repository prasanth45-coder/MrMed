import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Card, Alert, Modal } from 'react-bootstrap';
import { 
  Person, 
  Calendar, 
  GenderAmbiguous, 
  Droplet, 
  ShieldCheck,
  Phone,
  Envelope,
  Lock,
  QrCode
} from 'react-bootstrap-icons';

const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [show2FAModal, setShow2FAModal] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  const [profileData, setProfileData] = useState({
    firstName: 'Prasanth',
    lastName: '',
    email: 'prasanth875436@gmail.com',
    phone: '+91 8754369375',
    dob: '',
    gender: '',
    bloodGroup: '',
    emergencyContact: '',
    address: '123 Main St, Chennai, Tamil Nadu',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001'
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setEditMode(false);
    // Here you would typically make an API call to save the data
  };

  return (
    <Container className="py-4">
      <Row>
        <Col lg={8}>
          <Card className="medical-card">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">
                  <Person className="me-2 medical-icon" />
                  Personal Information
                </h4>
                <Button 
                  variant={editMode ? "outline-secondary" : "outline-primary"}
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Edit Profile'}
                </Button>
              </div>

              {editMode && (
                <Alert variant="info" className="mb-4">
                  <strong>Update your medical profile:</strong> Keep your information current for better healthcare services.
                </Alert>
              )}

              <Form className="medical-form">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        <Person className="me-2 medical-icon" />
                        First Name
                      </Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        readOnly={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Last Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        readOnly={!editMode}
                        placeholder="Enter last name"
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        <Envelope className="me-2 medical-icon" />
                        Email Address
                      </Form.Label>
                      <Form.Control 
                        type="email" 
                        value={profileData.email}
                        readOnly
                        className="bg-light"
                      />
                      <Form.Text className="text-muted">
                        Verified email address
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        <Phone className="me-2 medical-icon" />
                        Mobile Number
                      </Form.Label>
                      <Form.Control 
                        type="tel" 
                        value={profileData.phone}
                        readOnly
                        className="bg-light"
                      />
                      <Form.Text className="text-muted">
                        Verified mobile number
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        <Calendar className="me-2 medical-icon" />
                        Date of Birth
                      </Form.Label>
                      <Form.Control 
                        type="date" 
                        value={profileData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        readOnly={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>
                  
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        <GenderAmbiguous className="me-2 medical-icon" />
                        Gender
                      </Form.Label>
                      <Form.Select 
                        value={profileData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        disabled={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">
                        <Droplet className="me-2 medical-icon" />
                        Blood Group
                      </Form.Label>
                      <Form.Select 
                        value={profileData.bloodGroup}
                        onChange={(e) => handleInputChange('bloodGroup', e.target.value)}
                        disabled={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Emergency Contact</Form.Label>
                      <Form.Control 
                        type="tel" 
                        value={profileData.emergencyContact}
                        onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                        readOnly={!editMode}
                        placeholder="Emergency contact number"
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Address</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3}
                        value={profileData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        readOnly={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="fw-bold">City</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profileData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        readOnly={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="fw-bold">State</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profileData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        readOnly={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group>
                      <Form.Label className="fw-bold">Pincode</Form.Label>
                      <Form.Control 
                        type="text" 
                        value={profileData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        readOnly={!editMode}
                        className={!editMode ? 'bg-light' : ''}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {editMode && (
                  <div className="mt-4 text-end">
                    <Button 
                      variant="outline-secondary" 
                      className="me-2"
                      onClick={() => setEditMode(false)}
                    >
                      Cancel
                    </Button>
                    <Button className="btn-mrmed" onClick={handleSave}>
                      Save Changes
                    </Button>
                  </div>
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col lg={4}>
          {/* Account Security Card */}
          <Card className="medical-card mb-4">
            <Card.Body>
              <h5 className="fw-bold mb-3">
                <ShieldCheck className="me-2 medical-icon" />
                Account Security
              </h5>
              <div className="d-grid gap-2">
                <Button variant="outline-primary" className="text-start">
                  <Lock className="me-2" />
                  Change Password
                </Button>
                <Button variant="outline-primary" className="text-start">
                  <Phone className="me-2" />
                  Update Mobile Number
                </Button>
                <Button 
                  variant={twoFactorEnabled ? "success" : "outline-primary"}
                  className="text-start"
                  onClick={() => setShow2FAModal(true)}
                >
                  <ShieldCheck className="me-2" />
                  {twoFactorEnabled ? '2FA Enabled' : 'Two-Factor Authentication'}
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Medical Information Card */}
          <Card className="medical-card">
            <Card.Body>
              <h5 className="fw-bold mb-3">Medical Summary</h5>
              <div className="mb-3">
                <small className="text-muted">Last Checkup</small>
                <div className="fw-bold">15 Nov 2024</div>
              </div>
              <div className="mb-3">
                <small className="text-muted">Primary Doctor</small>
                <div className="fw-bold">Dr. Rajesh Kumar</div>
              </div>
              <div className="mb-3">
                <small className="text-muted">Health Insurance</small>
                <div className="fw-bold">Active</div>
              </div>
              <div>
                <small className="text-muted">Medical Alerts</small>
                <div className="fw-bold text-success">No Critical Alerts</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Two-Factor Authentication Modal */}
      <Modal show={show2FAModal} onHide={() => setShow2FAModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <ShieldCheck className="me-2" />
            Two-Factor Authentication
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center mb-4">
            <QrCode size={80} className="text-primary mb-3" />
            <h5>Secure Your Account with 2FA</h5>
            <p className="text-muted">
              Add an extra layer of security to your account by enabling two-factor authentication.
            </p>
          </div>
          
          <div className="two-factor-section text-center p-4 mb-4">
            <h6 className="mb-3">Scan QR Code with Authenticator App</h6>
            <div className="bg-light p-3 rounded d-inline-block mb-3">
              {/* Placeholder for QR Code */}
              <div className="bg-white p-4 border rounded">
                <div className="text-muted">QR Code Placeholder</div>
                <small className="text-muted">Scan with Google Authenticator or similar app</small>
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label>Enter 6-digit code from authenticator</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="123456" 
                maxLength={6}
                className="text-center fs-4"
              />
            </Form.Group>
          </div>

          <Alert variant="info">
            <strong>Recommended for better security:</strong> Two-factor authentication helps protect your medical data and prescription history.
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={() => setShow2FAModal(false)}>
            Cancel
          </Button>
          <Button 
            className="btn-mrmed"
            onClick={() => {
              setTwoFactorEnabled(true);
              setShow2FAModal(false);
            }}
          >
            Enable Two-Factor Authentication
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProfileInfo;