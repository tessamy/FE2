

// Tee funktio 'showImages', joka
// lataa kuvat.json tiedoston, joka sisältää näytettävät kuvat taulukkona

// tee silmukka joka tekee jokaisesta kuvasta alla olevan HTML:n DOM-metodien avulla. Kun alla oleva rakenne on valmis, ne lisätään ul-elementin sisälle
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Tee HTML-elementit createElement-metodilla ja
// lisää attribuutit setAttribute-metodilla tai elementti.attribuutti -syntaksilla.
// Lisää elementit toistensa sisälle appendChild-metodilla.
// Lisää ne lopuksi ul elementin sisälle, jolloinka ne tulostuvat HTML-sivulle.


/*const li = document.createElement('li');
const a = document.createElement('a');
a.setAttribute('href', 'http://metropolia.fi');
a.innerText = 'Linkki';
li.appendChild(a);
const ul = document.querySelector('ul');
ul.appendChild(li);*/

const li = document.createElement('li');

const showImages = () => {
  fetch('kuvat.json').then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
    let kuva = json[0];
    let html = '';
    json.forEach((kuva) => {
      html += `<li>
                <figure>
                    <a href="img/original/${kuva.mediaUrl}"><img src="img/thumbs/${kuva.mediaThumb}"></a>
                    <figcaption>
                        <h3>${kuva.mediaTitle}</h3>
                    </figcaption>
                </figure>
            </li>`;})
    const ul = document.querySelector('ul');
    ul.innerHTML = html;
  })
};
li.setAttribute(showImages());
const ul = document.querySelector('ul');
ul.appendChild(li);
