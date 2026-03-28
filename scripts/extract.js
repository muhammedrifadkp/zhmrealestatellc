const fs = require('fs');

const html = fs.readFileSync('psinv_units.html', 'utf8');
const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);

if (match) {
  const data = JSON.parse(match[1]);
  fs.writeFileSync('psinv_units.json', JSON.stringify(data.props, null, 2));
  console.log("Extracted to psinv_units.json");
} else {
  console.log("No NEXT_DATA found.");
}
