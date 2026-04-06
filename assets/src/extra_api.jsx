export async function askMaya(prompt, model = import.meta.env.VITE_DEFAULT_MODEL) {
    const response = await fetch(`https://api-inference.huggingface.co/models/${model}`, {
        headers: { 
            Authorization: `Bearer ${import.meta.env.VITE_HF_TOKEN}`,
            "Content-Type": "application/json" 
        },
        method: "POST",
        body: JSON.stringify({ inputs: prompt }),
    });
    
    if (!response.ok) throw new Error("Error in Connection");
    const result = await response.json();
    return result[0].generated_text;
}