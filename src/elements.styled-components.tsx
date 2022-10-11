import styled from 'styled-components';


// Reproduction:
// 1. Change the backgroundColor of ComponentToHotReload to 'red' - no HMR
// 2. Comment out RandomComponent
// 3. Change the backgroundColor of ComponentToHotReload again - HMR is working

// Additional note:
// When RandomComponent is commented out, a change in ComponentToHotReload results in HMR update for App.tsx and elements.tsx
// When RandomComponent is present, a change in ComponentToHotReload results in HMR update only for elements.tsx

export const ComponentToHotReload = styled('div')({
  display: 'block',
  width: '200px',
  height: '200px',
  backgroundColor: 'blue',
  borderRadius: '50%',
});

const RandomComponent = () => null;


