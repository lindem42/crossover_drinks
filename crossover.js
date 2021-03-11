var drinks = {
  "moscow mule": {
      price: 7,
      season: "year-round",
      ingredients: ["rocky's ginger beer", "absolut vodka", "lime juice"],
      garnish: ["lime"],
      glass:"mule mug",
      instructions: "pour 1oz absolut vodka. substitute vodka as ordered. add 3/4oz fresh squeezed lime juice and top off with rocky's ginger beer. garnish with a slice of lime."
  },
  "bridgewater": {
    price: 8,
    season: "year-round",
    ingredients: ["banana rum", "mango rum", "peach rum", "strawberry rum",
    "dark rum", "grenadine", "pineapple juice", "cranberry juice"],
    garnish: ["pineapple", "orange", "cherries", "umbrella"],
    glass: "26oz mug",
    instructions: "pour 1oz banana, mango, peach, strawberry, and dark rum. add a splash of grenadine and finish with equal parts pineapple and cranberry juice. garnish with a pineapple slice, orange slice, umbrella, and cherries."
  },
  "tom collins": {
    price: 4.5,
    season: "year-round",
    ingredients: ["burnett's gin", "lemon juice", "simple syrup", "soda water"],
    garnish: ["lemon"],
    glass: "rocks glass",
    instructions: "pour 1.5oz burnett's gin, 1oz fresh squeezed lemon juice, 1/2oz simple syrup, and top off with soda water. garnish with a lemon slice."
  },
  "crossover margarita": {
    price: 10,
    season: "year-round",
    ingredients: ["patron silver tequila", "lime juice", "juarez triple sec", "cranberry juice"],
    garnish: ["lime"],
    glass: "26oz mug",
    instructions: "pour 2oz patron silver tequila, 1oz fresh squeezed lime juice, 1oz juarez triple sec, and top off with cranberry juice. garnish with a slice of lime and a salt or sugar rim as ordered."
  },
  "fresh margarita": {
    price: 8,
    season: "year-round",
    ingredients: ["tres agaves tequila", "lime juice", "simple syrup", "juarez triple sec", "agave nectar"],
    garnish: ["salt or sugar rim", "lime", "orange"],
    glass: "16oz or 21oz margarita glass",
    instructions: "pour 2oz tres agaves tequila for 16oz margarita and 3oz for 21oz margarita. substitute tequila as ordered. add 2oz simple syrup, 1oz juarez triple sec, and a splash of agave nectar. add flavor as ordered. shake well. garnish with a slice of lime or orange (if flavored) and a salt or sugar rim as ordered."
  },
  "pina colada": {
    price: 8,
    season: "year-round",
    ingredients: ["cruzan pineapple rum", "cruzan coconut rum", "pineapple juice", "pina colada mix"],
    garnish: ["pineapple", "orange", "umbrella", "cherries"],
    glass: "hurricane glass",
    instructions: "pour 1oz cruzan pineapple rum, 1oz cruzan coconut rum, a splash of pineapple juice, and 4oz of pina colada mix into blender. add flavor as ordered. blend and garnish with a pineapple slice, orange slice, an umbrella, and cherries."
  },
  "daiquiri": {
    price: 5.5,
    season: "year-round",
    ingredients: ["cruzan light rum", "cruzan flavored rum", "orange juice", "flavored puree", "sprite"],
    garnish: ["orange", "sugar rim"],
    glass: "hurricane glass",
    instructions: "pour 2oz cruzan light rum or cruzan flavored rum as ordered. add a splash of orange juice, 3oz of flavored puree, and a splash of sprite. blend and garnish with an orange slice and sugar rim."
  },
  "mojito": {
    price: 6,
    season: "year-round",
    ingredients: ["bacardi superior", "lime juice", "mint leaves", "simple syrup", "soda water", "sprite"],
    garnish: ["lime"],
    glass: "pint glass",
    instructions: "pour 2oz bacardi superior, 1/4oz fresh squeezed lime juice, 3/4oz simple syrup, and 3 squeezed limes. leave limes in shaker. muddle all together. pour into pint glass and top off with equal parts soda water and sprite. garnish with slice of lime."
  },
  "mimosa": {
    price: 5,
    season: "year-round",
    ingredients: ["champagne", "orange juice"],
    garnish: ["orange"],
    glass: "wine glass",
    instructions: "pour equal parts champagne and orange juice in wine glass. garnish with an orange slice."
  },
  "mai tai": {
    price:6,
    season: "year-round",
    ingredients: ["cruzan dark rum", "cruzan white rum", "amaretto", "grenadine", "pineapple juice", "orange juice"],
    garnish: ["pineapple", "orange", "umbrella", "cherries"],
    glass: "pint glass",
    instructions: ["pour 1oz cruzan dark rum and 1oz cruzan dark rum. add 1/2oz amaretto, a splash of grenadine, and top off with equal parts pineapple and orange juice. garnish with a pineapple slice, orange slice, umbrella, and cherries."]
  },
  "old fashioned": {
    price:0,
    season: "year-round",
    ingredients: ["brandy", "whiskey", "sugar", "cherries", "orange", "bitters", "sprite", "squirt"],
    garnish: ["cherries", "olives"],
    glass: "rocks glass",
    instructions: "pour 2oz of brandy or whiskey as ordered. add one packet of sugar, 2 cherries, a peeled orange slice, three dashes of bitters, and muddle all together. top off with sprite (sweet) or squirt (sour). garnish with cherries or olives."
  },
  "cosmopolitan": {
    price:9,
    season: "year-round",
    ingredients: ["triple sec", "cranberry juice", "lime", "vodka citron"],
    garnish: ["lemon rind"],
    glass: "martini glass",
    instructions: "pour 1/2oz triple sec and 1oz cranberry juice. muddle 3 lime wedges and add 2.5oz vodka citron. shake all together and strain into martini glass. garnish with a twist of lemon rind."
  },
  "manhattan": {
    price:0,
    season: "year-round",
    ingredients: ["whiskey", "bourbon", "sweet vermouth", "bitters"],
    garnish: ["cherries", "olives"],
    glass: "rocks glass",
    instructions: "pour 2oz of whiskey or bourbon as ordered. add 3/4oz sweet vermouth and 2 or 3 dashes of bitters. garnish with cherries or olives as ordered."
  },
  "long island": {
    price:8,
    season: "year-round",
    ingredients: ["burnett's vodka", "burnett's gin", "cruzan rum", "juarez triple sec", "deep eddy's sweet tea vodka", "sweet n sour", "coke"],
    garnish: ["lemon", "lime"],
    glass: "26oz mug",
    instructions: "pour 1oz burnett's vodka, 1oz burnett's gin, 1oz cruzan rum, and 1 oz juarez triple sec. add 2oz deep eddy's sweet tea vodka, a splash of sweet n sour, and top off with coke. garnish with a slice of lemon and lime."
  },
  "top shelf long island": {
    price:11,
    season: "year-round",
    ingredients: ["tito's vodka", "hendrick's gin", "bacardi white rum", "cointreau", "deep eddy's sweet tea vodka", "sweet n sour", "coke"],
    garnish: ["lemon", "lime"],
    glass: "26oz mug",
    instructions: "pour 1oz tito's vodka, 1oz hendrick's gin, 1oz bacardi white rum, and 1 oz cointreau. add 2oz deep eddy's sweet tea vodka, a splash of sweet n sour, and top off with coke. garnish with a slice of lemon and lime."
  },
  "sunkiss": {
    price:0,
    season: "summer",
    ingredients: ["cruzan mango rum", "dekyuper peachtree schnapps", "agave nectar", "grenadine"],
    garnish: ["orange"],
    glass: "martini glass",
    instructions: "pour 2oz cruzan mango rum, 2oz dekyuper peachtree schnapps, 1oz agave nectar, and 1oz dry vermouth. add a splash of grenadine and shake all together. strain into martini glass and float whole orange slice inside."
  },
  "fuzzy navel": {
    price:0,
    season: "summer",
    ingredients: ["dekyuper peachtree schnapps", "orange juice"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 2oz dekyuper peachtree schnapps and top off with orange juice. garnish with a slice of orange."
  },
  "poisoned peach": {
    price:0,
    season: "summer",
    ingredients: ["white cruzan rum", "dekyuper peachtree schnapps", "blue curacao", "pineapple juice"],
    garnish: ["pineapple", "cherries"],
    glass: "pint glass",
    instructions: "pour blue caracao into pint glass. in a separate glass, pour 1oz white cruzan rum, 2oz dekyuper peachtree schnapps, and 3oz pineapple juice. shake well and pour into glass with blue curacao. garnish with a slice of pineapple and cherries."
  },
  "salted caramel white russian": {
    price:0,
    season:"?",
    ingredients: ["stoli salted karamel", "kahlua", "creamer"],
    garnish: ["salt rim", "caramel"],
    glass: "rocks glass",
    instructions: "pour 2oz stoli slated karamel, 1 oz kahlua, and add 3 creamers. garnish with a salted rim and drizzle caramel on top of ice."
  },
  "chocolate white russian": {
    price:0,
    season:"?",
    ingredients: ["burnett's vodka", "kahlua", "creme de cacao", "creamer"],
    garnish: ["chocolate"],
    glass: "rocks glass",
    instructions: "pour 2oz burnett's vodka, 1oz kahlua, and 1/2oz creme de cacao. add three creamers and drizzle chocolate on top of ice."
  },
  "voodoo juice": {
    price:0,
    season:"summer",
    ingredients: ["cruzan coconut rum", "cruzan pineapple rum", "cruzan banana rum", "cruzan citrus rum", "cruzan dark rum", "grenadine", "pineapple juice", "cranberry juice"],
    garnish: ["pineapple", "orange", "umbrella", "cherries"],
    glass: "26oz mug",
    instructions: "pour 1 oz of cruzan coconut, pineapple, banana, citrus, and dark rum. add a splash of grenadine and top off with equal parts pineapple and cranberry juice. garnish with a slice of pineapple and orange, an umbrella, and cherries."
  },
  "tropical rita": {
    price:0,
    season: "summer",
    ingredients: ["tres agaves tequila", "melon schnapps", "daily's margarita mix", "grenadine", "pineapple juice", "orange juice"],
    garnish: ["pineapple", "orange", "umbrella", "cherries"],
    glass: "21oz margarita glass",
    instructions: "pour 2oz tres agaves tequila, 1oz melon schapps, and 1oz daily's margarita mix. add a splash of grenadine and top off with equal parts pineapple and orange juice. garnish with a slice of pineapple and orange, an umbrella, and cherries."
  },
  "winter sangria swirl": {
    price:0,
    season: "winter",
    ingredients: ["red sangria", "frozen lime margarita"],
    garnish: ["lime"],
    glass: "16oz margarita glass",
    instructions: "fill glass with 1/4 red sangria and 3/4 frozen lime margarita. garnish with slice of lime."
  },
  "summer sangria swirl": {
    price:0,
    season: "summer",
    ingredients: ["white sangria", "frozen strawberry margarita"],
    garnish: ["orange"],
    glass: "16oz margarita glass",
    instructions: "fill glass with 1/4 white sangria and 3/4 frozen strawberry margarita. garnish with slice of orange."
  },
  "fuzzy dragon": {
    price:0,
    season: "?",
    ingredients: ["bacardi dragonberry", "cranberry juice", "sprite"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 2oz bacardi dragonberry and top off with equal parts cranberry juice and sprite. garnish with slice of orange."
  },
  "vitamin c brew": {
    price:0,
    season: "?",
    ingredients: ["southern comfort", "orange juice", "blue moon"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 1oz southern comfort and top off with equal parts orange juice and blue moon. garnish with slice of orange."
  },
  "tropical sunrise": {
    price:0,
    season: "summer",
    ingredients: ["tres agaves tequila", "melon schnapps", "orange juice", "grenadine"],
    garnish: ["pineapple", "umbrella"],
    glass: "pint glass",
    instructions: "pour 2oz tres agaves tequila and 1oz melon schnapps. top off with orange juice and add a splash of grenadine. garnish with a slice of pineapple and an umbrella."
  },
  "scooby snack shot": {
    price:0,
    season: "?",
    ingredients: ["malibu rum", "melon liqueur", "pineapple juice", "heavy cream"],
    garnish: ["n/a"],
    glass: "shot glass",
    instructions: "pour 1/2oz malibu rum, 1/2 os melon liqueur, 1/4oz pineapple juice, and 1/4oz heavy cream."
  },
  "wake the dead shooter": {
    price:0,
    season: "?",
    ingredients: ["patron xo cafe", "tres agaves tequila", "avion espresso"],
    garnish: ["n/a"],
    glass: "?",
    instructions: "pour 1oz patron xo cafe, 1oz tres agaves tequila, and 1 oz avion espresso."
  },
  "purple haze": {
    price:0,
    season: "?",
    ingredients: ["burnett's vodka", "chambord", "lemonade"],
    garnish: ["lemon"],
    glass: "pint glass",
    instructions: "pour 1.5oz burnett's vodka and 1oz chambord. top off with lemonade and garnish with slice of lemon."
  },
  "tequila sunset": {
    price: 0,
    season: "year-round",
    ingredients: ["mango puree", "tres agaves tequila", "captain morgan", "orange juice", "grenadine"],
    garnish: ["orange", "cherries"],
    glass: "pint glass",
    instructions: "pour 1oz mango puree, 1.5oz tres agaves tequila, 1/2oz captain morgan. top off with orange juice and a splash of grenadine. garnish with a slice of orange and cherries."
  },
  "cran-orange mule": {
    price: 0,
    season: "?",
    ingredients: ["deep eddy's orange vodka", "deep eddy's cranberry vodka", "cranberry juice", "orange juice", "simple syrup", "lime juice", "rocky's ginger beer"],
    garnish: ["orange", "lime"],
    glass: "mule mug",
    instructions: "pour 1oz of deep eddy's orange and cranberry vodka. add 1oz cranberry and orange juice, 3/4oz simple syrup and 3/4oz lime juice. top off with rocky's ginger beer and garnish with a slice of orange and lime."
  },
  "captain's mule": {
    price:0,
    season: "?",
    ingredients: ["captain morgan", "cranberry juice", "lime juice", "rocky's ginger beer"],
    garnish: ["lime"],
    glass: "mule mug",
    instructions: "pour 1.5oz captain morgan, 2oz cranberry juice, and 1/2oz fresh squeezed lime juice. top off with rocky's ginger beer and garnish with slice of lime."
  },
  "tropical mule": {
    price:0,
    season: "?",
    ingredients: ["cruzan strawberry rum", "cruzan banana rum", "cruzan pineapple rum", "pineapple juice", "orange juice", "rocky's ginger beer", "grenadine"],
    garnish: ["pineapple", "orange"],
    glass: "mule mug",
    instructions: "pour 1/2oz of cruzan strawberry, banana, and pineapple rum. add a splash of pineapple and orange juice. top off with rocky's ginger beer and a splash of grenadine. garnish with a slice of pineapple and orange."
  },
  "caramel mocha martini": {
    price:0,
    season: "winter",
    ingredients: ["smirnoff vanilla vodka", "bailey's irish cream", "stoli salted karamel", "kahlua", "creamer"],
    garnish: ["caramel", "whipped cream"],
    glass: "martini glass",
    instructions: "pour 1oz smirnoff vanilla vodka, 1oz bailey's irish cream, 1oz stoli salted karamel, and 1oz kahlua. add three creamers and shake with ice. drizzle martini glass with caramel and strain drink into glass. garnish with whipped cream."
  },
  "island de adios": {
    price:0,
    season: "?",
    ingredients: ["burnett's vodka", "cruzan rum", "burnett's gin", "tequila", "blue caracao", "sweet n sour", "sprite"],
    garnish: ["n/a"],
    glass: "26oz mug",
    instructions: "pour 1/2oz of burnett's vodka, cruzan rum, burnett's gin, tequila, and blue caracao. add 2oz sweet n sour and top off with sprite."
  },
  "sex on the grass": {
    price:0,
    season: "?",
    ingredients: ["burnett's vodka", "dekyuper peachtree schnapps", "southern comfort", "blue caracao", "melon schnapps", "orange juice"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 1oz burnett's vodka, 1oz dekyuper peachtree schnapps, 1/2oz southern comfort, 1/2oz blue curacao, and 1oz melon schnapps. top off with orange juice and garnish with a slice of orange."
  },
  "sex in the driveway": {
    price:0,
    season: "?",
    ingredients: ["blue caracao", "dekyuper peachtree schnapps", "burnett's vodka", "sprite"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 1oz blue curacao, 1oz dekyuper peachtree schnapps, and 2oz burnett's vodka. top off with sprite and garnish with slice of orange."
  },
  "irish car bomb": {
    price:0,
    season: "st. patrick's day",
    ingredients: ["guiness", "jameson", "bailey's irish cream"],
    garnish: ["n/a"],
    glass: ["rocks glass", "shot glass"],
    instructions: "fill rocks glass halfway with guiness. fill shot glass half with jameson and half with baileys."
  },
  "woo woo": {
    price:0,
    season: "?",
    ingredients: ["dekyuper peachtree schnapps", "burnett's vodka", "cranberry juice"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 1.5oz dekyuper peachtree schanpps and 1.5oz burnett's vodka. top off with cranberry juice and garnish with slice of orange."
  },
  "cactus juice": {
    price:10.50,
    season: "?",
    ingredients: ["dekyuper watermelon schnapps", "juarez triple sec", "malibu coconut rum", "lemonade"],
    garnish: ["orange"],
    glass: "pint glass",
    instructions: "pour 2oz dekyuper watermelon schnapps, 1/2oz juarez triple sec, and 1/2 oz of malibu coconut rum. top off with lemonade and garnish with slice of orange."
  }
};
var whiskey = {
  "jack daniels":{
    price:0,
    class: "whiskey"
  },
  "jack daniels single barrel":{
    price:0,
    class: "whiskey"
  },
  "gentleman jack":{
    price:0,
    class: "whiskey"
  },
  "jameson":{
    price:0,
    class: "whiskey"
  },
  "the knot":{
    price:0,
    class: "whiskey"
  },
  "crown royal":{
    price:0,
    class: "whiskey"
  },
  "southern comfort":{
    price:0,
    class: "whiskey"
  }
};
var scotch = {
  "balvenie": {
    price: 0,
    varieties: ["14 year"],
    class: "scotch"
  },
  "the macallan": {
    price: 0,
    varieties: ["18 year"],
    class: "scotch"
  },
  "johnnie walker": {
    price: 0,
    varieties: ["red", "black"],
    class: "scotch"
  },
  "dewars white label": {
    price: 0,
    varieties: ["n/a"],
    class: "scotch"
  },
  "glenfiddish": {
    price: 0,
    varieties: ["12 year"],
    class: "scotch"
  },
  "glenlivet": {
    price: 0,
    varieties: ["12 year", "14 year"],
    class: "scotch"
  }
};

var bourbon = {
  "woodword reserve":{
    price: 0,
    class: "bourbon"
  },
  "maker's mark":{
    price: 0,
    class: "bourbon"
  },
  "jim beam":{
    price: 0,
    class: "bourbon"
  },
  "knob creek":{
    price: 0,
    class: "bourbon"
  }
};

var brandy = {
  "korbel":{
    price: 0,
    class: "brandy"
  },
  "korbel xs":{
    price: 0,
    class: "brandy"
  },
  "hennessy":{
    price: 0,
    class: "brandy"
  }
};

var vodka= {
  "burnett's":{
    price: 0,
    class: "vodka"
  },
  "deep eddy's":{
    price: 0,
    flavors: [],
    class: "vodka"
  },
  "stoli":{
    price: 0,
    flavors: [],
    class: "vodka"
  },
  "smirnoff":{
    price: 0,
    flavors: [],
    class: "vodka"
  },
  "titos":{
    price: 0,
    class: "vodka"
  },
  "grey goose":{
    price: 0,
    class: "vodka"
  },
  "absolut":{
    price: 0,
    flavors: [],
    class: "vodka"
  },
  "ketel one":{
    price: 0,
    flavors: [],
    class: "vodka"
  }
};

var gin = {
  "bombay sapphire":{
    price: 0,
    class: "gin"
  },
  "hendrick's":{
    price: 0,
    class: "gin"
  },
  "beefeater":{
    price: 0,
    class: "gin"
  },
  "tanqueray":{
    price: 0,
    class: "gin"
  }
};

var rum = {
  "bacardi superior":{
    price: 0,
    flavors: [],
    class: "rum"
  },
  "bacardi gold":{
    price: 0,
    class: "rum"
  },
  "cruzan":{
    price: 0,
    flavors: [],
    class: "rum"
  },
  "myers":{
    price: 0,
    class: "rum"
  },
  "captain morgan":{
    price: 0,
    class: "rum"
  },
  "malibu":{
    price: 0,
    flavors: [],
    class: "rum"
  }
};

var liqueur = {
  "jagermeister":{
    price: 0,
    class: "liqueur"
  },
  "irishamn irish cream":{
    price: 0,
    class: "liqueur"
  },
  "disaronno":{
    price: 0,
    class: "liqueur"
  },
  "black haus":{
    price: 0,
    class: "liqueur"
  },
  "godiva":{
    price: 0,
    class: "liqueur"
  },
  "rumchata":{
    price: 0,
    class: "liqueur"
  },
  "kahlua":{
    price: 0,
    class: "liqueur"
  },
  "goldschlager":{
    price: 0,
    class: "liqueur"
  }
};

var tequila = {
  "patron":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "don julio":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "tres generaciones":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "camerena":{
    price: 0,
    varieties:["blanco", "reposado"],
    class: "tequila"
  },
  "1800":{
    price: 0,
    varieties:["blanco", "reposado"],
    class: "tequila"
  },
  "tres agaves":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "espolon":{
    price: 0,
    varieties:["blanco"],
    class: "tequila"
  },
  "jose cuervo":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "el jimador":{
    price: 0,
    varieties:["blanco", "reposado"],
    class: "tequila"
  },
  "casamigos":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "el charro":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "altos":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "kimo sabe mezcal":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "cabo wabo":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "sparkle donkey":{
    price: 0,
    varieties:["blanco", "reposado", "anejo"],
    class: "tequila"
  },
  "hornitos":{
    price: 0,
    varieties:["reposado"],
    class: "tequila"
  },
  "sauza":{
    price: 0,
    varieties:["anejo"],
    class: "tequila"
  },
  "corazon":{
    price: 0,
    varieties:["anejo"],
    class: "tequila"
  },
  "hornitos black":{
    price: 0,
    varieties:["anejo"],
    class: "tequila"
  },
  "don julio 1942":{
    price: 0,
    varieties:["anejo"],
    class: "tequila"
  }
};

var wine = {
  "sycamore lane chardonnay":{
    glassprice:4,
    bottleprice:12,
    variety:"white"
  },
  "sycamore lane pinot grigio":{
    glassprice:4,
    bottleprice:12,
    variety:"white"
  },
  "sycamore lane white zinfadel":{
    glassprice:4,
    bottleprice:12,
    variety:"white"
  },
  "la escondida moscato":{
    glassprice:4,
    bottleprice:12,
    variety:"white"
  },
  "cavit pinot grigio":{
    glassprice:5.5,
    bottleprice:17,
    variety:"white"
  },
  "jj muller riesling":{
    glassprice:5.5,
    bottleprice:17,
    variety:"white"
  },
  "vino moscato":{
    glassprice:7,
    bottleprice:21,
    variety:"white"
  },
  "the ned sauvignon blanc":{
    glassprice:8,
    bottleprice:24,
    variety:"white"
  },
  "proximity 26 chardonnay":{
    glassprice:8,
    bottleprice:24,
    variety:"white"
  },
  "sycamore lane caberney sauvignon":{
    glassprice:4,
    bottleprice:12,
    variety:"red"
  },
  "sycamore lane pinot noir":{
    glassprice:4,
    bottleprice:12,
    variety:"red"
  },
  "sycamore lane merlot":{
    glassprice:4,
    bottleprice:12,
    variety:"red"
  },
  "dark horse merlot":{
    glassprice:6,
    bottleprice:18,
    variety:"red"
  },
  "gouguenheim malbec":{
    glassprice:6.5,
    bottleprice:19.5,
    variety:"red"
  },
  "14 hands cabernet sauvignon":{
    glassprice:7,
    bottleprice:21,
    variety:"red"
  },
  "mark west pinot noir":{
    glassprice:7,
    bottleprice:21,
    variety:"red"
  }
};

var beer = {
  "budweiser":{
    category: "domestic",
    variety:"bottle",
    price:3.5,
  },
  "bud light":{
    category: "domestic",
    variety: ["bottle", "tap"],
    bottleprice:3.5,
    pintprice:3.5,
    yardprice:4.5,
    pitcherprice:12.5
  },
  "bud light lime":{
    category: "domestic",
    variety:"bottle",
    price:3.5
  },
  "michelob ultra":{
    category: "domestic",
    variety:"bottle",
    price:3.5
  },
  "coors light":{
    category: "domestic",
    variety: ["bottle", "tap"],
    bottleprice:3.5,
    pintprice:3.5,
    yardprice:4.5,
    pitcherprice:12.5
  },
  "miller high life":{
    category: "domestic",
    variety:"bottle",
    price:3.5
  },
  "miller 64":{
    category: "domestic",
    variety: "bottle",
    price:3.5
  },
  "miller lite":{
    category: "domestic",
    variety: ["bottle", "tap"],
    bottleprice:3.5,
    pintprice:3.5,
    yardprice:4.5,
    pitcherprice:12.5
  },
  "pabst blue ribbon":{
    category: "domestic",
    variety: "bottle",
    price:3.5
  },
  "mgd":{
    category: "domestic",
    variety: "bottle",
    price:3.5
  },
  "redbridge":{
    category: "domestic",
    variety: "bottle",
    price:4,
    note: "gluten free"
  },
  "moon man":{
    category: "domestic",
    variety: "bottle",
    price:4
  },
  "founders porter":{
    category: "domestic",
    variety: "bottle",
    price:4
  },
  "left hand milk stout":{
    category: "domestic",
    variety: "bottle",
    price:4
  },
  "o'doul's":{
    category: "import & specialty",
    variety: "bottle",
    price:4,
    note: "non-alocoholic"
  },
  "corona":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "corona light":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "dos equis amber":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "modelo especial":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "heineken":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "hacker-pschorr weisse":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "redd's apple ale":{
    category: "import & specialty",
    variety: "bottle",
    price:3.5
  },
  "corona":{
    category: "import & specialty",
    variety: "bottle",
    price:4
  },
  "sam adams":{
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5,
    note: "seasonal",
  },
  "spotted cow":{
    category: "domestic",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "wbc badger club":{
    category: "domestic",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "lakefront ipa":{
    category: "domestic",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "leinenkugel":{
    category: "domestic",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5,
    note: "seasonal"
  },
  "lagunitas ipa":{
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "blue moon":{
    category: "import & specialty",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "tyranena brown ale":{
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "ciderboys first press":{
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "dos equis lager":{
    category: "import & specialty",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "modelo negra":{
    category: "import & specialty",
    variety: "tap",
    pintprice:5.5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "stella artois":{
    category: "import & specialty",
    variety: "tap",
    pintprice:5,
    yardprice:6.5,
    pitcherprice:15.5
  },
  "guinness":{
    category: "import & specialty",
    variety: "tap",
    pintprice:6.5,
    yardprice:7.5,
    pitcherprice:19.5
  },
};

var liquor;

var drinkOfTheWeek = {
  name: "strawberry mango mojito",
  price: 8,
  ingredients: ["cruzan strawberry rum", "cruzan mango rum", "lime juice", "mint leaves", "simple syrup", "soda water", "sprite"],
  garnish: ["lime"],
  glass: "pint glass",
  instructions: "pour 1oz cruzan strawberry rum, 1oz cruzan mango rum, 1/4oz fresh squeezed lime juice, 3/4oz simple syrup, and 3 squeezed limes. leave limes in shaker. muddle all together. pour into pint glass and top off with equal parts soda water and sprite. garnish with slice of lime."
};

var eightySix= {
  names: ["tyranena", "left hand milk stout"]
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function refresh(){
  scrollToTop();
  hideForms();
  resultReset();
  resetFadeOut();
}

function showMenu(icon){
  var menu = document.getElementById("menu-line");
    icon.classList.toggle("fa-times");
    menu.classList.toggle("slideDown");
    document.getElementById("content-container").classList.toggle("slideContainer");
    document.getElementById("menu-container").classList.toggle("slideDown");
};

var drinkForm = document.getElementById("drinkForm");
var priceForm = document.getElementById("priceForm");
var seasonForm = document.getElementById("seasonForm");
var ingredientForm = document.getElementById("ingredientForm");
var garnishForm = document.getElementById("garnishForm");
var glassForm = document.getElementById("glassForm");

var allForms = [drinkForm, priceForm, seasonForm, ingredientForm, garnishForm, glassForm];

var userInputDrink = document.getElementById("userInputDrink");
var userInputPrice = document.getElementById("userInputPrice");
var userInputSeason = document.getElementById("userInputSeason");
var userInputIngredient = document.getElementById("userInputIngredient");
var userInputGarnish = document.getElementById("userInputGarnish");
var userInputGlass = document.getElementById("userInputGlass");

allInputs = [userInputDrink,userInputPrice, userInputSeason, userInputIngredient, userInputGarnish, userInputGlass];

var drinkSearch = document.getElementById("drinkSearch");
var priceSearch = document.getElementById("priceSearch");
var seasonSearch = document.getElementById("seasonSearch");
var ingredientSearch = document.getElementById("ingredientSearch");
var garnishSearch = document.getElementById("garnishSearch");
var glassSearch = document.getElementById("glassSearch");

var allSearches = [drinkSearch, priceSearch, seasonSearch, ingredientSearch, garnishSearch, glassSearch];

var whiskeyButton = document.getElementById("whiskeyButton");
var scotchButton = document.getElementById("scotchButton");
var bourbonButton = document.getElementById("bourbonButton");
var brandyButton = document.getElementById("brandyButton");
var ginButton = document.getElementById("ginButton");
var vodkaButton = document.getElementById("vodkaButton");
var tequilaButton = document.getElementById("tequilaButton");
var rumButton = document.getElementById("rumButton");
var liqueurButton = document.getElementById("liqueurButton");
var tapButton = document.getElementById("tap-button");
var bottleButton = document.getElementById("bottle-button");
var domesticButton = document.getElementById("domestic-button");
var importButton = document.getElementById("import-button");

var allLiquorButtons = [whiskeyButton, scotchButton, bourbonButton, brandyButton, ginButton, vodkaButton, tequilaButton, rumButton, liqueurButton, tapButton, bottleButton, domesticButton, importButton];

var cocktailButton = document.getElementById("cocktailButton");
var liquorButton = document.getElementById("liquorButton");
var beerButton = document.getElementById("beerButton");
var wineButton = document.getElementById("wineButton");

var allButtons = [cocktailButton, liquorButton, beerButton, wineButton];

var drinkButton =   document.getElementById("drinkButton");
var priceButton = document.getElementById("priceButton");
var seasonButton = document.getElementById("seasonButton");
var ingredientButton = document.getElementById("ingredientButton");
var garnishButton = document.getElementById("garnishButton");
var glassButton = document.getElementById("glassButton");

var allSearchButtons = [drinkButton, priceButton, seasonButton, ingredientButton, garnishButton, glassButton];

var liquorButtonText = document.getElementById("liquor-button-text");
var cocktailButtonText = document.getElementById("cocktail-button-text");
var wineButtonText = document.getElementById("wine-button-text");
var beerButtonText = document.getElementById("beer-button-text");

var allButtonTexts = [cocktailButtonText, liquorButtonText, beerButtonText, wineButtonText];

var result = document.getElementById("result");
var resultTitle = document.getElementById("result-title");

// code for dropdown header

// formatting for list of drinks that are 86'ed
var eightySixNames = eightySix.names;
var eightySixList = "";
for (var i = 0; i < eightySixNames.length; i++) {
  if (i === eightySixNames.length - 1){
    eightySixList += eightySixNames[i];
  } else {
    eightySixList += eightySixNames[i] + ", ";
  }
}

// formatting for birthdate to legally drink
var currentDate = new Date()
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var drinkYear = year  - 21;
var today = month + "/" + day + "/" + drinkYear;

document.getElementById("drink-of-the-week").innerHTML = "<b>drink of the week: </b>" + drinkOfTheWeek.name;
document.getElementById("date").innerHTML = "<b>legal birthdate to drink: </b>" + today;
document.getElementById("eighty-six").innerHTML = "<b>86: </b>" + eightySixList;

// code for what appears in the #result and #result-title div

// function to reset the content in #result and #result-title to drink of the week
function resultReset(){
  scrollToTop();
  resultTitle.innerHTML = "drink of the week";
  result.innerHTML = "";
  printDrinksInfo(drinkOfTheWeek);
};

window.onload = resultReset(); // content of #result and #result-title st to drink of the week on page load / refresh

function addFadeOut(){
  resultReset();
  allButtons.forEach( function (button) {
    button.classList.add("fadeOut");
    button.classList.add("clicked");
  });
  allButtonTexts.forEach( function (button) {
    var buttonId = button.id;
    buttonString = buttonId.toString();
    var buttonType = buttonString.slice(0, buttonString.length - 12);
    if (button === cocktailButtonText){
      button.innerHTML = buttonType + "s";
    } else {
      button.innerHTML = buttonType;
    }
  });
  document.getElementById("liquor-list").classList.remove("fade");
}

function resetFadeOut(){
  allButtons.forEach( function (button) {
    button.classList.remove("fadeOut");
    button.classList.add("clicked");
  });
  allButtonTexts.forEach( function (button) {
    var buttonId = button.id;
    buttonString = buttonId.toString();
    var buttonType = buttonString.slice(0, buttonString.length - 12);
    if (button === cocktailButtonText){
      button.innerHTML = buttonType + "s";
    } else {
      button.innerHTML = buttonType;
    }
  });
  document.getElementById("liquor-list").classList.remove("fade");
  document.getElementById("beer-filters").classList.remove("fade");
}

function assessButton(button, buttonText, showWord, hideWord, type){
  addFadeOut();
  removeBold();
  resultReset();
  button.classList.add("clicked");
  if (button.classList.contains("clicked")){
    addFadeOut();
    if (button === liquorButton){
      removeBold();
      document.getElementById("liquor-list").classList.add("fade");
    } else if (button === beerButton){
      document.getElementById("beer-filters").classList.add("fade");
      printDrinks(type, showWord);
    } else {
      printDrinks(type, showWord);
    }
    button.classList.remove("fadeOut");
    button.classList.remove("clicked");
    buttonText.innerHTML = hideWord;
    button.onclick = function evaluateFade(){
      if (button.classList.contains("clicked")){
        addFadeOut();
        if (button === liquorButton){
          removeBold();
          document.getElementById("liquor-list").classList.add("fade");
        } else {
          printDrinks(type, showWord);
        }
        if (button === beerButton){
          document.getElementById("beer-filters").classList.add("fade");
        }
        button.classList.remove("fadeOut");
        button.classList.remove("clicked");
        buttonText.innerHTML = hideWord;
      } else {
        resultReset();
        resetFadeOut();
        if (button === liquorButton){
          removeBold();
          document.getElementById("liquor-list").classList.remove("fade");
        } else if (button === beerButton){
          document.getElementById("beer-filters").classList.remove("fade");
        }
        button.classList.add("clicked");
        buttonText.innerHTML = showWord;
      }
    }
  } else {
    resultReset();
    resetFadeOut();
    if (button === liquorButton){
      removeBold();
      document.getElementById("liquor-list").classList.remove("fade");
    } else if (button === beerButton){
      document.getElementById("beer-filters").classList.remove("fade");
    }
    button.classList.add("clicked");
    buttonText.innerHTML = showWord;
  }
}

function removeBold(){
  allLiquorButtons.forEach( function (button) {
    button.style.fontWeight = "300";
  });
};

function openLiquorDictionary(clicked, drink){
  var liquor = clicked.slice(0, clicked.length - 6);
  var button = document.getElementById(clicked);
  hideForms();
  result.innerHTML = "";
  removeBold();
  button.style.fontWeight = "bold";
  resultTitle.innerHTML = liquor;
  for (var key in drink){
    var drinkNameDisplay = key;
    generateDrinksTable(drinkNameDisplay, "notCocktail", drink, button);
  }
}

function printDrinks(drinkType, text){
  result.innerHTML = "";
  resultTitle.innerHTML = "all " + text;
  for (var key in drinkType){
    var drinkNameDisplay = key;
    generateDrinksTable(drinkNameDisplay, "notCocktail", drinkType);
  }
}

var cocktail = "";
function printDictionaries(type){
  resetFormValues();
  hideForms();
  addFadeOut();
  resultReset();
  result.innerHTML = "";
  if (type === liquor){
    assessButton(liquorButton, document.getElementById("liquor-button-text"), "liquor", "hide liquor");
  } else if (type === wine){
    assessButton(wineButton, document.getElementById("wine-button-text"), "wine", "hide wine", wine);
  } else if (type === cocktail){
    assessButton(cocktailButton, document.getElementById("cocktail-button-text"), "cocktails", "hide cocktails", drinks);
  } else if (type === beer){
    assessButton(beerButton, document.getElementById("beer-button-text"), "beer", "hide beer", beer);
  }
}

function resetFormValues(){
  allInputs.forEach (function (input){
    input.toString();
    var inputValue = input.id.slice(9).toString();
    if (inputValue === "Ingredient"){
      input.value = "search for an " + inputValue.toLowerCase();;
    } else {
      input.value = "search for a " + inputValue.toLowerCase();;
    }
  })
};

// function to close search term menu and any search forms that are open
function hideForms(){
  scrollToTop();
  resetSize();
  removeBold();
  document.getElementById("drinks-list").style.paddingTop = "2%";
  document.getElementById("hideDataSearchButton").classList.remove('is-visible');
  document.getElementById("dataSearchButton").classList.remove('slide');
  allForms.forEach( function (form) {
    form.classList.remove("show"); // closes open search form
  });
  allSearches.forEach( function (search) {
    search.value = "submit"; // closes open search form
  });
};

// function to generate the table in which the data for a single drink is displayed
function generate_table(header, values) { // parameter header and values take key-value pairs in the selected object as the argument when the function is called
  scrollToTop();
  var tbl = document.createElement("table"); // creates table to display values
  tbl.classList.add("table-style");
  var row = document.createElement("tr"); // creates row in table
  var cell = document.createElement("td"); // creates a cell in row
  var headerCell = document.createElement("td"); // creates a cell in row to display key
  var headerText = document.createTextNode(header); // converts header parameter (whose argument is the dictionary key) into text
  var listText = document.createTextNode(values); // converts values parameter (whose argument is the dictionary value) into text
  cell.appendChild(listText); // value text added to cell
  headerCell.appendChild(headerText); // key text added to cell
  row.appendChild(headerCell); // cell added to row
  row.appendChild(cell); // cell added to row
  tbl.appendChild(row); // rows added to table
  result.appendChild(tbl); // table added to #result
};

var tap = "tap";
var bottle = "bottle";
var imports = "import & specialty";
var domestic = "domestic";

function searchBeer(filter, clicked){
  hideForms();
  result.innerHTML = "";
  removeBold();
  var button = document.getElementById(clicked);
  button.style.fontWeight = "bold";
  if (filter === tap){
    resultTitle.innerHTML = "beer on tap";
  } else if (filter === bottle){
    resultTitle.innerHTML = "bottled beer";
  } else if (filter === domestic){
    resultTitle.innerHTML = "domestic beer";
  } else if (filter === imports){
    resultTitle.innerHTML = "imported & specialty beer";
  }
  for (var key in beer){
    var drinkName = key;
    var item = beer[key];
    var searchVariety = item.variety;
    var searchCategory = item.category;
    if (searchVariety === filter || searchVariety.indexOf(filter) >= 0){
      generateDrinksTable(drinkName, "notCocktail", beer);
    }
    if (searchCategory === filter){
      generateDrinksTable(drinkName, "notCocktail", beer);
    }
  }
}

// function to generate table in which list of all drinks are displayed
function generateDrinksTable(drink, dictionary, type) { // parameter drink takes the argument of the name of each drink in the object drinks when function is called
  scrollToTop();
  var tbl = document.createElement("table"); // creates table to display values
  tbl.classList.add("table-style");
  var row = document.createElement("tr"); // creates row in table
  var cell = document.createElement("td"); // creates a cell in row
  var headerCell = document.createElement("td"); // creates a cell in row to display key
  var headerText = document.createTextNode(drink); // converts header parameter (whose argument is the dictionary key) into text
  if (dictionary === "price"){
    var listText = document.createTextNode(type); // converts values parameter (whose argument is the dictionary value) into text
    cell.appendChild(listText); // value text added to cell
    cell.style.paddingLeft = "52%";
    headerCell.style.width = "35%";
  } else {
    headerCell.style.width = "100%";
  }
  headerCell.appendChild(headerText); // key text added to cell
  row.appendChild(headerCell); // cell added to row
  row.appendChild(cell); // cell added to row
  tbl.appendChild(row); // row added to table
  result.appendChild(tbl); // table added to #result
  headerCell.style.cursor = "pointer";
  headerCell.onclick = function print(){ // function that
    var drinkName = this.innerHTML; // sets variable
    var key;
    for (key in drinks){
      if (key.indexOf(drink) >= 0){
        printDrinksInfo(drinkName, drinks);
      }
    }
    if (dictionary === "notCocktail"){
      printDrinksInfo(drinkName, type, drink);
    }
  };
};

function printDrinksInfo(clickedDrink, type, drink){
  resetFadeOut();
  hideForms();
  result.innerHTML = "";
  if (clickedDrink === drinkOfTheWeek){
    var item = drinkOfTheWeek;
  } else {
    var item = type[clickedDrink];
    resultTitle.innerHTML = clickedDrink;
    }
  for (var key in item){
    function addSpacing(dictionary){
      var value = "";
      var header = key;
      if (dictionary.length < 1){
        value = item[key];
      } else {
        for (var i = 0; i < dictionary.length; i++) {
          if (i === dictionary.length - 1){
            value += dictionary[i];
          } else {
            value += dictionary[i] + ", ";
          }
        }
      } generate_table(header, value);
    }
    function priceFormatting(headerText){
      var header = headerText;
      var priceString = item[key].toString();
      if (priceString.indexOf(".") >= 0){
        var value= "$" + item[key] + "0";
      } else {
        var value = "$" + item[key] + ".00";
      } generate_table(header, value);
    }
    if (key === "ingredients"){
      addSpacing(item.ingredients);
    } else if (key === "garnish"){
      addSpacing(item.garnish);
    } else if (key === "flavors"){
      addSpacing(item.flavors);
    } else if (key === "varieties"){
      addSpacing(item.varieties);
    } else if (key === "price"){
      priceFormatting(key);
    } else if (key === "pintprice"){
      priceFormatting("price per pint");
    } else if (key === "yardprice"){
      priceFormatting("price per yard");
    } else if (key === "pitcherprice"){
      priceFormatting("price per pitcher");
    } else if (key === "glassprice"){
      priceFormatting("price per glass");
    } else if (key === "bottleprice"){
      priceFormatting("price per bottle");
    } else if (key === "class"){
      var value = "more " + item.class;
      generateMoreDrinksHeader(value, type, clickedDrink);
      break;
    } else {
      var header = key;
      var value = item[key];
      generate_table(header, value);
    }
  }
  if (type === wine){
    var value = "more " + item.variety + " wine";
    if (item.variety === "white"){
      generateMoreDrinksHeader(value, type, clickedDrink, "white");
    } else {
      generateMoreDrinksHeader(value, type, clickedDrink, "red");
    }
  } else if (type === beer){
    if (item.category === "domestic"){
      var value = "more domestic beer";
      generateMoreDrinksHeader(value, type, clickedDrink, "domestic");
    } else if (item.category === "import & specialty"){
      var value = "more import & specialty beer";
      generateMoreDrinksHeader(value, type, clickedDrink, "import & specialty");
    }
  }
}

function generateMoreDrinksHeader(value, type, clickedDrink, searchTerm){
  scrollToTop();
  var tbl = document.createElement("table");
  tbl.classList.add("moreDrinks");
  tbl.id = "return-table";
  tbl.classList.add("table-style");
  var row = document.createElement("tr");
  var cell = document.createElement("td");
  var listText = document.createTextNode(value);
  cell.appendChild(listText);
  row.appendChild(cell);
  tbl.appendChild(row);
  result.appendChild(tbl);
  for (var key in type){
      if (type === wine){
        var drinkName = key;
        var item = wine[key];
        var searchGlass = item.variety;
        if (searchGlass === searchTerm) {
          if (key === clickedDrink){
          } else {
            var drinkNameDisplay = key;
            generateDrinksTable(drinkNameDisplay, "notCocktail", type);
          }
        }
      } else if (type === beer){
        var drinkName = key;
        var item = beer[key];
        var searchType = item.category;
        if (searchType === searchTerm) {
          if (key === clickedDrink){
          } else {
            var drinkNameDisplay = key;
            generateDrinksTable(drinkNameDisplay, "notCocktail", type);
          }
        }
      } else {
        if (key === clickedDrink){
        } else {
          var drinkNameDisplay = key;
          generateDrinksTable(drinkNameDisplay, "notCocktail", type);
      }
    }
  }
}

drinkArray = [];

function addSmall(){
  allSearchButtons.forEach( function (button) {
    button.classList.add("smaller");
  });
}

function resetSize(){
  allSearchButtons.forEach( function (button) {
    button.classList.remove("smaller");
  });
  allSearchButtons.forEach( function (button) {
    button.classList.remove("bigger");
  });
}

function openForm(buttonName){
  hideForms();
  resetFormValues();
  addSmall();
  document.getElementById(buttonName).classList.remove("smaller");
  document.getElementById(buttonName).classList.add("bigger");
  document.getElementById("drinks-list").style.paddingTop = "0%";
  document.getElementById("hideDataSearchButton").classList.add('is-visible');
  document.getElementById("dataSearchButton").classList.add('slide');
  if (buttonName === "drinkButton"){
    drinkForm.classList.add("show");
    document.getElementById("drinkSearch").onclick = function drinkSearch(){
      resetFadeOut();
      this.value = "resubmit";
      document.getElementById(buttonName).classList.add("bigger");
      result.innerHTML = "";
      var searchTerm = document.getElementById("userInputDrink").value;
      resultTitle.innerHTML = "results for " + searchTerm;
      for (var key in drinks) {
        if (key.indexOf(searchTerm) >= 0) {
          var drinkNameDisplay = key;
          generateDrinksTable(drinkNameDisplay);
        }
      }
    }
  } else if (buttonName === "ingredientButton"){
    ingredientForm.classList.add("show");
    var searchTerm = document.getElementById("userInputIngredient").value;
    document.getElementById("ingredientSearch").onclick = function drinkSearch(){
      resetFadeOut();
      result.innerHTML = "";
      this.value = "resubmit";
      var searchTerm = document.getElementById("userInputIngredient").value;
      resultTitle.innerHTML = "results for " + searchTerm;
      for (key in drinks){
        var drinkName = key;
        var item = drinks[key];
        var searchIngredient = item.ingredients;
        for (var i = 0; i < searchIngredient.length; i++) {
          if (searchIngredient[i].indexOf(searchTerm) >= 0) {
            drinkArray.push(key);
            function removeDuplicates(arr){
              let trueDrinkArray = []
              for(let i = 0;i < arr.length; i++){
                if(trueDrinkArray.indexOf(arr[i]) == -1){
                  trueDrinkArray.push(arr[i])
                }
              }
              return trueDrinkArray
            }
            var trueDrinkArray = removeDuplicates(drinkArray);
          }
        }
      }
      for (var i = 0; i < trueDrinkArray.length; i++) {
        var drinkNameDisplay = trueDrinkArray[i];
        generateDrinksTable(drinkNameDisplay);
      }
    }
  } else if (buttonName === "seasonButton"){
    seasonForm.classList.add("show");
    document.getElementById("seasonSearch").onclick = function drinkSearch(){
      resetFadeOut();
      result.innerHTML = "";
      this.value = "resubmit";
      var searchTerm = document.getElementById("userInputSeason").value;
      resultTitle.innerHTML = "results for " + searchTerm;
      for (key in drinks){
        var drinkName = key;
        var item = drinks[key];
        var searchSeason = item.season;
        if (searchSeason.indexOf(searchTerm) >= 0) {
          var drinkNameDisplay = key;
          generateDrinksTable(drinkNameDisplay);
        }
      }
    }
  } else if (buttonName === "priceButton"){
    priceForm.classList.add("show");
    document.getElementById("priceSearch").onclick = function drinkSearch(){
      resetFadeOut();
      result.innerHTML = "";
      this.value = "resubmit";
      var searchTerm = document.getElementById("userInputPrice").value; // assigns the value entered by the user to the variable searchTerm
      var last = searchTerm.length - 1;
      function invalid(){ // this is the text that prints when the user enters a number that is either 1) over 100 2) has more than two decimal places or 3) ends in a decimal point
        resultTitle.innerHTML = "results for this dumbass number"; // adds error message to #resultTitle
        var invalidEntry = document.createElement("p"); // creates an element (invalidEntry) to display rest of error message
        invalidEntry.classList.add("notice-format"); // formatting for error message
        invalidEntry.innerHTML = "try entering a number that makes sense, dummy"; // adds text invalidEntry element
        result.appendChild(invalidEntry); // adds error message to #result
      }
      if (searchTerm.match(/[a-z]/i)) { // if user enters a value that contains a letter
        invalid(); // returns error message
      } else { // if user enters a value consisting only of numbers
        if (searchTerm.indexOf("$") == 0){ // if user enters a value that begins with a dollar sign ($)
          searchTerm = searchTerm.slice(1); // removes dollar sign ($) from value to match format in database so it will be searchable
        }
        if (searchTerm[last] === "."){ // if user enters a value whose last character is a decimal point
          invalid(); // returns error message
        } else if (searchTerm.indexOf(".") == 1){ // if user enters a value whose second character is a decimal point
          if (searchTerm.length == 3){ // if user enters a value with three characters, whose second character is a decimal point
            if (searchTerm[last] == 0){ // if the last of the three characters is the number 0 (e.g. 5.0)
              searchTerm = searchTerm.slice(0, searchTerm.length - 2); // formats the search term to match format in database so it will be searchable
              resultTitle.innerHTML = "results for drinks $" + searchTerm + ".00 or less"; // formats term in #resultTitle to the standard
            } else { // if the last of the three characters is a number other than 0 (e.g. 5.5)
              resultTitle.innerHTML = "results for drinks $" + searchTerm + "0 or less"; // formats term in #resultTitle to the standard
            }
          } else if (searchTerm.length === 4){ // if user enters a value with four characters, whose second character is a decimal point
            if (searchTerm[2] == 0){ // if the third of the four characters is the number 0 (e.g. 5.00)
              searchTerm = searchTerm.slice(0, searchTerm.length - 3); // formats the search term to match format in database so it will be searchable
              resultTitle.innerHTML = "results for drinks $" + searchTerm + ".00 or less"; // formats term in #resultTitle to the standard
            } else { // if the third of the four characters is a number other than 0 (e.g. 5.50)
              searchTerm = searchTerm.slice(0, searchTerm.length - 1); // formats the search term to match format in database so it will be searchable
              resultTitle.innerHTML = "results for drinks $" + searchTerm + "0 or less"; // formats term in #resultTitle to the standard
            }
          } else { // if user enters a value whose second character is a decimal point and has more than two decimal places
            invalid(); // returns error message
          }
        } else if (searchTerm.indexOf(".") == 2) { // if user enters a value whose third character is a decimal point
          if (searchTerm.length == 4){ // if user enters a value with four characters, whose third character is a decimal point
            if (searchTerm[last] == 0){ // if the last of the four characters is the number 0 (e.g. 10.0)
              searchTerm = searchTerm.slice(0, searchTerm.length - 2); // formats the search term to match format in database so it will be searchable
              resultTitle.innerHTML = "results for drinks $" + searchTerm + ".00 or less"; // formats term in #resultTitle to the standard
            } else { // if the last of the four characters is a number other than 0 (e.g. 10.5)
              resultTitle.innerHTML = "results for drinks $" + searchTerm + "0 or less"; // formats term in #resultTitle to the standard
            }
          } else if (searchTerm.length === 5){ // if user enters a value with five characters, whose third character is a decimal point
            if (searchTerm[3] == 0){ // if the third character of the value with five characters is the number 0 (e.g. 10.00)
              searchTerm = searchTerm.slice(0, searchTerm.length - 3); // formats the search term to match format in database so it will be searchable
              resultTitle.innerHTML = "results for drinks $" + searchTerm + ".00 or less"; // formats term in #resultTitle to the standard
            } else { // if the third character of the value with five characters is a number other than 0 (e.g. 10.50)
              searchTerm = searchTerm.slice(0, searchTerm.length - 1); // formats the search term to match format in database so it will be searchable
              resultTitle.innerHTML = "results for drinks $" + searchTerm + "0 or less"; // formats term in #resultTitle to the standard
            }
          } else { // if user enters a value that has more than two decimal places
            invalid(); // returns error message
          }
        } else { // if user enters a value without a decimal point
          if (searchTerm.length < 3) { // if the user enters a value with no decimal point that is less than three characters (i.e., any whole number 99)
            resultTitle.innerHTML = "results for drinks $" + searchTerm + ".00 or less"; // formats term in #resultTitle to the standard
          } else { // if user enters a value with no decimal point that is greater than three characters (e.g. 100)
            invalid(); // returns error message
          }
        }
      }
      for (key in drinks){
        var drinkName = key;
        var item = drinks[key];
        var searchPrice = item.price;
        var priceString = searchPrice.toString();
        if (priceString.indexOf(".") >= 0){
          var value= "$" + priceString + "0";
        } else {
          var value = "$" + priceString + ".00";
        }
        if (searchPrice <= searchTerm) {
          var drinkNameDisplay = key;
          generateDrinksTable(drinkNameDisplay, "price", value);
        }
      }
    }
  } else if (buttonName === "garnishButton"){
    garnishForm.classList.add("show");
    var searchTerm = document.getElementById("userInputGarnish").value;
    document.getElementById("garnishSearch").onclick = function drinkSearch(){
      resetFadeOut();
      result.innerHTML = "";
      this.value = "resubmit";
      var searchTerm = document.getElementById("userInputGarnish").value;
      resultTitle.innerHTML = "results for " + searchTerm;
      for (key in drinks){
        var drinkName = key;
        var item = drinks[key];
        var searchGarnish = item.garnish;
        for (var i = 0; i < searchGarnish.length; i++) {
          if (searchGarnish[i].indexOf(searchTerm) >= 0) {
            var drinkNameDisplay = key;
            generateDrinksTable(drinkNameDisplay);
          }
        }
      }
    }
  } else if (buttonName === "glassButton"){
    glassForm.classList.add("show");
    document.getElementById("glassSearch").onclick = function drinkSearch(){
      resetFadeOut();
      result.innerHTML = "";
      this.value = "resubmit";
      var searchTerm = document.getElementById("userInputGlass").value;
      resultTitle.innerHTML = "results for " + searchTerm;
      for (key in drinks){
        var drinkName = key;
        var item = drinks[key];
        var searchGlass = item.glass;
        if (searchGlass.indexOf(searchTerm) >= 0) {
          var drinkNameDisplay = key;
          generateDrinksTable(drinkNameDisplay);
        }
      }
    }
  }
}
