export const Helpers = {
    getTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    },
    copyToClipboard(text) {
        navigator.clipboard.writeText(text);
    }
};