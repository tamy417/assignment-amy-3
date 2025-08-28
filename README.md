                                 QUESTION 1
getElementById: When I want one element that has that one unique id i can use that, it gives me just that one element.

getElementsByClassName: I can use this when I want all elements that have the same class.When I have to do samethings in diffrent element i can set a class for all of them.It gives me a list of elements, and I can loop through them.

querySelector: We can use this to get the first element that matches any CSS selector, like a class, id, or tag. It only gives the first element in the page that matches the selector, even if there are many elements that match what I was loooking for.

querySelectorAll: We use this to get all elements that match a CSS selector, querySelector gives first only but querySelectorAll gives you everything that matches.


                                QUESTION 2
If I want to create and insert a new element in the DOM, I have to use document.createElement() to create the element, then set its content like innerText, innerHTML, class and finally insert it into the page using  appendChild(), prepend(), or insertBefore().


                               QUESTION 3
Event bubbling is when you do something on an element like click a button, and the event moves up to its parent elements automatically. First, the event happens on the element you clicked, hen it goes to the parent, then the grandparent, up to the top of the page. For example, if you click a button inside a div. The button knows you clicked it. Then the div also knows because the event bubbles up.


                              QUESTION 4
Event delegation is a technique where instead of adding an event listener to many individual child elements, you add a single listener to a parent element and let it handle events for its children. Suppose you have a list with 100 buttons. So instead of adding 100 click listeners in every button, you add one click listener on the <ul>. When a button is clicked, the event bubbles up, and your parent listener can check which button was clicked.	
Its useful because it saves memory and less memory means faster execution, works for dynamically added elements, and keeps your code cleaner so less mistake and easy to maintain.


                             QUESTION 5
event.preventDefault() stops the default action of an element or what the browser normally does. If we submitt a form it normally reloads the page so, preventDefault() stops that.
event.stopPropagation() stops the event from bubbling to parent elements. If you click a button inside a div. Normally, the div’s click listener would also run because of bubbling, stopPropagation() prevents the parent from noticing the click. So it stops the event from spreading to parent elements.
