import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ProfileHeader from './components/Profile/ProfileHeader';
import NavigationTabs from './components/Profile/NavigationTabs';
import OrdersSection from './components/Orders/OrdersSection';
import PrescriptionsSection from './components/Prescriptions/PrescriptionsSection';
import WalletSection from './components/Wallet/WalletSection';
import ProfileInfo from './components/Profile/ProfileInfo';
import HealthRecords from './components/HealthRecords/HealthRecords';

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'orders':
        return <OrdersSection />;
      case 'prescriptions':
        return <PrescriptionsSection />;
      case 'health-records':
        return <HealthRecords />;
      case 'wallet':
        return <WalletSection />;
      case 'profile':
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="App medical-theme">
      <div className="medical-background">
        <ProfileHeader />
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;