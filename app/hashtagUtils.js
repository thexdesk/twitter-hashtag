import regexes from './hashtagRegex';

export function extractHashtags(text) {
  let hashtagsOnly = [];
  let hashtagsWithIndices = extractHashtagsWithIndices(text);

  for (let i = 0; i < hashtagsWithIndices.length; i++) {
    hashtagsOnly.push(hashtagsWithIndices[i].hashtag);
  }

  return hashtagsOnly;
}

export function extractHashtagsWithIndices(text) {
  if (!text || !text.match(regexes.hashSigns)) {
    return [];
  }

  var tags = [];

  text.replace(regexes.validHashtag, function(match, before, hash, hashText, offset, chunk) {
    var after = chunk.slice(offset + match.length);
    if (after.match(regexes.endHashtagMatch)) {
      return;
    }
    var startPosition = offset + before.length;
    var endPosition = startPosition + hashText.length + 1;
    tags.push({
      hashtag: hashText,
      indices: [ startPosition, endPosition ],
    });
  });

  return tags;
}
