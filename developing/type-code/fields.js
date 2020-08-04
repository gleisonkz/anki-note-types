const deckName = "🏳️ GENERAL::👨‍💻 DEVELOPMENT::🎨 FRONT-END::🟨 JAVASCRIPT";
const subDeckName = "JAVASCRIPT";
const question = "Adicione a classe color-red ao elemento abaixo utilizando property-binding:";
const answer = "um array vazio.";
const defaultValue = "<p>Texto com a cor vermelha</p>";

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
        searchValue: "{{Question}}",
        newValue: question
    },
    {
        searchValue: "{{Answer}}",
        newValue: answer
    },
    {
        searchValue: "{{DefaultValue}}",
        newValue: defaultValue
    }
]

const replaceFields = (searchValue) => {
    replacementElements.forEach(c => {
        searchValue = searchValue.replace(c.searchValue, c.newValue)
    })
    return searchValue;
}