# spaceship-text-adventure

- [intro](#intro)
- [JS notes](#JS-notes)
- [total lack of value of the project as an actual game](#disclaimer)
- [flickering effect notes](#flickering-effect-notes)
- [responsiveness notes](#responsiveness)

## intro

This is a silly game I made as JS exercise some time ago on codepen, and I decided to update it because I stumbled upon it and thought Hey, I think I could do a better job this time.

Now, the truth of that statement remains up to debate, mostly because I still have dubious design skills and completely absent aesthetic sense (which is why I gave up the style part quickly enough and just settled on this vaguely retro futuristic my-tv-is-broken-and-this-creepy-computer-hates-me look. the initial project was waaay more ambitious than that).

## JS notes

But I think I did a decent job at cleaning up the JS and making it more DRY, although I ended up with 12345678543 functions... But I thinks it's more readable! I think if someone was to look at that code, someone beside me, someone who has no idea what's going on, I think they could get away with a minor headache instead of the Mother Of All Headaches that the older version would give.

I think my approach makes the code really long (and boring to write I was about to throw myself off a bridge), since you create a fraczillion different functions that all call back to the same function with a different index as argument, and I'm pretty sure that it is a very stupid method and that there is another smarter, more efficient way to do it. 
But alas, poor yorick, I have no idea what it is, so for the moment this is as good as it's gonna get.

## disclaimer

As for the story, there is none. I jotted it down randomly as I was coding, choosing the first idea that came to me without bothering to check if it made sense or not. There is no planning, no care, no thought behind it. So don't be too harsh on it

### flickering effect notes

It flickers! It's alive! 
For my future self, because I know I'm going to forget all about this and waste a lifetime to figure it out again:


```
function textEffect() {
  addUnderscore();
  delay = 0;

 // rest of code...
}
```

- if you reset delay to 0 inside this function you don't need to call a separate resetDelay() function or reset the value everytime you call textEffect() from within a function;

```
  Array.from(paragraphs).forEach(p => {

    const letters = p.textContent.trim().split('');
    p.innerHTML = ''; 
```

- you need to empty the inner HTML of the paragraphs AFTER you've stored the letters in an array you dumb framboise, else what content are we putting inside all our little spans could you use your brain for the love of everything that is holy;

```
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
```

- I tried adding that flicker class in about fifteen different places and with thirteen different methods, but the damn underscore refused to flicker. 

If I added the underscore and the flicker class before splitting the sentences in letters it would appear and flicker long before the whole message was done appearing, and if I added it after it would appear just where I wanted it and when I wanted it but cruelly denied me the flickering. 
So I thought about adding the underscore before, but the flicker class after, with this line

```
underscore.classList.add('flicker')
```

which was rudely ignored. If I'm being honest I don't really know why, because as far as I can tell I'm doing the same thing, but it only works if I access the rascal underscore like so: 

```
paragraphs[paragraphs.length - 1].lastElementChild.classList.add('flicker');
```

Do I understand it? No, do I care? Relatively, because I'm so happy it finally works I could handcraft a statue of the gods of code (the GODES!) and kneel to it and kiss its feet.
But I won't, 'cause I have some coding to do. 

## responsiveness 

(Responsitivity...?)
It's responsive enough, I guess...
It looks ugly on mobile (it looks ugly everywhere if we're being honest) especially when the message displayed is longer. Maybe I'll try making a prettier version at some point.