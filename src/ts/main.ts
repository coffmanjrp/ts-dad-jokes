const jokeEl = document.getElementById('joke') as HTMLDivElement;
const jokeBtn = document.getElementById('jokeBtn') as HTMLButtonElement;

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
