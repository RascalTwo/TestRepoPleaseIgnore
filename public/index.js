function handleError(error) {
	console.error(error);
	alert(error.message ?? error);
}

function onDeleteClick(event) {
	const li = event.currentTarget.closest('li');
	return fetch('/quotes', {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ quoteID: li.dataset.id })
	}).then(response => {
		if (response.status === 200) li.remove();
		else throw new Error('Quote not found');
	}).catch(handleError);
}

document.querySelectorAll('.deleteButton').forEach(button => button.addEventListener('click', onDeleteClick));

function onUpdateClick(event) {
	const li = event.currentTarget.closest('li');;
	const name = prompt('Name:', li.children[0].textContent);
	if (!name) return;
	const quote = prompt('Quote:', li.children[1].textContent);
	if (!quote) return;

	return fetch('/quotes', {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ quoteID: li.dataset.id, name, quote })
	}).then(response => {
		if (response.status === 200) return response.json();
		else throw new Error('Quote not found');
	}).then(quoteData => {
		li.children[0].textContent = quoteData.name;
		li.children[1].textContent = quoteData.quote;
	}).catch(handleError);
}

document.querySelectorAll('.updateButton').forEach(button => button.addEventListener('click', onUpdateClick));