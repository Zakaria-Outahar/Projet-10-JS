const btnInscription = document.querySelector('.btn-inscription');
const btnConnection = document.querySelector('.btn-connection');
const deco = document.querySelector('.btn-deco');

const formInscription = document.querySelector('.form-inscription');
const emailInscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');


const formConnection = document.querySelector('.form-connection');
const emailConnection = document.querySelector('.email-connection');
const mdpConnection = document.querySelector('.mdp-connection');
const succes = document.createElement('span');


btnInscription.addEventListener('click', () => {
    succes.remove();
    if(formConnection.classList.contains('apparition')){
        formConnection.classList.remove('apparition');
    }
    formInscription.classList.toggle('apparition');
})

btnConnection.addEventListener('click', () => {
    succes.remove();
    if(formInscription.classList.contains('apparition')){
        formInscription.classList.remove('apparition');
    }
    formConnection.classList.toggle('apparition');
})

formInscription.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailInscription.value;
    const mdpInscriptionValeur = mdpInscription.value;

    auth.createUserWithEmailAndPassword(mailValeur, mdpInscriptionValeur)
    .then(() => {
        formInscription.reset();
        succes.innerText = "Inscription terminée";
        succes.className = "succes";
        formInscription.appendChild(succes);
    })
})

// Deconnexion

deco.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("Deconnecté");
    })
})

// Connexion

formConnection.addEventListener('submit', (e) => {
    e.preventDefault();

    const mailValeur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailValeur, mdpConnectionValeur)
    .then(cred => {
        console.log("Connexion!", cred.user);
        formConnection.reset();
        formConnection.classList.remove('apparition');        
    })
})

//  Gérer le contenu

const h1 = document.querySelector('h1');
const info = document.querySelector('.info');

auth.onAuthStateChanged(utilisateur => {
    if(utilisateur){
        info.innerText = "Voici le contenu privé";
        h1.innerText = "Vous voilà de retour";
    } else{
        info.innerText = "Contenu public";
        h1.innerText = "Bienvenue, inscrivez-vous ou connectez-vous !';"
    }
})