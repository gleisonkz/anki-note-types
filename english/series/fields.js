const deckName = "🏳️ GENERAL::👅 LANGUAGES::👅 ENGLISH::SERIES ::AVATAR THE LAST AIRBENDER::SEASON 1::02 - THE AVATAR RETURNS";
const subDeckName = "02 - THE AVATAR RETURNS";
const expression = "But I believe Aang can save the world.";
const translation = "Mas eu acredito que o Aang pode salvar o mundo!";
const snapshot = `<img src="02_-_The_Avatar_Returns_1_0.00.40.601.jpg">`;
const infoQueue = 2;

const replacementElements = [
    {
        searchValue: "{{Deck}}",
        newValue: deckName
    },
    {
        searchValue: "{{Subdeck}}",
        newValue: subDeckName
    },
    {
        searchValue: "{{Expression}}",
        newValue: expression
    },
    {
        searchValue: "{{Translation}}",
        newValue: translation
    },
    {
        searchValue: "{{info-Queue:}}",
        newValue: infoQueue
    },
    {
        searchValue: "{{Snapshot}}",
        newValue: snapshot
    },
    {
        searchValue: "{{#Translation}}",
        newValue: ''
    },
    {
        searchValue: "{{/Translation}}",
        newValue: ''
    },
]

const replaceFields = (searchValue) => {
    replacementElements.forEach(c => {
        searchValue = searchValue.replace(c.searchValue, c.newValue)
    })
    return searchValue;
}