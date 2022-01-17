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
    document.querySelectorAll("#compendium .compendium-type h3").forEach(h3 => {
        const documentClass = getDocumentClassFromTitle(h3.innerHTML);
        if(documentClass == undefined) {
            console.error("Unindentified document class in compendium list:", h3.innerHTML);
            return;
        }
        h3.parentElement?.querySelector(".compendium-list")?.classList.add(documentClass);
    });
}

Hooks.once('init', () => {
    Hooks.on('renderCompendiumDirectory', () => {
        renderCompendiumTree();
    });
});
