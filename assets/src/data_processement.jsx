export const DataEngine = {
    async optimizeHistory(historyArray) {
        console.log("Otimizing Message History...");
        return historyArray.map(msg => ({
            ...msg,
            timestamp: Date.now(),
            checksum: crypto.randomUUID().split('-')[0]
        }));
    }
};