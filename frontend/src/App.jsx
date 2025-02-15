import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './components/Header';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ManagementAndFaculty from './components/ManagementAndFaculty';
import ReachingIriset from './components/ReachingIriset';
import ImmovablePropertyReturns from './components/ImmovablePropertyReturns';
import Year2017 from './components/Year2017';
import Year2018 from './components/Year2018';
import Year2019 from './components/Year2019';
import Year2020 from './components/Year2020';
import Year2021 from './components/Year2021';
import Year2022 from './components/Year2022';
import Year2023 from './components/Year2023';
import PortalPolicies from './components/PortalPolicies';
import Events from './components/Events';
import Courses from './components/Courses';
import Hostels from './components/Hostels';
import Kaveri from './components/Kaveri';
import Yamuna from './components/Yamuna';
import Krishna from './components/Krishna';
import Ganga from './components/Ganga';
import Standardisation from './components/Standardisation';
import Notifications from './components/Notifications';
import ContactUs from './components/ContactUs';
import Disclaimer from './components/Disclaimer';
import RightToInformation from './components/RightToInformation';
import NirPersonnel from './components/NirPersonnel';
import PrivacyPolicy from './components/PrivacyPolicy';
import LeaveAMessage from './components/LeaveAMessage';
import TandC from './components/tandc';
import OtherRailwaySites from './components/OtherRailwaySites';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/aboutus/managementandfaculty' element={<ManagementAndFaculty />} />
        <Route path='/aboutus/reachingiriset' element={<ReachingIriset />} />
        <Route path='/aboutus/immovablepropertyreturns' element={<ImmovablePropertyReturns />} />
        <Route path='/aboutus/immovablepropertyreturns/year2017' element={<Year2017 />} />
        <Route path='/aboutus/immovablepropertyreturns/year2018' element={<Year2018 />} />
        <Route path='/aboutus/immovablepropertyreturns/year2019' element={<Year2019 />} />
        <Route path='/aboutus/immovablepropertyreturns/year2020' element={<Year2020 />} />
        <Route path='/aboutus/immovablepropertyreturns/year2021' element={<Year2021 />} />
        <Route path='/aboutus/immovablepropertyreturns/year2022' element={<Year2022 />} />
        <Route path='/aboutus/immovablepropertyreturns/year2023' element={<Year2023 />} />
        <Route path='/aboutus/portalpolicies' element={<PortalPolicies />} />
        <Route path='/events' element={<Events />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/hostels' element={<Hostels />} />
        <Route path='/hostels/kaveri' element={<Kaveri />} />
        <Route path='/hostels/yamuna' element={<Yamuna />} />
        <Route path='/hostels/krishna' element={<Krishna />} />
        <Route path='/hostels/ganga' element={<Ganga />} />
        <Route path='/standardisation' element={<Standardisation />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/contactus/disclaimer' element={<Disclaimer />} />
        <Route path='/contactus/righttoinformation' element={<RightToInformation />} />
        <Route path='/contactus/nirpersonnel' element={<NirPersonnel />} />
        <Route path='/contactus/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/contactus/leaveamessage' element={<LeaveAMessage />} />
        <Route path='/contactus/tandc' element={<TandC />} />
        <Route path='/contactus/otherrailwaysites' element={<OtherRailwaySites />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
