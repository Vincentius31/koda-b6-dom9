const table = document.getElementById("dataTable");
const data = JSON.parse(localStorage.getItem("surveyPerokok")) || [];

data.forEach((item, index) => {
    const tr = document.createElement("tr");

    const values = [
        index + 1,
        item.nama,
        item.umur,
        item.jk,
        item.perokok,
        item.jenis.join(", ")
    ];

    values.forEach(val => {
        const td = document.createElement("td");
        td.textContent = val;
        tr.appendChild(td);
    });

    table.appendChild(tr);
});
