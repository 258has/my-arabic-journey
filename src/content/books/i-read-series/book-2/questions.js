// Sentence-builder question data for i-read-series Book 2 (v6 — consolidated sections)
export const ALL_Q = [
  // ===== SECTION 1: Eating & Drinking (أكل، شبع، شرب، حمد، طلب) =====
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"What did you eat?",answer:['مَاذَا','أَكَلْتَ؟'],extra:['أَيْنَ','مَتَى']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"I ate rice and chicken.",answer:['أَكَلْتُ','أَرُزًّا','وَدَجَاجًا'],extra:['سَمَكًا','لَحْمًا']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"Did you eat a lot? Yes, I ate a lot.",answer:['هَلْ','أَكَلْتَ','كَثِيرًا؟','نَعَمْ،','أَكَلْتُ','كَثِيرًا'],extra:['لَا','قَلِيلًا']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"I ate until I was full.",answer:['أَكَلْتُ','حَتَّى','شَبِعْتُ'],extra:['شَرِبْتُ','جُعْتُ']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"I asked for food, ate, and thanked God.",answer:['طَلَبْتُ','الطَّعَامَ','وَأَكَلْتُ','وَحَمِدْتُ','اللهَ'],extra:['شَرِبْتُ','نَسِيتُ']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"Thank God, I'm fine.",answer:['الْحَمْدُ','لِلَّهِ','أَنَا','بِخَيْرٍ'],extra:['شُكْرًا','مَرِيضٌ']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"I ate and drank at the restaurant.",answer:['أَكَلْتُ','وَشَرِبْتُ','فِي','الْمَطْعَمِ'],extra:['فِي','الْبَيْتِ']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"What do you want to drink?",answer:['مَاذَا','تُرِيدُ','أَنْ','تَشْرَبَ؟'],extra:['تَأْكُلَ','أَيْنَ']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"I want to drink water.",answer:['أُرِيدُ','أَنْ','أَشْرَبَ','مَاءً'],extra:['شَايًا','آكُلَ']},
  {topic:'Eating & Drinking',ctx:'Everyday life',en:"Do you want coffee? No thanks, I want water.",answer:['هَلْ','تُرِيدُ','قَهْوَةً؟','لَا','شُكْرًا،','أُرِيدُ','مَاءً'],extra:['نَعَمْ','شَايًا']},

  // ===== SECTION 2: Around the House (فتح، دخل، جلس/قعد، وقف، لبس) =====
  {topic:'Around the House',ctx:'Everyday life',en:"I opened the door.",answer:['فَتَحْتُ','الْبَابَ'],extra:['أَغْلَقْتُ','النَّافِذَةَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"What did you open?",answer:['مَاذَا','فَتَحْتَ؟'],extra:['أَيْنَ','مَتَى']},
  {topic:'Around the House',ctx:'Everyday life',en:"Did you open the door? Yes, I opened it.",answer:['هَلْ','فَتَحْتَ','الْبَابَ؟','نَعَمْ،','فَتَحْتُهُ'],extra:['لَا','أَغْلَقْتُهُ']},
  {topic:'Around the House',ctx:'Everyday life',en:"Did you open the window? No, I didn't open it.",answer:['هَلْ','فَتَحْتَ','النَّافِذَةَ؟','لَا،','لَمْ','أَفْتَحْهَا'],extra:['نَعَمْ','فَتَحْتُهَا']},
  {topic:'Around the House',ctx:'Everyday life',en:"Open the door, please.",answer:['افْتَحِ','الْبَابَ','مِنْ','فَضْلِكَ'],extra:['أَغْلِقِ','النَّافِذَةَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"Don't open the window, it's cold.",answer:['لَا','تَفْتَحِ','النَّافِذَةَ،','الْجَوُّ','بَارِدٌ'],extra:['افْتَحِ','حَارٌّ']},
  {topic:'Around the House',ctx:'Everyday life',en:"Why did you open the door? Because it was hot.",answer:['لِمَاذَا','فَتَحْتَ','الْبَابَ؟','لِأَنَّ','الْجَوَّ','كَانَ','حَارًّا'],extra:['أَغْلَقْتَ','بَارِدًا']},
  {topic:'Around the House',ctx:'Everyday life',en:"The bus stopped in front of the house.",answer:['وَقَفَتِ','الْحَافِلَةُ','أَمَامَ','الْبَيْتِ'],extra:['السَّيَّارَةُ','خَلْفَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"Stand here and wait a little.",answer:['قِفْ','هُنَا','وَانْتَظِرْ','قَلِيلًا'],extra:['اجْلِسْ','هُنَاكَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"I wear my coat when it's cold.",answer:['أَلْبَسُ','مِعْطَفِي','عِنْدَمَا','يَكُونُ','الْجَوُّ','بَارِدًا'],extra:['حَارًّا','أَخْلَعُ']},
  {topic:'Around the House',ctx:'Everyday life',en:"What are you wearing today?",answer:['مَاذَا','تَلْبَسُ','الْيَوْمَ؟'],extra:['أَيْنَ','أَمْسِ']},
  {topic:'Around the House',ctx:'Everyday life',en:"He entered the house and sat on the chair.",answer:['دَخَلَ','الْبَيْتَ','وَجَلَسَ','عَلَى','الْكُرْسِيِّ'],extra:['خَرَجَ','مِنَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"I enter the classroom at eight o'clock.",answer:['أَدْخُلُ','الْفَصْلَ','السَّاعَةَ','الثَّامِنَةَ'],extra:['أَخْرُجُ','التَّاسِعَةَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"May I come in? Yes, please.",answer:['هَلْ','أَدْخُلُ؟','نَعَمْ،','تَفَضَّلْ'],extra:['لَا','لَيْسَ','الْآنَ']},
  {topic:'Around the House',ctx:'Everyday life',en:"We sit together every evening and talk.",answer:['نَقْعُدُ','مَعًا','كُلَّ','مَسَاءٍ','وَنَتَحَدَّثُ'],extra:['نَأْكُلُ','صَبَاحٍ']},
  {topic:'Around the House',ctx:'Everyday life',en:"We sit together every evening.",answer:['نَجْلِسُ','مَعًا','كُلَّ','مَسَاءٍ'],extra:['نَقِفُ','صَبَاحٍ']},
  {topic:'Around the House',ctx:'Everyday life',en:"Where did you sit? I sat next to my friend.",answer:['أَيْنَ','قَعَدْتَ؟','قَعَدْتُ','بِجَانِبِ','صَدِيقِي'],extra:['أَمَامَ','أُخْتِي']},

  // ===== SECTION 3: Taking & Following (أخذ، تبع) =====
  {topic:'Taking & Following',ctx:'Everyday life',en:"I took the book from the table.",answer:['أَخَذْتُ','الْكِتَابَ','مِنَ','الطَّاوِلَةِ'],extra:['وَضَعْتُ','عَلَى']},
  {topic:'Taking & Following',ctx:'Everyday life',en:"What did you take? I took it from my brother.",answer:['مَاذَا','أَخَذْتَ؟','أَخَذْتُهُ','مِنْ','أَخِي'],extra:['أَيْنَ','أُخْتِي']},
  {topic:'Taking & Following',ctx:'Everyday life',en:"Did you take the bag? Yes, I took it (f).",answer:['هَلْ','أَخَذْتَ','الْحَقِيبَةَ؟','نَعَمْ،','أَخَذْتُهَا'],extra:['لَا','أَخَذْتُهُ']},
  {topic:'Taking & Following',ctx:'Everyday life',en:"Take your bag with you.",answer:['خُذْ','حَقِيبَتَكَ','مَعَكَ'],extra:['اتْرُكْ','هُنَا']},
  {topic:'Taking & Following',ctx:'Everyday life',en:"Did you take your medicine? No, I didn't take it.",answer:['هَلْ','أَخَذْتَ','دَوَاءَكَ؟','لَا،','لَمْ','آخُذْهُ'],extra:['نَعَمْ','شَرِبْتُهُ']},
  {topic:'Taking & Following',ctx:'Everyday life',en:"Follow me, we'll go from here.",answer:['اتْبَعْنِي،','سَنَذْهَبُ','مِنْ','هُنَا'],extra:['اذْهَبْ','وَحْدَكَ']},
  {topic:'Taking & Following',ctx:'Everyday life',en:"Did you follow the news? No, I didn't.",answer:['هَلْ','تَبِعْتَ','الْأَخْبَارَ؟','لَا،','لَمْ','أَتْبَعْ'],extra:['نَعَمْ','قَرَأْتُ']},

  // ===== SECTION 4: Serving & Helping (قدم، مسح) =====
  {topic:'Serving & Helping',ctx:'Everyday life',en:"He wiped the table and served the tea.",answer:['مَسَحَ','الطَّاوِلَةَ','وَقَدَّمَ','الشَّايَ'],extra:['غَسَلَ','الْقَهْوَةَ']},
  {topic:'Serving & Helping',ctx:'Everyday life',en:"I hand in my homework every week.",answer:['أُسَلِّمُ','وَاجِبِي','كُلَّ','أُسْبُوعٍ'],extra:['أُقَدِّمُ','شَهْرٍ']},

  // ===== SECTION 5: Reading, Writing & Memorizing (قرأ، فهم، كتب، حفظ) =====
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"I read the Quran after prayer.",answer:['أَقْرَأُ','الْقُرْآنَ','بَعْدَ','الصَّلَاةِ'],extra:['قَبْلَ','أَكْتُبُ']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"Have you read this book? No, I haven't read it yet.",answer:['هَلْ','قَرَأْتَ','هَذَا','الْكِتَابَ؟','لَا،','لَمْ','أَقْرَأْهُ','بَعْدُ'],extra:['نَعَمْ','كَتَبْتُهُ']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"Did you read the newspaper? Yes, I read it (f).",answer:['هَلْ','قَرَأْتَ','الْجَرِيدَةَ؟','نَعَمْ،','قَرَأْتُهَا'],extra:['لَا','قَرَأْتُهُ']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"We read the book and understood the lesson.",answer:['قَرَأْنَا','الْكِتَابَ','وَفَهِمْنَا','الدَّرْسَ'],extra:['كَتَبْنَا','الْوَاجِبَ']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"Do you understand? Yes, I understand.",answer:['هَلْ','تَفْهَمُ؟','نَعَمْ،','أَفْهَمُ'],extra:['لَا','قَلِيلًا']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"Write your name and your address here.",answer:['اكْتُبْ','اسْمَكَ','وَعُنْوَانَكَ','هُنَا'],extra:['رَقْمَكَ','هُنَاكَ']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"I memorized the lesson and wrote the answer.",answer:['حَفِظْتُ','الدَّرْسَ','وَكَتَبْتُ','الْجَوَابَ'],extra:['نَسِيتُ','السُّؤَالَ']},
  {topic:'Reading, Writing & Memorizing',ctx:'Everyday life',en:"Did you memorize the new words? Yes, all of them.",answer:['هَلْ','حَفِظْتَ','الْكَلِمَاتِ','الْجَدِيدَةَ؟','نَعَمْ،','كُلَّهَا'],extra:['لَا','بَعْضَهَا']},

  // ===== SECTION 6: Witnessing & Sport (شهد، ضرب، لعب) =====
  {topic:'Witnessing & Sport',ctx:'Everyday life',en:"Did you witness the accident?",answer:['هَلْ','شَهِدْتَ','الْحَادِثَ؟'],extra:['رَأَيْتَ','سَمِعْتَ']},
  {topic:'Witnessing & Sport',ctx:'Everyday life',en:"I testify that this is true.",answer:['أَشْهَدُ','أَنَّ','هَذَا','صَحِيحٌ'],extra:['أَعْتَقِدُ','غَيْرُ']},
  {topic:'Witnessing & Sport',ctx:'Everyday life',en:"He hit the ball hard toward the goal.",answer:['ضَرَبَ','الْكُرَةَ','بِقُوَّةٍ','نَحْوَ','الْمَرْمَى'],extra:['رَكَلَ','بِبُطْءٍ']},
  {topic:'Witnessing & Sport',ctx:'Everyday life',en:"The child beats the drum every day.",answer:['الطِّفْلُ','يَضْرِبُ','الطَّبْلَ','كُلَّ','يَوْمٍ'],extra:['يَعْزِفُ','الْقِيثَارَةَ']},
  {topic:'Witnessing & Sport',ctx:'Everyday life',en:"Do you want to play football with us?",answer:['هَلْ','تُرِيدُ','أَنْ','تَلْعَبَ','كُرَةَ','الْقَدَمِ','مَعَنَا؟'],extra:['تُشَاهِدَ','بَعِيدًا']},
  {topic:'Witnessing & Sport',ctx:'Everyday life',en:"The children played in the garden and then came home.",answer:['لَعِبَ','الْأَطْفَالُ','فِي','الْحَدِيقَةِ','ثُمَّ','عَادُوا','إِلَى','الْبَيْتِ'],extra:['خَرَجُوا','ذَهَبُوا']},

  // ===== SECTION 7: Level 1 Review — mini stories (صعد، نثر، مسح، طلب + Book 2 vocab) =====
  {topic:'Level 1 Review',ctx:'Everyday life',en:"I climbed the stairs, opened the window, and sat down.",answer:['صَعِدْتُ','الدَّرَجَ،','وَفَتَحْتُ','النَّافِذَةَ،','وَجَلَسْتُ'],extra:['نَزَلْتُ','أَغْلَقْتُ']},
  {topic:'Level 1 Review',ctx:'Everyday life',en:"The child scattered his toys, then played, and ate until he was full.",answer:['نَثَرَ','الطِّفْلُ','أَلْعَابَهُ،','ثُمَّ','لَعِبَ،','وَأَكَلَ','حَتَّى','شَبِعَ'],extra:['جَمَعَ','رَتَّبَ']},
  {topic:'Level 1 Review',ctx:'Everyday life',en:"She wiped the table, served the tea, and sat with her friend.",answer:['مَسَحَتِ','الطَّاوِلَةَ،','وَقَدَّمَتِ','الشَّايَ،','وَجَلَسَتْ','مَعَ','صَدِيقَتِهَا'],extra:['غَسَلَتِ','وَقَفَتْ']},
  {topic:'Level 1 Review',ctx:'Everyday life',en:"I asked for water, drank it, and thanked God.",answer:['طَلَبْتُ','الْمَاءَ،','وَشَرِبْتُهُ،','وَحَمِدْتُ','اللهَ'],extra:['أَكَلْتُ','نَسِيتُ']},
  {topic:'Level 1 Review',ctx:'Everyday life',en:"I went up to the classroom, followed the lesson, read it, and understood it.",answer:['صَعِدْتُ','إِلَى','الْفَصْلِ،','وَتَبِعْتُ','الدَّرْسَ،','وَقَرَأْتُهُ،','وَفَهِمْتُهُ'],extra:['نَزَلْتُ','كَتَبْتُهُ']},
  {topic:'Level 1 Review',ctx:'Everyday life',en:"I climbed the stairs, opened the door, and witnessed the accident, but I didn't take my phone with me.",answer:['صَعِدْتُ','الدَّرَجَ،','وَفَتَحْتُ','الْبَابَ،','وَشَهِدْتُ','الْحَادِثَ،','لَكِنِّي','لَمْ','آخُذْ','هَاتِفِي','مَعِي'],extra:['نَزَلْتُ','أَخَذْتُ']},
];