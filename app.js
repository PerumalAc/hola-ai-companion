/* ========================================
   HOLA AI COMPANION - APP.JS
   Core Application Logic
   ======================================== */

// ═══════════════════════════════════════
// COMPANION DEFINITIONS
// ═══════════════════════════════════════

const COMPANIONS = {
  ananya: {
    name: 'Ananya',
    emoji: '👩‍🦱',
    gradient: 'linear-gradient(135deg, #f472b6, #a855f7)',
    personality: 'friendly_listener',
    greetings: {
      english: [
        "Hey there! 😊 I'm Ananya, and I'm here to listen. How are you feeling today?",
        "Hi! Welcome back! Tell me, what's been on your mind lately?",
        "Hello, friend! 💜 It's so nice to see you. How was your day?"
      ],
      tamil: [
        "வணக்கம்! 😊 நான் அனன்யா. உங்களுக்கு எப்படி இருக்கு? இன்னைக்கு எப்படி இருக்கீங்க?",
        "ஹாய்! 💜 திரும்பி வந்ததற்கு நன்றி. என்ன நடக்குது உங்க வாழ்க்கையில?",
        "வணக்கம் நண்பா! இன்னைக்கு உங்க மனசு எப்படி இருக்கு?"
      ],
      tanglish: [
        "Hey! 😊 Naan Ananya. Epdi irukeenga? Enna nadakuthu life-la?",
        "Hi friend! 💜 Welcome back! Sollunga, enna yosikreenga?",
        "Hola! Naan unga friend Ananya. Innaiku mood epdi iruku?"
      ]
    },
    responses: {
      english: {
        happy: [
          "That makes me so happy to hear! 😄 What made your day special?",
          "Yay! I love seeing you in such a great mood! Tell me more!",
          "That's wonderful! 🌟 Keep that positive energy going! What's the best part?",
          "I'm glad to hear that! Happiness looks great on you! 💜"
        ],
        sad: [
          "I'm sorry you're feeling this way. 💙 Remember, it's okay to not be okay. I'm right here.",
          "That sounds tough. Would you like to talk about what's bothering you? I'm all ears.",
          "Hey, sending you a virtual hug. 🤗 You're stronger than you think.",
          "I hear you. Sometimes just letting it all out helps. I'm here for you, always. 💜"
        ],
        stressed: [
          "Take a deep breath with me. 🌬️ Inhale... exhale... You've got this!",
          "It sounds like you have a lot on your plate. Let's break it down together, one thing at a time.",
          "Stress can feel overwhelming, but remember - you've overcome hard things before! 💪",
          "How about we pause for a moment? Sometimes a small break can make a big difference."
        ],
        greeting: [
          "Hey! So glad you're here! How can I brighten your day? ✨",
          "Hello, lovely human! What shall we chat about today?",
          "Hi there! I was hoping you'd come talk to me! 💜 What's up?"
        ],
        default: [
          "That's really interesting! Tell me more about it. 😊",
          "I appreciate you sharing that with me. How does it make you feel?",
          "Hmm, that's something worth thinking about. What are your thoughts on it?",
          "Thank you for opening up! I'm curious to hear more. 💜",
          "I love our conversations! What else is on your mind?",
          "That's a great point! You always have such thoughtful insights."
        ],
        love: [
          "Aww, love is such a beautiful feeling! 💕 Tell me all about it!",
          "That's so sweet! You deserve all the love in the world. 🥰",
          "Love can be complex but wonderful. I'm here to listen if you want to share more!"
        ],
        food: [
          "Ooh, food talk! 😋 I love it! What's your favorite dish?",
          "That sounds delicious! Talking about food always makes me happy! 🍕",
          "Great taste! Food really does bring joy, doesn't it? What else do you enjoy eating?"
        ],
        work: [
          "Work can be quite the journey! Are things going well or feeling challenging?",
          "I appreciate your dedication! Remember to take breaks too. ☕",
          "Tell me more about your work. I'd love to understand what you do!"
        ]
      },
      tamil: {
        happy: [
          "ஆஹா, அருமை! 😄 உங்க சந்தோஷம் எனக்கும் சந்தோஷமா இருக்கு! என்ன நடந்தது சொல்லுங்க!",
          "மிக்க மகிழ்ச்சி! 🌟 இந்த நல்ல உணர்வை அனுபவியுங்க!",
          "அட, சூப்பர்! 💜 சந்தோஷமா இருங்க எப்போதும்!"
        ],
        sad: [
          "வருத்தமா இருக்கீங்களா? 💙 பரவாயில்ல, நான் இங்க இருக்கேன் உங்களுக்காக.",
          "கஷ்டமா இருக்கும்னு தெரியுது. ஆனா நீங்க ரொம்ப strong. 🤗",
          "உங்க மனசு லேசா ஆகணும். என்கிட்ட சொல்லுங்க, கேக்குறேன். 💜"
        ],
        stressed: [
          "ஒரு ஆழமான மூச்சு எடுங்க. 🌬️ நீங்க இதை சமாளிப்பீங்க!",
          "ஸ்ட்ரெஸ் ஆவது இயல்புதான். கொஞ்சம் ரிலாக்ஸ் பண்ணுங்க. ☕",
          "ஒரே நேரத்தில எல்லாத்தையும் செய்ய வேண்டாம். ஒவ்வொண்ணா பாருங்க."
        ],
        greeting: [
          "வணக்கம்! உங்களை பார்த்ததும் சந்தோஷம்! ✨",
          "ஹலோ! இன்னைக்கு என்ன பேசலாம்? 💜",
          "வாங்க வாங்க! ரொம்ப நாளா காணோம்! 😊"
        ],
        default: [
          "ஆஹா, அது ரொம்ப interesting! இன்னும் சொல்லுங்க. 😊",
          "நான் கவனிச்சு கேக்குறேன். தொடருங்க! 💜",
          "நல்ல விஷயம் சொன்னீங்க! இன்னும் என்ன நினைக்கிறீங்க?",
          "அட, இப்படியா? இன்னும் கொஞ்சம் elaborate பண்ணுங்க.",
          "புரியுது! உங்க feelings valid-ங்க. 💜"
        ],
        love: [
          "காதல் ரொம்ப அழகு! 💕 இன்னும் சொல்லுங்க!",
          "ஆஹா, உங்களுக்கு நிறைய அன்பு கிடைக்கணும்! 🥰",
          "காதல் விஷயம் சொல்றீங்களா? 😊 நான் கேக்குறேன்!"
        ],
        food: [
          "சாப்பாடு பத்தி பேசலாமா? 😋 என்ன favorite?",
          "அட, நல்ல taste இருக்கு உங்களுக்கு! 🍛",
          "சாப்பாடு பத்தி பேச ஆரம்பிச்சா நிறுத்தவே முடியாது! 😄"
        ],
        work: [
          "வேலை எப்படி போகுது? Smooth-ஆ இருக்கா?",
          "உங்க dedication-ஐ பார்த்து ரொம்ப proud-ஆ இருக்கேன்! 💪",
          "வேலைப்பளு அதிகமா? கொஞ்சம் break எடுங்க! ☕"
        ]
      },
      tanglish: {
        happy: [
          "Super! 😄 Unga happiness ennakum spread aaguthu! Enna nadanthathu sollunga!",
          "That's awesome da! 🌟 Keep rocking! Innum enna good news?",
          "Aaha, romba happy-a irukeenga! 💜 I love to see this!"
        ],
        sad: [
          "Sad-a feel panreenga-na, it's okay. 💙 Naan inga irukken for you.",
          "Enna aachunu sollunga. Naan kekkuren. 🤗",
          "Hey, don't worry. Tough times don't last, but tough people do! 💜"
        ],
        stressed: [
          "Deep breath edungo. 🌬️ One step at a time, you got this!",
          "Stress-a iruntha konjam break edungo. Tea kudichitu vaango! ☕",
          "Ellathayum oru naal-la pannanum-nu illa. Take it easy! 💪"
        ],
        greeting: [
          "Hey! 😊 Epdi irukeenga? Long time no see!",
          "Vanakkam friend! ✨ What's happening in your world?",
          "Hola! Unga kitta pesuna romba happy-a irukku! 💜"
        ],
        default: [
          "Aaha, that's interesting! Innum sollunga. 😊",
          "Nice point! I like the way you think! 💜",
          "Hmm, interesting-a iruku. Enna more yosikreenga about this?",
          "Tell me more da! Naan kekkuren! 😄",
          "Seri seri, puriyuthu! Continue pannunga! 💜"
        ],
        love: [
          "Love topic-a? 💕 Romantic-a sollunga naan kekkuren!",
          "Aww, sweet-a iruku! You deserve all the love! 🥰",
          "Kadhal vishayam-la naan expert illai, but naan kekkuren! 😊"
        ],
        food: [
          "Food talk-a? 😋 Biryani-ya, dosa-va, pizza-va?",
          "Nalla taste iruku ungaluku! 🍛 Enna saapteengo?",
          "Food pathi pesuna time poga theriyathu! What's your fav? 🍕"
        ],
        work: [
          "Office/work epdi poguthu? Smooth-a iruka?",
          "Hard work pannreenga, respect! 💪 But break-um edungo!",
          "Enna work pannreenga? Tell me more about it!"
        ]
      }
    }
  },

  kavin: {
    name: 'Kavin',
    emoji: '🧑‍🎨',
    gradient: 'linear-gradient(135deg, #fbbf24, #f97316)',
    personality: 'creative_thinker',
    greetings: {
      english: [
        "Yo! 🎨 Kavin here! Ready for some fun? Let's brainstorm, play games, or just vibe!",
        "Hey creative soul! 🌈 What's cooking in that brilliant brain of yours?",
        "What's up! I've got riddles, stories, and random fun facts ready. Shall we begin? 🎮"
      ],
      tamil: [
        "ஹேய்! 🎨 நான் கவின்! ரொம்ப bore-ஆ இருக்கா? வா, interesting-ஆ ஏதாவது பேசலாம்!",
        "வணக்கம்! 🌈 உங்க creativity-ஐ test பண்ணலாமா? Ready-ஆ?",
        "ஹலோ நண்பா! 🎮 Games, riddles, stories - எது வேணும்? சொல்லுங்க!"
      ],
      tanglish: [
        "Yo! 🎨 Naan Kavin da! Something fun pannalama? Riddle, story, game - choose pannunga!",
        "Hey buddy! 🌈 Bore-a iruka? Naan irukken-la, no more boredom!",
        "What's up machan! 🎮 Ready for some creative madness?"
      ]
    },
    responses: {
      english: {
        happy: [
          "That energy is contagious! 🔥 Want to channel that happiness into something creative?",
          "Love the vibes! Let me share a fun fact: did you know honey never spoils? Just like your good mood! 🍯",
          "Awesome! When I'm happy I like to imagine crazy inventions. Want to invent something together? 🚀"
        ],
        sad: [
          "Hey, even the best stories have tough chapters. 📖 Want me to cheer you up with a riddle?",
          "I know a trick: Think of 3 things that made you smile this week. Got them? 😊 Those moments are real too!",
          "Feeling down? Let's do something fun to take your mind off it. Word game? Funny story? Your pick! 🎪"
        ],
        stressed: [
          "Stress is just creativity trying to escape! 🧠 Let's redirect that energy into something fun.",
          "Fun fact: Laughing for 15 minutes burns about 40 calories. Want to try? 😂",
          "Here's an idea: close your eyes, imagine you're on a beach. What color is the sky? 🏖️"
        ],
        greeting: [
          "Welcome to the fun zone! 🎮 What creative mischief shall we get into today?",
          "Hey hey! The party starts now that you're here! 🎉",
          "Yo! I just learned something wild, want to hear it? 🤯"
        ],
        default: [
          "Interesting! That reminds me of this cool concept... the butterfly effect! Everything's connected! 🦋",
          "Ooh, I have a random thought about that! What if we looked at it from a totally different angle? 🔄",
          "That's cool! Hey, want to try a word association game? I say a word, you say the first thing that comes to mind! 🎯",
          "Love that perspective! You know what would be fun? Let's make a story out of this! 📝",
          "Haha, that's creative! You're speaking my language! 🎨"
        ],
        love: [
          "Love is the ultimate creative inspiration! 💕 Some of the best art comes from love stories!",
          "That's so heartwarming! Fun fact: your heart beats about 100,000 times a day. That's a lot of love! ❤️",
          "Romantic energy! Want me to help you write a poem? 🎭"
        ],
        food: [
          "Food is literally edible art! 🎨 I once imagined a restaurant where every dish is a different color of the rainbow!",
          "Tasty! Did you know saffron is more expensive than gold by weight? Fancy! 😋",
          "I love food creativity! Ever tried combining unexpected flavors? Like chocolate and chili? 🌶️🍫"
        ],
        work: [
          "Work smarter, not harder! 🧠 Have you tried the Pomodoro technique? 25 min focus, 5 min fun!",
          "Work tip: doodle during boring meetings. Science says it helps you focus! 🎨",
          "What if we turned your work tasks into a game? Points for each task completed! 🎮"
        ]
      },
      tamil: {
        happy: [
          "சூப்பர் energy! 🔥 இந்த happiness-ஐ ஏதாவது creative-ஆ மாத்தலாமா?",
          "Awesome! 🍯 ஒரு fun fact: தேன் எப்போதும் கெடாது, உங்க mood மாதிரி!",
          "யாரு இவ்வளவு happy? 😄 வாங்க ஏதாவது கற்பனையான game ஆடலாம்!"
        ],
        sad: [
          "ஒரு riddle சொல்றேன், mood change ஆகும்! Ready-ஆ? 📖",
          "ஹேய், இந்த வாரம் உங்களை சிரிக்க வச்ச 3 விஷயங்களை நினைச்சு பாருங்க! 😊",
          "Sad-ஆ? வா, ஒரு funny story சொல்றேன்! 🎪"
        ],
        stressed: [
          "Stress-ஐ creativity-ஆ மாத்துங்க! 🧠 வாங்க ஏதாவது fun பண்ணலாம்!",
          "Fun fact: 15 நிமிஷம் சிரிச்சா 40 calories burn ஆகும்! 😂",
          "கண்ணை மூடி, beach-ல இருக்கீங்கன்னு imagine பண்ணுங்க! 🏖️"
        ],
        greeting: [
          "Fun zone-க்கு welcome! 🎮 இன்னைக்கு என்ன creative வேலை பண்ணலாம்?",
          "ஹேய்! நீங்க வந்துட்டா party start! 🎉",
          "Yo! ஒரு crazy fact தெரியுமா? கேக்கணுமா? 🤯"
        ],
        default: [
          "Interesting! 🦋 அது butterfly effect மாதிரி இருக்கு!",
          "ஊம், இதை வேற angle-ல பார்த்தா? 🔄",
          "Word game ஆடலாமா? நான் ஒரு word சொல்றேன், நீங்க reply பண்ணுங்க! 🎯",
          "Nice-ஆ இருக்கு! இதை வச்சு ஒரு story எழுதலாமா? 📝",
          "Creative mind-ஆ இருக்கீங்க! 🎨 I like it!"
        ],
        love: [
          "காதல் - the ultimate creative inspiration! 💕",
          "Heart ஒரு நாளைக்கு 1,00,000 times beat ஆகும் தெரியுமா? ❤️",
          "Poem எழுதி தரவா? 🎭 Romantic-ஆ இருக்கும்!"
        ],
        food: [
          "Food is art! 🎨 Rainbow colour-ல dishes imagine பண்ணி பாருங்க!",
          "Saffron, gold-ஐ விட costly தெரியுமா? 😋 Random but true!",
          "Chocolate + chili try பண்ணியிருக்கீங்களா? Mind-blowing combo! 🌶️🍫"
        ],
        work: [
          "Pomodoro technique try பண்ணுங்க! 25 min focus, 5 min fun! 🧠",
          "Boring meeting-ல doodle பண்ணுங்க, focus increase ஆகும்! 🎨",
          "Work tasks-ஐ game மாதிரி points வச்சு பண்ணுங்க! 🎮"
        ]
      },
      tanglish: {
        happy: [
          "Super energy da! 🔥 Itha vachu oru creative project start pannalama?",
          "Nice vibes! 🍯 Fun fact: Then (honey) eppodhum kedu adayathu, unga mood mathiri!",
          "Who's this happy person! 😄 Vanga oru imagination game aadalaam!",
        ],
        sad: [
          "Oru riddle solla? Mood change aagum! 📖 Ready-a?",
          "Hey, this week unga smile-a vacha 3 things yosichu parunga! 😊",
          "Sad-a? Vaa da, oru funny story solren! 🎪"
        ],
        stressed: [
          "Stress-a creativity-a maathidu! 🧠 Vanga something fun pannalam!",
          "Fun fact: 15 mins siruchaa 40 calories burn aagum! 😂 Let's laugh!",
          "Kann moodi beach-la irukkom-nu imagine pannu! 🏖️ Feel better?"
        ],
        greeting: [
          "Welcome to the fun zone! 🎮 Enna creative mischief pannalam innaiku?",
          "Hey! Nee vanthutta party start-a! 🎉",
          "Yo! Oru mind-blowing fact theriyuma? Kekanum-na sollu! 🤯"
        ],
        default: [
          "Interesting! 🦋 Athu butterfly effect mathiri iruku!",
          "Hmm, ithai vera angle-la paathaa? 🔄 Yosichu paaru!",
          "Word game aadalama? Naan oru word solren, nee reply pannu! 🎯",
          "Nice-a iruku! Ithai vachu oru story ezhuthalama? 📝",
          "Creative mind-a iruke! 🎨 I like it machan!"
        ],
        love: [
          "Kadhal - ultimate creative inspiration da! 💕 Poem ezhuthava?",
          "Heart oru naaliku 1 lakh times beat aagum theriyuma? ❤️ So much love!",
          "Sweet-a iruku! 🥰 Kadhal patru innum sollu!"
        ],
        food: [
          "Food is art da! 🎨 Rainbow color dishes imagine pannu!",
          "Saffron gold-a vida costly theriyuma? 😋 Random fact!",
          "Chocolate + chili try pannirukiya? 🌶️🍫 Mind = blown!"
        ],
        work: [
          "Pomodoro technique try pannu! 25 min focus, 5 min fun! 🧠",
          "Boring meeting-la doodle pannu, focus increase aagum! 🎨 Science solrathu!",
          "Work tasks-a game mathiri points vachu pannu! 🎮 More fun that way!"
        ]
      }
    }
  },

  adithya: {
    name: 'Adithya',
    emoji: '🧘',
    gradient: 'linear-gradient(135deg, #34d399, #06b6d4)',
    personality: 'calm_mentor',
    greetings: {
      english: [
        "Welcome. 🌿 I'm Adithya. Let's take a moment to breathe and connect. How are you, truly?",
        "Namaste. 🙏 I believe every conversation is a journey. Where shall we go today?",
        "Hello, friend. 🌅 The mind is clearest when it speaks freely. What's on yours?"
      ],
      tamil: [
        "வணக்கம். 🌿 நான் ஆதித்யா. ஒரு நிமிஷம் மூச்சு விடுங்க. உண்மையிலேயே எப்படி இருக்கீங்க?",
        "நமஸ்தே. 🙏 ஒவ்வொரு உரையாடலும் ஒரு பயணம். இன்னைக்கு எங்க போகலாம்?",
        "வணக்கம் நண்பரே. 🌅 மனது சுதந்திரமா பேசும்போதுதான் தெளிவா இருக்கும். என்ன நினைக்கிறீர்கள்?"
      ],
      tanglish: [
        "Vanakkam. 🌿 Naan Adithya. Oru nimisham moocchu vidungal. Unmaiyilayae epdi irukeenga?",
        "Namaste. 🙏 Every conversation is a journey-nu naan namburen. Innaiku enga pogalam?",
        "Hello friend. 🌅 Mind freely speak pannum-podhu thaan clarity varum. Enna iruku unga mind-la?"
      ]
    },
    responses: {
      english: {
        happy: [
          "Happiness is not a destination but a way of traveling. 🌟 Savor this feeling, it's precious.",
          "Beautiful! In mindfulness, we learn to truly appreciate moments like these. What sparked this joy?",
          "Your happiness radiates through your words. 🌸 May it continue to bloom."
        ],
        sad: [
          "Sadness, like rain, nourishes the seeds of growth. 🌧️ Be gentle with yourself today.",
          "In stillness, we find strength. Your feelings are valid, and this too shall pass. 🙏",
          "Every sunset is followed by a sunrise. 🌅 Let yourself feel, but know brighter days await.",
          "The lotus grows from muddy water. 🪷 Sometimes our hardest times lead to our greatest growth."
        ],
        stressed: [
          "Let's practice together. 🌬️ Breathe in for 4 counts... hold for 4... breathe out for 6. How do you feel?",
          "Stress often comes from trying to control what we cannot. Focus on what you can influence. 🧘",
          "Consider this: Will this matter in 5 years? If yes, take action. If no, let it go. 🍃",
          "The mind is like water. When turbulent, it's hard to see clearly. Let it settle. 🌊"
        ],
        greeting: [
          "Namaste. 🙏 The very fact that you're here shows self-awareness. That's admirable.",
          "Welcome back. 🌿 Each time we connect, we grow. What shall we explore today?",
          "Peace be with you. 🕊️ I'm here whenever you need a moment of calm."
        ],
        default: [
          "Interesting perspective. 🧠 Have you considered what lies beneath that thought?",
          "In my experience, the questions we ask reveal more than the answers we seek. 🌿",
          "That resonates deeply. Life has a way of teaching us through every experience. 📚",
          "Wisdom comes from reflection. What does this mean to you at a deeper level? 🌊",
          "I appreciate your thoughtfulness. The unexamined life, as Socrates said, is not worth living. 🏛️",
          "Every thought is a seed. 🌱 Plant the ones that serve your growth."
        ],
        love: [
          "Love is perhaps the most profound human experience. 💞 It teaches us vulnerability and strength.",
          "As Rumi said, 'Love is the bridge between you and everything.' 🌉 Cherish it.",
          "The deepest love starts with self-love. 🪷 Are you being kind to yourself?"
        ],
        food: [
          "Mindful eating is a beautiful practice. 🍵 When did you last truly taste your food?",
          "Food sustains the body, but how we eat nourishes the soul. Eat with gratitude. 🙏",
          "There's wisdom in cooking - patience, timing, balance. Much like life itself. 🌿"
        ],
        work: [
          "Purpose-driven work never feels like a burden. Does your work align with your values? 🌟",
          "Remember: You are not your job. Take time to nurture your whole self. 🧘",
          "The Zen approach: Do one thing at a time, and do it completely. 🎋"
        ]
      },
      tamil: {
        happy: [
          "சந்தோஷம் ஒரு இடமல்ல, ஒரு பாதை. 🌟 இந்த தருணத்தை அனுபவியுங்கள்.",
          "அழகு! 🌸 இந்த மகிழ்ச்சிக்கு என்ன காரணம்?",
          "உங்கள் மகிழ்ச்சி உங்கள் வார்த்தைகளில் தெரிகிறது. இது தொடரட்டும்! 💜"
        ],
        sad: [
          "துக்கம், மழை போல, வளர்ச்சியின் விதைகளை வளர்க்கிறது. 🌧️ இன்றைக்கு உங்களிடம் மென்மையாக இருங்கள்.",
          "நிலையான நிமிதி - இதுவும் கடந்து போகும். 🙏 உங்கள் உணர்வுகள் செல்லுபடியானவை.",
          "தாமரை சேற்றில் வளர்கிறது. 🪷 கடினமான காலங்கள் பெரிய வளர்ச்சிக்கு வழிவகுக்கும்."
        ],
        stressed: [
          "சேர்ந்து பயிற்சி செய்யலாம். 🌬️ 4 எண்ணிக்கை மூச்சு உள்ளே... 4 நிறுத்தம்... 6 வெளியே.",
          "மன அமைதி - நீர் போல. கலங்கினால் தெரியாது. அமைதியாக இருக்க விடுங்கள். 🌊",
          "5 வருடம் கழித்து இது முக்கியமா? ஆம் என்றால் செயல்படுங்கள். இல்லையெனில் விடுங்கள். 🍃"
        ],
        greeting: [
          "நமஸ்தே. 🙏 இங்கு வந்தது சுய-விழிப்புணர்வைக் காட்டுகிறது.",
          "வரவேற்கிறேன். 🌿 ஒவ்வொரு உரையாடலிலும் வளர்கிறோம்.",
          "அமைதி உங்களுக்கு. 🕊️ தேவைப்படும்போது இங்கு இருக்கிறேன்."
        ],
        default: [
          "சுவாரஸ்யமான கண்ணோட்டம். 🧠 அதன் ஆழத்தை யோசித்தீர்களா?",
          "நாம் கேட்கும் கேள்விகள் நம்மை பற்றி அதிகம் சொல்கின்றன. 🌿",
          "ஒவ்வொரு எண்ணமும் ஒரு விதை. 🌱 வளர்ச்சிக்கு உதவுவதை விதையுங்கள்.",
          "ஆழமான சிந்தனை! உங்களுக்கு இது என்ன அர்த்தம் தருகிறது? 🌊",
          "ஞானம் சிந்தனையில் இருந்து வருகிறது. தொடருங்கள்! 📚"
        ],
        love: [
          "அன்பு - மிக ஆழமான மனித அனுபவம். 💞 அதை போற்றுங்கள்.",
          "ரூமி சொன்னார்: 'அன்பு உங்களுக்கும் எல்லாவற்றிற்கும் இடையிலான பாலம்.' 🌉",
          "ஆழமான அன்பு சுய-அன்பில் தொடங்குகிறது. 🪷 உங்களிடம் கருணையாக இருக்கிறீர்களா?"
        ],
        food: [
          "விழிப்புடன் சாப்பிடுவது ஒரு அழகான பயிற்சி. 🍵 கடைசியாக எப்போது உணவை உண்மையாக ருசித்தீர்கள்?",
          "உணவு உடலை வளர்க்கிறது, ஆனால் நாம் எப்படி சாப்பிடுகிறோம் என்பது ஆன்மாவை வளர்க்கிறது. 🙏",
          "சமையலில் ஞானம் உள்ளது - பொறுமை, நேரம், சமநிலை. வாழ்க்கை போலவே. 🌿"
        ],
        work: [
          "நோக்கத்துடன் செய்யும் வேலை பாரமாக இருக்காது. 🌟 உங்கள் வேலை உங்கள் மதிப்புகளுடன் ஒத்துவருகிறதா?",
          "நினைவில் வையுங்கள்: நீங்கள் உங்கள் வேலை அல்ல. முழு சுயத்தையும் வளர்த்துக் கொள்ளுங்கள். 🧘",
          "ஜென் அணுகுமுறை: ஒரு நேரத்தில் ஒரு காரியம், அதை முழுமையாகச் செய்யுங்கள். 🎋"
        ]
      },
      tanglish: {
        happy: [
          "Happiness oru destination illa, oru way of traveling. 🌟 Itha savor pannunga!",
          "Beautiful! 🌸 Enna sparked this joy? Sollunga!",
          "Unga happiness unga words-la theriyuthu! 💜 May it continue!"
        ],
        sad: [
          "Sadness, mazhai mathiri, growth-oda seeds-a nourish pannum. 🌧️ Be gentle with yourself today.",
          "Ithuvum kadanthu pogum. 🙏 Unga feelings valid-a iruku.",
          "Lotus muddy water-la-thaan grow aagum. 🪷 Hardest times lead to greatest growth."
        ],
        stressed: [
          "Sernthu practice pannalam. 🌬️ 4 counts breathe in... 4 hold... 6 breathe out. How do you feel?",
          "Mind is like water. 🌊 Turbulent-a iruntha clarity kaanaathu. Let it settle.",
          "5 years kazhithu ithu matter aaguma? 🍃 Yes-na act pannu. No-na let it go."
        ],
        greeting: [
          "Namaste. 🙏 Nee inga vanthathae self-awareness-oda sign. That's admirable.",
          "Welcome back. 🌿 Every conversation-layum naam grow aagrom.",
          "Peace be with you. 🕊️ Calm-a oru moment venum-na, naan inga irukken."
        ],
        default: [
          "Interesting perspective. 🧠 Athu-oda deeper meaning pathi yosichu paatheenga-la?",
          "Naam kekkura questions, answers-a vida namma pathi more solluthy. 🌿",
          "Every thought oru seed. 🌱 Growth-ku help pannurathai plant pannu.",
          "Deep thought! 🌊 Unakku ithoda deeper meaning enna?",
          "Wisdom comes from reflection. 📚 Keep thinking, keep growing!"
        ],
        love: [
          "Love - the most profound human experience. 💞 Cherish it.",
          "Rumi sonnar: 'Love is the bridge between you and everything.' 🌉",
          "Deepest love self-love-la start aagum. 🪷 Nee unakku kind-a irukiya?"
        ],
        food: [
          "Mindful eating oru beautiful practice. 🍵 Last-a eppo truly taste pannenga food-a?",
          "Food body-a nourish pannum, but epdi saappidromo athu soul-a nourish pannum. 🙏",
          "Cooking-la wisdom iruku - patience, timing, balance. Life mathiri-ye! 🌿"
        ],
        work: [
          "Purpose-driven work oru burden-a feel aagaathu. 🌟 Unga work unga values-oda align aaguthaa?",
          "Remember: Nee unga job illa. Unga whole self-a nurture pannunga. 🧘",
          "Zen approach: Oru nerathula oru kaariyam, athuvum completely pannu. 🎋"
        ]
      }
    }
  }
};

// ═══════════════════════════════════════
// KEYWORD DETECTION
// ═══════════════════════════════════════

const KEYWORDS = {
  happy: {
    english: ['happy', 'glad', 'great', 'wonderful', 'amazing', 'awesome', 'fantastic', 'good', 'excellent', 'excited', 'joy', 'fun', 'love it', 'perfect', 'brilliant', 'nice', 'cool', 'best'],
    tamil: ['சந்தோஷம்', 'நல்ல', 'மகிழ்ச்சி', 'அருமை', 'சூப்பர்', 'நன்றாக', 'மிக நல்ல', 'அற்புதம்', 'மிகச்சிறந்த'],
    tanglish: ['happy', 'santosham', 'nalla', 'super', 'mass', 'semma', 'theri', 'vera level', 'kalakkal', 'adipoli', 'jolly']
  },
  sad: {
    english: ['sad', 'unhappy', 'depressed', 'down', 'lonely', 'alone', 'cry', 'crying', 'hurt', 'pain', 'miserable', 'terrible', 'bad day', 'heartbroken', 'upset'],
    tamil: ['வருத்தம்', 'சோகம்', 'துக்கம்', 'அழுகை', 'தனிமை', 'கஷ்டம்', 'வலி', 'மனவேதனை'],
    tanglish: ['sad', 'varutham', 'sogam', 'lonely', 'thanimai', 'cry', 'kashtam', 'vali', 'feel panren', 'mood illa']
  },
  stressed: {
    english: ['stressed', 'stress', 'anxious', 'anxiety', 'worried', 'worry', 'overwhelmed', 'pressure', 'nervous', 'tense', 'burnout', 'tired', 'exhausted', 'frustrated'],
    tamil: ['கவலை', 'பயம்', 'அழுத்தம்', 'களைப்பு', 'சோர்வு', 'பதற்றம்', 'மன அழுத்தம்'],
    tanglish: ['stress', 'tension', 'worried', 'kavalai', 'bayam', 'tired', 'sorvaa', 'pressure', 'burnout']
  },
  greeting: {
    english: ['hi', 'hello', 'hey', 'howdy', 'good morning', 'good evening', 'good night', 'hola', 'sup', 'what\'s up', 'yo'],
    tamil: ['வணக்கம்', 'ஹலோ', 'நலமா', 'எப்படி இருக்கீங்க', 'காலை வணக்கம்'],
    tanglish: ['vanakkam', 'hello', 'hi', 'hey', 'epdi irukeenga', 'nalama', 'hola', 'yo', 'da', 'machan']
  },
  love: {
    english: ['love', 'crush', 'relationship', 'partner', 'boyfriend', 'girlfriend', 'dating', 'marriage', 'romance', 'romantic'],
    tamil: ['காதல்', 'அன்பு', 'காதலி', 'காதலன்', 'திருமணம்', 'ஜோடி'],
    tanglish: ['kadhal', 'love', 'crush', 'anbu', 'propose', 'date', 'romantic', 'couple']
  },
  food: {
    english: ['food', 'eat', 'lunch', 'dinner', 'breakfast', 'cook', 'hungry', 'recipe', 'restaurant', 'pizza', 'biryani', 'dosa'],
    tamil: ['சாப்பாடு', 'சாப்பிட', 'பசி', 'உணவு', 'சமையல்', 'பிரியாணி', 'தோசை'],
    tanglish: ['food', 'sapadu', 'saapidu', 'pasi', 'biryani', 'dosa', 'hungry', 'cook', 'hotel', 'mess']
  },
  work: {
    english: ['work', 'job', 'office', 'meeting', 'boss', 'project', 'deadline', 'career', 'salary', 'colleague', 'promotion'],
    tamil: ['வேலை', 'அலுவலகம்', 'சம்பளம்', 'திட்டம்', 'கூட்டம்'],
    tanglish: ['work', 'velai', 'office', 'meeting', 'boss', 'project', 'deadline', 'salary', 'sambalam']
  }
};

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════

const state = {
  currentCompanion: 'ananya',
  currentLang: 'english',
  voiceMode: false,
  speakerOn: true,
  conversations: {},
  sessionCount: 0,
  apiKey: ''
};

// ═══════════════════════════════════════
// DOM REFERENCES
// ═══════════════════════════════════════

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  chatMessages: $('#chatMessages'),
  chatInput: $('#chatInput'),
  sendBtn: $('#sendBtn'),
  micBtn: $('#micBtn'),
  typingIndicator: $('#typingIndicator'),
  voiceVisualizer: $('#voiceVisualizer'),
  voiceToggleBtn: $('#voiceToggleBtn'),
  speakerToggleBtn: $('#speakerToggleBtn'),
  headerAvatar: $('#headerAvatar'),
  headerName: $('#headerName'),
  headerStatus: $('#headerStatus'),
  welcomeScreen: $('#welcomeScreen'),
  sidebar: $('#sidebar'),
  sidebarOverlay: $('#sidebarOverlay'),
  mobileMenuBtn: $('#mobileMenuBtn'),
  privacyModal: $('#privacyModal'),
  privacyModalClose: $('#privacyModalClose'),
  toastContainer: $('#toastContainer'),
  particles: $('#particles'),
  statMessages: $('#statMessages'),
  statConversations: $('#statConversations'),
  statStorage: $('#statStorage'),
  geminiApiKey: $('#geminiApiKey'),
  saveApiKeyBtn: $('#saveApiKeyBtn'),
  apiKeyStatus: $('#apiKeyStatus')
};

// ═══════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initParticles();
  bindEvents();
  switchCompanion('ananya');
  updateApiKeyStatus();
});

function loadState() {
  try {
    const saved = localStorage.getItem('hola_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state.conversations = parsed.conversations || {};
      state.sessionCount = (parsed.sessionCount || 0) + 1;
      state.currentLang = parsed.currentLang || 'english';
      state.speakerOn = parsed.speakerOn !== undefined ? parsed.speakerOn : true;
    } else {
      state.sessionCount = 1;
    }
    state.apiKey = localStorage.getItem('hola_gemini_api_key') || '';
    saveState();
  } catch (e) {
    console.warn('Could not load state:', e);
  }
}

function saveState() {
  try {
    localStorage.setItem('hola_state', JSON.stringify({
      conversations: state.conversations,
      sessionCount: state.sessionCount,
      currentLang: state.currentLang,
      speakerOn: state.speakerOn
    }));
    if (state.apiKey !== undefined) {
      localStorage.setItem('hola_gemini_api_key', state.apiKey);
    }
  } catch (e) {
    console.warn('Could not save state:', e);
  }
}

// ═══════════════════════════════════════
// PARTICLES BACKGROUND
// ═══════════════════════════════════════

function initParticles() {
  const count = 20;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left = `${Math.random() * 100}%`;
    p.style.width = `${2 + Math.random() * 4}px`;
    p.style.height = p.style.width;
    p.style.animationDuration = `${15 + Math.random() * 25}s`;
    p.style.animationDelay = `${Math.random() * 20}s`;
    dom.particles.appendChild(p);
  }
}

// ═══════════════════════════════════════
// EVENT BINDINGS
// ═══════════════════════════════════════

function bindEvents() {
  // Companion cards
  $$('.companion-card').forEach(card => {
    card.addEventListener('click', () => {
      switchCompanion(card.dataset.companion);
      closeMobileSidebar();
    });
  });

  // Language buttons
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentLang = btn.dataset.lang;
      saveState();
      showToast(`Language switched to ${btn.textContent}`, 'info');
    });
  });

  // Set initial active language button
  $$('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === state.currentLang);
  });

  // Send message
  dom.sendBtn.addEventListener('click', sendMessage);
  dom.chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // Auto-resize textarea
  dom.chatInput.addEventListener('input', () => {
    dom.chatInput.style.height = 'auto';
    dom.chatInput.style.height = Math.min(dom.chatInput.scrollHeight, 120) + 'px';
  });

  // Voice toggle
  dom.voiceToggleBtn.addEventListener('click', toggleVoiceMode);

  // Speaker toggle
  dom.speakerToggleBtn.addEventListener('click', () => {
    state.speakerOn = !state.speakerOn;
    dom.speakerToggleBtn.textContent = state.speakerOn ? '🔊' : '🔇';
    saveState();
    showToast(state.speakerOn ? 'AI voice enabled' : 'AI voice muted', 'info');
  });
  dom.speakerToggleBtn.textContent = state.speakerOn ? '🔊' : '🔇';

  // Mic button (push-to-talk)
  dom.micBtn.addEventListener('click', startVoiceInput);

  // Mobile sidebar
  dom.mobileMenuBtn.addEventListener('click', () => {
    dom.sidebar.classList.add('open');
    dom.sidebarOverlay.classList.add('visible');
  });
  dom.sidebarOverlay.addEventListener('click', closeMobileSidebar);

  // Privacy modal
  $('#privacyBtn').addEventListener('click', openPrivacyModal);
  dom.privacyModalClose.addEventListener('click', closePrivacyModal);
  dom.privacyModal.addEventListener('click', (e) => {
    if (e.target === dom.privacyModal) closePrivacyModal();
  });

  // Privacy modal actions
  $('#modalExportBtn').addEventListener('click', () => exportChat('json'));
  $('#modalExportTxtBtn').addEventListener('click', () => exportChat('txt'));
  $('#modalDeleteBtn').addEventListener('click', deleteAllChats);

  // Sidebar footer shortcuts
  $('#exportBtn').addEventListener('click', () => exportChat('json'));
  $('#clearAllBtn').addEventListener('click', deleteAllChats);

  // Gemini API Key event
  if (dom.saveApiKeyBtn) {
    dom.saveApiKeyBtn.addEventListener('click', () => {
      const key = dom.geminiApiKey.value.trim();
      state.apiKey = key;
      saveState();
      updateApiKeyStatus();
      if (key) {
        showToast('Gemini API Key saved successfully!', 'success');
      } else {
        showToast('API Key cleared. Switched to offline mode.', 'info');
      }
    });
  }
}

function closeMobileSidebar() {
  dom.sidebar.classList.remove('open');
  dom.sidebarOverlay.classList.remove('visible');
}

// ═══════════════════════════════════════
// COMPANION SWITCHING
// ═══════════════════════════════════════

function switchCompanion(id) {
  const companion = COMPANIONS[id];
  if (!companion) return;

  state.currentCompanion = id;

  // Update active card
  $$('.companion-card').forEach(c => c.classList.toggle('active', c.dataset.companion === id));

  // Update header
  dom.headerAvatar.textContent = companion.emoji;
  dom.headerAvatar.style.background = companion.gradient;
  dom.headerName.textContent = companion.name;
  dom.headerStatus.textContent = 'Online • Ready to chat';

  // Clear chat area and load messages
  dom.chatMessages.innerHTML = '';

  // Hide welcome screen if already chatted
  const key = `${id}_${state.currentLang}`;
  if (state.conversations[key] && state.conversations[key].length > 0) {
    // Render saved messages
    state.conversations[key].forEach(msg => {
      renderMessage(msg.text, msg.type, msg.time, false);
    });
    scrollToBottom();
  } else {
    // Show greeting
    const greetings = companion.greetings[state.currentLang];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    // Save and render
    if (!state.conversations[key]) state.conversations[key] = [];
    const time = getTimeString();
    state.conversations[key].push({ text: greeting, type: 'ai', time });
    saveState();
    renderMessage(greeting, 'ai', time, true);
  }
}

// ═══════════════════════════════════════
// MESSAGING
// ═══════════════════════════════════════

function sendMessage() {
  const text = dom.chatInput.value.trim();
  if (!text) return;

  const companion = COMPANIONS[state.currentCompanion];
  const key = `${state.currentCompanion}_${state.currentLang}`;
  const time = getTimeString();

  // Save & render user message
  if (!state.conversations[key]) state.conversations[key] = [];
  state.conversations[key].push({ text, type: 'user', time });
  saveState();
  renderMessage(text, 'user', time, true);

  // Clear input
  dom.chatInput.value = '';
  dom.chatInput.style.height = 'auto';

  // Show typing indicator
  showTyping(true);

  // Generate AI response with realistic delay
  const delay = 800 + Math.random() * 1200;
  setTimeout(async () => {
    showTyping(false);

    let response;
    
    if (state.apiKey) {
      try {
        response = await fetchGeminiResponse(text, companion, state.currentLang);
      } catch (err) {
        console.warn('Gemini API error, falling back to local simulation:', err);
        response = generateResponse(text, companion, state.currentLang);
        showToast('Gemini API failed. Used offline reply.', 'error');
      }
    } else {
      response = generateResponse(text, companion, state.currentLang);
      
      // Offline fallback image keyword check
      const lower = text.toLowerCase();
      if (lower.includes('photo') || lower.includes('image') || lower.includes('pic') || lower.includes('படம்') || lower.includes('வரைபடம்')) {
        response += `\n\n![nature](https://image.pollinations.ai/prompt/beautiful%20calming%20scenery%20nature%20zen?width=512&height=512&nologo=true&seed=${Math.floor(Math.random()*10000)})`;
      }
    }

    const respTime = getTimeString();

    state.conversations[key].push({ text: response, type: 'ai', time: respTime });
    saveState();
    renderMessage(response, 'ai', respTime, true);

    // Speak response if speaker is on
    if (state.speakerOn) {
      // Clean up markdown image tag from speech
      const speechText = response.replace(/!\[.*?\]\(.*?\)/g, '').trim();
      if (speechText) speakText(speechText);
    }
  }, delay);
}

function renderMessage(text, type, time, animate) {
  // Remove welcome screen if present
  const welcome = dom.chatMessages.querySelector('.welcome-screen');
  if (welcome) welcome.remove();

  const companion = COMPANIONS[state.currentCompanion];
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', type);
  if (!animate) msgDiv.style.animation = 'none';

  const avatar = document.createElement('div');
  avatar.classList.add('message-avatar');
  if (type === 'ai') {
    avatar.textContent = companion.emoji;
    avatar.style.background = companion.gradient;
  } else {
    avatar.textContent = '🙂';
  }

  const bubble = document.createElement('div');
  bubble.classList.add('message-bubble');
  
  // Render text and optional images
  formatMessageText(text, bubble);

  const timeSpan = document.createElement('span');
  timeSpan.classList.add('message-time');
  timeSpan.textContent = time;
  bubble.appendChild(timeSpan);

  msgDiv.appendChild(avatar);
  msgDiv.appendChild(bubble);
  dom.chatMessages.appendChild(msgDiv);

  scrollToBottom();
}

function formatMessageText(text, container) {
  // 1. Separate code blocks to prevent parsing markdown within code
  const codeBlocks = [];
  let placeholderText = text.replace(/```([\s\S]*?)```/g, (match, code) => {
    const id = `__CODE_BLOCK_${codeBlocks.length}__`;
    codeBlocks.push(code.trim());
    return id;
  });

  // 2. Separate markdown images: ![alt](url)
  const images = [];
  placeholderText = placeholderText.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, url) => {
    const id = `__IMAGE_${images.length}__`;
    images.push({ alt, url });
    return id;
  });

  // 3. Helper to escape HTML for security against XSS
  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  let formatted = escapeHtml(placeholderText);

  // 4. Parse headers
  formatted = formatted.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  formatted = formatted.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  formatted = formatted.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // 5. Parse bold & italic
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // 6. Parse inline code: `code`
  formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');

  // 7. Parse lists
  formatted = formatted.replace(/(?:^|\n)[-*] (.*?)(?=\n|$)/g, '<li>$1</li>');
  formatted = formatted.replace(/(<li>.*?<\/li>)+/gs, '<ul>$&</ul>');

  // 8. Handle paragraphs/newlines
  const lines = formatted.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<li') || trimmed.startsWith('</ul') || trimmed.startsWith('</li') || trimmed.startsWith('__')) {
      return line;
    }
    return `<p>${line}</p>`;
  });
  formatted = processedLines.join('\n');

  // 9. Re-insert images
  images.forEach((img, index) => {
    const placeholder = `__IMAGE_${index}__`;
    const html = `
      <div class="chat-image-wrapper">
        <img src="${img.url}" alt="${img.alt}" loading="lazy" onload="scrollToBottom()" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div style="display:none; padding:10px; font-size:0.82rem; color:#f43f5e;">⚠️ Failed to load image</div>
      </div>
    `;
    formatted = formatted.replace(placeholder, html);
  });

  // 10. Re-insert code blocks with syntax wrapper and copy button
  codeBlocks.forEach((code, index) => {
    const placeholder = `__CODE_BLOCK_${index}__`;
    const escapedCode = escapeHtml(code);
    const html = `
      <div class="chat-code-wrapper" style="margin-top: 10px; background: rgba(0, 0, 0, 0.3); border-radius: 8px; border: 1px solid var(--glass-border); overflow: hidden; font-family: monospace; font-size: 0.88rem; line-height: 1.5;">
        <div style="background: rgba(255, 255, 255, 0.05); padding: 6px 12px; font-size: 0.75rem; color: var(--clr-text-secondary); border-bottom: 1px solid var(--glass-border); display: flex; justify-content: space-between; align-items: center;">
          <span>Code</span>
          <button onclick="navigator.clipboard.writeText(this.parentElement.nextElementSibling.textContent); showToast('Code copied!', 'success');" style="background: transparent; border: none; color: var(--clr-accent-secondary); cursor: pointer; font-family: var(--font-primary); font-size: 0.72rem; outline: none;">Copy</button>
        </div>
        <pre style="margin: 0; padding: 12px; overflow-x: auto; white-space: pre;"><code style="background: transparent; padding: 0; border: none; color: #f3f4f6;">${escapedCode}</code></pre>
      </div>
    `;
    formatted = formatted.replace(placeholder, html);
  });

  container.innerHTML = formatted;
}

async function fetchGeminiResponse(userText, companion, lang) {
  const systemPrompts = {
    friendly_listener: "You are Ananya, a warm, friendly listener. You are empathetic, compassionate, and excel at active listening. Keep your responses conversational, supportive, and relatively concise (1-3 sentences).",
    creative_thinker: "You are Kavin, a creative thinker and witty friend. You are fun, artistic, energetic, and love sharing random fun facts, playing word games, or telling riddles. Keep your responses creative and brief (1-3 sentences).",
    calm_mentor: "You are Adithya, a calm mentor and mindfulness guide. You are peaceful, reflective, and offer calming advice, breathing exercises, and philosophical insights. Keep your responses peaceful and concise (1-3 sentences)."
  };

  const langInstructions = {
    tamil: "You MUST write your entire response ONLY in native Tamil language using Tamil script. Do not use English script.",
    tanglish: "You MUST write your response in Tanglish (Tamil words written in English Latin script, casually mixed with English words, like: 'Hey friend, innaiku unga day epdi poguthu? Vanga pesalaam'). Keep the tone natural, modern, and friendly.",
    english: "You MUST write your response in English."
  };

  const imageInstruction = "If the user asks you to show, generate, send, or display a photo/image/drawing, you MUST generate it by including a markdown image tag in your response. The format MUST be: `![description](https://image.pollinations.ai/prompt/URL_ENCODED_DESCRIPTION?width=512&height=512&nologo=true&seed=RANDOM)` where URL_ENCODED_DESCRIPTION is a detailed, English description of the image the user wants (URL-encoded) and RANDOM is a random number to avoid caching. For example: `![sunset](https://image.pollinations.ai/prompt/beautiful%20beach%20sunset?width=512&height=512&nologo=true&seed=4832)`. Do not write anything else inside the image markdown link.";

  const systemPrompt = `${systemPrompts[companion.personality] || systemPrompts.friendly_listener} ${langInstructions[lang] || langInstructions.english} ${imageInstruction} Always stay in character. Do not break character.`;

  const key = `${state.currentCompanion}_${state.currentLang}`;
  const history = state.conversations[key] || [];
  
  const contents = [];
  let lastRole = null;
  
  for (let i = Math.max(0, history.length - 10); i < history.length; i++) {
    const msg = history[i];
    const role = msg.type === 'user' ? 'user' : 'model';
    if (role !== lastRole) {
      const cleanText = msg.text.replace(/!\[.*?\]\(.*?\)/g, '').trim();
      if (cleanText) {
        contents.push({
          role: role,
          parts: [{ text: cleanText }]
        });
        lastRole = role;
      }
    }
  }
  
  if (contents.length === 0 || contents[contents.length - 1].role !== 'user') {
    contents.push({
      role: 'user',
      parts: [{ text: userText }]
    });
  } else {
    contents[contents.length - 1].parts[0].text = userText;
  }

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${state.apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: contents,
      systemInstruction: {
        parts: [{ text: systemPrompt }]
      },
      generationConfig: {
        maxOutputTokens: 300,
        temperature: 0.7
      }
    })
  });

  if (!response.ok) {
    throw new Error(`Gemini API returned status ${response.status}`);
  }

  const data = await response.json();
  if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts[0]) {
    return data.candidates[0].content.parts[0].text.trim();
  } else {
    throw new Error("Invalid response structure from Gemini API");
  }
}

function updateApiKeyStatus() {
  if (!dom.apiKeyStatus) return;
  if (state.apiKey) {
    dom.apiKeyStatus.textContent = 'Mode: Real AI (Gemini 1.5 Flash) Active';
    dom.apiKeyStatus.className = 'api-key-status active';
  } else {
    dom.apiKeyStatus.textContent = 'Mode: Offline keyword rules (No API key)';
    dom.apiKeyStatus.className = 'api-key-status inactive';
  }
}

function scrollToBottom() {
  requestAnimationFrame(() => {
    dom.chatMessages.scrollTop = dom.chatMessages.scrollHeight;
  });
}

function showTyping(show) {
  dom.typingIndicator.classList.toggle('visible', show);
  if (show) {
    dom.headerStatus.textContent = 'Typing...';
  } else {
    dom.headerStatus.textContent = 'Online • Ready to chat';
  }
}

// ═══════════════════════════════════════
// AI RESPONSE ENGINE
// ═══════════════════════════════════════

function generateResponse(userText, companion, lang) {
  const lower = userText.toLowerCase();
  const responses = companion.responses[lang];

  // Detect mood/topic
  let detectedCategory = 'default';
  let maxMatches = 0;

  for (const [category, langKeywords] of Object.entries(KEYWORDS)) {
    const keywords = langKeywords[lang] || langKeywords.english;
    let matches = 0;
    for (const kw of keywords) {
      if (lower.includes(kw.toLowerCase())) {
        matches++;
      }
    }
    if (matches > maxMatches) {
      maxMatches = matches;
      detectedCategory = category;
    }
  }

  // If no strong match, use default
  if (maxMatches === 0) {
    detectedCategory = 'default';
  }

  const pool = responses[detectedCategory] || responses.default;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ═══════════════════════════════════════
// VOICE INPUT (Speech Recognition)
// ═══════════════════════════════════════

let recognition = null;

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast('Speech Recognition not supported in this browser', 'error');
    return null;
  }

  const rec = new SpeechRecognition();
  rec.continuous = false;
  rec.interimResults = false;

  // Set language based on current selection
  switch (state.currentLang) {
    case 'tamil':
      rec.lang = 'ta-IN';
      break;
    case 'tanglish':
    case 'english':
    default:
      rec.lang = 'en-IN';
      break;
  }

  rec.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    dom.chatInput.value = transcript;
    dom.chatInput.style.height = 'auto';
    dom.chatInput.style.height = Math.min(dom.chatInput.scrollHeight, 120) + 'px';

    if (state.voiceMode) {
      // In voice mode, auto-send
      sendMessage();
    }
  };

  rec.onerror = (event) => {
    console.warn('Speech recognition error:', event.error);
    if (event.error !== 'no-speech') {
      showToast('Voice input error. Please try again.', 'error');
    }
    stopVoiceListening();
  };

  rec.onend = () => {
    stopVoiceListening();
  };

  return rec;
}

function startVoiceInput() {
  if (recognition) {
    recognition.abort();
    recognition = null;
  }

  recognition = initSpeechRecognition();
  if (!recognition) return;

  try {
    recognition.start();
    dom.micBtn.textContent = '🔴';
    dom.voiceVisualizer.classList.add('active');
    showToast('Listening... speak now 🎤', 'info');
  } catch (e) {
    console.warn('Could not start recognition:', e);
    showToast('Could not start voice input', 'error');
  }
}

function stopVoiceListening() {
  dom.micBtn.textContent = '🎙️';
  dom.voiceVisualizer.classList.remove('active');
  if (recognition) {
    try { recognition.stop(); } catch (e) { /* ignore */ }
  }
}

function toggleVoiceMode() {
  state.voiceMode = !state.voiceMode;
  dom.voiceToggleBtn.classList.toggle('voice-active', state.voiceMode);

  if (state.voiceMode) {
    showToast('Voice mode ON - Messages will auto-send after speaking', 'info');
  } else {
    showToast('Voice mode OFF', 'info');
    stopVoiceListening();
  }
}

// ═══════════════════════════════════════
// TEXT-TO-SPEECH
// ═══════════════════════════════════════

function speakText(text) {
  if (!window.speechSynthesis) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 1.05;
  utterance.volume = 0.9;

  // Set language
  switch (state.currentLang) {
    case 'tamil':
      utterance.lang = 'ta-IN';
      break;
    case 'tanglish':
    case 'english':
    default:
      utterance.lang = 'en-IN';
      break;
  }

  // Try to find a suitable voice
  const voices = window.speechSynthesis.getVoices();
  const targetLang = utterance.lang.split('-')[0];
  const voice = voices.find(v => v.lang.startsWith(targetLang)) || voices[0];
  if (voice) utterance.voice = voice;

  window.speechSynthesis.speak(utterance);
}

// Ensure voices are loaded
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    // Voices are ready
  };
}

// ═══════════════════════════════════════
// PRIVACY MODAL
// ═══════════════════════════════════════

function openPrivacyModal() {
  updatePrivacyStats();
  if (dom.geminiApiKey) dom.geminiApiKey.value = state.apiKey;
  updateApiKeyStatus();
  dom.privacyModal.classList.add('visible');
}

function closePrivacyModal() {
  dom.privacyModal.classList.remove('visible');
}

function updatePrivacyStats() {
  let totalMessages = 0;
  let totalConversations = 0;

  for (const key in state.conversations) {
    if (state.conversations[key].length > 0) {
      totalConversations++;
      totalMessages += state.conversations[key].length;
    }
  }

  const storageBytes = new Blob([JSON.stringify(state.conversations)]).size;
  const storageKB = (storageBytes / 1024).toFixed(1);

  dom.statMessages.textContent = totalMessages;
  dom.statConversations.textContent = totalConversations;
  dom.statStorage.textContent = `${storageKB} KB`;
}

// ═══════════════════════════════════════
// EXPORT & DELETE
// ═══════════════════════════════════════

function exportChat(format) {
  if (Object.keys(state.conversations).length === 0) {
    showToast('No chat history to export', 'error');
    return;
  }

  let content, filename, type;

  if (format === 'json') {
    content = JSON.stringify(state.conversations, null, 2);
    filename = `hola_chat_export_${getDateString()}.json`;
    type = 'application/json';
  } else {
    let text = '═══ HOLA AI COMPANION - Chat History ═══\n';
    text += `Exported on: ${new Date().toLocaleString()}\n\n`;

    for (const [key, messages] of Object.entries(state.conversations)) {
      const [companion, lang] = key.split('_');
      text += `\n── ${COMPANIONS[companion]?.name || companion} (${lang}) ──\n`;
      messages.forEach(msg => {
        const sender = msg.type === 'user' ? 'You' : COMPANIONS[companion]?.name || 'AI';
        text += `[${msg.time}] ${sender}: ${msg.text}\n`;
      });
      text += '\n';
    }

    content = text;
    filename = `hola_chat_export_${getDateString()}.txt`;
    type = 'text/plain';
  }

  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(`Chat exported as ${format.toUpperCase()}!`, 'success');
  closePrivacyModal();
}

function deleteAllChats() {
  if (!confirm('Are you sure you want to delete ALL chat history? This cannot be undone.')) return;

  state.conversations = {};
  state.sessionCount = 0;
  saveState();

  // Reload current view
  switchCompanion(state.currentCompanion);

  showToast('All chat data deleted successfully', 'success');
  closePrivacyModal();
}

// ═══════════════════════════════════════
// TOAST NOTIFICATIONS
// ═══════════════════════════════════════

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.classList.add('toast', type);

  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;

  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════

function getTimeString() {
  return new Date().toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
}

function getDateString() {
  return new Date().toISOString().split('T')[0];
}
