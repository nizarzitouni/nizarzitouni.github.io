window.PROJECTS = [
  {
    "slug": "social-profile-prank",
    "kind": "mobile",
    "title": "Social Profile Prank",
    "tagline": "Generate realistic fake social media profiles for harmless pranks.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.social_profile_prank.social_profile_prank",
    "description": "Social Profile Prank is a Flutter app that generates realistic fake social media profiles for harmless pranking purposes. Create convincing Instagram, TikTok, Twitter/X, and YouTube profiles with customizable followers, posts, and profile details. The app features a freemium model with premium subscriptions, rewarded video ads for temporary feature unlocks, and high-quality screenshot export functionality. Built with Clean Architecture and BLoC pattern for robust state management.",
    "role": "Sole creator of the entire app - architecture, UI/UX design, monetization implementation, and deployment",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "RevenueCat (IAP)",
      "Google Mobile Ads",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Microsoft Clarity",
      "Image Picker/Cropper",
      "Screenshot",
      "Get It (DI)"
    ],
    "icon": "assets/mob/social_profile_prank/sp_icon.webp",
    "cover": "assets/mob/social_profile_prank/spp_cover.webp",
    "video": { "id": "3YaVWJj57Tw", "poster": "assets/mob/social_profile_prank/video.webp" },
    "screens": [
      "assets/mob/social_profile_prank/spp1.webp",
      "assets/mob/social_profile_prank/spp2.webp",
      "assets/mob/social_profile_prank/spp3.webp",
      "assets/mob/social_profile_prank/spp4.webp"
    ]
  },
  {
    "slug": "mockly",
    "kind": "mobile",
    "title": "Mockly",
    "tagline": "Create realistic fake social media posts and chat conversations in seconds.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.mockly",
    "description": "Mockly is a Flutter app for creating realistic mock social media posts and chat conversations across 8 platforms: Instagram, X, LinkedIn and Facebook posts, plus WhatsApp, Telegram, Instagram DM and Messenger chats. Each platform has its own fields, like verified badges, job titles and page info. Chats support group conversations with up to 20 participants, drag-and-drop message reordering and read receipts. Exports are high-resolution, with an optional fake iOS/Android status bar. The app runs on a freemium model with RevenueCat subscriptions, AdMob with mediation, and rewarded video ads for temporary feature unlocks. Remote Config controls force updates and ads. Built with Clean Architecture, Cubit state management and Freezed models.",
    "role": "Sole creator of the entire app - architecture, UI/UX design, monetization, ad policy compliance, and Play Store release",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "Get It (DI)",
      "RevenueCat (IAP)",
      "Google Mobile Ads",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Firebase Remote Config",
      "Microsoft Clarity",
      "Image Picker/Cropper",
      "Screenshot"
    ],
    "icon": "assets/mob/mockly/mockly_icon.webp",
    "cover": "assets/mob/mockly/mockly_cover.webp",
    "video": { "id": "BMqBrVmIjsI", "poster": "assets/mob/mockly/video.webp" },
    "screens": [
      "assets/mob/mockly/mockly1.webp",
      "assets/mob/mockly/mockly2.webp",
      "assets/mob/mockly/mockly3.webp",
      "assets/mob/mockly/mockly4.webp",
      "assets/mob/mockly/mockly5.webp",
      "assets/mob/mockly/mockly6.webp",
      "assets/mob/mockly/mockly7.webp",
      "assets/mob/mockly/mockly8.webp"
    ]
  },
  {
    "slug": "daftari",
    "kind": "mobile",
    "title": "Daftari",
    "tagline": "Offline invoicing for Algerian auto-entrepreneurs, from quote to paid.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.daftari",
    "description": "Daftari is an offline invoicing app built for Algerian auto-entrepreneurs (Moukawil Dati). Users manage their clients and products, then build invoices with line items, sequential numbering and a saved signature and business stamp (with automatic background removal), and export them as professional French PDFs ready to share. Each invoice snapshots the business profile, so a PDF regenerates exactly as issued even after the profile or client changes. A paid-only dashboard shows yearly and monthly revenue per currency, and feeds the data for the annual G12 tax declaration. Everything stays on the device in a local SQLite database, with no account and no backend. The app is fully localized in Arabic (RTL), French and English, includes a bundled rules reference for the auto-entrepreneur status, and seeds example data on first launch so new users see a finished invoice right away. Monetized with AdMob, with Remote Config driving force updates. Built with a feature-first architecture, Cubit state management and Freezed states.",
    "role": "Sole creator of the entire app - product research, architecture, UI/UX design, PDF generation, localization, monetization, and Play Store release",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "Get It (DI)",
      "Drift (SQLite)",
      "Syncfusion PDF",
      "Printing",
      "Localization (AR/FR/EN)",
      "Google Mobile Ads",
      "Firebase Crashlytics",
      "Firebase Remote Config",
      "Cloud Firestore",
      "Microsoft Clarity",
      "Image Picker/Cropper",
      "Signature"
    ],
    "icon": "assets/mob/daftari/daftari_icon.webp",
    "cover": "assets/mob/daftari/daftari_cover.webp",
    "screens": [
      "assets/mob/daftari/daftari1.webp",
      "assets/mob/daftari/daftari2.webp",
      "assets/mob/daftari/daftari3.webp",
      "assets/mob/daftari/daftari4.webp",
      "assets/mob/daftari/daftari5.webp",
      "assets/mob/daftari/daftari6.webp",
      "assets/mob/daftari/daftari7.webp",
      "assets/mob/daftari/daftari8.webp"
    ]
  },
  {
    "slug": "poseghost",
    "kind": "mobile",
    "title": "PoseGhost",
    "tagline": "See the pose before you shoot, with a ghost guide right on your camera.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.poseghost",
    "description": "PoseGhost is a Flutter camera app that places a semi-transparent pose silhouette on the live camera preview, so you line your body up with the ghost and shoot instead of memorizing a reference photo. The library holds 80 hand-drawn pose overlays across 6 categories: selfie, female, male, couple, wedding and friends/groups. The ghost can be scaled, dragged, mirrored, faded with an opacity slider and switched between white and black, while premium unlocks rotation, lock, tint colors and per-pose framing memory. The camera itself supports front/back switching, timer, grid and saving straight to the gallery. The app runs on a freemium model with RevenueCat subscriptions and AdMob with Unity and Liftoff mediation. Remote Config drives force updates and ads, and a Firestore-backed feedback flow collects user reports. Built with Clean Architecture, Cubit state management and Freezed models.",
    "role": "Sole creator of the entire app - architecture, UI/UX design, pose library art direction, monetization, and Play Store release",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "Get It (DI)",
      "Camera",
      "RevenueCat (IAP)",
      "Google Mobile Ads",
      "Firebase Analytics",
      "Firebase Crashlytics",
      "Firebase Remote Config",
      "Cloud Firestore",
      "Microsoft Clarity"
    ],
    "icon": "assets/mob/poseghost/poseghost_icon.webp",
    "cover": "assets/mob/poseghost/poseghost_cover.webp",
    "video": { "id": "dQok_VKFibI", "poster": "assets/mob/poseghost/video.webp" },
    "screens": [
      "assets/mob/poseghost/poseghost1.webp",
      "assets/mob/poseghost/poseghost2.webp",
      "assets/mob/poseghost/poseghost3.webp",
      "assets/mob/poseghost/poseghost4.webp",
      "assets/mob/poseghost/poseghost5.webp"
    ]
  },
  {
    "slug": "dupli",
    "kind": "mobile",
    "title": "DUPLI - Your AI Clone",
    "tagline": "Create an AI clone of yourself that chats and talks like you.",
    "playStore": "https://play.google.com/store/apps/details?id=com.techconsolidated.avatarcloneyourself",
    "appStore": "https://apps.apple.com/cm/app/dupli-your-ai-clone/id6740580236",
    "description": "DUPLI is an innovative AI avatar cloning application that allows users to create digital versions of themselves. Built while working for a tech company, this app enables users to train AI with their unique information to replicate their communication style, voice, and personality. Features include text chat with avatars, voice call functionality, access to user-created clones, and personalized AI assistance. The app implements advanced machine learning models with a clean, intuitive interface designed for seamless user experience.",
    "role": "Lead Flutter Developer responsible for app architecture, implementing real-time communication features, integrating AI models, and optimizing performance for resource-intensive operations",
    "tech": [
      "Flutter",
      "BLoC Pattern",
      "Firebase",
      "Speech To Text",
      "RESTful APIs",
      "Cloud Functions",
      "Local Authentication"
    ],
    "icon": "assets/mob/dupli/dupli_icon.webp",
    "cover": "assets/mob/dupli/dupli_cover.webp",
    "screens": [
      "assets/mob/dupli/dupli1.webp",
      "assets/mob/dupli/dupli2.webp",
      "assets/mob/dupli/dupli3.webp",
      "assets/mob/dupli/dupli4.webp",
      "assets/mob/dupli/dupli5.webp"
    ]
  },
  {
    "slug": "stretchy-v1",
    "kind": "mobile",
    "title": "Stretchy (v1)",
    "tagline": "My first published app: timer-guided daily stretching routines.",
    "live": "https://www.appbrain.com/app/stretchy:-daily-stretches/nz.dev.stretchy",
    "description": "The first version of Stretchy was inspired by the popular app 'Bend', created as a learning project to understand app development principles. This version offered daily stretching routines with timer-guided exercises designed for all experience levels. Featuring animated demonstrations and progress tracking, this initial release helped users improve mobility and flexibility through structured routines.",
    "role": "Sole creator of the entire app",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Firebase Remote Config",
      "Shared Preferences"
    ],
    "icon": "assets/mob/stretchyv1/stv1_icon.webp",
    "cover": "assets/mob/stretchyv1/stv1_cover.webp",
    "screens": [
      "assets/mob/stretchyv1/st1.webp",
      "assets/mob/stretchyv1/st2.webp",
      "assets/mob/stretchyv1/st3.webp",
      "assets/mob/stretchyv1/st4.webp",
      "assets/mob/stretchyv1/st5.webp",
      "assets/mob/stretchyv1/st6.webp",
      "assets/mob/stretchyv1/st7.webp",
      "assets/mob/stretchyv1/st8.webp",
      "assets/mob/stretchyv1/st9.webp"
    ]
  },
  {
    "slug": "stretchy-v2",
    "kind": "mobile",
    "title": "Stretchy (v2)",
    "tagline": "Redesigned stretching app with 10+ routines for mobility and posture.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.stretchyapp",
    "appStore": "https://apps.apple.com/us/app/stretchy-posture-exercises/id6757081350",
    "description": "The completely redesigned version of Stretchy features an original UI/UX with enhanced functionality. This version offers 10+ specialized routines including morning stretches, desk breaks, posture correction, and targeted body workouts. With animated demonstrations, timer-guided sessions, and improved progress tracking, Stretchy v2 provides a comprehensive stretching experience for users of all fitness levels.",
    "role": "Sole creator of the entire app",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Firebase Remote Config",
      "Firebase Analytics",
      "Repository Pattern",
      "Shared Preferences"
    ],
    "icon": "assets/mob/stretchyv2/stv2_icon.webp",
    "cover": "assets/mob/stretchyv2/stv2_cover.webp",
    "video": { "id": "IEULaMb6XrM", "poster": "assets/mob/stretchyv2/video.webp" },
    "screens": [
      "assets/mob/stretchyv2/stv2_1.webp",
      "assets/mob/stretchyv2/stv2_2.webp",
      "assets/mob/stretchyv2/stv2_3.webp",
      "assets/mob/stretchyv2/stv2_4.webp",
      "assets/mob/stretchyv2/stv2_5.webp",
      "assets/mob/stretchyv2/stv2_6.webp",
      "assets/mob/stretchyv2/stv2_7.webp"
    ]
  },
  {
    "slug": "workout-finder",
    "kind": "mobile",
    "title": "Workout Finder",
    "tagline": "Pick exercises from a visual body map, 999+ moves with animated guides.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.workoutfinder",
    "description": "Find exercises by body part with this visual body map trainer. Featuring 999+ exercises with guides, animated demonstrations, and step-by-step instructions. Build custom routines, track your workouts with a body heatmap, and analyze your training patterns. Perfect for both beginners and experienced lifters.",
    "role": "Sole creator of the entire app",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Firebase Remote Config",
      "Firebase Analytics",
      "Clean Architecture"
    ],
    "icon": "assets/mob/workout_finder/wf_icon.webp",
    "cover": "assets/mob/workout_finder/wf_cover.webp",
    "video": { "id": "g0wkngBEEB0", "poster": "assets/mob/workout_finder/video.webp" },
    "screens": [
      "assets/mob/workout_finder/trainy_1.webp",
      "assets/mob/workout_finder/trainy_2.webp",
      "assets/mob/workout_finder/trainy_3.webp",
      "assets/mob/workout_finder/trainy_4.webp",
      "assets/mob/workout_finder/trainy_5.webp",
      "assets/mob/workout_finder/trainy_6.webp",
      "assets/mob/workout_finder/trainy_7.webp",
      "assets/mob/workout_finder/trainy_8.webp"
    ]
  },
  {
    "slug": "wardrobe-snap",
    "kind": "mobile",
    "title": "Wardrobe Snap",
    "tagline": "Snap your clothes, organize a digital closet, and plan outfits.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.wardrobesnap",
    "appStore": "https://apps.apple.com/us/app/wardrobe-snap-closet-outfit/id6770147139",
    "description": "Wardrobe Snap is a Flutter app for building and organizing a digital closet. Snap photos of your clothes, sort them into categories, and keep an inventory of everything you own. Mix and match items to plan outfits, save your favorite looks, and decide what to wear without digging through your wardrobe. Built with Clean Architecture and the BLoC/Cubit pattern, with a freemium model powered by in-app purchases and rewarded ads.",
    "role": "Sole creator of the entire app - architecture, UI/UX design, monetization, and deployment",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "RevenueCat (IAP)",
      "Google Mobile Ads",
      "Firebase Analytics",
      "Get It (DI)"
    ],
    "icon": "assets/mob/wardrobe_snap/ws_icon.webp",
    "cover": "assets/mob/wardrobe_snap/ws_cover.webp",
    "video": { "id": "N2sjv63YfYY", "poster": "assets/mob/wardrobe_snap/video.webp" },
    "screens": [
      "assets/mob/wardrobe_snap/ws1.webp",
      "assets/mob/wardrobe_snap/ws2.webp",
      "assets/mob/wardrobe_snap/ws3.webp",
      "assets/mob/wardrobe_snap/ws4.webp"
    ]
  },
  {
    "slug": "giggleclip",
    "kind": "mobile",
    "title": "GiggleClip",
    "tagline": "Turn videos and photos into captioned, shareable GIFs.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.fliktag",
    "description": "GiggleClip is a Flutter GIF maker that turns videos and photos into shareable GIFs. Trim clips, set speed and frame rate, add captions and stickers, then export and share anywhere. Built with Clean Architecture and the BLoC/Cubit pattern, with a freemium model powered by in-app purchases and rewarded ads.",
    "role": "Sole creator of the entire app - architecture, UI/UX design, monetization, and deployment",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "RevenueCat (IAP)",
      "Google Mobile Ads",
      "Firebase Analytics",
      "Get It (DI)"
    ],
    "icon": "assets/mob/giggle_clip/gc_icon.webp",
    "cover": "assets/mob/giggle_clip/gc_cover.webp",
    "screens": [
      "assets/mob/giggle_clip/gc1.webp",
      "assets/mob/giggle_clip/gc2.webp",
      "assets/mob/giggle_clip/gc3.webp",
      "assets/mob/giggle_clip/gc4.webp",
      "assets/mob/giggle_clip/gc5.webp",
      "assets/mob/giggle_clip/gc6.webp"
    ]
  },
  {
    "slug": "quran-reels-maker",
    "kind": "mobile",
    "title": "Quran Reels Maker",
    "tagline": "Turn Quran verses into shareable vertical reels.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.quranreels",
    "appStore": "https://apps.apple.com/us/app/quran-reels-maker/id6760150215",
    "description": "Quran Reels Maker is a Flutter app for creating short vertical videos with Quran verses. Pick a surah and ayah range, choose a reciter, set a background video, and overlay the Arabic text and translation, then export a ready-to-share reel for social media. Built with Clean Architecture and the BLoC/Cubit pattern, with a freemium model powered by in-app purchases and rewarded ads.",
    "role": "Sole creator of the entire app - architecture, UI/UX design, monetization, and deployment",
    "tech": [
      "Flutter",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "RevenueCat (IAP)",
      "Google Mobile Ads",
      "Firebase Analytics",
      "Get It (DI)"
    ],
    "icon": "assets/mob/quran_reels/qr_icon.webp",
    "cover": "assets/mob/quran_reels/qr_cover.webp",
    "screens": [
      "assets/mob/quran_reels/qr1.webp",
      "assets/mob/quran_reels/qr2.webp",
      "assets/mob/quran_reels/qr3.webp",
      "assets/mob/quran_reels/qr4.webp"
    ]
  },
  {
    "slug": "just-delete-me",
    "kind": "mobile",
    "title": "Just Delete Me",
    "tagline": "A directory that cuts through dark patterns to help you delete online accounts.",
    "playStore": "https://play.google.com/store/apps/details?id=com.nizarztn.justdeleteme",
    "description": "\"JUST DELETE ME\" is a directory simplifying the account deletion process by countering dark pattern techniques used by companies. With over 50k downloads on the store, this Flutter app has successfully provided users with a straightforward solution for managing their online presence.",
    "role": "Sole creator of the entire app",
    "tech": [
      "GetX",
      "Shared Preferences"
    ],
    "icon": "assets/mob/jdm/jdm_icon.webp",
    "cover": "assets/mob/jdm/jdm_cover.webp",
    "video": { "id": "B4AtJQyzxTA", "poster": "assets/mob/jdm/video.webp" },
    "screens": [
      "assets/mob/jdm/jdm1.webp",
      "assets/mob/jdm/jdm2.webp",
      "assets/mob/jdm/jdm3.webp",
      "assets/mob/jdm/jdm4.webp"
    ]
  },
  {
    "slug": "live-stream-simulator",
    "kind": "mobile",
    "title": "Live Stream Simulator",
    "tagline": "Simulate a live stream with fake viewers, donations, and chat.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.slivestreamsimulator",
    "description": "Live Stream Simulator is a feature-rich application designed to simulate live streaming experiences. With its powerful capabilities, users can:\n\n• Create virtual live streams with customizable settings\n• Manage simulated viewers and their interactions\n• Explore various monetization strategies, including virtual donations and subscriptions\n• Analyze stream analytics and viewer engagement metrics\n\nThis app serves as an invaluable tool for content creators, streamers, and businesses looking to experiment with live streaming without the need for expensive equipment or setups.",
    "role": "Sole creator of the entire app",
    "tech": [
      "Cubit",
      "Firebase",
      "Amplitude SDK",
      "RevenueCat SDK"
    ],
    "icon": "assets/mob/live_stream_simulator/lss_icon.webp",
    "cover": "assets/mob/live_stream_simulator/lss_cover.webp",
    "video": { "id": "vEj8215ZkcU", "poster": "assets/mob/live_stream_simulator/video.webp" },
    "screens": [
      "assets/mob/live_stream_simulator/lss1.webp",
      "assets/mob/live_stream_simulator/lss2.webp",
      "assets/mob/live_stream_simulator/lss3.webp",
      "assets/mob/live_stream_simulator/lss4.webp"
    ]
  },
  {
    "slug": "quick-qr-pro",
    "kind": "mobile",
    "title": "Quick QR Pro",
    "tagline": "Scan QR codes and create custom branded ones with your logo.",
    "playStore": "https://play.google.com/store/apps/details?id=com.nizarztn.quickqrpro",
    "description": "Quick QR Pro: The ultimate QR code app with easy scanning and custom code creation. Featuring logo integration, this app offers personalized and branded code experiences for various needs.\n\n\nKey Features:\n\n   ♦ Easy Scanning: Quickly scan QR codes to access information.\n   ♦ Custom Code Creation: Generate your own QR codes with the option to add your logo.\n   ♦ Brand Integration: Perfect for businesses aiming to promote their brand or individuals wanting a personal touch.\n",
    "role": "Sole creator of the entire app",
    "tech": [
      "GetX",
      "SqLite",
      "Storage"
    ],
    "icon": "assets/mob/quick_qr_pro/qqp_icon.webp",
    "cover": "assets/mob/quick_qr_pro/qqp_cover.webp",
    "screens": [
      "assets/mob/quick_qr_pro/qqp1.webp",
      "assets/mob/quick_qr_pro/qqp2.webp",
      "assets/mob/quick_qr_pro/qqp3.webp",
      "assets/mob/quick_qr_pro/qqp4.webp"
    ]
  },
  {
    "slug": "speedy-invoice",
    "kind": "mobile",
    "title": "Speedy Invoice",
    "tagline": "Create and send invoices and estimates straight from your phone.",
    "playStore": "https://play.google.com/store/apps/details?id=com.nizarztn.speedyInvoice",
    "description": "Speedy Invoice: A streamlined mobile tool for swift bill and estimate creation. Ideal for small businesses and freelancers, offering efficient on-the-go billing management.\n\n\nKey Features:\n\n   ♦ Mobile Invoice Creation: Easily generate and send invoices from your phone.\n   ♦ Estimate Management: Provide estimates before billing, streamlining the payment process.\n   ♦ Efficient Billing Management: Manage all billing aspects on the go, ensuring timely payments.\n",
    "role": "Sole creator of the entire app",
    "tech": [
      "GetX",
      "SqLite",
      "Storage"
    ],
    "icon": "assets/mob/ig/ig_icon.webp",
    "cover": "assets/mob/ig/ig_cover.webp",
    "screens": [
      "assets/mob/ig/ig1.webp",
      "assets/mob/ig/ig2.webp",
      "assets/mob/ig/ig3.webp",
      "assets/mob/ig/ig4.webp",
      "assets/mob/ig/ig5.webp",
      "assets/mob/ig/ig6.webp",
      "assets/mob/ig/ig7.webp"
    ]
  },
  {
    "slug": "audio-libro",
    "kind": "mobile",
    "title": "Audio Libro",
    "tagline": "A personalized audiobook player with background playback and bookmarks.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.audiolibro.client",
    "description": "Developed Audio Libro, a personalized audiobook platform using Flutter for an immersive listening experience. Leveraged Firebase for efficient data management and user authentication.\n\n\nKey Features:\n\n   ♦ Seamless Background Playback: Enjoy uninterrupted listening across your day.\n   ♦ Convenient Bookmarking: Save your spot and return to your favorite stories anytime.\n   ♦ User-Friendly Interface: Navigate through a vast library of audiobooks effortlessly.\n",
    "role": "Sole developer for UI design and implementation",
    "tech": [
      "Firebase",
      "GetX",
      "Rive Animations",
      "Firebase Analyitics"
    ],
    "icon": "assets/mob/audio_libro/audio_libro_icon.webp",
    "cover": "assets/mob/audio_libro/audio_libro_cover.webp",
    "screens": [
      "assets/mob/audio_libro/audio_libro_1.webp",
      "assets/mob/audio_libro/audio_libro_2.webp",
      "assets/mob/audio_libro/audio_libro_3.webp",
      "assets/mob/audio_libro/audio_libro_4.webp",
      "assets/mob/audio_libro/audio_libro_5.webp"
    ]
  },
  {
    "slug": "sa3arli",
    "kind": "mobile",
    "title": "Sa3arli",
    "tagline": "Estimate car import costs to Algeria with up-to-date customs tariffs.",
    "playStore": "https://play.google.com/store/apps/details?id=nx.nizarztn.carimp",
    "description": "Facilitating car imports to Algeria Our Flutter app provides quick and accurate cost estimates, incorporating customs tariffs. Download now for confidence in your import decisions.\n\n\nKey Features:\n\n   ♦ Cost Estimation: Get a quick and accurate estimate of importation costs.\n   ♦ Customs Tariffs: Incorporates the latest customs tariffs applied by Algerian customs.\n   ♦ Regular Updates: Stay informed with the latest information about tariffs.\n",
    "role": "Sole creator of the entire app",
    "tech": [
      "Flutter",
      "Bloc"
    ],
    "icon": "assets/mob/sa3arli/sa_icon.webp",
    "cover": "assets/mob/sa3arli/sa_cover.webp",
    "screens": [
      "assets/mob/sa3arli/sa1.webp",
      "assets/mob/sa3arli/sa2.webp",
      "assets/mob/sa3arli/sa3.webp",
      "assets/mob/sa3arli/sa4.webp",
      "assets/mob/sa3arli/sa5.webp"
    ]
  },
  {
    "slug": "tune-hub",
    "kind": "mobile",
    "title": "Tune Hub",
    "tagline": "Browse, preview, and set custom ringtones.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.tunehub",
    "description": "Developed Tune Hub, a personalized ringtone app using Flutter for a smooth user experience. Leveraged Supabase for efficient storage management.\n\n\nKey Features:\n\n   ♦ Effortless exploration of ringtones.\n   ♦ Seamless previewing functionality.\n   ♦ Easy customization of device sounds.\n",
    "role": "solo developer for UI design and implementation",
    "tech": [
      "Flutter",
      "Supabase"
    ],
    "icon": "assets/mob/tune_hub/th_icon.webp",
    "cover": "assets/mob/tune_hub/th_cover.webp",
    "screens": [
      "assets/mob/tune_hub/th1.webp",
      "assets/mob/tune_hub/th2.webp",
      "assets/mob/tune_hub/th3.webp",
      "assets/mob/tune_hub/th4.webp",
      "assets/mob/tune_hub/th5.webp"
    ]
  },
  {
    "slug": "sneakers-shop",
    "kind": "mobile",
    "title": "Sneakers Shop",
    "tagline": "Prototype storefront app for a local sneaker shop.",
    "github": "https://github.com/nizarzitouni/sneakerzi",
    "description": "Prototype app for a local peak sneakers store. Check out the code on GitHub for a glimpse into the development process.",
    "role": "Sole developer for UI design and implementation",
    "tech": [
      "Flutter"
    ],
    "icon": "assets/mob/peak_store/ps_icon.webp",
    "cover": "assets/mob/peak_store/ps_cover.webp",
    "screens": [
      "assets/mob/peak_store/ps_1.webp",
      "assets/mob/peak_store/ps_2.webp",
      "assets/mob/peak_store/ps_3.webp",
      "assets/mob/peak_store/ps_4.webp"
    ]
  },
  {
    "slug": "anatomia",
    "kind": "mobile",
    "title": "Anatomia",
    "tagline": "Explore 3D human organs, tap labelled structures, and quiz yourself.",
    "playStore": "https://play.google.com/store/apps/details?id=nz.dev.anatomia",
    "github": "https://github.com/nizarzitouni/anatomia",
    "description": "Anatomia is an interactive 3D human anatomy explorer. Rotate and zoom real-time models of the heart, brain, lungs, liver, kidneys, eyeball, intestine, pancreas and skin, tap hotspots on each organ to read about its structures, and browse microscopic, location and comparison illustrations. Two quiz modes test what you learned: find a named structure on the model, or name a highlighted one from multiple choices while the camera turns to face it, with best scores saved per organ. Rendered with flutter_scene on Flutter GPU and Impeller using meshopt-compressed GLB models, with hotspots projected onto the scene every frame, and fully localized in 12 languages including Arabic, Japanese, Hindi and Chinese.",
    "role": "Sole creator of the entire app - 3D scene and camera system, quiz modes, UI/UX, localization, and deployment",
    "tech": [
      "Flutter",
      "flutter_scene (Flutter GPU / Impeller)",
      "3D GLB Models",
      "BLoC/Cubit",
      "Freezed",
      "Go Router",
      "Get It (DI)",
      "RevenueCat (IAP)",
      "Microsoft Clarity",
      "Shared Preferences",
      "i18n (12 languages)"
    ],
    "icon": "assets/mob/anatomia/an_icon.webp",
    "cover": "assets/mob/anatomia/an_cover.webp",
    "video": { "id": "g15C_Nddxe4", "poster": "assets/mob/anatomia/video.webp" },
    "screens": [
      "assets/mob/anatomia/an1.webp",
      "assets/mob/anatomia/an2.webp",
      "assets/mob/anatomia/an3.webp",
      "assets/mob/anatomia/an4.webp",
      "assets/mob/anatomia/an5.webp"
    ]
  },
  {
    "slug": "double-jump",
    "kind": "3d",
    "title": "Double Jump",
    "tagline": "Level design for a published mobile platformer, built in Unity and Blender.",
    "live": "https://www.doublejump.wtf/",
    "behance": "https://www.behance.net/gallery/191290675/Double-Jump-Level-Design-Showcase",
    "description": "As a Level Designer at Blank Labs Gaming Studio, I've played a pivotal role in bringing the creative visions of game designers to life. My primary responsibilities involve utilizing the powerful combination of Blender and Unity to craft immersive game scenes that resonate with the intended user experience.\n\nKey Contributions:\n\n♦ Creative Implementation: Translated game designer concepts into tangible game scenes, showcasing a diverse range of game types such as platformers, royal games, hybrid puzzles, and easy-to-play games.\n♦ Collaborative Development: Fostered effective communication with developers, leveraging my background in software engineering to ensure seamless collaboration within the team. Embraced Agile methodology for testing and refining early versions of game levels.\n♦ Project Management: Utilized Jira within an Agile framework for streamlined collaboration and organized project management. This involved tasks such as receiving final art from 3D artists and personally implementing it into the game scenes.\n♦ Visual Integration: Ensured a visually appealing and seamless integration of final art received from 3D artists into the game scenes, contributing to the overall aesthetic quality of the gaming experience.\n\nMy journey at Blank Labs has been marked by a commitment to excellence, creativity, and effective teamwork. I take pride in contributing to the development of captivating games that engage and entertain users.\n",
    "role": "Level Designer in a team of 20",
    "tech": [
      "Unity",
      "Blender 3D"
    ],
    "icon": "assets/game_design/double_jump/dj_icon.webp",
    "cover": "assets/game_design/double_jump/dj_cover.webp",
    "screens": [
      "assets/game_design/double_jump/dj1.webp",
      "assets/game_design/double_jump/dj2.webp",
      "assets/game_design/double_jump/dj3.webp",
      "assets/game_design/double_jump/dj4.webp",
      "assets/game_design/double_jump/dj5.webp",
      "assets/game_design/double_jump/dj6.webp",
      "assets/game_design/double_jump/dj7.webp",
      "assets/game_design/double_jump/dj8.webp",
      "assets/game_design/double_jump/dj9.webp",
      "assets/game_design/double_jump/dj10.webp"
    ]
  },
  {
    "slug": "polytown",
    "kind": "3d",
    "title": "PolyTown",
    "tagline": "An epic low-poly asset pack: buildings, characters, props, vehicles, environments.",
    "live": "https://sketchfab.com/3d-models/polytown-low-poly-city-pack-699546b57f3e4b38986061e995ac20ad",
    "description": "An Epic Low Poly asset pack of Buildings, Characters, Props, Viehcules and Environment assets to create a low poly themed polygonal style game",
    "role": "Sole creator of the whole pack - modelling, texturing and character rigging",
    "tech": [
      "Unity",
      "Blender"
    ],
    "models": ["699546b57f3e4b38986061e995ac20ad"],
    "icon": "assets/game_design/poly_town/polyTown_icon.webp",
    "cover": "assets/game_design/poly_town/polyTown_cover.webp",
    "screens": [
      "assets/game_design/poly_town/pt1.webp",
      "assets/game_design/poly_town/pt2.webp"
    ]
  },
  {
    "slug": "medieval-pack",
    "kind": "3d",
    "title": "Medieval Pack",
    "tagline": "100+ modular assets for building medieval interiors in Unity.",
    "live": "https://assetstore.unity.com/packages/3d/environments/historic/medieval-indoor-kit-3d-224308",
    "behance": "https://www.behance.net/gallery/190658551/Level-Desing-Medieval-Indoor-Kit-3D",
    "description": "Introducing my latest creation: a comprehensive asset pack tailored for game developers seeking to infuse their projects with the allure of medieval interiors. With over 100 meticulously crafted assets including modular walls, floors, and props, this pack offers boundless opportunities for creating immersive game environments.\n",
    "role": "Sole creator of the whole pack - modelling and texturing",
    "tech": [
      "Unity",
      "Blender",
      "Gimp"
    ],
    "models": ["814fffc28ab44b8a80bd874858369c8a", "3d6da0d1488d4fcf9f857ddca08346a6", "3aa7cc64479a471389174d366fcf8e47"],
    "icon": "assets/game_design/medieval_pack/med_icon.webp",
    "cover": "assets/game_design/medieval_pack/med_cover.webp",
    "screens": [
      "assets/game_design/medieval_pack/mp1.webp",
      "assets/game_design/medieval_pack/mp2.webp",
      "assets/game_design/medieval_pack/mp3.webp",
      "assets/game_design/medieval_pack/mp4.webp"
    ]
  }
];
