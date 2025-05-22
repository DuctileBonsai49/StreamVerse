let keySequence = [];
const unlockCode = ['5', '4', '2', '0', '1', '3'];

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey) {
    keySequence.push(e.key);

    if (keySequence.slice(-6).join('') === unlockCode.join('')) {
      document.getElementById('verified-badge').style.display = 'inline-block';
      alert("✔️ Du bist jetzt VERIFIED!");
    }
  }
});
