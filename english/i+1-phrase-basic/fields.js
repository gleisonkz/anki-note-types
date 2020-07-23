const deckName = "🏳️ GENERAL::👅 LANGUAGES::👅 ENGLISH::I+1PHRASES"
const subDeckName = "I+1PHRASES";
const phrase = "She gave the rope a yank.";
const newWord = "yank";
const ipa = "jæŋk";
const meaning = "a quick hard pull.";
const classWord = "Noun";
const translation = "Ela deu um puxão na corda.";
const translatedWord = "puxão";
const img = `<img src="img/paste-3a4aa215da7dc6be29915672e71c716fee3bf8bf.png">`

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
        searchValue: "{{IPA}}",
        newValue: ipa
    },
    {
        searchValue: "{{Class}}",
        newValue: classWord
    },
    {
        searchValue: "{{Meaning}}",
        newValue: meaning
    },
    {
        searchValue: "{{Translation}}",
        newValue: translation
    },
    {
        searchValue: "{{Image}}",
        newValue: img
    },
]

const replaceFields = (searchValue) => {
    replacementElements.forEach(c => {
        searchValue =  searchValue.replace(c.searchValue, c.newValue)
    })
    return searchValue;
}