const deckName = "🏳️ General::👅 Languages::👅 English::Glossika English - US Glossika English - US"
const subDeckName = "I+1PHRASES";
const phrase = "Have you ever been in the hospital?";
const target = "hospital";
const translation = "Você já esteve no hospital?";


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
        newValue: target
    },
    {
        searchValue: "{{Translation}}",
        newValue: translation
    },
]

const replaceFields = (searchValue) => {
    replacementElements.forEach(c => {
        searchValue =  searchValue.replace(c.searchValue, c.newValue)
    })
    return searchValue;
}