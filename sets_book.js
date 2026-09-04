/* sets/ 의 회차 파일을 모아 하나로 — 이 파일만 커밋한다(내용은 없다).
   모의고사(m01~m12) 를 앞에, 기출문제(g01~g05) 를 뒤에 둔다. */
const fs = require('fs'), path = require('path');
const D = path.join(__dirname, 'sets');
if(!fs.existsSync(D)){ module.exports = []; return; }
const rank = f => (f[0] === 'm' ? 0 : 1);
module.exports = fs.readdirSync(D)
  .filter(f => f.endsWith('.js'))
  .sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))
  .map(f => require(path.join(D, f)));
