document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('idea-form');
    const result = document.getElementById('generated-result');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
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
                } else {
                    result.textContent = 'Fehler beim Generieren des Motivs.';
                }
            } catch (err) {
                result.textContent = 'Fehler beim Aufruf der API.';
            }
        });
    }
});
