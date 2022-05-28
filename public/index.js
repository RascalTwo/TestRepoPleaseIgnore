function onDeleteClick(event) {
	const li = event.currentTarget.closest('li');
	return fetch('/quotes', {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ quoteID: li.dataset.id })
	}).then(response => {
		if (response.status === 200) li.remove();
		else alert('Quote not found');
	}).catch(console.error);
}

document.querySelectorAll('.deleteButton').forEach(button => button.addEventListener('click', onDeleteClick));