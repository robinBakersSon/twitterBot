// Using the Twit node package
var Twit = require("twit");
// Pulling twitter authentication info from another file
var config = require("./config.js");
// using tracery node library to create grammar and syntax rules
var tracery = require("tracery-grammar");
//my syntax created through tracery
var data = { // "sentence": ["#color.capitalize# #animal.s# are #often# #mood#.", // "#animal.a.capitalize# is #often# #mood#, unless it is #color.a# one."],
"sentence": ["I may be #imaybe# and You may be #umaybe# and We're both #wiiboth#"],
"imaybe":[ "you", "1 1 2 3 5 8 13 21", "acute", "the Greenland Sea", "the Hudson Bay", "the James Bay", "the Kara Sea", "the Kara Strait", "the Laptev Sea", "the Lincoln Sea", "the Prince Gustav Adolf Sea", "addicting", "addictive", "adjustable", "admired", "ambient", "ambivalent", "amiable","amused", "anatomical",  "hopeless", "idealistic", "idiosyncratic",  "astrologer", "astronomer", "atheist", "athlete", "atlas", "atomizer","hammered", "intoxicated", "impaired", "wrecked", "sloshed", "buzzed", "baked", "thrashed", "trashed", "tipsy", "smashed", "totaled","Aphrodite", "Apollo", "Ares", "Artemis", "Athena", "Demeter", "Dionysus", "Hades", "Hephaestus", "Hera", "Hermes", "Hestia", "Poseidon", "Zeus","unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten", "plastic", "aluminum", "asphalt", "concrete", "glass", "hemp", "rammed earth", "mud", "sand", "asbestos", "polyurethane", "styrofoam","classicism", "cobra","conceptual art", "cubism", "cubo-futurism", "old conversation","new questions","new directions","surreal world","new ways","international revolutionary movement","long stretches","lunch counters","intellectual work","temporary pleasures, accessible","birth date","andre breton","new theories","smart people","organic food","sure","ananda","liberal designs","henry giroux","consumer capitalism","ideology","plant seeds","state power","black radical imagination","seattle","different ways","keorapetse kgositsile","social crises","surrealism","age twenty-five","new society","male nationalists","black nationalism","mumia abu-jamal","blues people","academic study","afrodiasporic","regular morning meditation","america","revolutionary dreams erupt","everyday brutalities","madrid","world war","imaginative slavery","racial uplift","imagination inert","droppin science","biological arguments","daily life","scientific knowledge","woody guthrie","fresh air","political implications","feminist movement","powerful social forces","lucid intelligence","gender roles","jayne cortez","environmental hazards","revolutionary ideas","kwame ture","enable participants","little book", "social movements","brilliant theoretical insights","poetic knowledge","kwame nkrumah","big sister","working-class culture","aesthetic doctrine","radical ideas","mothers dream","ordinary folk","political ideology","thinking","revolutionary working-class music","class work","exploitative institutions","popular belief","black radical congress","easy task","new poetic weapons","traditional leftists","concrete intellectual engagement","middle-class capitalist values","detroits grace lee boggs","the desire","manifesto","a material basis","motor oil","thanks","radical","subtlest feelings","social movements generate","postmortem world","needy people","free society","cynicism","analytical importance","individual genius","definition subversive","social workers","white liberal ideology","opening","black rhythm-and blues artists poet philosophers","harnessing technology","accessible knowledge","college anti-sweatshop campaign","open hydrant","poetry"],

"umaybe":[ "me", "1 1 2 3 5 8 13 21", "the Pechora Sea", "the Wandel Sea", "the Cooperation Sea", "the Cosmonauts Sea", "the DUrville Sea", "the Drake Passage", "the Great Australian Bight", "the Gulf St Vincent", "the King Haakon VII Sea" , "ignited", "illustrated", "illustrative", "imitated", "immense", "immersive", "impressionable", "improbable", "impulsive", "in-between", "impressionable", "improbable", "impulsive", "in-between", "alchemist", "analyzer", "anarchist", "anatomist", "architect", "aristocrat", "ascendant", "tore up", "gone", "thirsty", "annihilated", "blitzed", "stoned", "lit", "plastered", "three sheets to the wind", "tanked", "delerious", "disorderly", "rowdy","Aether", "Ananke", "Chaos", "Chronos", "Erebus", "Eros", "Hypnos", "Uranus", "Gaia", "Phanes", "Pontus", "Tartarus", "Thalassa", "Thanatos", "Hemera", "Nyx", "cement", "ceramic tile", "terrazzo", "carpet", "wallpaper", "paint", "wood", "brick", "glass brick", "terra cotta", "cinder block", "stone", "rebar", "wire rope", "copper", "timber", "dimensional lumber", "plywood", "shiplap","🐬", "🐳", "🐋", "🐚", "🌊", "aestheticism", "art deco", "art nouveau", "avant-garde", "baroque", "a model space","different visions","things need","universal sisterhood","amsterdam","real freedom","contemporary political spaces","contrary","productive members","sexual relations","easy notions","miraculous weapon","so-called socialists","radical democratic public culture","anti-globalization demonstrations beginning","political struggles","constant reminders","collective living space","chicago surrealist","everyday oppressions","sharpest sensibility","gay movements","great essay poetry","black freedom struggle.","playful dreams","classic definition","total transformation","poetic knowledge.","reliving horrors","early days","guyana","free spaces","revolutionary vision","emancipatory vision","cuba","generate community pride","retrograde pop music","maroon","battle wears","black intellectuals/activists/artists","intangible force","a hip thing","george lipsitz","a workers state","young people","totalitarian systems","tenement apartment","louis aragon","cosmopolitan definition","strange","cheikh anta diop","black freedom movement","complete freedom","so-called", "revolutionary ideology","suzanne cesaire","black utopia","serious motion","famous essay","amiri baraka","jeffersonian","collective action","idealistic dreams","bootsy","real people","utopian visions","real world","collective social movements","socialist efficiency","new world","wildest dreams","penelope rose","exhibit anxiety","young activists","economic power","radical art","marx","cultural relativist","social life","ancient practices","black radicals","audre lorde","progressive","dangerous crossroads","poet society","freedom dreams","still","external forces","darwinism","black peoples dreams","ted joans","love","everyday life","old past wasnt",,"world liberation movements","nicaragua","according","worlds crises","crucial questions","social relationships","radical social movements","great poetry","provocative proposition","askia muhammad toure","bob dylan","africa","collective desires","personal self-transformation","grenada","different future","dreams","radical feminists" ],



"wiiboth":["1 1 2 3 5 8 13 21", "the Pacific Ocean", "the Atlantic Ocean", "the Indian Ocean", "the Southern Ocean", "the Arctic Ocean", "the Amundsen Gulf" , "the Baffin Bay" , "the Barents Sea" , "the Beaufort Sea" , "the Chukchi Sea" , "the East Siberian Sea", "a giraffes back on fire", "️🌟", "💫", "✨", "🎵", "🌱", "🌳", "🌵", "🌷", "🌹", "🌻", "💐", "⚡️", "🔥", "🐸", "🐙", "🐛", "🐌", "ancestral", "angelic", "🦂", "🦀", "alchemist", "analyzer", "anarchist", "anatomist", "architect","always","sometimes", "clay",  "paper", "gravel", "plaster", "communal societies","el salvador","ivy walls","critical visions","intellectual ground","calls the culture","visionary dreams","marvelous","english","gender analysis","human needs","new social relationships","twentieth century","personal book","reagan","europe","black music","a complete dream","city pigeon","new future","cultural works","social struggle","surrealist movement","white leftists","four-hundred-year-old dream","stray bird feather","potent weapon","emancipate desire","obvious reasons","black soil","spanish civil war","a spacious house","rusty tapwater","melioristic reform","brief moment","male dominance","class oppression past","life form","scientific racism","neophyte revolutionaries","capitalist production","abolitionist","paris","laura corsiglia","ambiguous matter","similarly","imaginary portrait","young faces","universal enemy","poets no matter","post-reconstruction re.demption politics","individualistic world","love","curbside rainbow","quiet darkness","nineteenth-century communal villages","the ethic","political engagement","knowledge","octavio paz","aim cesaires","recovering","own vision","inner peace","wonderful chance encounters","great works","democratic communities","changing","official culture polices","individual accumulation","voter registration campaigns","cultural products","social constructionist scholarship","clevelands norma jean freeman","endless meadows","basic premises","new knowledge","surrealist","history sleeps","different cognitive maps","old ways","white supremacy","small c communism","actual peoples","superior knowledge","enable communities","liberator","desire","sweat","beginning","feminist dreams","phil ochs","romantic renegade socialists","post emancipation societies","temporary refuge","great silence","basic necessities","intellectual history","bare essence","movement history","concrete wilderness overrun","new attitudes","information folks need","unwitting","forbes burnham","own political journey","utopia","drug dealers"],
}


var grammar = tracery.createGrammar(data);
grammar.addModifiers(tracery.baseEngModifiers);
function generate() { var status = grammar.flatten("#sentence#"); return status;
}
// Making a Twit object for connection to the API
var T = new Twit(config);
// Start once
tweeter();
// Once every N milliseconds
// setInterval(tweeter, 60*5*100); is about once per minute (maybe a little less)
setInterval(tweeter, 60*5*100);
// Here is the bot!
function tweeter() { 
// This is a random number bot 
var tweet = generate(); 
// // Post that tweet! 
T.post("statuses/update", { status: tweet }, tweeted); 
// // Callback for when the tweet is sent 
function tweeted(err, data, response)
 { if (err) { console.log(err); }
  else { console.log("Success: " + data.text); 
console.log(response); } };
}