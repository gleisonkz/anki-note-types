const deckName = "🏳️ GENERAL::👨‍💻 DEVELOPMENT::🎨 FRONT-END::🟨 JAVASCRIPT";
const subDeckName = "JAVASCRIPT";
const question = "Em quantas categorias são divididas os componentes do Angular Material?";
const answer = "um array vazio.";
const extra = "Teste de extra";
const image = "";
const tip = "";

const replacementElements = [
  {
    searchValue: "{{Deck}}",
    newValue: deckName,
  },
  {
    searchValue: "{{Subdeck}}",
    newValue: subDeckName,
  },
  {
    searchValue: "{{Question}}",
    newValue: question,
  },
  {
    searchValue: "{{Answer}}",
    newValue: answer,
  },
  {
    searchValue: "{{Extra}}",
    newValue: extra,
  },
  {
    searchValue: "{{#Extra}}",
    newValue: "",
  },
  {
    searchValue: "{{/Extra}}",
    newValue: "",
  },
  {
    searchValue: "{{#Tip}}",
    newValue: "",
  },
  {
    searchValue: "{{/Tip}}",
    newValue: "",
  },
];

const replaceFields = (searchValue) => {
  replacementElements.forEach((c) => {
    searchValue = searchValue.replace(c.searchValue, c.newValue);
  });
  return searchValue;
};
