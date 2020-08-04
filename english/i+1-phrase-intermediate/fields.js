const deckName = "🏳️ GENERAL::👅 LANGUAGES::👅 ENGLISH::I+1PHRASES"
const subDeckName = "I+1PHRASES";
const phrase = "She jumped over the wall.";
const newWord = "over";
const ipa = "ˈoʊ.vɚ";
const meaning = "across from one side to the other, especially by going up and then down.";
const classWord = "Preposition";
const img = `<img src="img/jump-over.png">`
const translatedWord = "por cima";

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
        searchValue: "{{Phrase}}",
        newValue: phrase
    },
    {
        searchValue: "{{NewWord}}",
        newValue: newWord
    },
    {
        searchValue: "{{TranslatedWord}}",
        newValue: translatedWord
    },
    {
        searchValue: "{{IPA}}",
        newValue: ipa
    },
    {
        searchValue: "{{Class}}",
        newValue: classWord
    },
    {
        searchValue: "{{#Class}}",
        newValue: ''
    },
    {
        searchValue: "{{/Class}}",
        newValue: ''
    },
    {
        searchValue: "{{Meaning}}",
        newValue: meaning
    },
    {
        searchValue: "{{#Meaning}}",
        newValue: ''
    },
    {
        searchValue: "{{/Meaning}}",
        newValue: ''
    },
    {
        searchValue: "{{Image}}",
        newValue: img
    },
    {
        searchValue: "{{#Image}}",
        newValue: ''
    },
    {
        searchValue: "{{/Image}}",
        newValue: ''
    },
]

const replaceFields = (searchValue) => {
    replacementElements.forEach(c => {
        searchValue =  searchValue.replace(c.searchValue, c.newValue)
    })
    return searchValue;
}