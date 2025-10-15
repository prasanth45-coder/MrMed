import React from 'react';
import { Nav, Container } from 'react-bootstrap';
import { 
  Person, 
  Cart, 
  FileMedical, 
  Wallet, 
  HeartPulse,
  ShieldCheck 
} from 'react-bootstrap-icons';

const NavigationTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: 'profile', icon: Person, label: 'Profile', badge: null },
    { key: 'orders', icon: Cart, label: 'My Orders', badge: '2' },
    { key: 'prescriptions', icon: FileMedical, label: 'Prescriptions', badge: '1' },
    { key: 'health-records', icon: HeartPulse, label: 'Health Records', badge: null },
    { key: 'wallet', icon: Wallet, label: 'MrMed Wallet', badge: null },
  ];

  return (
    <div className="nav-tabs-custom">
      <Container>
        <Nav variant="tabs" className="justify-content-center">
          {tabs.map(tab => (
            <Nav.Item key={tab.key}>
              <Nav.Link 
                active={activeTab === tab.key} 
                onClick={() => setActiveTab(tab.key)}
                className="position-relative"
              >
                <tab.icon className="me-2" />
                {tab.label}
                {tab.badge && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {tab.badge}
                  </span>
                )}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </div>
  );
};

export default NavigationTabs;