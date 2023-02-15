const newBtn = $("#newBtn");
const ft_list = $("#ft_list");

let todoCookies = document.cookie;
if (todoCookies.length !== 0) {
	todoCookies = todoCookies.split(";");
	todoCookies.forEach((text) => {
		text = text.split("=");
		insert_new_list(text[0], text[1]);
	});
}

$(document).ready(function () {
	newBtn.click(function () {
		let todo_text = prompt("Add to todo");
		if (todo_text.trim() === "") {
			return;
		}

		let id = new Date().getTime();
		document.cookie = `${id}=${todo_text};`;
		insert_new_list(id, todo_text);
	})
})

function insert_new_list(id, text) {
	let todo = $("<p></p>").text(text);
	todo.click(function () {
		let isConfirm = confirm("Do you want to delete me?");
		if (isConfirm) {
			todo.remove();
			document.cookie = `${id}=; Expires=Wed, 31 Dec 1969 23:59:59 GMT;`;
		}
	});

	ft_list.prepend(todo);
}