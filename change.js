function changeText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
    element.textContent = newText;
  } else {
    console.log('Element not found');
  }
}
//this is a comment
//this is another comment
// Example usage:
// changeText('myElementId', 'New text content');