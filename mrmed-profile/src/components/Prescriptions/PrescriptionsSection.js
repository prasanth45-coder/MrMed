import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FileMedical, Plus, Eye, Trash } from 'react-bootstrap-icons';

const PrescriptionsSection = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      doctorName: 'Dr. Rajesh Kumar',
      date: '2024-11-15',
      notes: 'Cardiology follow-up'
    }
  ]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPrescription = {
        id: prescriptions.length + 1,
        doctorName: 'New Prescription',
        date: new Date().toISOString().split('T')[0],
        notes: 'Uploaded prescription'
      };
      setPrescriptions([...prescriptions, newPrescription]);
    }
  };

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>My Prescriptions</h4>
            <div>
              <input
                type="file"
                id="prescription-upload"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                accept=".jpg,.jpeg,.png,.pdf"
              />
              <Button 
                className="btn-mrmed"
                onClick={() => document.getElementById('prescription-upload').click()}
              >
                <Plus className="me-2" />
                Upload Prescription
              </Button>
            </div>
          </div>

          {prescriptions.length === 0 ? (
            <div className="empty-state">
              <FileMedical size={80} className="text-muted mb-3" />
              <h5>No Prescriptions</h5>
              <p className="text-muted">Upload your prescriptions for quick refills.</p>
              <Button className="btn-mrmed">Upload First Prescription</Button>
            </div>
          ) : (
            <Row>
              {prescriptions.map(prescription => (
                <Col md={6} lg={4} key={prescription.id} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="card-title">{prescription.doctorName}</h6>
                        <div>
                          <Button variant="outline-primary" size="sm" className="me-1">
                            <Eye size={14} />
                          </Button>
                          <Button variant="outline-danger" size="sm">
                            <Trash size={14} />
                          </Button>
                        </div>
                      </div>
                      <p className="text-muted mb-1">
                        <small>Date: {prescription.date}</small>
                      </p>
                      <p className="text-muted">
                        <small>{prescription.notes}</small>
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PrescriptionsSection;