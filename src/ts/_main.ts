const jokeEl = document.getElementById('joke') as HTMLDivElement;
const jokeBtn = document.getElementById('jokeBtn') as HTMLButtonElement;

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke;
    });
}

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
