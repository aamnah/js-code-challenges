/*
Implement .getElementsByAttribute()
getElementsByAttribute(att, value)
<div data-js-name = "foo">
*/

function getElementsByAttribute (attribute, attributeValue) {
  // 1. Get all elements
  // document.children() return a live HTMLCollection, not very useful
  // document.childNodes() returns a live NodeList, which comes with more methods
  // but we have to use .children() because it returns HTML 'elements' instead of .childNodes() that returns 'nodes'
  // alternatively, document.getElementsByTagName(*) will also give you all elements in the DOM, simple, retuens array
  let children = document.body.children // gets all elements in <body> (return live HTMLCollection)
  let elements = Array.from(children) // convert HTMLCollection to Array

  // 2. Check if the elements have the attribute
  // .hasAttribute() checks if an element has an attribute
  // .getAttribute() gets the value of an attribute
  elements.forEach(function (elem) {
    if (elem.hasAttribute(attribute)) { // return boolean, true/false

      // 3. Check if the attribute value also matches
      if (elem.getAttribute(attribute) === attributeValue) {
      
        // 4. Return the element
        console.info(elem)
        return elem
      }
    }
  })
}

getElementsByAttribute('id', 'foo')
