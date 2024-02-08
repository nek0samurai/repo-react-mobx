export function ClipBoard(input, query) {
	const copyText = document.getElementById(input);
	const copied = 'copied';
	copyText.select();
	copyText.setSelectionRange(0, 99999);

	navigator.clipboard.writeText(copyText.value);
	copyText.value = copied;
	setTimeout(() => {
		copyText.value = query;
	}, 2000);
}
