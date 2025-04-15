const btn = document.getElementById('generateBtn');
const input = document.getElementById('input');
const tweetBox = document.getElementById('tweet');
const resultBox = document.getElementById('result');

btn.addEventListener('click', async () => {
  const topic = input.value.trim();
  if (!topic) return alert("Please enter a topic!");

  btn.disabled = true;
  btn.innerText = "Generating...";

  const res = await fetch('http://localhost:3000/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: topic })
  });

  const data = await res.json();
  tweetBox.innerText = data.output || "Something went wrong.";
  resultBox.classList.remove('hidden');

  btn.disabled = false;
  btn.innerText = "Generate Tweet";
});
