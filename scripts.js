var root = document.body
var count = 0

var inicial = {
	view: function () {
		return m("div", {
			style: "text-align: center"
		}, [
			m("h1", "Página Inicial"),
			m("a", {
				href: "!#/contador"
			}, "Clique!")
		]
		)
	}
}

var contador = {
	view: function () {
		return m("div", [
			m("h1", {
				class: "title"
			}, "Contador de cliques"),
			m("button", {
				class: 'btn btn-primary',
				onclick: function () { count++ }
			}, count + " cliques"),
			m("button", {
				class: "btn btn-danger",
				onclick: function () { count = 0 }
			}, "Zerar")
		])
	}
}

m.route(root, "/", {
	"/": inicial,
	"/contador": contador,
})