---
title: "Selenium locators. Which one should you pick?"
excerpt: "Selenium offers us eight location strategies in Web Driver. Lets dive into which locator to pick when automating a test case. "
coverImage: "/assets/blog/selenium.png"
createdOn: "2020-03-18T05:35:07.322Z"
updatedOn: "2020-03-18T05:35:07.322Z"
ogImage:
  url: "/assets/blog/selenium.png"
---

Selenium offers us eight8 location strategies in Web Driver.  

Even though there are eight, in practice we mostly
use `id`, `name` , `xpath` or `css selector`. The other locator
strategies, `className`, `linkText`, `partial linkText` or `tagName` are used very rarely.

## What if the element contains all the location strategies?

Consider below HTML snippet:    

`<div id="element" class="class-name" name="element_name" style="color: red;">Element with all locator strategies</div>`

Now which locator strategy should you pick to locate above element?

Without a doubt, **id**!  
Why? Because **by W3 standards id should be unique**.

- HTML4:  
  `id = name [CS] This attribute assigns a name to an element. This name must be unique in a document.`   

- HTML5:  
  `The id attribute specifies its element's unique identifier (ID). The value must be unique amongst all the IDs in the element's home subtree and must contain at least one character. The value must not contain any space characters.`

## What if the element does not contain an id attribute?

`<div class="class-name" name="element_name" style="color: red;">Element with all locator strategies</div>`

Then you can use **name** attribute, but you have to be careful here. Name may not be unique within your web page. If it
is unique, you can go ahead and use it.

## What if the element does not have id or name attributes?

Then you must choose between **Xpath** or **CSS Selector**.

It is said that CSS Selector is faster than xpath, it is also said that there is not much of a difference. This is an
ongoing debate in the testing community.

If you ask me, I would prefer to use CSS Selector whenever I can. But there are places that I cannot use CSS
Selector, and that is when I would switch to Xpath. For example only Xpath allows you to traverse the DOM or select non
HTML elements. If I want more flexibility I would go with Xpath. If not I prefer CSS Selector.  

So you need to evaluate your use case and select accordingly between these two.




Happy Testing!   
Nadeera

