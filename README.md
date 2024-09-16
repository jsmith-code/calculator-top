# calculator-top
My repository for The Odin Project's [calculator](https://www.theodinproject.com/lessons/foundations-calculator).

# preview
**See a [live preview](https://jsmith-code.github.io/calculator-top/).**

# inspiration
After completing the required and extra credit features, I started looking at others' implementations to inform my own learning. Each project which inspires a rework in my own will be linked here, along with a summary of what was adapted.

### Zonwrk's calculator (https://github.com/Zonwrk/odin-calculator):

The original method of my calculator used a 'leftNum' and 'rightNum' to store two numbers. This meant each function required a check for whether to modify leftNum or rightNum, and updating the display required an input for what to update.

Zonwrk's calculator uses 'displayNum' and 'number1'. The key difference is that once the first number has been set in displayNum, it is stored in number1, and then displayNum is reset for the second number. This means most functions only need to interact with focusNum (including the update display function), which massively simplifies the checks involved for each function.

Because of this, I have reworked my code to match this method.

### codelikesuraj's calculator (https://github.com/codelikesuraj/calculator):

Originally, my calculator set onclick functions via the html file with the 'onclick' attribute. While I had considered using querySelector/querySelectorAll to add click functions through javascript only, seeing it implemented in this project is what made me decide to do it. 

It is much more efficient when assigning large groups of buttons (such as the operator or number buttons) to use querySelectorAll and loop through the NodeList. Additionally, onclick can only be used to set one function, which can pose some limitations (although this was not an issue here).

### Google search's calculator:

After comparing different styles of calculator, I found I preferred a more simplistic design, like google's calculator (the one you see when you search 'calculator' on google). When reworking my css style, I based my redesign off of it.