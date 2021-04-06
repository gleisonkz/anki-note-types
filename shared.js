var html = {
  get: (elementSelector) => {
    return document.querySelector(elementSelector);
  },
};

Element.prototype.formatPipe = function () {
  this.innerHTML = this.innerHTML.replace(
    /(@)([A-Z]\w+)/g,
    `<span class="symbols-color">$1</span><span class="class-color">$2</span>`
  );
  return this;
};

Element.prototype.formatCSSProperty = function () {
  this.innerHTML = this.innerHTML.replace(
    /([\w-]+)(: )([\w]+)/g,
    `<span class="attribute-color-css">$1</span><span class="symbols-color">$2</span><span class="string-color">$3</span>`
  );
  return this;
};

Element.prototype.formatParameters = function () {
  const regex = /(?<parameter>[^:]*): (?<type>[^-]*)- \[(?<description>.*?)\]/g;
  let elementHTML = this.innerHTML.replace(/&nbsp;/g, " ");
  const result = [...elementHTML.matchAll(regex)].map((item) => ({
    element: `<span>
                <span class="attributeColorCSS">${item.groups.parameter}</span>: 
                <span class="classColor">${item.groups.type}</span> - 
                <span class="tagGrayColor">${item.groups.description}</span>
                </span>`,

    fullMatch: item["0"],
  }));

  result.forEach((c) => {
    elementHTML = elementHTML.replace(c.fullMatch, c.element);
  });

  this.innerHTML = elementHTML;
  return this;
};

Element.prototype.formatKeyValueProperty = function () {
  const regex = /(?<key>[\w-]+): (?<value>[\w-]+);/g;

  let elementHTML = this.innerHTML.replace(/&nbsp;/g, " ");
  const result = [...elementHTML.matchAll(regex)].map((item) => ({
    element: `<span><span class="attributeColorCSS">${item.groups.key}</span>: <span class="stringColor">${item.groups.value}</span>;</span>`,
    fullMatch: item["0"],
  }));
  result.forEach((c) => {
    elementHTML = elementHTML.replace(c.fullMatch, c.element);
  });
  this.innerHTML = elementHTML;
  return this;
};

Element.prototype.formatPascalCase = function () {
  this.innerHTML = this.innerHTML.replace(
    /[A-Z]([A-Z0-9]*[a-z][a-z0-9]*[A-Z]|[a-z0-9]*[A-Z][A-Z0-9]*[a-z])[A-Za-z0-9]*/g,
    `<span class="class-color">$&</span>`
  );
  return this;
};

function showDescriptionCardType() {
  const cardTypeID = `{{info-Queue:}}`;
  const infoQueueElement = html.get("#infoQueue");
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
}

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

var UI = {
  renderHeader(selector = "header") {
    const $container = html.get(selector);
    $container.innerHTML = `
    <div>
        <p class="deck-tree">{{Deck}}</p>
        <p class="sub-deck-name">{{Subdeck}}</p>
        {{#Link}}
        <p class="sub-deck-name">Links :{{Link}}</p>
        {{/Link}}
    </div>
    `;
  },
};
