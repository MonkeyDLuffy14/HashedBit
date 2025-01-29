// javascript code goes here
const textContainer = document.getElementById('text-container');
const colorInput = document.getElementById('colorbox');
const colorButton = document.getElementById('colorchange');
const fontSizeSlider = document.getElementById('fontsize');
const italicButton = document.getElementById('italic');
const underlineButton = document.getElementById('underline');
const boldButton = document.getElementById('bold');
const fontList = document.getElementById('list');
const getStyleButton = document.getElementById('getstyle');
const cssProps = document.getElementById('css-props');

colorButton.addEventListener('click', () => {
  textContainer.style.color = colorInput.value;
});

fontSizeSlider.addEventListener('input', () => {
  textContainer.style.fontSize = fontSizeSlider.value + 'px';
});

italicButton.addEventListener('click', () => {
  if (textContainer.style.fontStyle === 'italic') {
    textContainer.style.fontStyle = 'normal';
  } else {
    textContainer.style.fontStyle = 'italic';
  }
});

underlineButton.addEventListener('click', () => {
  if (textContainer.style.textDecoration === 'underline') {
    textContainer.style.textDecoration = 'none';
  } else {
    textContainer.style.textDecoration = 'underline';
  }
});

boldButton.addEventListener('click', () => {
  if (textContainer.style.fontWeight === 'bold') {
    textContainer.style.fontWeight = 'normal';
  } else {
    textContainer.style.fontWeight = 'bold';
  }
});

fontList.addEventListener('change', () => {
  textContainer.style.fontFamily = fontList.value;
});

getStyleButton.addEventListener('click', () => {
  const style = window.getComputedStyle(textContainer);
  let cssText = '{';
  cssText += `color: ${style.color}; `;
  cssText += `font-size: ${style.fontSize}; `;
  cssText += `font-family: ${style.fontFamily}; `;
  cssText += `text-decoration: ${style.textDecoration}; `;
  cssText += `font-style: ${style.fontStyle}; `;
  cssText += `font-weight: ${style.fontWeight}; `;
  cssText += '}';
  cssProps.textContent = cssText;
});
