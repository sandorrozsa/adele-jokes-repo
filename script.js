
// Létrehozunk egy btn és egy joke változót.
const btn = document.getElementById("btn");
const joke = document.getElementById("joke");

// Létrehozunk egy jokes nevü objektumot, amit feltöltünk adatokkal.
const jokes = [

    'Amit megtehetsz ma, ne halaszd mára.',
    'Ha retardált vagy, abban nem tudok segíteni.',
    'Kutyából nem lesz szalonna, csak a kínai negyedben',
    'Ha sötét van, az azért van, mert nincs világos.',
    'Ha kiállsz az esőre, vizes leszel.',
    'Jobb egyedül, mint magadba.',
    'Ha megfürdesz, nem leszel büdös.',
    'Ha becsukod a szemed, nem látsz semmit.',
    'Nem a győzelem a fontos, az a fontos, hogy nyerj!',

];


// Létrehozzuk a gomb hivatkozását, ami a getJoke function-t indítja el a kattintás
// után
btn.addEventListener("click", getJoke);

/* Létrehozzuk a getJoke function-t, amiben egy randomJoke változót hozunk
létre és a math.floor, math.random segítségével megadjuk a viccek megjelenését.
Az innerHTML-el pedig a weblapra irányítjuk. */
function getJoke() {
    let randomJoke = jokes[(Math.floor(Math.random()* jokes.length))];
    joke.innerHTML = randomJoke;
}

