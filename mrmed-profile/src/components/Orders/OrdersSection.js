import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Truck, Calendar, GeoAlt } from 'react-bootstrap-icons';

const OrdersSection = () => {
  const orders = [
    {
      id: 1,
      medicine: 'Lenalidomide 10mg Capsules',
      orderNo: 'MRMED001234',
      quantity: 30,
      deliveryDate: '2024-12-28',
      address: '123 Main St, Chennai, Tamil Nadu',
      status: 'processing'
    },
    {
      id: 2,
      medicine: 'Imatinib 400mg Tablets',
      orderNo: 'MRMED001235',
      quantity: 60,
      deliveryDate: '2024-12-26',
      address: '123 Main St, Chennai, Tamil Nadu',
      status: 'shipped'
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { class: 'status-pending', text: 'Pending' },
      processing: { class: 'status-processing', text: 'Processing' },
      shipped: { class: 'status-shipped', text: 'Shipped' },
      delivered: { class: 'status-delivered', text: 'Delivered' },
      cancelled: { class: 'status-cancelled', text: 'Cancelled' }
    };
    
    const config = statusConfig[status] || statusConfig.pending;
    return <span className={`status-badge ${config.class}`}>{config.text}</span>;
  };

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <h4 className="mb-4">My Orders</h4>
          
          {orders.length === 0 ? (
            <div className="empty-state">
              <Truck size={80} className="text-muted mb-3" />
              <h5>No Orders Yet</h5>
              <p className="text-muted">Your orders will appear here once you place them.</p>
              <Button className="btn-mrmed">Shop Medicines</Button>
            </div>
          ) : (
            orders.map(order => (
              <div key={order.id} className="order-card">
                <Row className="align-items-center">
                  <Col md={6}>
                    <h6 className="fw-bold mb-2">{order.medicine}</h6>
                    <div className="d-flex flex-wrap gap-3 mb-2">
                      <small className="text-muted">Order #: {order.orderNo}</small>
                      <small className="text-muted">Qty: {order.quantity}</small>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="d-flex align-items-center text-muted mb-1">
                      <Calendar size={14} className="me-2" />
                      <small>Delivery by: {order.deliveryDate}</small>
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <GeoAlt size={14} className="me-2" />
                      <small>{order.address}</small>
                    </div>
                  </Col>
                  <Col md={6} className="text-md-end mt-3 mt-md-0">
                    <Button variant="outline-primary" size="sm" className="me-2">
                      Track Order
                    </Button>
                    <Button className="btn-mrmed" size="sm">
                      Reorder
                    </Button>
                  </Col>
                </Row>
              </div>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersSection;