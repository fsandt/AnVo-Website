
< xcmbpy-codex/codebasis-für-anfänger-erklären
document.addEventListener('DOMContentLoaded', function() {
=======
// Simple OpenAI image generation using fetch
// Requires an API key set in localStorage under 'openaiKey'

 document.addEventListener('DOMContentLoaded', function() {
> main


    const form = document.getElementById('idea-form');
    const result = document.getElementById('generated-result');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

< xcmbpy-codex/codebasis-für-anfänger-erklären
            result.textContent = 'Generiere Motiv...';
            const prompt = document.getElementById('idea').value;
            try {
                const response = await fetch('/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ prompt })
                });
                const data = await response.json();
                if (data.url) {
                    result.innerHTML = `<img src="${data.url}" alt="Tattoo-Motiv" style="max-width:100%; border-radius:10px;"/>`;
=======
            result.innerHTML = 'Generiere Motiv...';

            const prompt = document.getElementById('idea').value;
            try {
                const response = await fetch('/api/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ prompt })
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
