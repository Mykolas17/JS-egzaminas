/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko 
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const outputContainer = document.getElementById('output');
const btn = document.getElementById('btn');
const message = document.getElementById('message');

btn.onclick = () => {
	populateUsers();
	btn.remove();
	message.remove();
};

const populateUsers = async () => {
	const response = await fetch(ENDPOINT);
    const data = await response.json();
    data.forEach((user) => renderUser(user, outputContainer));
}

const renderUser = async (user, parent) => {
	userContainer = document.createElement('div');
	userContainer.className = 'user-container';
	
	userAvatar = document.createElement('img');
	userAvatar.src = user.avatar_url;
	
	userLogin = document.createElement('span');
	userLogin.className = 'user-login';
	userLogin.textContent = user.login;
	
	userContainer.appendChild(userAvatar);
	userContainer.appendChild(userLogin);
	parent.appendChild(userContainer);	
};



/*
const ENDPOINT = 'https://api.github.com/users';
const buttonEL = document.querySelector('button[id="btn"]')
const outputEl = document.getElementById('output');

const main = async () => {
	const response = await fetch(
		'https://api.github.com/users'
    );
    const data = await response.json();
    console.log(data);
    data.forEach((item) =>{
    const divEl = document.createElement('div');
		const imgEl = document.createElement('img');
		const headingEl = document.createElement('h1');
		const paragraphEl = document.createElement('p');
		imgEl.src = item.avatar_url;
		paragraphEl.textContent = item.login;
		divEl.append(imgEl, paragraphEl);
		outputEl.append(divEl);
	});
  buttonEL.addEventListener('click', output);
}

main();


//call babk
//addEvent Listener 
//fetch
//adress
*/