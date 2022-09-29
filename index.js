const closeButton = document.querySelector('#modal-close-btn');
const modalEl = document.querySelector('#modal');
const formEl = document.querySelector('#form-el');
const modalText = document.querySelector('#modal-text');
const modalBtn = document.querySelector('#modal-btn');
const buttonBlock = document.querySelector('#modal-choice-btns');

modalBtn.addEventListener('mouseenter', function () {
	buttonBlock.classList.toggle('reverse');
});

setTimeout(function () {
	modalEl.style.display = 'inline';
}, 1000);

closeButton.addEventListener('click', function () {
	modalEl.style.display = 'none';
});

formEl.addEventListener('submit', function (event) {
	event.preventDefault();

	const userFormData = new FormData(formEl);
	console.log(userFormData);
	const userName = userFormData.get('fullName');

	modalText.innerHTML = `
	<div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
	</div>`;
	setTimeout(function () {
		document.querySelector('#upload-text').innerText = `Making the sale...`;
	}, 1500);
	setTimeout(() => {
		document.querySelector(
			'#modal-inner'
		).innerHTML = `<h2>Thanks, <span class="modal-display-name">${userName},</span> you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif" class="idiot-gif-img">
    </div>`;
		closeButton.disabled = false;
	}, 3000);
});
