import {extractHashtags, extractHashtagsWithIndices} from './hashtagUtils';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {

  $('.button').click(function() {
    const text = $('.input').val();
    const result = extractHashtags(text);
    $('.result').text(result);
  });

});
