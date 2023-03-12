const countButton = document.getElementById('count-button');
const textArea = document.getElementById('text-area');
const wordCount = document.getElementById('word-count');

countButton.addEventListener('click', () => {
	const text = textArea.value.trim();
	const count = text.split(/\s+/).length;
	wordCount.textContent = count;
});
