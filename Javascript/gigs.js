const todaySpan = document.querySelector('h2.today');
const today = new Date();
const f = new Intl.DateTimeFormat("en-uk", {
	dateStyle: "full",
})

todaySpan.textContent = `Today, ${f.format(today)}`;