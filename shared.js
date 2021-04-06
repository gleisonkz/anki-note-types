var HTML = {
  get: (elementSelector) => {
    return document.querySelector(elementSelector);
  },
};

Element.prototype.formatPipe = function () {
  this.innerHTML = this.innerHTML
    .replace(/(@)([A-Z]\w+)/g, `<span class="symbols-color">$1</span><span class="class-color">$2</span>`)
    .replace(/&nbsp;/g, " ");
  return this;
};

Element.prototype.formatCSSProperty = function () {
  this.innerHTML = this.innerHTML
    .replace(
      /([\w-]+)(: )([\w]+)/g,
      `<span class="attribute-color-css">$1</span><span class="symbols-color">$2</span><span class="string-color">$3</span>`
    )
    .replace(/&nbsp;/g, " ");
  return this;
};

(function showDescriptionCardType() {
  const cardTypeID = `{{info-Queue:}}`;
  const infoQueueElement = HTML.get("#infoQueue");
  const cardTypeById = {};
  const cardTypeByText = {
    new: 0,
    learning: 1,
    review: 2,
    reLearning: 3,
  };
  for (let prop in cardTypeByText) {
    cardTypeById[cardTypeByText[prop]] = prop;
  }
  infoQueueElement.innerText = cardTypeById[cardTypeID];
})();

function toggle(string) {
  var visibility = {
    true: {
      state: "visible",
      text: "Hide Extra",
    },
    false: {
      state: "hidden",
      text: "Show Extra",
    },
    isHidden: function (element) {
      return element.className === "hidden" ? true : false;
    },
    apply: function (toggleButton, elementToToggle) {
      var hidden = this.isHidden(elementToToggle);
      var stateHandler = this[hidden];
      toggleButton.innerText = stateHandler.text;
      elementToToggle.className = stateHandler.state;
    },
  };
  visibility.apply(tipButton, tipField);
}

function replaceStringAndAddClass(...elementsID) {
  const replaceStringAndAddClass = [
    { pattern: /(?<class>\w+)[.]\w+[.]\w+[(][)]/g, groupName: "class", className: "class-color" },
    { pattern: /(?<fix>\w+)[.]\w+[(][)]/g, groupName: "fix", className: "const-color" },
    { pattern: /(?<function>\w+)[(][)]/g, groupName: "function", className: "function-color" },
    { pattern: /(?<symbol>\?)/g, groupName: "symbol", className: "symbols-color" },
    { pattern: /(?<symbol>\!)/g, groupName: "symbol", className: "symbols-color" },
    { pattern: /(?<symbol>\()/g, groupName: "symbol", className: "symbols-color" },
    { pattern: /(?<symbol>\))/g, groupName: "symbol", className: "symbols-color" },
  ];

  function replace(textElement, matches) {
    matches.forEach((c) => {
      var matches = [...textElement.matchAll(c.pattern)];
      matches.forEach((match) => {
        var value = match.groups[c.groupName];
        textElement = textElement.replace(value, `<span class="${c.className}">${value}</span>`);
      });
    });
    return textElement;
  }

  elementsID.forEach((elementID) => {
    var element = document.getElementById(elementID);
    var textElement = element.innerHTML.trim();
    textElement = replace(textElement, replaceStringAndAddClass);
    element.innerHTML = textElement;
  });
}
