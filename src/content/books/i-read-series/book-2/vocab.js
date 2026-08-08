// Vocabulary data
export const VOCAB = [
  {g:'Verbs'},

  {ar:'نَثَرَ',en:'he scattered / sprinkled (past)',t:'v'},
  {ar:'يَنْثُرُ',en:'he scatters / sprinkles (present)',t:'v'},
  {ar:'نَثْر',en:'scattering (masdar)',t:'v'},
  {ar:'اُنْثُرْ',en:'scatter! (command)',t:'v'},

  {ar:'صَعِدَ',en:'he went up / climbed (past)',t:'v'},
  {ar:'يَصْعَدُ',en:'he goes up / climbs (present)',t:'v'},
  {ar:'صُعُود',en:'ascending / climbing (masdar)',t:'v'},
  {ar:'اِصْعَدْ',en:'go up! / climb! (command)',t:'v'},

  {ar:'مَسَحَ',en:'he wiped (past)',t:'v'},
  {ar:'يَمْسَحُ',en:'he wipes (present)',t:'v'},
  {ar:'مَسْح',en:'wiping (masdar)',t:'v'},
  {ar:'اِمْسَحْ',en:'wipe! (command)',t:'v'},

  {ar:'طَلَبَ',en:'he asked for / requested (past)',t:'v'},
  {ar:'يَطْلُبُ',en:'he asks for / requests (present)',t:'v'},
  {ar:'طَلَب',en:'requesting / a request (masdar)',t:'v'},
  {ar:'اُطْلُبْ',en:'ask for! / request! (command)',t:'v'},
];

// flat vocab for testing (no group headers)
export const VOCAB_FLAT = VOCAB.filter(v => !v.g);