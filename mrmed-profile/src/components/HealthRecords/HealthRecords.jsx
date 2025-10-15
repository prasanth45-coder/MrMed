import React from 'react';
import { Container, Row, Col, Card, Table, Badge, Button } from 'react-bootstrap';
import { HeartPulse, FileMedical, Download, Plus } from 'react-bootstrap-icons';

const HealthRecords = () => {
  const healthRecords = [
    {
      id: 1,
      type: 'Blood Test',
      date: '2024-11-15',
      doctor: 'Dr. Rajesh Kumar',
      status: 'completed',
      file: 'blood_test_241115.pdf'
    },
    {
      id: 2,
      type: 'ECG Report',
      date: '2024-10-20',
      doctor: 'Dr. Priya Sharma',
      status: 'completed',
      file: 'ecg_report_241020.pdf'
    },
    {
      id: 3,
      type: 'MRI Scan',
      date: '2024-12-01',
      doctor: 'Dr. Amit Patel',
      status: 'pending',
      file: null
    }
  ];

  const getStatusVariant = (status) => {
    switch (status) {
      case 'completed': return 'success';
      case 'pending': return 'warning';
      case 'cancelled': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>
              <HeartPulse className="me-2 medical-icon" />
              Health Records
            </h4>
            <Button className="btn-mrmed">
              <Plus className="me-2" />
              Upload Record
            </Button>
          </div>

          <Card className="medical-card">
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Record Type</th>
                    <th>Date</th>
                    <th>Doctor</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {healthRecords.map(record => (
                    <tr key={record.id}>
                      <td>
                        <FileMedical className="me-2 medical-icon" />
                        {record.type}
                      </td>
                      <td>{record.date}</td>
                      <td>{record.doctor}</td>
                      <td>
                        <Badge bg={getStatusVariant(record.status)}>
                          {record.status}
                        </Badge>
                      </td>
                      <td>
                        {record.file ? (
                          <Button variant="outline-primary" size="sm">
                            <Download className="me-1" />
                            Download
                          </Button>
                        ) : (
                          <span className="text-muted">No file</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          {/* Health Summary */}
          <Row className="mt-4">
            <Col md={6}>
              <Card className="medical-card">
                <Card.Body>
                  <h6 className="fw-bold mb-3">Recent Vitals</h6>
                  <div className="mb-2">
                    <small className="text-muted">Blood Pressure</small>
                    <div className="fw-bold">120/80 mmHg</div>
                  </div>
                  <div className="mb-2">
                    <small className="text-muted">Heart Rate</small>
                    <div className="fw-bold">72 bpm</div>
                  </div>
                  <div className="mb-2">
                    <small className="text-muted">Blood Sugar</small>
                    <div className="fw-bold">98 mg/dL</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="medical-card">
                <Card.Body>
                  <h6 className="fw-bold mb-3">Medication History</h6>
                  <div className="mb-2">
                    <small className="text-muted">Current Medications</small>
                    <div className="fw-bold">2 Active</div>
                  </div>
                  <div className="mb-2">
                    <small className="text-muted">Allergies</small>
                    <div className="fw-bold text-success">None Reported</div>
                  </div>
                  <div className="mb-2">
                    <small className="text-muted">Last Updated</small>
                    <div className="fw-bold">15 Nov 2024</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HealthRecords;