const sessionsData = [
    {
        id: "seance-0",
        tag: "Séance 0 • Introduction SNT",
        title: "Présentation du programme de SNT",
        shortDesc: "Les 4 concepts fondamentaux, le panorama des 7 thématiques, le vocabulaire clé, le QCM de positionnement et les premiers pas en Python 3.",
        summary: `
            <!-- MODULE 1 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 1</span>
                    <h3>Qu'est-ce que la SNT & Les 4 Concepts Fondamentaux</h3>
                </div>
                <p>La <strong>SNT (Sciences Numériques et Technologie)</strong> est un enseignement obligatoire en classe de Seconde (1h30 par semaine) visant un double objectif : développer une <strong>culture numérique scientifique et technique</strong> et former un <strong>citoyen éclairé</strong> capable d'adopter un usage raisonné et responsable face aux enjeux du XXI<sup>e</sup> siècle (vie privée, données personnelles, cyberviolence).</p>
                <div class="course-grid">
                    <div class="concept-card">
                        <h4>1. Les Données</h4>
                        <p>Représentation numérique d'informations variées : textes, images, sons, géolocalisation, métadonnées.</p>
                    </div>
                    <div class="concept-card">
                        <h4>2. Les Algorithmes</h4>
                        <p>Séquences d'instructions abstraites et précises permettant d'effectuer des traitements sur les données.</p>
                    </div>
                    <div class="concept-card">
                        <h4>3. Les Langages</h4>
                        <p>Outils de traduction des algorithmes en programmes exécutables par la machine. En SNT, on utilise <strong>Python 3</strong>.</p>
                    </div>
                    <div class="concept-card">
                        <h4>4. Les Machines & Réseaux</h4>
                        <p>Équipements physiques (ordinateurs, smartphones, capteurs, routeurs) qui exécutent et transmettent les programmes.</p>
                    </div>
                </div>
                <div class="mindmap-wrapper">
                    <img src="Panorama_SNT_en_Seconde.png" alt="Carte mentale du Panorama SNT en Seconde">
                    <p class="mindmap-caption">Vue d'ensemble : les 4 fondations, les 7 thématiques clés, Python 3 et la méthodologie d'activité.</p>
                </div>
            </div>

            <!-- MODULE 2 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 2</span>
                    <h3>Panorama des 7 Thématiques du Programme</h3>
                </div>
                <p>L'année s'organise autour de <strong>7 thèmes majeurs</strong> (environ 4 semaines par thème), accompagnés tout au long de l'année par une initiation progressive à la programmation en <strong>Python 3</strong>.</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Thème</th>
                            <th>Objets d'étude & Contenus clés</th>
                            <th>Enjeux citoyens & Applications</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>1. Internet</strong></td>
                            <td>Protocoles TCP/IP, adresses IP, serveurs DNS, découpage et routage par paquets, réseaux pair-à-pair.</td>
                            <td>Indépendance matérielle, neutralité du Net.</td>
                        </tr>
                        <tr>
                            <td><strong>2. Le Web</strong></td>
                            <td>Distinction Internet / Web, HTML (structure), CSS (style), liens hypertextes, URL, HTTP/HTTPS.</td>
                            <td>Modèle client/serveur, sécurité, moteurs de recherche, droit à l'oubli.</td>
                        </tr>
                        <tr>
                            <td><strong>3. Réseaux Sociaux</strong></td>
                            <td>Profils, graphes d'amis (rayon, diamètre), algorithmes de recommandation.</td>
                            <td>Modèle économique (« gratuit = vous êtes le produit »), identité numérique, e-réputation, cyberviolence.</td>
                        </tr>
                        <tr>
                            <td><strong>4. Données Structurées</strong></td>
                            <td>Fichiers CSV, descripteurs, tables, métadonnées, requêtes de tri et filtrage en Python, OpenData, Big Data.</td>
                            <td>Protection des données personnelles (RGPD), stockage cloud, empreinte écologique des datacenters.</td>
                        </tr>
                        <tr>
                            <td><strong>5. Localisation & Cartographie</strong></td>
                            <td>Géolocalisation par satellites (GPS, Galileo), décodage de trames NMEA 0183, cartes collaboratives (OpenStreetMap).</td>
                            <td>Calculs d'itinéraires, confidentialité de la position géographique.</td>
                        </tr>
                        <tr>
                            <td><strong>6. Informatique Embarquée & Objets Connectés</strong></td>
                            <td>Chaîne acquisition / action : capteurs, actionneurs, Interfaces Homme-Machine (IHM), temps réel.</td>
                            <td>Domotique, sécurité de l'Internet des Objets (IoT), systèmes critiques.</td>
                        </tr>
                        <tr>
                            <td><strong>7. Photographie Numérique</strong></td>
                            <td>Du capteur (photosites) à l'image : pixels, codage RVB, résolution, métadonnées EXIF, formats (JPEG, RAW).</td>
                            <td>Compression, traitement d'image en Python, droit à l'image et retouches.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- MODULE 3 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 3</span>
                    <h3>Vocabulaire Essentiel & Compétences Visées</h3>
                </div>
                <p>Tout au long de l'année, nous alternerons programmation sur ordinateur, activités débranchées, recherches documentaires (frises chronologiques) et débats argumentés à l'oral.</p>
                <table class="course-table">
                    <thead>
                        <tr>
                            <th>Domaine</th>
                            <th>Mots-clés & Notions fondamentales à maîtriser</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Bases & Python</strong></td>
                            <td>Algorithme, Donnée, Variable, Affectation, Condition (<code>if/else</code>), Boucle (<code>for/while</code>), Fonction, Liste.</td>
                        </tr>
                        <tr>
                            <td><strong>Internet & Web</strong></td>
                            <td>Adresse IP, Paquet, Routeur, TCP/IP, DNS, HTML, CSS, URL, HTTP/HTTPS, Client/Serveur, Navigateur.</td>
                        </tr>
                        <tr>
                            <td><strong>Réseaux Sociaux</strong></td>
                            <td>Profil, Algorithme de recommandation, Données personnelles, Identité numérique, Graphe, E-réputation, Cyberviolence.</td>
                        </tr>
                        <tr>
                            <td><strong>Données Structurées</strong></td>
                            <td>Table, Descripteur, Fichier CSV, Métadonnées, OpenData, Big Data, Datacenter, RGPD, Base de données.</td>
                        </tr>
                        <tr>
                            <td><strong>Localisation & Photo</strong></td>
                            <td>GPS, Trame NMEA, OpenStreetMap, Photosite, Pixel, Codage RVB, Résolution, Métadonnées EXIF, Compression JPEG.</td>
                        </tr>
                    </tbody>
                </table>
                <div class="callout-info">
                    <strong>Méthode d'activité TP (ex. Frise chronologique) :</strong>
                    <br>1. <strong>Recherche & Collecte (30-40 min) :</strong> croisement des sources et sélection de 6+ dates clés.
                    <br>2. <strong>Validation Enseignant (5-10 min) :</strong> vérification de la pertinence et absence de copier-coller.
                    <br>3. <strong>Réalisation Technique (30 min) :</strong> mise en forme visuelle (ex. FriseChronos.fr) et lisibilité.
                    <br>4. <strong>Analyse Réflexive (15-20 min) :</strong> rédaction d'une fiche explicative (10-15 lignes) justifiant l'évolution.
                </div>
            </div>

            <!-- MODULE 4 -->
            <div class="lesson-module">
                <div class="lesson-module-header">
                    <span class="module-num">Module 4</span>
                    <h3>Le Fil Conducteur : Initiation à Python 3</h3>
                </div>
                <p>Aucune connaissance préalable en programmation n'est requise pour réussir en SNT. Nous apprendrons pas à pas les structures de base pour créer de petits programmes interactifs (calculatrices, jeux de devinettes, traitement d'images).</p>
                <div class="two-col-grid">
                    <div class="concept-card">
                        <h4>Variables, Types & Affichage</h4>
                        <pre class="code-block">prenom = "Camille"     # Chaîne (str)
age = 15               # Entier (int)
note = 16.5            # Flottant (float)

print("Bonjour", prenom)
print("Dans 1 an :", age + 1)</pre>
                    </div>
                    <div class="concept-card">
                        <h4>Conditions (<code>if / else</code>) & Boucles</h4>
                        <pre class="code-block">temps_ecran = 3

if temps_ecran > 4:
    print("Pense à faire une pause !")
else:
    print("Usage modéré.")</pre>
                    </div>
                </div>
                <div class="callout-success">
                    <strong>Objectifs de la Séance 0 :</strong>
                    <ul class="checklist-list">
                        <li>Identifier les 4 concepts fondamentaux de la SNT (Données, Algorithmes, Langages, Machines).</li>
                        <li>Connaître les 7 thématiques du programme et la différence entre Internet et le Web.</li>
                        <li>Réaliser le test de positionnement ci-dessous pour faire le point sur ses acquis.</li>
                        <li>Exécuter ses premiers programmes Python directement dans le navigateur.</li>
                    </ul>
                </div>
            </div>
        `,
        qcm: [
            {
                question: "1. Parmi ces éléments, lequel ne fait PAS partie des 4 concepts scientifiques fondamentaux de la SNT ?",
                options: [
                    "Les Données",
                    "Les Algorithmes",
                    "La Bureautique avancée",
                    "Les Machines et Réseaux"
                ],
                answer: 2,
                explanation: "Les 4 piliers de la SNT sont : les Données, les Algorithmes, les Langages (Python) et les Machines & Réseaux."
            },
            {
                question: "2. Quelle est la différence principale entre Internet et le Web ?",
                options: [
                    "Ce sont deux synonymes désignant exactement la même chose",
                    "Internet est l'infrastructure réseau mondiale (câbles, routeurs, IP), tandis que le Web est un service (pages HTML, liens) qui circule sur Internet",
                    "Le Web est le réseau matériel et Internet désigne uniquement les navigateurs",
                    "Internet fonctionne sans adresse IP contrairement au Web"
                ],
                answer: 1,
                explanation: "Internet est le réseau physique et logique mondial (protocoles TCP/IP) ; le Web (inventé en 1989) est l'une des applications utilisant Internet, au même titre que les e-mails ou le streaming."
            },
            {
                question: "3. À quoi sert un serveur DNS sur Internet ?",
                options: [
                    "À protéger l'ordinateur contre les virus",
                    "À traduire un nom de domaine lisible (ex. wikipedia.org) en adresse IP numérique",
                    "À augmenter le débit de la connexion Wi-Fi",
                    "À compresser les photos au format JPEG"
                ],
                answer: 1,
                explanation: "Le DNS (Domain Name System) joue le rôle d'annuaire d'Internet en associant chaque nom de site à l'adresse IP du serveur correspondant."
            },
            {
                question: "4. Quels sont les deux langages de base utilisés pour structurer et mettre en forme une page Web ?",
                options: [
                    "Python et C++",
                    "HTML et CSS",
                    "GPS et NMEA",
                    "CSV et EXIF"
                ],
                answer: 1,
                explanation: "Le HTML définit la structure et le contenu de la page (titres, paragraphes, liens), tandis que le CSS gère sa mise en forme visuelle (couleurs, polices, disposition)."
            },
            {
                question: "5. En Python, que va afficher le programme suivant ?<br><code>a = 5<br>b = 3<br>print(a + b * 2)</code>",
                options: [
                    "16",
                    "11",
                    "532",
                    "Une erreur de syntaxe"
                ],
                answer: 1,
                explanation: "Comme en mathématiques, la multiplication est prioritaire sur l'addition en Python : 3 * 2 = 6, puis 5 + 6 = 11."
            },
            {
                question: "6. Quel sigle désigne le règlement européen qui protège les données personnelles des citoyens ?",
                options: [
                    "HTML",
                    "RGPD",
                    "HTTP",
                    "RVB"
                ],
                answer: 1,
                explanation: "Le RGPD (Règlement Général sur la Protection des Données) encadre la collecte, le stockage et l'utilisation des données personnelles dans l'Union européenne."
            }
        ],
        exercises: [
            {
                id: "exo-0-1",
                title: "Exercice 1 (Variables & Calculs) : Temps d'écran hebdomadaire",
                statement: `On souhaite calculer le nombre d'heures passées devant un écran sur une année (52 semaines).
                <br>1. Exécute le code ci-dessous avec le bouton <strong>▶ Exécuter</strong>.
                <br>2. Modifie la valeur de <code>heures_par_jour</code> (par exemple <code>3.5</code>) et calcule dans la variable <code>heures_par_an</code> le total sur <strong>365 jours</strong>, puis affiche le résultat.`,
                starterCode: `# Estimation du temps d'écran annuel
heures_par_jour = 2
heures_par_semaine = heures_par_jour * 7
print("Heures par semaine :", heures_par_semaine)

# À compléter : calculer heures_par_an (sur 365 jours) et l'afficher
heures_par_an = 0
print("Heures par an :", heures_par_an)`,
                solutionCode: `heures_par_jour = 3.5
heures_par_semaine = heures_par_jour * 7
print("Heures par semaine :", heures_par_semaine)

heures_par_an = heures_par_jour * 365
print("Heures par an :", heures_par_an)`
            },
            {
                id: "exo-0-2",
                title: "Exercice 2 (Condition if / else) : Vérification de mot de passe",
                statement: `En SNT (thèmes Web et Réseaux sociaux), la robustesse d'un mot de passe est essentielle pour protéger son identité numérique. En Python, la fonction <code>len(mot_de_passe)</code> renvoie le nombre de caractères d'une chaîne.
                <br>Compléter la condition <code>if / else</code> pour afficher <code>"Mot de passe sécurisé"</code> si sa longueur est supérieure ou égale à <strong>12 caractères</strong> (<code>>= 12</code>), et <code>"Mot de passe trop court"</code> sinon.`,
                starterCode: `mot_de_passe = "Snt2026!"
longueur = len(mot_de_passe)
print("Longueur actuelle :", longueur)

# Compléter la condition ci-dessous :
if longueur >= 12:
    print("À compléter")
else:
    print("À compléter")`,
                solutionCode: `mot_de_passe = "Snt2026!Securite"
longueur = len(mot_de_passe)
print("Longueur actuelle :", longueur)

if longueur >= 12:
    print("Mot de passe sécurisé")
else:
    print("Mot de passe trop court")`
            }
        ]
    }
];

function renderSessionsGrid() {
    const grid = document.getElementById("sessions-grid-view");
    grid.innerHTML = "";

    sessionsData.forEach((session) => {
        const qcmBadge = session.qcm ? ` • ${session.qcm.length} QCM` : "";
        const card = document.createElement("article");
        card.className = "session-card";
        card.innerHTML = `
            <div>
                <span class="card-tag">${session.tag}</span>
                <h2>${session.title}</h2>
                <p>${session.shortDesc}</p>
            </div>
            <div class="card-footer">
                <span>${session.exercises.length} activités Python${qcmBadge}</span>
                <span>Ouvrir →</span>
            </div>
        `;
        card.onclick = () => openSession(session);
        grid.appendChild(card);
    });
}

function buildQcmHTML(session) {
    if (!session.qcm || session.qcm.length === 0) return "";

    let itemsHTML = "";
    session.qcm.forEach((item, qIdx) => {
        let optionsHTML = "";
        item.options.forEach((opt, optIdx) => {
            optionsHTML += `
                <label class="qcm-option" id="opt-${session.id}-${qIdx}-${optIdx}">
                    <input type="radio" name="qcm-${session.id}-${qIdx}" value="${optIdx}">
                    <span>${opt}</span>
                </label>
            `;
        });

        itemsHTML += `
            <div class="qcm-item">
                <div class="qcm-question">${item.question}</div>
                <div class="qcm-options">${optionsHTML}</div>
                <div class="qcm-explanation" id="exp-${session.id}-${qIdx}">
                    <strong>Explication :</strong> ${item.explanation}
                </div>
            </div>
        `;
    });

    return `
        <h3 class="exercises-section-title">Quiz de Positionnement (Découverte SNT)</h3>
        <div class="qcm-container" id="qcm-box-${session.id}">
            ${itemsHTML}
            <div class="qcm-footer">
                <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                    <button class="btn-run" onclick="checkQcm('${session.id}')">✓ Vérifier mes réponses</button>
                    <button class="btn-reset" onclick="resetQcm('${session.id}')">↺ Réinitialiser le QCM</button>
                </div>
                <span class="qcm-score-badge" id="score-${session.id}"></span>
            </div>
        </div>
    `;
}

function openSession(session) {
    const gridView = document.getElementById("sessions-grid-view");
    const detailView = document.getElementById("session-detail-view");
    const container = document.getElementById("course-container");

    gridView.classList.add("hidden");
    detailView.classList.remove("hidden");

    const disabledAttr = isPyodideReady ? "" : "disabled";
    const qcmHTML = buildQcmHTML(session);
    let exercisesHTML = "";

    session.exercises.forEach((exo) => {
        exercisesHTML += `
            <div class="exercise-box">
                <h4>${exo.title}</h4>
                <p style="margin-top: 0.5rem;">${exo.statement}</p>

                <div class="mini-ide">
                    <div class="mini-ide-toolbar">
                        <span class="mini-ide-label">Éditeur Python (Ctrl+Entrée pour exécuter)</span>
                        <div class="mini-ide-buttons">
                            <button class="btn-run" ${disabledAttr} onclick="runExerciseCode('${exo.id}')">▶ Exécuter</button>
                            <button class="btn-reset" onclick="resetExerciseCode('${exo.id}')">↺ Réinitialiser</button>
                            <button class="btn-corr" onclick="toggleCorrection('${exo.id}')">Correction</button>
                        </div>
                    </div>
                    <textarea id="editor-${exo.id}"></textarea>
                    <div id="output-${exo.id}" class="mini-console">Prêt à exécuter...</div>
                </div>

                <div id="corr-${exo.id}" class="correction-box">
                    <strong>Proposition de correction :</strong>
                    <pre class="code-block">${exo.solutionCode}</pre>
                </div>
            </div>
        `;
    });

    container.innerHTML = `
        <span class="badge">${session.tag}</span>
        <h2 class="session-title">${session.title}</h2>
        ${session.summary}
        ${qcmHTML}
        <h3 class="exercises-section-title">Premiers pas en Python 3</h3>
        ${exercisesHTML}
    `;

    session.exercises.forEach((exo) => {
        window.createExerciseEditor(exo.id, exo.starterCode);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise([container]).catch((err) => console.error(err));
    }
}

window.checkQcm = function(sessionId) {
    const session = sessionsData.find(s => s.id === sessionId);
    if (!session || !session.qcm) return;

    let score = 0;
    session.qcm.forEach((item, qIdx) => {
        const selected = document.querySelector(`input[name="qcm-${sessionId}-${qIdx}"]:checked`);
        item.options.forEach((_, optIdx) => {
            const label = document.getElementById(`opt-${sessionId}-${qIdx}-${optIdx}`);
            label.classList.remove("correct-answer", "wrong-answer");
            if (optIdx === item.answer) {
                label.classList.add("correct-answer");
            }
        });

        if (selected) {
            const chosen = parseInt(selected.value, 10);
            if (chosen === item.answer) {
                score++;
            } else {
                const wrongLabel = document.getElementById(`opt-${sessionId}-${qIdx}-${chosen}`);
                wrongLabel.classList.add("wrong-answer");
            }
        }

        const exp = document.getElementById(`exp-${sessionId}-${qIdx}`);
        if (exp) exp.classList.add("visible");
    });

    const scoreEl = document.getElementById(`score-${sessionId}`);
    if (scoreEl) {
        scoreEl.textContent = `Score : ${score} / ${session.qcm.length}`;
    }
};

window.resetQcm = function(sessionId) {
    const session = sessionsData.find(s => s.id === sessionId);
    if (!session || !session.qcm) return;

    session.qcm.forEach((item, qIdx) => {
        document.querySelectorAll(`input[name="qcm-${sessionId}-${qIdx}"]`).forEach(r => r.checked = false);
        item.options.forEach((_, optIdx) => {
            const label = document.getElementById(`opt-${sessionId}-${qIdx}-${optIdx}`);
            label.classList.remove("correct-answer", "wrong-answer");
        });
        const exp = document.getElementById(`exp-${sessionId}-${qIdx}`);
        if (exp) exp.classList.remove("visible");
    });

    const scoreEl = document.getElementById(`score-${sessionId}`);
    if (scoreEl) scoreEl.textContent = "";
};

function showGrid() {
    document.getElementById("session-detail-view").classList.add("hidden");
    document.getElementById("sessions-grid-view").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

window.toggleCorrection = function(exoId) {
    const box = document.getElementById(`corr-${exoId}`);
    box.classList.toggle("visible");
};

document.addEventListener("DOMContentLoaded", () => {
    renderSessionsGrid();
    document.getElementById("back-btn").addEventListener("click", showGrid);
});