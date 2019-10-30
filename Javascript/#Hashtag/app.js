function getHashtags(post) {
  tags = [];
  spl = post.split(' ');
  for(i = 0; i < spl.length; i++) {
    /^#+[a-z0-9]+$/i.test(spl[i]) ? tags.push(spl[i].replace(/#/g, '')) : 0;
  }
  return tags;
}
