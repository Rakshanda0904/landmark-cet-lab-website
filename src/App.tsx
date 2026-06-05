import { Routes, Route } from 'react-router-dom';
import Footer from './components/ui/footer';
import { AnimatedNavFramer } from './components/ui/navigation-menu';
import Home from './pages/Home';

// Test Pages
import ConcretePileIntegrity from './pages/tests/ConcretePileIntegrity';
import DynamicLoadTesting from './pages/tests/DynamicLoadTesting';
import PileLateralLoad from './pages/tests/PileLateralLoad';
import BridgeLoadTest from './pages/tests/BridgeLoadTest';
import PlateLoadTesting from './pages/tests/PlateLoadTesting';
import StaticLoadTest from './pages/tests/StaticLoadTest';
import AnchorPulloutTest from './pages/tests/AnchorPulloutTest';
import EV2LoadTesting from './pages/tests/EV2LoadTesting';
import NDTTesting from './pages/tests/NDTTesting';
import SoilTesting from './pages/tests/SoilTesting';
import SPTTesting from './pages/tests/SPTTesting';
import PermeabilityTest from './pages/tests/PermeabilityTest';
import MarshalStabilityTest from './pages/tests/MarshalStabilityTest';
import DuctilityTest from './pages/tests/DuctilityTest';
import AggregateTesting from './pages/tests/AggregateTesting';
import CementTesting from './pages/tests/CementTesting';
import ChemicalTesting from './pages/tests/ChemicalTesting';
import ConcreteMixDesign from './pages/tests/ConcreteMixDesign';
import BuildingMaterialTesting from './pages/tests/BuildingMaterialTesting';
import WaterTesting from './pages/tests/WaterTesting';

function App() {
  return (
    <main className="w-full bg-background min-h-screen font-sans text-white relative flex flex-col">
      <AnimatedNavFramer />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Manual Test Routes */}
        <Route path="/tests/concrete-pile-integrity-test" element={<ConcretePileIntegrity />} />
        <Route path="/tests/dynamic-load-testing" element={<DynamicLoadTesting />} />
        <Route path="/tests/pile-lateral-load-test" element={<PileLateralLoad />} />
        <Route path="/tests/bridge-load-test" element={<BridgeLoadTest />} />
        <Route path="/tests/plate-load-testing" element={<PlateLoadTesting />} />
        <Route path="/tests/static-load-test" element={<StaticLoadTest />} />
        <Route path="/tests/anchor-pullout-test" element={<AnchorPulloutTest />} />
        <Route path="/tests/ev2-load-testing" element={<EV2LoadTesting />} />
        <Route path="/tests/ndt-testing" element={<NDTTesting />} />
        <Route path="/tests/soil-testing" element={<SoilTesting />} />
        <Route path="/tests/spt-testing" element={<SPTTesting />} />
        <Route path="/tests/permeability-test" element={<PermeabilityTest />} />
        <Route path="/tests/marshal-stability-test" element={<MarshalStabilityTest />} />
        <Route path="/tests/ductility-test" element={<DuctilityTest />} />
        <Route path="/tests/aggregate-testing" element={<AggregateTesting />} />
        <Route path="/tests/cement-testing" element={<CementTesting />} />
        <Route path="/tests/chemical-testing" element={<ChemicalTesting />} />
        <Route path="/tests/concrete-mix-design" element={<ConcreteMixDesign />} />
        <Route path="/tests/building-material-testing" element={<BuildingMaterialTesting />} />
        <Route path="/tests/water-testing" element={<WaterTesting />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
