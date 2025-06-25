// Simple OpenAI image generation using fetch
// Requires an API key set in localStorage under 'openaiKey'

 document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idea-form');
    const result = document.getElementById('generated-result');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            result.innerHTML = 'Generiere Motiv...';
            const prompt = document.getElementById('idea').value;
            const key = localStorage.getItem('openaiKey');
            if (!key) {
                result.textContent = 'API-Schlüssel nicht gesetzt.';
                return;
            }
            try {
                const response = await fetch('https://api.openai.com/v1/images/generations', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${key}`
                    },
                    body: JSON.stringify({
                        prompt: prompt,
                        n: 1,
                        size: '512x512'
                    })
                });
                const data = await response.json();
                if (data.data && data.data[0] && data.data[0].url) {
                    result.innerHTML = `<img src="${data.data[0].url}" alt="Tattoo-Motiv" style="max-width:100%; border-radius:10px;"/>`;
                } else {
                    result.textContent = 'Fehler beim Generieren des Motivs.';
                }
            } catch (err) {
                result.textContent = 'Fehler beim Aufruf der API.';
            }
        });
    }
});
