const deckName = "🏳️ GENERAL::👨‍💻 DEVELOPMENT::🎨 FRONT-END::🟨 JAVASCRIPT";
const subDeckName = "JAVASCRIPT";
const question = "Qual o valor retornado da função Array.prototype.filter() quando nenhum do elementos atende a condição passada?";
const answer = "um array vazio.";
const extra = "";
const image = "";
const tip = "";

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
]

const replaceFields = (searchValue) => {
    replacementElements.forEach(c => {
        searchValue = searchValue.replace(c.searchValue, c.newValue)
    })
    return searchValue;
}