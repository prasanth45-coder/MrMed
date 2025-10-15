import React from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { Wallet as WalletIcon, Plus, ArrowUp, ArrowDown } from 'react-bootstrap-icons';

const WalletSection = () => {
  const transactions = [
    {
      id: 1,
      type: 'credit',
      amount: 500,
      description: 'Wallet Top-up',
      date: '2024-12-20',
      time: '10:30 AM'
    },
    {
      id: 2,
      type: 'debit',
      amount: 245.50,
      description: 'Medicine Purchase',
      date: '2024-12-18',
      time: '02:15 PM'
    }
  ];

  return (
    <Container className="py-4">
      <Row>
        <Col lg={4} className="mb-4">
          <div className="gradient-card">
            <div className="d-flex align-items-center mb-3">
              <WalletIcon size={24} className="me-2" />
              <h5 className="mb-0">MrMed Wallet</h5>
            </div>
            <h2>₹254.50</h2>
            <p className="mb-3">Available Balance</p>
            <div className="d-flex justify-content-between mb-2">
              <small>Total Savings</small>
              <small className="fw-bold">₹3,240.50</small>
            </div>
            <Button className="btn-mrmed w-100">
              <Plus className="me-2" />
              Add Money
            </Button>
          </div>
        </Col>
        
        <Col lg={8}>
          <div className="stats-card">
            <h5 className="mb-4">Transaction History</h5>
            
            {transactions.length === 0 ? (
              <div className="empty-state py-4">
                <WalletIcon size={60} className="text-muted mb-3" />
                <h6>No Transactions</h6>
                <p className="text-muted">Your transactions will appear here.</p>
              </div>
            ) : (
              <ListGroup variant="flush">
                {transactions.map(transaction => (
                  <ListGroup.Item key={transaction.id} className="px-0">
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <div className={`rounded-circle p-2 ${
                          transaction.type === 'credit' ? 'bg-success' : 'bg-danger'
                        }`}>
                          {transaction.type === 'credit' ? (
                            <ArrowUp size={16} className="text-white" />
                          ) : (
                            <ArrowDown size={16} className="text-white" />
                          )}
                        </div>
                      </Col>
                      <Col>
                        <div className="fw-bold">{transaction.description}</div>
                        <small className="text-muted">
                          {transaction.date} • {transaction.time}
                        </small>
                      </Col>
                      <Col xs="auto">
                        <div className={`fw-bold ${
                          transaction.type === 'credit' ? 'text-success' : 'text-danger'
                        }`}>
                          {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount}
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WalletSection;