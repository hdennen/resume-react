import ReactGA from 'react-ga4';

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

// Utility function to track page views
export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

// Optional: Utility function to track custom events
export const logEvent = (category: string, action: string) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};