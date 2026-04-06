export async function onRequestPost({ request, env }) {
  try {
    const { messages, model, max_tokens, temperature } = await request.json();
    const apiKey = env.GROQ_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Chave da API não configurada" }), { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: max_tokens || 8192,
        temperature: temperature || 0.6
      })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// Configuração de CORS para permitir o navegador acessar
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}