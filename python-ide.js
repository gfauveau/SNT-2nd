let pyodideInstance = null;
let isPyodideReady = false;
const activeEditors = {}; // Stocke les instances CodeMirror par ID d'exercice

async function initPython() {
    const statusEl = document.getElementById("pyodide-status");
    try {
        pyodideInstance = await loadPyodide();
        isPyodideReady = true;
        statusEl.textContent = "✓ Python prêt";
        statusEl.className = "status-ready";
        document.querySelectorAll(".btn-run").forEach(btn => btn.disabled = false);
    } catch (err) {
        statusEl.textContent = "✗ Erreur Python";
        console.error(err);
    }
}

window.createExerciseEditor = function(exoId, starterCode) {
    const textarea = document.getElementById(`editor-${exoId}`);
    if (!textarea) return;

    const cm = CodeMirror.fromTextArea(textarea, {
        mode: "python",
        theme: "dracula",
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        indentWithTabs: false,
        viewportMargin: Infinity,
        extraKeys: {
            "Tab": function(instance) {
                if (instance.somethingSelected()) {
                    instance.indentSelection("add");
                } else {
                    instance.replaceSelection("    ", "end");
                }
            },
            "Ctrl-Enter": function() {
                window.runExerciseCode(exoId);
            },
            "Cmd-Enter": function() {
                window.runExerciseCode(exoId);
            }
        }
    });

    cm.setValue(starterCode);
    activeEditors[exoId] = { cm, starterCode };
};

window.runExerciseCode = async function(exoId) {
    if (!pyodideInstance || !activeEditors[exoId]) return;

    const code = activeEditors[exoId].cm.getValue();
    const outputEl = document.getElementById(`output-${exoId}`);
    outputEl.classList.remove("error");
    outputEl.textContent = "Exécution en cours...";

    let logs = [];
    try {
        pyodideInstance.setStdout({
            batched: (text) => logs.push(text)
        });
        pyodideInstance.setStderr({
            batched: (text) => logs.push("[Erreur] " + text)
        });

        await pyodideInstance.runPythonAsync(code);
        outputEl.textContent = logs.length > 0
            ? logs.join("\n")
            : "✓ Code exécuté sans erreur (aucun affichage print).";
    } catch (err) {
        outputEl.classList.add("error");
        outputEl.textContent = err.toString();
    }
};

window.resetExerciseCode = function(exoId) {
    if (!activeEditors[exoId]) return;
    activeEditors[exoId].cm.setValue(activeEditors[exoId].starterCode);
    const outputEl = document.getElementById(`output-${exoId}`);
    outputEl.classList.remove("error");
    outputEl.textContent = "Code réinitialisé.";
};

document.addEventListener("DOMContentLoaded", initPython);