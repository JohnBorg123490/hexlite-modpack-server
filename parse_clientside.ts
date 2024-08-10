import fs from "fs";

fs.writeFileSync('excluded_mods.txt', fs.readFileSync('./clientside.txt', 'utf-8').split('\n').map(l => l.split('mods:')[1]).join('\n'));

