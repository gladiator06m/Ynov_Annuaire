const container = document.querySelector(".container");
const annuaire = [
  
    {
      titre: '2D & Illustration Digitale',
      image: '/images/ynov-2d-illustration.png',
      description: 'Une formation qui développera votre talent artistique',
      slug: 'ynov-2d-illustration',
    },
    {
      titre: 'Création & Digital Design',
      image: '/images/ynov-creation-design.png',
      description: 'Différenciez-vous avec le design graphique et animer ces contenus grâce au motion design',
      slug: 'ynov-creation-design',
    },
    {
      titre: 'Informatique',
      image: '/images/ynov-informatique.png',
      description: 'l\'informatique et des nouvelles technologies !',
      slug: 'ynov-informatique',
    },
    {
      titre: 'Architecture d\'intérieur',
      image: '/images/ynov-architecture-interieur.png',
      description: 'Du dessin à la 3D, en passant par les techniques de construction et de la décoration',
      slug: 'ynov-architecture-interieur',
    },
    {
      titre: 'Marketing & Communication',
      image: '/images/ynov-marketing-communication.png',
      description: 'E-Commerce, communication digitale et web marketing, voici trois domaines qui n\'auront plus de secret pour vous à l\'issue de votre formation.',
      slug: 'ynov-marketing-communication',
    },
    {
      titre: 'Audiovisuel',
      image: '/images/ynov-audiovisuel.png',
      description: 'Spots publicitaires, webséries, documentaires ou vidéos institutionnelles, vous maîtriserez tous ces formats et plus encore !',
      slug: 'ynov-audiovisuel',
    },
    {
      titre: 'Web Management',
      image: '/images/ynov-web-management.png',
      description: 'Découvrez le digital sous tous ses aspects avant de choisir plus précisement votre orientation et de mieux cibler votre projet professionnel.',
      slug: 'ynov-web-management',
    }
];
const showAnnuaire = () => {
  let output = "";
  annuaire.forEach(
    ({ titre, description, slug, image }) =>
      (output +=
  `<article>
  <div class="bloc2">
    <h3>${titre}</h3>
      <ul>
        <li><span>description: </span>${description}</li>
        <li><span>Plus d'information:</span> <a href='https://ynov.com/formation/${slug}'>https://ynov.com/formation/${slug}</a></li>
      </ul>
    </div>
  <div class="bloc1">
    <img src='${image}'>
  </div>
  </article>`)
  );
  container.innerHTML = output;
};

// Requesting permission for Notifications after clicking on the button
const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
});

// Setting up random Notification
function randomNotification() {
  const randomItem = Math.floor(Math.random() * annuaire.length);
  const notifTitle = annuaire[randomItem].titre;
  const notifBody = `Created by ${annuaire[randomItem].description}.`;
  const notifImg = `images/${annuaire[randomItem].slug}.png`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setTimeout(randomNotification, 30000);
}

document.addEventListener("DOMContentLoaded", showAnnuaire);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
