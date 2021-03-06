import LandingPage from './client/LandingPage.jsx';
import FhirCachingLayerIntroPage from './client/FhirCachingLayerIntroPage.jsx';

var DynamicRoutes = [{
  'name': 'LandingPage',
  'path': '/landing-page',
  'component': LandingPage
}, {
  'name': 'TutorialBoardPage',
  'path': '/tutorial-board',
  'component': LandingPage
}];

export { DynamicRoutes, LandingPage };
