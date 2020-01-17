
let int = "";
let i = 1;
class Profile {
    constructor(acquisition, mention, categorie, intitule, front) {
        this.intitule = intitule;
        this.mention = mention;
        this.acquisition = acquisition;
        this.categorie = categorie;
        this.front = front;
        this.afficher();
    }
    afficher() {

        if (int != this.intitule) {
            if (this.categorie == 'technique') {
                let th = this.addElement('th', this.intitule.split("_").join(" "), table);
                th.setAttribute('colspan', '2')
                let tr = this.addElement('tr', "", table)
                tr.setAttribute('class', 'tr')
                this.addElement('td', 'Acquisition', tr);
                this.addElement('td', 'Niveau', tr);
                int = this.intitule;
            }

            if (this.categorie == 'metier') {
                let tr1 = this.addElement('tr', '', table);
                let th1 = this.addElement('th', this.front.split("_").join(" "), tr1);
                th1.setAttribute('colspan', '2');
                th1.setAttribute('class', 'front');
                let tr2 = this.addElement('tr', '', table);
                let th2 = this.addElement('th', this.intitule.split("_").join(" "), tr2);
                th2.setAttribute('class', 'front');
                th2.setAttribute('colspan', '2')

                let tr = this.addElement('tr', "", table)
                tr.setAttribute('class', 'tr')
                this.addElement('td', 'Acquisition', tr);
                this.addElement('td', 'Niveau', tr);
                int = this.intitule;
            }
        }

        let tr = this.addElement('tr', "", table)
        this.addElement('td', this.acquisition, tr);
        let td2 = this.addElement('td', "", tr);
        let div = this.addElement('div', "", td2);
        let prog = 'progres' + i;
        div.setAttribute('id', prog);
        div.setAttribute('class', 'progress');
        this.progressBar(prog, this.mention);
        i++;
    }

    progressBar(e, p) {
        let elem = document.getElementById(e);
        let w = 1;
        let id = setInterval(frame, 20);
        function frame() {
            if (w >= p) {
                clearInterval(id);
            } else {
                w++;
                elem.style.width = w + "%";
                elem.textContent = w + "%";
            }
        }
    }

    addElement(element, texte, target) {
        let el = document.createElement(element);
        el.textContent = texte;
        target.appendChild(el);
        return el;
    }

}
