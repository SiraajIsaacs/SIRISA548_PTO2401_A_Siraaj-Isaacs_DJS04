// Export the applyTheme function to allow switching between light and dark modes
export const applyTheme = (theme) => {
    if (theme === 'night') {
        // Apply dark theme styles
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        // Apply light theme styles
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
};