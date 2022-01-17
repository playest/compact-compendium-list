declare const Hooks: any;

function getDocumentClassFromTitle(title: string) {
    if(title === "Actor") {
        return "compendium-of-actor";
    }
    else if(title === "Cards") {
        return "compendium-of-card";
    }
    else if(title === "Item") {
        return "compendium-of-item";
    }
    else if(title === "JournalEntry") {
        return "compendium-of-journalentry";
    }
    else if(title === "Macro") {
        return "compendium-of-macro";
    }
    else if(title === "Playlist") {
        return "compendium-of-playlist";
    }
    else if(title === "RollTable") {
        return "compendium-of-rolltable";
    }
    else if(title === "Scene") {
        return "compendium-of-scene";
    }
}

function renderCompendiumTree() {
    // ".entity-type" is the class for the normal compendium packs tab, ".document-type" is for the compatibility with compendium folders module
    document.querySelectorAll("#compendium .entity-type, #compendium .document-type").forEach(et => {
        const documentClass = getDocumentClassFromTitle(et.innerHTML);
        if(documentClass == undefined) {
            console.error("Unindentified document class in compendium list:", et.innerHTML);
            return;
        }
        et.closest(".compendium-pack")?.querySelector(".pack-title")?.classList.add(documentClass);
    })
}

Hooks.once('init', () => {
    Hooks.on('renderCompendiumDirectory', () => {
        renderCompendiumTree();
    });
});
