import {extractHashtags, extractHashtagsWithIndices} from './hashtagUtils';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {

  // initial load
  performExtraction();

  $('.input')[0].oninput = () => {
    performExtraction();
  };

});

function performExtraction() {
  const text = $('.input').val();

  const result = extractHashtags(text);
  const resultWithIndices = JSON.stringify(extractHashtagsWithIndices(text), null, '  ');

  $('.result').html(`<strong>Hashtags:</strong> [${result.join(', ')}]`);
  $('.resultWithIndices')
    .html(`<strong>Hashtags w/ Indices:</strong> <pre>${resultWithIndices}</pre>`);
}
