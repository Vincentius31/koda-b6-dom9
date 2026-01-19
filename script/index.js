function el(tag, text = null) {
    const e = document.createElement(tag);
    if (text) e.textContent = text;
    return e;
}

const container = el("div");
container.className = "form-container";

const title = el("h1", "Survey Perokok");
const desc = el("p", "Form ini bertujuan untuk mengetahui kebiasaan merokok responden.");

const form = el("form");

const namaGroup = el("div");
namaGroup.className = "form-group";
namaGroup.appendChild(el("label", "Siapa nama anda?"));
const namaInput = el("input");
namaInput.type = "text";
namaInput.required = true;
namaGroup.appendChild(namaInput);

const umurGroup = el("div");
umurGroup.className = "form-group";
umurGroup.appendChild(el("label", "Berapa umur anda?"));
const umurInput = el("input");
umurInput.type = "number";
umurInput.required = true;
umurGroup.appendChild(umurInput);

const jkGroup = el("div");
jkGroup.className = "form-group";
jkGroup.appendChild(el("label", "Apa jenis kelamin anda?"));

["Laki-laki", "Perempuan"].forEach(val => {
    const lbl = el("label");
    lbl.className = "inline";
    const input = el("input");
    input.type = "radio";
    input.name = "jk";
    input.value = val;
    lbl.append(input, document.createTextNode(" " + val));
    jkGroup.appendChild(lbl);
});

const rokokGroup = el("div");
rokokGroup.className = "form-group";
rokokGroup.appendChild(el("label", "Apakah anda perokok?"));

["Ya", "Tidak"].forEach(val => {
    const lbl = el("label");
    lbl.className = "inline";
    const input = el("input");
    input.type = "radio";
    input.name = "rokok";
    input.value = val;
    lbl.append(input, document.createTextNode(" " + val));
    rokokGroup.appendChild(lbl);
});

const jenisGroup = el("div");
jenisGroup.className = "form-group";
jenisGroup.appendChild(el("label", "Jika anda perokok, rokok apa yang pernah dicoba?"));

const rokokList = ["Gudang Garam Filter", "Lucky Strike", "Marlboro", "Esse"];
rokokList.forEach(r => {
    const lbl = el("label");
    lbl.className = "block";
    const input = el("input");
    input.type = "checkbox";
    input.value = r;
    lbl.append(input, document.createTextNode(" " + r));
    jenisGroup.appendChild(lbl);
});

const btnGroup = el("div");
btnGroup.className = "form-group";

const submitBtn = el("button", "Kirim");
submitBtn.type = "submit";

const resetBtn = el("button", "Reset");
resetBtn.type = "reset";
resetBtn.className = "secondary";

btnGroup.append(submitBtn, resetBtn);

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        nama: namaInput.value,
        umur: umurInput.value,
        jk: form.jk.value,
        perokok: form.rokok.value,
        jenis: [...jenisGroup.querySelectorAll("input:checked")].map(i => i.value)
    };

    const history = JSON.parse(localStorage.getItem("surveyPerokok")) || [];
    history.push(data);
    localStorage.setItem("surveyPerokok", JSON.stringify(history));

    window.location.href = "submission.html";
});

form.append(
    namaGroup,
    umurGroup,
    jkGroup,
    rokokGroup,
    jenisGroup,
    btnGroup
);

container.append(title, desc, form);
document.body.appendChild(container);
