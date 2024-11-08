import { createNavigationContainerRef, CommonActions } from '@react-navigation/native';

// Create a navigation reference
export const navigationRef = createNavigationContainerRef();

// Function to navigate between screens
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    console.log("Not Ready");
  }
}

// Function to reset the navigation stack and navigate to a specific screen
export function resetToScreen(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index: 0,  // Make 'name' screen the active screen
        routes: [{ name, params }]
      })
    );
  } else {
    console.log("Not Ready");
  }
}
