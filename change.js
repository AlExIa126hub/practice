function changeText(elementId, newText) {
  var element = document.getElementById(elementId);
  if (element) {
    element.textContent = newText;
  } else {
    console.log('Element not found');
  }
}
//this is a comment
// Example usage:
// changeText('myElementId', 'New text content');