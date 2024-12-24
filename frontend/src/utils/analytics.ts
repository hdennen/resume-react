import ReactGA from 'react-ga4';

export const initGA = (measurementId: string) => {
  ReactGA.initialize(measurementId);
};

// Utility function to track page views
export const logPageView = (title?: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: window.location.pathname,
    title: title || window.location.pathname
  });
};

// Enhanced event tracking with optional parameters
export const logEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number,
  nonInteraction?: boolean
) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
    nonInteraction,
  });
};

// Common click event tracking helpers
export const trackButtonClick = (buttonName: string, location?: string) => {
  logEvent(
    'Button Click',
    buttonName,
    location || window.location.pathname
  );
};

export const trackLinkClick = (
  linkText: string, 
  label: string, 
  isExternal: boolean = false
) => {
  logEvent(
    'Link Click',
    isExternal ? 'External Link' : 'Internal Link',
    `${linkText} - ${label}`
  );
};

export const trackDownload = (fileName: string, fileType?: string) => {
  logEvent(
    'Download',
    fileType || 'File',
    fileName
  );
};