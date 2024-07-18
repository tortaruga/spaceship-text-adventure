const message = document.getElementById('message');
const btnOne =  document.querySelector('.btn-one');
const btns =  document.querySelector('.btns');

// flickering underscore effect

let underscore = document.createElement('span');

const paragraphs = message.children;

function addUnderscore() {
    underscore.textContent = '_';
    paragraphs[paragraphs.length - 1].appendChild(underscore);
    }

// appearing text effect

let delay;
 
function textEffect() {
  addUnderscore();
  delay = 0;

  Array.from(paragraphs).forEach(p => {

    const letters = p.textContent.trim().split('');
    // this line NEEDS to be after letters has been declared
    // the comment is for my dumb self cause i wasted twenty miinutes on it
    // and next time i'll forget and waste another 20
    p.innerHTML = ''; 

  letters.forEach(letter => {
    const span = document.createElement('span');
    span.innerHTML = letter;
    span.classList.add('appear');
    delay += .03;
    span.style.animationDelay = delay + 's';
    p.appendChild(span); 
  })   
  }) 

  paragraphs[paragraphs.length - 1].lastElementChild.classList.add('flicker');
}
    
// initial setup
let btnTwo;
let btnThree;

function createBtns() {
    btnTwo = document.createElement('button');
    btns.appendChild(btnTwo);

    btnThree = document.createElement('button');
    btns.appendChild(btnThree);
}

function hideBtn(btn) {
  btn.style.display = 'none';
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function initialSetup() {
    createBtns();
    hideBtn(btnTwo);
    hideBtn(btnThree);

    btnOne.onclick = instructionOne;
    textEffect();
}

initialSetup();

// messages

const messages = [
  {
    name: 'instruction_one',
    text: '<p>What, you think we have all day? You need to fix the thermo-proto-solar engine before the alien pirate spaceship bursts into flames.</p>',
    button_text: ['Thermo-proto what...?'],
    on_click: [instructionTwo]
  },
  {
    name: 'instruction_two',
    text: '<p>Thermo-robo-lobar engine, you dim-wit. You have no idea how to do that, right? Well, that is none of my business. Good luck!</p>',
    button_text: ['Wait...!'],
    on_click: [twoDoors]  
  },
  {
    name: 'two_doors',
    text: '<p>You are on an alien pirate spaceship, of course.</p><p>There\'s a door to your left with a sign that says "Come on in!", and one to your right that says "Don\'t you even think about it". Which do you choose?</p>',
    button_text: ['Left', 'Right'],
    on_click: [left, right] 
  },
  
  {
    name: 'right',
    text: '<p>Is it rebellious spirit or are you just stupid?</p><p>Anyway, Gobble the Gobbling Monster gobbles you up. I hope you\'re proud of your choices.</p>',
    button_text: ['Restart'],
    on_click: [reset]
  },
  
  
  {
    name: 'left',
    text: '<p>A little elf with glowing blue skin is doing laudry.</p><p>He looks up at you and starts laughing histerically.</p>',
    button_text: ['What, what is it??', 'Who are you?', 'Stop laughing you under-evolved smurf!'],
    on_click: [whyAmIBeingRidiculed, whoAreYou, smurf]
    
  },
  
  {
    name: 'why_am_i_being_ridiculed',
    text: '<p>He laughs even harder, pointing at you and rolling on the floor.</p>',
    button_text: ['Stop laughing you under-evolved smurf!'],
    on_click: [smurf]
  },
  
  {
    name: 'who_are_you?',
    text: '<p>"That\'s none of your business. Here, take this key and this bag of chips and hurry to the techno roboidical room."</p>',
    button_text: ['The what room again?', 'How the hell should I know...!?', 'Shut up and take the key and chips.'],
    on_click: [whatRoom, where, takeKey]
  },
  
  {
    name: 'smurf',
    text: '<p>He does as you request. But then he pulls an object from who knows where that looks suspiciously like a bazooka and blasts your impolite ass to pieces. Seriously, when did it seem like a good idea to insult a glowing creature on an alien spaceship?!?</p>',
    button_text: ['Restart'],
    on_click: [reset]
  },
  {
    name: 'what_room',
    text: '<p>"<em>The</em> room, you dumbass! The one you\'re supposed to be in in five minutes if you don\'t want Madama Bone Cracker to crack your bones!"</p>',
    button_text: ['Where the hell...?!', 'Shut up and take the key and chips.'],
    on_click: [where, takeKey]
  },
  {
    name: 'where',
    text: '<p>"Oh, you\'ll find it, <em>eventually</em>... But I\'d try to find it in less than five minutes if I were you!"</p>',
    button_text: ['Listen...'],
    on_click: [listen]   
  },
  
  {
    name: 'listen',
    text: '<p>He starts to look quite annoyed. He reaches a hand in a pocket he does not have because he is not wearing any clothes (laundry) and starts pulling out something alarmingly similar to a bazooka</p>',
    button_text: ['Shut up and take the key and chips.'],
    on_click: [takeKey]  
  },
  
  {
    name: 'take_key',
    text: '<p>You roam this spectral retro futuristic bluish maze of a spaceship until you find yourself in front of two aliens guarding a door.</p>',
    button_text: ['Ask what they\'re guarding', 'Try to force your way in', 'Pretend you\'ve just remembered something and go right back where you came from.'],
    on_click: [askGuards, breakIn, goBack]
  },
  
  {
    name: 'ask_guards',
    text: '<p>"A door." Duh.</p>',
    button_text: ['Try to force your way in', 'Pretend you\'ve just remembered something and go right back where you came from.'],
    on_click: [breakIn, goBack]
  },
  
  {
    name: 'break_in',
    text: '<p>What the hell were you thinking? This door doesn\'t even have anything to do with you! You\'re just wasting time while you should be reaching the robokobo flame-flamboco room and prevent this ship from exploding in your face! Jeez!</p><p>Anyway, in case it wasn\'t obvious already, you\'re dead. Acting like a fool instead of doing your job. I am so disappointed in you</p>',
    button_text: ['Restart'],
    on_click: [reset]
  },
  
  
  {
    name: 'go_back',
    text: '<p>Chicken. Anyway, at least you\'re not <em>dead</em> like your usual...</p><p>You hear a melodious singing, a voice so sweet it moves you to tears and makes the tip of your nose tremble.</p>',
    button_text: ['Follow the voice', 'I dont\'t give no fuck about voices'],
    on_click: [followVoice, fuckThemVoices]
    
  },
  {
    name: 'follow_voice',
    text: '<p>You\'re not that good at... well, <em>anything,</em> but the voice seems to be getting closer, even though you\'re <em>clearly</em> always choosing the wrong direction...</p><p>It\'s almost as if... it <em>wanted</em> to be found...</p>',
    button_text: ['You know what, nevermind, I uh... have... things to do', 'Keep following', 'Stop a minute to use your brain'],
    on_click: [nevermind, keepFollowing, stop]
  },
  {
    name: 'nevermind',
    text: '<p>Good. Problem is you\'ve lost what little sense of direction you had in the first place, and this spaceship is starting to look more and more like a labyrinth designed by a sadistic programmer and less like whatever the hell an alien pirate space ship is supposed to look like.</p>',
    button_text: ['Throw up', 'Enter the first room you find on your left', 'Take a potato chip... and <em>eat</em> it.'],
    on_click: [throwUp, firstRoom, potatoChip] 
  },
  {
    name: 'keep_following',
    text: '<p>Have you never heard of sirens? mermaids? deceiving creatures that lure the senseless dim-wits like yourself to a painful death through their enchanting lullabies? where the hell have you lived?</p><p>Anyway, this is just an alien mermaid, not a regular one, and a pirate alien on top of that, so she won\'t drown you or eat you. She\'ll try to rob you and then skin you alive in anger when she finds out you have absolutely nothing, not even an acorn in your pockets.</p>',
    button_text: ['Restart.'],
    on_click: [reset]
    
  }, 
  {
    name: 'stop',
    text: '<p>You don\'t have a minute, and you clearly don\'t have a brain either. You\'re horribly late for the rumba-koomba-shalumba room, and Madama Bone Cracker is <em>not</em> of patient disposition. You do not go to the mountain, but the mountain <em>does</em> come to you, and breaks every single one of your bones, alphabetically.</p>',
    button_text: ['Restart.'],
    on_click: [reset]
    
  },
  
  {
    name: 'throw_up',
    text: '<p>Eww, gross! Does it seem like a respectable thing to do, puking on the freshly cleaned floor of an alien pirate retro futuristic spaceship as if it were a public toilet, or worse, your own home? Do you think the floors clean themselves? Or that the people in charge of keeping them clean <em>enjoy</em> scrubbing away your half-digested breakfast? were you raised in a jungle by orangutans? I should just make you start it all over again! That\'s it, i\'m killing you. Bye. Maybe that\'ll knock some sense into you.</p>',
    button_text: ['Restart.'],
    on_click: [reset]
    
  },
  {
    name: 'first_room',
    text: '<p>Oh no! This is the Turquoise People Muncher\'s room! There he is! Run!!!!!!</p>',
    button_text: ['Run.', 'Don\'t worry, he only munches turquoise people.'],
    on_click: [run, dontRun]
    
  },
  {
    name: 'potato_chip',
    text: '<p>You feel a power unlike any you\'ve ever felt or imagined. It courses through your veins as you feel like the god of a new world. The voice of the siren becomes more and more distant, the walls stop closing in on you and the suffocatingly narrow hallway becomes larger and more illuminated. Right in front of you you see a door, and half a dozen neon signs pointing at it:  "Roomba kaloomba!", "Shimba Shalimba Technical Robo-Room", "MamboCarambo Sedano e Cilantro!", "This is the room you\'re looking for", "The jibby-tippy, lollo-lippy, whatever just get the hell inside already". </p>',
    button_text: ['Get in.'],
    on_click: [getIn]
    
  },
  {
    name: 'fuck_them_voices',
    text: '<p>Wow, what a romantic soul of poetic disposition... Anyway, you keep looking for the Zoomba Loomba Techno Disco Room, and soon enough you see a door that, you suspect, is the one you\'re looking for. This suspicion is born because of the very subtle neon signs poiting at it: "Fucking finally, you moron", "Oh wow, it only took you three goddamn years!", "I honestly forgot you were even supposed to come".</p>',
    button_text: ['Get in.'],
    on_click: [getIn]
    
  },
  {
    name: 'run',
    text: '<p>My god, you call <em>that</em> running? whatever. Lucky for you the Turquoise People Muncher is kinda slow, and he also thought you were a monkey and not a human, so it didn\'t even try to chase you. Sometimes growing up in a jungle raised by orangutans can come in handy.</p><p>While you run screaming like an idiot and waving your arms about as if trying to shake off a tarantula from your body, you slam your stupid nose against a closed door. There\'s a sign on it that reads: "Shut up already, what is all this noise! You\'re late. get yo ass in."</p>',
    button_text: ['Get in.'],
    on_click: [getIn]
    
  },
  {
    name: 'dont_run',
    text: '<p>...</p><p>I... have no words. Do you think I told you to run because I like seeing you throw your pathetic little legs about this place while you hiss like a frightened kettle? The one time I try to <em>help</em>... Well, you\'re obviously being munched to death right now, so let\'s just talk later.</p>',
    button_text: ['Restart.'],
    on_click: [reset]
    
  },
  {
    name: 'get_in',
    text: '<p>Well, well, well... look who\'s finally here! Madama Bone Cracker is playing Shanghai with the Captain, and that\'s the only reason she doesn\'t snap your spine, as you are definitely, extremely, unforgivably late. Without raising his gaze from the Shanghai game, the Captain tells you: "You\'re going to need to talk to the chef. But don\'t let him eat you". He throws a torchlight at you. </p>',
    button_text: ['Ask some stupid question like you usually do.', 'Go find the chef.', 'Demand a map of the damn place.'],
    on_click: [stupidQuestion, findChef, map]
    
  },
  {
    name: 'stupid_question',
    text: '<p>They don\'t even acknowledge that you\'re still here. You\'re like a flea, less than a flea if possible. </p>',
    button_text: ['Go find the chef.', 'Demand a map of the damn place.'],
    on_click: [findChef, map]
  },
    
  
  {
    name: 'map',
    text: '<p>Excuse me? I don\'t think you\'re in the position to <em>demand</em> anything. Besides, a map would be useless. The place switches constantly between different planes of reality, going from one possible layout to the next each second. I thought that would be obvious by now even to someone like you.</p>',
    button_text: ['Go find the chef.'],
    on_click: [findChef]
      
  },
  {
    name: 'find_chef',
    text: '<p>So, what did the Captain mean by "Don\'t let him eat you"? Aren\'t you curious? Nervous? Scared? Do you have a brain at all? Anyway, it\'s not like you got any choice. You go looking for the chef, but you don\'t know what he looks like, what his name is, where he could be, I mean, couldn\'t you ask while you were there? you just, "Find the chef", "Sure!", and left? How exactly are you gonna find the chef, pray tell? What\'s your plan here? You don\'t have one. Of course you don\'t. Why would you? You\'re just a dim-wit.</p>',
    button_text: ['...'],
    on_click: [rant]
      
  },
  {
    name: 'let_me_rant',
    text: '<p>Oh, look! Here\'s the chef. That boar face and the chicken legs clearly indicate that he\'s a chef. Go on, talk to him.</p>',
    button_text: ['So, uh... the Captain sent me to talk to you.', 'Are you the chef?'],
    on_click: [talkChef, askChef]
      
  },
  {
    name: 'talk_chef',
    text: '<p>"I ain\'t got no Captain. I take no orders and I don\'t talk to food". So, turns out he wasn\'t the chef after all. The boar face and chicken legs got me confused. He\'s just a hungry alien roaming the spaceship for no reason at all. You get eaten. Sorry about that.</p>',
    button_text: ['Restart.'],
    on_click: [reset]
      
  },
  
  {
    name: 'ask_chef',
    text: '<p>"No. Are you the food?"</p>',
    button_text: ['Hell no.'],
    on_click: [hellNo]
      
  },
  {
    name: 'hell_no',
    text: '<p>"Pity. I\'ll eat you anyway."</p>',
    button_text: ['I taste horrible.', 'Run!!!!!!'],
    on_click: [badTaste, fleeAtOnce]
  },
  {
    name: 'bad_taste',
    text: '<p>"...Yeah, I can tell... So you\'re looking for the chef, eh? He\'s in the next room. Tell him to give me someone to eat that tastes better than you"</p>',
    button_text: ['Thank you sir, yes sir.', 'Hey! I\'ll let you know Mr Monster that I am the most scrumptious, delicious, mouth-watering snack on the whole freaking ship!'],
    on_click: [thankYou, sellYourself]
  }, 
  
  {
    name: 'flee_at_once',
    text: '<p>Wait, where the hell are you going now?? Your legs are not that fast, you know? You could at least try to cunningly think your way out of the situation. Ever heard of brains? neurons? Well, whatever. The alien caught you. See you later!</p>',
    button_text: ['Restart.'],
    on_click: [reset]
  },
  
  {
    name: 'thank_you',
    text: '<p>Pathetic. Anyway, in the next room a boar-faced, eagle-legged alien is waiting for you. He looks you up and down as if barely restraining himself from biting you. "You must be the dinne—uhm, the technical-issue-fixer, I mean". He is cutting onions with a very sharp knife. "I have been told to give you something." He produces a carrot from his pocket. </p>',
    button_text: ['Take the carrot', 'Give him the chips.'],
    on_click: [carrot, wantAChip]
    
  },
  
  {
    name: 'sell_yourself',
    text: '<p>Good job. Very well done. The perfect moment to stand up for yourself. The one time your grovelling nature could have served you well, you had to go and decide to fight against bullies. Your talent for wrong choices is honestly inspiring. You\'re still dead tho.</p>',
    button_text: ['Restart.'],
    on_click: [reset]
    
  },
  
  {
    name: 'want_a_chip',
    text: '<p>"I usually eat technical-issue-fixers, but I\'ll give it a try..."</p><p>His head is flooded by the light of pure knowledge and understanding. He is transfixed. His eyes are <em>seeing</em> when before they were merely looking. This is your chance.</p>',
    button_text: ['Take the carrot and GET THE HELL OUT AS FAST AS FREAKING LIGHTENING.'],
    on_click: [getHellOut]
    
  },
  
  
  {
    name: 'carrot',
    text: '<p>You take the carrot from his big hand and you can\'t help but notice the long, sharp claws, as well as the long, sharp look he gives you as you start to back away... Is it your imagination or is he licking his lips? Are your ears playing a trick on you, or did you just hear his stomach grumble? Well champ, are you gonna flee or are we gonna stay here admiring the beast until it eats us?</p>',
    button_text: ['Run!!!!!!', 'Look, boss, I wouldn\'t eat me if I were you—'],
    on_click: [flee, useCunning]
    
  },
  
  {
    name: 'flee_from_chef',
    text: '<p>Kick them legs! Higher! Faster!! He\'s gonna get you! Go!!! Don\'t stop! You can do it! I believe in you! ...No, wait, I was wrong... No, you actually might... Nope, I was joking... Yes, yes, good move! Show him! Right that way! No, not <em>that</em> way, that\'s the Brain Slurper\'s Cave!! Not that he would find much to slurp with you... </p>',
    button_text: ['Stop to catch your breath', 'Keep running as if your damn life depended on it (it does).'],
    on_click: [catchBreath, keepRunning]
    
  },
  
  {
    name: 'use_cunning',
    text: '<p>Really? Does this look like the moment to try out your persuasive skills? Do you <em>enjoy</em> dying in the stupidest ways? are you trying to stress me out? i think you\'re trying to stress me out. you\'re definitely succeeding in stressing me out.</p>',
    button_text: ['Restart'],
    on_click: [reset]
    
  },
  
  {
    name: 'catch_breath',
    text: '<p>...</p><p>What. Why. You were almost safe... Now the monsters will get to you... Oh... Oh, no, the Brain Slurper took one sniff at you and immediately understood there\'s nothing to feast on, and the chef is distracted by the sight of that juicy Brain Slurper right in front of him... They both left you alone. Tch. Pathetic. You\'re not even worth eating.</p>',
    button_text: ['...'],
    on_click: [getHellOut]
    
  },
  
  {
    name: 'keep_running',
    text: '<p>I mean, you really didn\'t need to run <em>that</em> hard. You could have wasted a second or two to catch your breath, and now your heart wouldn\'t be pumping like crazy in your throat, and you wouldn\'t be feeling this weak and dizzy, and you wouldn\'t collapse on the ground and die of a heart attack. I mean, choices.</p>',
    button_text: ['...'],
    on_click: [hello]
    
  },
  {
    name: 'hello',
    text: '<p>Am I annoying you? Are you fed up with this stupid game? would you like to snap my neck and kick my lifeless body? jeez, what\'s wrong with you... It\'s not like i am <em>forcing</em> you to play, you\'re the one who keeps on clicking "Restart". Why don\'t you take responsibilily for your actions? You are the one who keeps making poor choices, so stop blaming my insufferable arbitrariness and deceiving tone for your stupid deaths. Bitch.</p>',
    button_text: ['Restart? <3'],
    on_click: [reset]
    
  },
  
  {
    name: 'get_the_hell_out',
    text: '<p>Wow, it has been a while since you last died... I am impressed. You can rest a bit now. You deserve it.</p><p>On second thought, I don\'t have all day, so let\'s get right into it: look! A ghost!!!</p>',
    button_text: ['Where?!?!'],
    on_click: [whatGhost]
    
  },
  
  {
    name: 'what_ghost',
    text: '<p>Quick, use the torchlight!!</p>',
    button_text: ['But it\'s not dark in here...', 'Stop bitching and use the damn torch'],
      on_click: [notDarkYet, useTorch]
  },
  
  
  {
    name: 'not_dark_yet',
    text: '<p>I am going to punch you so hard.</p>',
    button_text: ['Stop bitching and use the damn torch'],
      on_click: [useTorch]
  },
  
  {
    name: 'use_torch',
    text: '<p>All the light gets sucked in your torchlight as soon as you turn it on, and in the spooky darkness all you see is a spooky glowing blue ghost. It is quite cute.</p>',
    button_text: ['Pet the ghost', 'Scream like a macho man very insecure about his virility (it goes like this: "kyaaaaaaaaa!!!"'],
      on_click: [petGhost, kyaa]
  },
  
  {
    name: 'pet_ghost',
    text: '<p>it bites you.</p>',
    button_text: ['Scream like a macho man very insecure about his virility (it goes like this: "kyaaaaaaaaa!!!"'],
      on_click: [kyaa]
  },
  
  {
    name: 'kyaa',
    text: '<p>The ghost chuckles. "Hi! what do you want?"</p>',
    button_text: ['Have a nervous breakdown and start confusingly listing all your adventures up to this point with tears streaming down your face', '...I have no idea.'],
      on_click: [breakdown, noIdea]
  },
  
  
  {
    name: 'breakdown',
    text: '<p>Oh wow. What a work of art.</p><p>The ghost gingerly pats you on the head."Do you want a cookie?"</p>',
    button_text: ['Accept the cookie', 'Refuse the cookie'],
      on_click: [acceptCookie, refuseCookie]
  },
  
  
  {
    name: 'no_idea',
    text: '<p>"...Well, I\'ll... leave you to your things, then..." The ghost starts disappearing.</p>',
    button_text: ['Have a nervous breakdown and start confusingly listing all your adventures up to this point with tears streaming down your face'],
      on_click: [breakdown]
  },
  
  {
    name: 'accept_cookie',
    text: '<p>This is not a cookie. It appears to be some sort of device with a glowing red button and the words "You are supposed to push it, idiot" carved on it.</p>',
    button_text: ['Push the button', 'You damn fool. Just push the goddamn button.'],
      on_click: [pushButton, pushButton]
  },
  
  {
    name: 'refuse_cookie',
    text: '<p>The ghost appears deeply saddened by your refusal. I hope you are proud of yourself. Poor little ghosty, it was just trying to be nice and cheer you up because you were flooding the ship with your snot sobbing like a five year old about who knows what exactly. Now the ghost is sobbing uncontrollably.</p>',
    button_text: ['Console the ghost.'],
      on_click: [consoleGhost]
  },
  
  
  {
    name: 'push_button',
    text: '<p>You get transported to a very technical-looking room, full of weird computer screens and buttons and flickering lights and funny sounds and fifteen keyboards, all missing the letter F. On one of the screens, in big scary letters, you read the words "DANGER. ERROR. FIX ME OR WE GO BOOM". Ha. Whatcha gonna do now, my pretty gender-neutral little friend?</p>',
    button_text: ['Slam your head on the keyboard', 'Start pushing random buttons', 'Ask the heavens for help'],
      on_click: [slamHead, randomButtons, askHeaven]
  },
  
  
  {
    name: 'console_ghost',
    text: '<p>You try to pat the ghost\'s head, but your hand goes right through it. So you search through your pockets for something that might cheer him up, but the only thing you find is a key...</p><p>The ghost\'s eyes light up (well, not really, they are two black holes, nothing would light them up, but it is very interested in the key). "I know where the key goes!"</p>',
    button_text: ['Ask for clarification'],
      on_click: [clarification]
  },
  
  
  {
    name: 'clarification',
    text: '<p>"Follow me!" The ghost leads you to a very technical-looking room, filled with computer screens and lights and noises and bla bla bla, and you see on one screen a very comforting message:"WE ABOUT TO GO BOOM. FIX ME PLEASE".</p>',
    button_text: ['Slam your head against the keyboard', 'Let ghosty save the day'],
      on_click: [slamHead, leaveItToGhosty]
  },
  
  
  {
    name: 'slam_head',
    text: '<p>Your head-slam types "fuck this shit". The universe stops a moment in shock due to the high improbabilty of this event (accentuated by the absence of the F key on all keybords), tries to come to terms with it, fails, and then collapses. Congratulations. You have single-handedly killed everything that ever was or will be.</p>',
    button_text: ['PLAY AGAIN?'],
      on_click: [reset]
  },
  
  
  {
    name: 'random_buttons',
    text: '<p>Hey, good job! The red menacing message is gone! The weird noises stop and the ship seems to be less close to exploding than it was up until now. You\'re hailed as the best technical-issue-fixer in the galaxy and get offered a job on Her Majesty The Galactic Empress\'s Alien Pirate Space Ship. Unfortunately, your luck is short-lived, and you get executed as a scammer when it becomes clear to everyone that you have no freaking clue what you are doing. Oops.</p>',
    button_text: ['PLAY AGAIN?'],
      on_click: [reset]
    
  },
  
  
  {
    name: 'ask_heaven',
    text: '<p>An annoyed voice answers your screams: "The key, you dumbass! And keep it down, I\'m trying to sleep up here."</p><p>Key? Oh, yes, the key! That elf gave you a key! You\'re so dumb you forgot about it all this time! Quick, look for a keyhole!</p>',
    button_text: ['Put key in keyhole'],
      on_click: [useKey]
    
  },
  {
    name: 'leave_it_to_ghosty',
    text: '<p>"The key! It needs to be put in that keyhole! The prophecy foretold that a great catastrophe would be stopped when a fool with a totally useless carrot in his pockets and mustaches drawn on their face with a sharpie returns the key to its place!" (Oh, yeah, guess I should tell you somebody drew a nice pair of mustaches on your stupid face with a sharpie.)</p>',
    button_text: ['Put key in keyhole'],
      on_click: [useKey]
    
  },
  
  
  {
    name: 'use_key',
    text: '<p>A mystical light floods the place. Angels are singing somewhere in their dim abodes, the noises of the technical stuff stop and the red ominous words disappear. In their place, this message can be read: "Yuhuu, nice job. Now get the hell out of here". You did it. You saved the ship. I\'m proud of you. You...</p><p>You hit random keys on the keyboard on accident while celebrating. You type "my god that was a bumpy ride, wasn\'t it?". The universe stops a moment in shock due to the high improbabilty of this event, tries to come to terms with it, fails, and then collapses. Congratulations. You have single-handedly killed everything that ever was or will be. </p>',
    button_text: ['PLAY AGAIN?'],
      on_click: [reset]
    
  },
]

// now the fun part (i'm being sarcastic I hated it)

function displayMessage(index) {
 message.innerHTML = messages[index].text;
}

function handleBtnText(index, btn, btnIndex) {
  btn.innerHTML = messages[index].button_text[btnIndex];
}

function handleOnClick(index, btn, btnIndex) {
    btn.onclick = messages[index].on_click[btnIndex];
}

function handleBtn(index, btn, btnIndex) {
    if (isBtnAvailable(index, btn, btnIndex)) {
        handleBtnText(index, btn, btnIndex);
        handleOnClick(index, btn, btnIndex);
    }
}

function isBtnAvailable(index, btn, btnIndex) {
    if (messages[index].button_text[btnIndex]) {
        showBtn(btn);
        return true;
    } else {
        hideBtn(btn);
        return false;
    }
}

function answer(index) {
 displayMessage(index);

 handleBtn(index, btnOne, 0);
 handleBtn(index, btnTwo, 1);
 handleBtn(index, btnThree, 2);

 textEffect();
}

// there has to be a better way to do this...

function instructionOne() {
 answer(0);
}

function instructionTwo() {
 answer(1);
}

function twoDoors() {
  answer(2);
  }


function right() {
  answer(3);
}


function left() {
  answer(4);
}

function whyAmIBeingRidiculed() {
  answer(5);
}

function whoAreYou() {
  answer(6);
}

function smurf() {
  answer(7);
  }

function whatRoom() {
  answer(8);
  }

function where() {
  answer(9);
  }

function listen() {
  answer(10);
}

function takeKey() {
  answer(11); 
}

function askGuards() {
  answer(12);
}

function breakIn() {
  answer(13);
}

function goBack() {
  answer(14);
}

function followVoice() {
  answer(15);
}

function nevermind() {
  answer(16);
}

function keepFollowing() {
  answer(17);
}

function stop() {
  answer(18);
}

function throwUp() {
  answer(19);
}

function firstRoom() {
  answer(20);
}

function potatoChip() {
answer(21);
}


function fuckThemVoices() {
  answer(22);
}

function run() {
  answer(23);
}

function dontRun() {
  answer(24);
}

function getIn() {
  answer(25);
}

function stupidQuestion() {
  answer(26);
}

function findChef() {
  answer(28);
}

function map() {
  answer(27);
}

function rant() {
  answer(29);
}


function talkChef() {
  answer(30);
}


function askChef() {
  answer(31);
}

function hellNo() {
  answer(32);
}


function badTaste() {
  answer(33);
}

function fleeAtOnce() {
  answer(34);
 }

function thankYou() {
  answer(35);
 }

function sellYourself() {
  answer(36);
 }

function wantAChip() {
  answer(37);  
}

function carrot() {
  answer(38);
}

function flee() {
   answer(39);
}

function useCunning() {
   answer(40);
}

function catchBreath() {
   answer(41);
}

function keepRunning() {
   answer(42);
}

function hello() {
   answer(43);
}

function getHellOut() {
   answer(44);
}

function whatGhost() {
   answer(45);
}

function notDarkYet() {
   answer(46);
}

function useTorch() {
   answer(47);
}

function petGhost() {
   answer(48);
}

function kyaa() {
   answer(49);
}

function breakdown() {
   answer(50);
}

function noIdea() {
   answer(51);
  }

function acceptCookie() {
   answer(52);
}

function refuseCookie() {
   answer(53);
  }


function pushButton() {
   answer(54);
}


function consoleGhost() {
   answer(55);
}


function clarification() {
   answer(56);
}


function slamHead() {
   answer(57);
}

function randomButtons() {
   answer(58);
}

function askHeaven() {
   answer(59);
}

function leaveItToGhosty() {
   answer(60);
}

function useKey() {
   answer(61);
}

// clean and reset

function reset() {
  initialMessageState();

  hideBtn(btnTwo);
  hideBtn(btnThree);
}

function initialMessageState() {
    btnOne.innerHTML = '...';
    btnOne.onclick = instructionOne;
    message.innerHTML = '<p>You\'re late. Where have you been?</p>';
    textEffect();
}