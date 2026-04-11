export const JavascriptEngine = {
    async bootApplet() {
        console.log("Creating Javascript Data Archives and Configurating Data...");
        const script = document.createElement('script');
        script.src = 'https://cjrtnc.leaningtech.com/3.0/loader.js';
        document.head.appendChild(script);
        script.onload = async () => {
            await cheerpjInit();
            cheerpjCreateDisplay(200, 100, document.getElementById('javascript-container'));
            console.log("JavaScript Data Loaded Sucess");
        };
    }
};