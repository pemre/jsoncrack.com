export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

// Example taken from https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
const sampleJson = Object.freeze(  {
  "_type": "MENU_CARD",
  "_id": "231740",
  "serviceType": "delivery",
  "categories": 5,
  "_CATEGORY_|_Simple (1 variation)": [
    {
      "_type": "ITEM",
      "name": "🍎 Apple",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 0.5
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🍊 Orange",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 0.75
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🍋 Lemon",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 1
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🍓 Strawberry",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 1.25
        }
      ]
    }
  ],
  "_CATEGORY_|_Simple (1+ variation)": [
    {
      "_type": "ITEM",
      "name": "🍅 Tomato",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🟥 Red tomato",
          "basePrice": 0.5
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🟨 Yellow tomato",
          "basePrice": 0.75
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🟩 Green tomato",
          "basePrice": 1
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🥕 Carrot",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "Carrot small",
          "basePrice": 1
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "Carrot",
          "basePrice": 1.15
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "Carrot XL",
          "basePrice": 1.45
        }
      ]
    }
  ],
  "_CATEGORY_|_Complex (1 variation + modifiers)": [
    {
      "_type": "ITEM",
      "name": "🌭 Hot dog",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 4,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.1, rem: 0)",
                "🧡 Mustard (add: 0.3, rem: 0)",
                "💚 Wasabi (add: 0.5, rem: 0)"
              ]
            }
          ]
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🍗 Chicken legs",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 5,
          "modifierGroups": [
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.7, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.9, rem: 0)",
                "🟠 Sauce - Duck (add: 1.1, rem: 0)"
              ]
            }
          ]
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🥔 Kumpir",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 6,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.1, rem: 0)",
                "🧡 Mustard (add: 0.3, rem: 0)",
                "💚 Wasabi (add: 0.5, rem: 0)"
              ]
            },
            {
              "✅ Base — (required/unlimited) (min 2, max -, max each -)": [
                "🧈 Tereyağı (Butter) (add: 0.1, rem: 0)",
                "🧀 Kaşar (Cheese) (add: 0.3, rem: 0)",
                "🧄 Garlic (add: 0.03, rem: 0)",
                "🌿 Parsley (add: 0.01, rem: 0)"
              ]
            },
            {
              "✅ Toppings — (optional/limited) (min -, max 4, max each -)": [
                "🫒 Zeytin (Olive) (add: 0.5, rem: 0)",
                "🥒 Turşu (Pickle) (add: 0.3, rem: 0)",
                "🌽 Mısır (Corn) (add: 0.05, rem: 0)",
                "🌾 Kısır (Turkish bulgur salad) (add: 0.5, rem: 0)"
              ]
            },
            {
              "✅ Toppings extra — (optional/limited) (min -, max -, max each 2)": [
                "🌾 Kısır (Turkish bulgur salad) (add: 0.5, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.9, rem: 0)",
                "💛 Mayonnaise (add: 0.1, rem: 0)",
                "🧅 Onion (add: 0.05, rem: 0)"
              ]
            },
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.7, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.9, rem: 0)",
                "🟠 Sauce - Duck (add: 1.1, rem: 0)"
              ]
            }
          ]
        }
      ]
    }
  ],
  "_CATEGORY_|_Complex (1+ variation + modifiers)": [
    {
      "_type": "ITEM",
      "name": "🌭🍗🥔 Previous items as variation (same modifier groups)",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🌭 Hot dog",
          "basePrice": 5,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.1, rem: 0)",
                "🧡 Mustard (add: 0.1, rem: 0)",
                "💚 Wasabi (add: 0.1, rem: 0)"
              ]
            },
            {
              "✅ Base — (required/unlimited) (min 2, max -, max each -)": [
                "🧈 Tereyağı (Butter) (add: 0.1, rem: 0)",
                "🧀 Kaşar (Cheese) (add: 0.1, rem: 0)",
                "🧄 Garlic (add: 0.1, rem: 0)",
                "🌿 Parsley (add: 0.1, rem: 0)"
              ]
            },
            {
              "✅ Toppings — (optional/limited) (min -, max 4, max each -)": [
                "🫒 Zeytin (Olive) (add: 0.1, rem: 0)",
                "🥒 Turşu (Pickle) (add: 0.1, rem: 0)",
                "🌽 Mısır (Corn) (add: 0.1, rem: 0)",
                "🌾 Kısır (Turkish bulgur salad) (add: 0.1, rem: 0)"
              ]
            },
            {
              "✅ Toppings extra — (optional/limited) (min -, max -, max each 2)": [
                "🌾 Kısır (Turkish bulgur salad) (add: 0.1, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.1, rem: 0)",
                "💛 Mayonnaise (add: 0.1, rem: 0)",
                "🧅 Onion (add: 0.1, rem: 0)"
              ]
            },
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.1, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.1, rem: 0)",
                "🟠 Sauce - Duck (add: 0.1, rem: 0)"
              ]
            },
            {
              "➕ Extras — (required/limited) (min 1, max 1, max each 1)": [
                "🌶️ Hot sauce (add: 0.2, rem: 0)",
                "🌿 Mixed herbs (add: 0.2, rem: 0)",
                "🫒 Olive oil (add: 0.2, rem: 0)"
              ]
            }
          ]
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🍗 Chicken legs",
          "basePrice": 6,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.2, rem: 0)",
                "🧡 Mustard (add: 0.2, rem: 0)",
                "💚 Wasabi (add: 0.2, rem: 0)"
              ]
            },
            {
              "✅ Base — (required/unlimited) (min 2, max -, max each -)": [
                "🧈 Tereyağı (Butter) (add: 0.2, rem: 0)",
                "🧀 Kaşar (Cheese) (add: 0.2, rem: 0)",
                "🧄 Garlic (add: 0.2, rem: 0)",
                "🌿 Parsley (add: 0.2, rem: 0)"
              ]
            },
            {
              "✅ Toppings — (optional/limited) (min -, max 4, max each -)": [
                "🫒 Zeytin (Olive) (add: 0.2, rem: 0)",
                "🥒 Turşu (Pickle) (add: 0.2, rem: 0)",
                "🌽 Mısır (Corn) (add: 0.2, rem: 0)",
                "🌾 Kısır (Turkish bulgur salad) (add: 0.2, rem: 0)"
              ]
            },
            {
              "✅ Toppings extra — (optional/limited) (min -, max -, max each 2)": [
                "🌾 Kısır (Turkish bulgur salad) (add: 0.2, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.2, rem: 0)",
                "💛 Mayonnaise (add: 0.2, rem: 0)",
                "🧅 Onion (add: 0.2, rem: 0)"
              ]
            },
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.2, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.2, rem: 0)",
                "🟠 Sauce - Duck (add: 0.2, rem: 0)"
              ]
            },
            {
              "➕ Extras — (required/limited) (min 1, max 1, max each 1)": [
                "🌶️ Hot sauce (add: 0.1, rem: 0)",
                "🌿 Mixed herbs (add: 0.1, rem: 0)",
                "🫒 Olive oil (add: 0.1, rem: 0)"
              ]
            }
          ]
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🥔 Kumpir",
          "basePrice": 7,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.3, rem: 0)",
                "🧡 Mustard (add: 0.3, rem: 0)",
                "💚 Wasabi (add: 0.3, rem: 0)"
              ]
            },
            {
              "✅ Base — (required/unlimited) (min 2, max -, max each -)": [
                "🧈 Tereyağı (Butter) (add: 0.3, rem: 0)",
                "🧀 Kaşar (Cheese) (add: 0.3, rem: 0)",
                "🧄 Garlic (add: 0.3, rem: 0)",
                "🌿 Parsley (add: 0.3, rem: 0)"
              ]
            },
            {
              "✅ Toppings — (optional/limited) (min -, max 4, max each -)": [
                "🫒 Zeytin (Olive) (add: 0.3, rem: 0)",
                "🥒 Turşu (Pickle) (add: 0.3, rem: 0)",
                "🌽 Mısır (Corn) (add: 0.3, rem: 0)",
                "🌾 Kısır (Turkish bulgur salad) (add: 0.3, rem: 0)"
              ]
            },
            {
              "✅ Toppings extra — (optional/limited) (min -, max -, max each 2)": [
                "🌾 Kısır (Turkish bulgur salad) (add: 0.3, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.3, rem: 0)",
                "💛 Mayonnaise (add: 0.3, rem: 0)",
                "🧅 Onion (add: 0.3, rem: 0)"
              ]
            },
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.3, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.3, rem: 0)",
                "🟠 Sauce - Duck (add: 0.3, rem: 0)"
              ]
            },
            {
              "➕ Extras — (required/limited) (min 1, max 1, max each 1)": [
                "🌶️ Hot sauce (add: 0.3, rem: 0)",
                "🌿 Mixed herbs (add: 0.3, rem: 0)",
                "🫒 Olive oil (add: 0.3, rem: 0)"
              ]
            }
          ]
        }
      ]
    },
    {
      "_type": "ITEM",
      "name": "🌭🍗🥔 Previous items as variation (unique modifier groups)",
      "type": "menuitem",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🌭 Hot dog",
          "basePrice": 4,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.1, rem: 0)",
                "🧡 Mustard (add: 0.1, rem: 0)",
                "💚 Wasabi (add: 0.1, rem: 0)"
              ]
            }
          ]
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🍗 Chicken legs",
          "basePrice": 5,
          "modifierGroups": [
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.2, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.2, rem: 0)",
                "🟠 Sauce - Duck (add: 0.2, rem: 0)"
              ]
            }
          ]
        },
        {
          "_type": "VARIATION",
          "type": "Variation",
          "name": "🥔 Kumpir",
          "basePrice": 6,
          "modifierGroups": [
            {
              "❤️ Classic sauces — (required/limited) (min 3, max 5, max each 2)": [
                "💛 Mayonnaise (add: 0.3, rem: 0)",
                "🧡 Mustard (add: 0.3, rem: 0)",
                "💚 Wasabi (add: 0.3, rem: 0)"
              ]
            },
            {
              "🟣 Colorful sauces — (optional/unlimited) (min -, max -, max each -)": [
                "🟢 Sauce - Salsa verde (add: 0.3, rem: 0)",
                "🔴 Sauce - Ketchup (add: 0.3, rem: 0)",
                "🟠 Sauce - Duck (add: 0.3, rem: 0)"
              ]
            },
            {
              "✅ Base — (required/unlimited) (min 2, max -, max each -)": [
                "🧈 Tereyağı (Butter) (add: 0.3, rem: 0)",
                "🧀 Kaşar (Cheese) (add: 0.3, rem: 0)",
                "🧄 Garlic (add: 0.3, rem: 0)",
                "🌿 Parsley (add: 0.3, rem: 0)"
              ]
            },
            {
              "✅ Toppings — (optional/limited) (min -, max 4, max each -)": [
                "🫒 Zeytin (Olive) (add: 0.3, rem: 0)",
                "🥒 Turşu (Pickle) (add: 0.3, rem: 0)",
                "🌽 Mısır (Corn) (add: 0.3, rem: 0)",
                "🌾 Kısır (Turkish bulgur salad) (add: 0.3, rem: 0)"
              ]
            },
            {
              "➕ Extras — (required/limited) (min 1, max 1, max each 1)": [
                "🌶️ Hot sauce (add: 0.3, rem: 0)",
                "🌿 Mixed herbs (add: 0.3, rem: 0)",
                "🫒 Olive oil (add: 0.3, rem: 0)"
              ]
            }
          ]
        }
      ]
    }
  ],
  "_CATEGORY_|_Deals": [
    {
      "_type": "DEAL_ITEM",
      "name": "🐺 I'm hungry deal",
      "type": "deal",
      "variations": [
        {
          "_type": "VARIATION",
          "type": "NoVariation",
          "basePrice": 3,
          "dealGroupsIds": [
            {
              "_type": "DEAL_GROUP",
              "name": "Some fruits",
              "choose": 1,
              "dealItemVariations": [
                {
                  "_type": "ITEM",
                  "name": "🍎 Apple",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 0.5,
                  "additionPrice": 1
                },
                {
                  "_type": "ITEM",
                  "name": "🍊 Orange",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 0.75,
                  "additionPrice": 2
                },
                {
                  "_type": "ITEM",
                  "name": "🍋 Lemon",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 1,
                  "additionPrice": 3
                }
              ]
            },
            {
              "_type": "DEAL_GROUP",
              "name": "Stay healthy",
              "choose": 1,
              "dealItemVariations": [
                {
                  "_type": "ITEM",
                  "name": "🍓 Strawberry",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 1.25,
                  "additionPrice": 10
                },
                {
                  "_type": "VARIATION",
                  "name": "🍅 Tomato > 🟥 Red tomato",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 0.5,
                  "additionPrice": 11
                },
                {
                  "_type": "VARIATION",
                  "name": "🍅 Tomato > 🟩 Green tomato",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1,
                  "additionPrice": 12
                },
                {
                  "_type": "VARIATION",
                  "name": "🍅 Tomato > 🟨 Yellow tomato",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 0.75,
                  "additionPrice": 13
                },
                {
                  "_type": "VARIATION",
                  "name": "🥕 Carrot > Carrot small",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1
                },
                {
                  "_type": "VARIATION",
                  "name": "🥕 Carrot > Carrot XL",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1.45
                }
              ]
            },
            {
              "_type": "DEAL_GROUP",
              "name": "Same things again",
              "choose": 3,
              "dealItemVariations": [
                {
                  "_type": "VARIATION",
                  "name": "🍅 Tomato > 🟥 Red tomato",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 0.5,
                  "additionPrice": 0.1
                },
                {
                  "_type": "VARIATION",
                  "name": "🍅 Tomato > 🟩 Green tomato",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1,
                  "additionPrice": 0.3
                },
                {
                  "_type": "VARIATION",
                  "name": "🍅 Tomato > 🟨 Yellow tomato",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 0.75,
                  "additionPrice": 0.2
                },
                {
                  "_type": "ITEM",
                  "name": "🍊 Orange",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 0.75,
                  "additionPrice": 0.4
                },
                {
                  "_type": "ITEM",
                  "name": "🍋 Lemon",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 1,
                  "additionPrice": 0.5
                },
                {
                  "_type": "ITEM",
                  "name": "🍎 Apple",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 0.5,
                  "additionPrice": 0.6
                },
                {
                  "_type": "ITEM",
                  "name": "🍓 Strawberry",
                  "type": "menuitem",
                  "variationType": "NoVariation",
                  "basePrice": 1.25,
                  "additionPrice": 0.7
                },
                {
                  "_type": "VARIATION",
                  "name": "🥕 Carrot > Carrot small",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1,
                  "additionPrice": 0.8
                },
                {
                  "_type": "VARIATION",
                  "name": "🥕 Carrot > Carrot XL",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1.45,
                  "additionPrice": 1
                },
                {
                  "_type": "VARIATION",
                  "name": "🥕 Carrot > Carrot",
                  "type": "menuitem",
                  "variationType": "Variation",
                  "basePrice": 1.15,
                  "additionPrice": 0.9
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});

export const defaultJson = JSON.stringify(sampleJson, null, 2);
