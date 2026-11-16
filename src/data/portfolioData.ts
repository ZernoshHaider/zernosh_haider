export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flutter' | 'cross-platform' | 'ui-ux';
  description: string;
  techStack: string[];
  features: string[];
  metrics: string;
  liveDemoUrl: string;
  phoneColor: string;
  screenshot?: string;
  screens: {
    id: string;
    title: string;
    description: string;
    badge: string;
    accentColor: string;
    mockContent: {
      type: 'dashboard' | 'ecommerce' | 'fitness' | 'social';
      statValue: string;
      statLabel: string;
      items: { name: string; value: string; trend?: string; status?: string }[];
    };
  }[];
}

export interface BentoSkill {
  id: string;
  title: string;
  category: string;
  level: number;
  iconName: string;
  description: string;
  color: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Zernosh Haider',
    title: 'Mobile & Cross-Platform Developer',
    subtitle: 'Specialized in High-Performance Flutter Architecture, Pixel-Perfect UI, & Firebase Backend Integrations.',
    location: 'Pakistan • Open to Global & Remote Roles',
    availability: 'Available for Freelance & Full-time Roles',
    bio: 'Flutter Developer with 2+ years of professional mobile engineering experience at The Tuitionist building robust, cross-platform Android & iOS applications. Independent app publisher managing an active Google Play Console Developer Account.',
    stats: [
      { label: 'Professional Experience', value: '2+ Yrs' },
      { label: 'Apps Published / Shipped', value: '14+' },
      { label: 'The Tuitionist Apps', value: '5+' },
      { label: 'Code Cleanliness Rating', value: '5/5' },
    ],
    phone: '03359656672',
    phoneFormatted: '+92 335 9656672',
    socials: {
      linkedin: 'https://www.linkedin.com/in/haider-zernosh-0a5b26382/',
      email: 'zernosh.contact@gmail.com',
      whatsapp: 'https://wa.me/923359656672',
      playstore: 'https://play.google.com/store/search?q=momin%20pulse&c=apps&hl=en',
    },
  },

  companyExperience: {
    company: 'The Tuitionist',
    role: 'Flutter Developer',
    experienceYears: '2+ Years Experience',
    period: '2024 – 2026',
    location: 'Rawalpindi / Islamabad, Pakistan',
    summary: 'Spearheaded core mobile application development, feature releases, and code refactoring for high-impact commercial and utility applications using Flutter & Dart. Shipped multiple production apps across Google Play Store and Apple App Store.',
    playStoreUrl: 'https://play.google.com/store/apps/developer?id=The+Tuitionist&hl=en',
    appStoreUrl: 'https://apps.apple.com/us/iphone/search?term=thetuitionist',
    apps: [
      {
        name: 'Tawil',
        tag: 'Enterprise & Commercial',
        description: 'Scalable commercial utility mobile app featuring streamlined API pipelines and high-speed data sync.',
      },
      {
        name: 'The Tuitionist',
        tag: 'EdTech & Learning',
        description: 'Flagship educational platform with real-time class tracking, tutor booking, and seamless user management.',
      },
      {
        name: 'Jazb',
        tag: 'Interactive Media',
        description: 'Engaging cross-platform application with smooth micro-interactions, responsive UI, and custom animation physics.',
      },
      {
        name: 'Shop Chat',
        tag: 'E-Commerce & Chat',
        description: 'Real-time buyer-seller messaging, order notifications, and instant catalog exploration.',
      },
      {
        name: 'Raabta',
        tag: 'Social & Connectivity',
        description: 'Community networking application with push notifications, offline-first SQLite cache, and instant sync.',
      },
    ],
  },

  projects: [
    {
      id: 'momin-pulse',
      title: 'Momin Pulse',
      subtitle: 'Complete Islamic Lifestyle & Prayer Companion App',
      category: 'flutter',
      description: 'A beautifully crafted Flutter-based Islamic app featuring accurate prayer time calculations, Quran reading, Qibla direction finder, daily Duas, Hijri calendar integration, and a stunning dark Islamic UI with gold accents. Published on Google Play Store.',
      techStack: ['Flutter', 'Dart', 'Firebase', 'REST API', 'Geolocator', 'Provider'],
      features: [
        'Accurate Prayer Times with Countdown Timer',
        'Quran Reading with Arabic Text',
        'Qibla Direction Compass',
        'Daily Duas & Supplications Collection',
        'Hijri Calendar Integration',
        'Beautiful Dark Islamic UI with Gold Accents'
      ],
      metrics: 'Published on Play Store • Live Users',
      liveDemoUrl: 'https://play.google.com/store/search?q=momin%20pulse&c=apps&hl=en',
      phoneColor: 'from-emerald-500/20 to-amber-600/20',
      screenshot: '/momin-pulse-screenshot.png',
      screens: [
        {
          id: 'screen-1',
          title: 'Prayer Times Dashboard',
          description: 'Real-time prayer schedule with live countdown to the next prayer.',
          badge: 'Prayer Times',
          accentColor: '#10b981',
          mockContent: {
            type: 'dashboard',
            statValue: 'Sunrise',
            statLabel: 'Current Prayer',
            items: [
              { name: 'Fajr', value: '05:27 AM', status: 'Offered' },
              { name: 'Sunrise', value: '06:43 AM', status: 'Active' },
              { name: 'Dhuhr', value: '11:54 AM' },
              { name: 'Asr', value: '02:46 PM' },
              { name: 'Maghrib', value: '05:24 PM' },
            ]
          }
        }
      ]
    }
  ] as Project[],

  skills: [
    {
      id: 'flutter',
      title: 'Flutter & Dart Engine',
      category: 'Core Framework',
      level: 95,
      iconName: 'Smartphone',
      description: 'Expertise in custom widgets, RenderObject manipulation, platform channels (iOS Swift / Android Kotlin bridge), & 60 FPS animations.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'state-mgmt',
      title: 'BLoC / Riverpod / Provider',
      category: 'Architecture & State',
      level: 92,
      iconName: 'Cpu',
      description: 'Clean Architecture patterns separating Data, Domain, and Presentation layers. Predictable state transitions & immutability.',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'firebase',
      title: 'Firebase & Cloud Services',
      category: 'Backend & Storage',
      level: 90,
      iconName: 'Flame',
      description: 'Firestore DB, Cloud Functions, Authentication, FCM Push Notifications, Crashlytics, and Remote Config setup.',
      color: 'from-amber-500 to-orange-500',
    },
    {
      id: 'rest-api',
      title: 'REST APIs & WebSockets',
      category: 'Networking',
      level: 94,
      iconName: 'Network',
      description: 'Dio client configuration, JWT Token refreshes, interceptors, GraphQL query caching, and live WebSocket streaming.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      id: 'ui-ux',
      title: 'Figma to Code Precision',
      category: 'Design & UX',
      level: 96,
      iconName: 'Figma',
      description: 'Translating complex Figma auto-layouts, glassmorphism design systems, and fluid micro-animations into Flutter code.',
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 'git-ci',
      title: 'Git & CI/CD Pipelines',
      category: 'DevOps & Testing',
      level: 88,
      iconName: 'GitBranch',
      description: 'Automated Play Store & App Store deployments via Fastlane & GitHub Actions. Unit, Widget, and Integration tests.',
      color: 'from-blue-500 to-cyan-500',
    }
  ] as BentoSkill[],

  codeSnippet: `// ⚡ High-Performance Flutter BLoC State Handler
class WorkoutBloc extends Bloc<WorkoutEvent, WorkoutState> {
  final WorkoutRepository repository;

  WorkoutBloc({required this.repository}) : super(WorkoutInitial()) {
    on<FetchTelemetryData>((event, emit) async {
      emit(WorkoutLoading());
      try {
        final stream = await repository.getLiveTelemetry();
        await emit.forEach(
          stream,
          onData: (Telemetry telemetry) => WorkoutLoaded(telemetry),
          onError: (err, stack) => WorkoutError(err.toString()),
        );
      } catch (e) {
        emit(WorkoutError(e.toString()));
      }
    });
  }
}`,

  experience: [
    {
      role: 'Flutter Developer (2+ Years Experience)',
      company: 'The Tuitionist | Rawalpindi / Islamabad, Pakistan',
      period: '2024 – 2026',
      description: 'Spearheaded core mobile development, feature releases, and code refactoring for mobile applications using Flutter and Dart. Shipped multiple commercial apps including Tawil, The Tuitionist, Jazb, Shop Chat, and Raabta to Google Play Store and Apple App Store.',
    },
    {
      role: 'Independent Mobile App Publisher',
      company: 'Google Play Console Developer Account',
      period: '2024 – Present',
      description: 'Own and operate a verified personal Google Play Console developer account. Built and published Momin Pulse with dynamic prayer calculations, offline caching, and responsive UI.',
    },
  ]
};
