export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'flutter' | 'cross-platform' | 'ui-ux';
  description: string;
  techStack: string[];
  features: string[];
  metrics: string;
  githubUrl: string;
  liveDemoUrl: string;
  phoneColor: string; // Tailored phone accent
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
    bio: 'Crafting ultra-fluid, native-performing cross-platform mobile apps for iOS & Android. Experienced in Clean Architecture, BLoC/Riverpod state management, custom animation engines, and seamless REST/GraphQL API integrations.',
    stats: [
      { label: 'Apps Published / Shipped', value: '14+' },
      { label: 'Flutter Core Mastery', value: '98%' },
      { label: 'Code Cleanliness Rating', value: '5/5' },
      { label: 'User Retention Boost', value: '+42%' },
    ],
    socials: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'zernosh.haider.dev@gmail.com',
      twitter: 'https://twitter.com',
    },
  },

  projects: [
    {
      id: 'apex-fitness',
      title: 'ApexPulse Pro',
      subtitle: 'Next-Gen AI Workout & Biometrics Tracker',
      category: 'flutter',
      description: 'Ultra-fast Flutter mobile application featuring real-time heart rate sensor telemetry, offline-first SQLite cache, micro-interactions, and custom 60 FPS Canvas chart renders.',
      techStack: ['Flutter 3.22', 'Dart', 'Firebase Auth', 'Riverpod 2.0', 'CustomPainter', 'REST API'],
      features: [
        'Custom 60 FPS Health Canvas Charts',
        'Biometric Auth (FaceID & Fingerprint)',
        'Offline-First Sync Engine',
        'Dark Glassmorphic UI Aesthetics'
      ],
      metrics: '4.9★ Rating • 25k+ Active Installs',
      githubUrl: 'https://github.com',
      liveDemoUrl: 'https://apex-pulse-demo.app',
      phoneColor: 'from-cyan-500/20 to-blue-600/20',
      screens: [
        {
          id: 'screen-1',
          title: 'Live Telemetry Dashboard',
          description: 'Real-time workout heart rate graph & calorie burn monitor.',
          badge: 'Live Analytics',
          accentColor: '#06b6d4',
          mockContent: {
            type: 'fitness',
            statValue: '142 BPM',
            statLabel: 'Current Heart Rate',
            items: [
              { name: 'Active Calories', value: '680 kcal', trend: '+14%' },
              { name: 'Workout Duration', value: '45m 12s' },
              { name: 'Recovery Score', value: '92/100', status: 'Optimal' },
            ]
          }
        },
        {
          id: 'screen-2',
          title: 'AI Workout Planner',
          description: 'Personalized exercise routines generated via dynamic JSON feeds.',
          badge: 'Smart Coach',
          accentColor: '#10b981',
          mockContent: {
            type: 'dashboard',
            statValue: '4 Sets • 12 Reps',
            statLabel: 'Heavy Deadlifts',
            items: [
              { name: 'Target Muscle', value: 'Posterior Chain' },
              { name: 'Rest Interval', value: '90 Seconds' },
              { name: '1RM Prediction', value: '185 kg' },
            ]
          }
        }
      ]
    },
    {
      id: 'neopay-wallet',
      title: 'NeoPay Crypto & Fintech',
      subtitle: 'Secured Cross-Platform Digital Vault App',
      category: 'flutter',
      description: 'Bank-grade cross-platform mobile wallet built with Flutter & Dart. Uses BLoC pattern, Encrypted SharedPreferences, biometric PIN security, and instant QR code payments.',
      techStack: ['Flutter', 'Dart', 'Flutter BLoC', 'Web3 Dart', 'Biometrics', 'Node.js Backend'],
      features: [
        'End-to-End Payload Encryption',
        'Instant P2P QR Code Remittance',
        'Real-Time Crypto Ticker WebSockets',
        'Multi-currency Fiat Converter'
      ],
      metrics: '$1.2M Monthly Volume Processed',
      githubUrl: 'https://github.com',
      liveDemoUrl: 'https://neopay-vault.app',
      phoneColor: 'from-emerald-500/20 to-teal-600/20',
      screens: [
        {
          id: 'screen-1',
          title: 'Wallet Balance & Card View',
          description: 'Glassmorphic virtual card with live balance & instant transfer shortcuts.',
          badge: 'Vault Status',
          accentColor: '#10b981',
          mockContent: {
            type: 'ecommerce',
            statValue: '$24,850.40',
            statLabel: 'Available Balance',
            items: [
              { name: 'Bitcoin (BTC)', value: '0.452 BTC', trend: '+5.4%' },
              { name: 'Ethereum (ETH)', value: '4.120 ETH', trend: '+8.1%' },
              { name: 'USDC Vault', value: '$8,500.00' },
            ]
          }
        },
        {
          id: 'screen-2',
          title: 'Transaction Audit Trail',
          description: 'Categorized spending graphs and exportable PDF statement summaries.',
          badge: 'Security Log',
          accentColor: '#06b6d4',
          mockContent: {
            type: 'dashboard',
            statValue: 'Zero-Fee Transfer',
            statLabel: 'P2P Instant Wire',
            items: [
              { name: 'Recent Transfer', value: '-$250.00', status: 'Completed' },
              { name: 'Merchant Cashier', value: '-$14.50', status: 'Verified' },
              { name: 'Staking Yield', value: '+$42.10', trend: '+12.5%' },
            ]
          }
        }
      ]
    },
    {
      id: 'foodie-dash',
      title: 'FoodieGo Express',
      subtitle: 'On-Demand Hyperlocal Delivery & Rider App',
      category: 'cross-platform',
      description: 'Dual-app ecosystem for Customers and Delivery Drivers with Google Maps API integration, live WebSocket rider tracking, dynamic order status pushes, and Stripe payment gateway.',
      techStack: ['Flutter', 'Google Maps SDK', 'Firebase Cloud Messaging', 'Provider', 'REST API'],
      features: [
        'Live Rider Marker Smooth Interpolation',
        'Push Notifications via FCM',
        'Stripe & Apple Pay Integration',
        'Rating & Review System'
      ],
      metrics: '10,000+ Orders Fulfilled',
      githubUrl: 'https://github.com',
      liveDemoUrl: 'https://foodiego-demo.app',
      phoneColor: 'from-purple-500/20 to-pink-600/20',
      screens: [
        {
          id: 'screen-1',
          title: 'Real-Time Map Tracking',
          description: 'Interactive map layer showing driver route and estimated arrival countdown.',
          badge: 'Live Map',
          accentColor: '#ec4899',
          mockContent: {
            type: 'social',
            statValue: '12 Mins',
            statLabel: 'Estimated Arrival',
            items: [
              { name: 'Rider Name', value: 'Alex R. (4.9★)' },
              { name: 'Order ID', value: '#FG-90821' },
              { name: 'Route Status', value: 'On the Way', status: 'Active' },
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
      role: 'Senior Mobile Developer',
      company: 'TechPulse Solutions',
      period: '2024 - Present',
      description: 'Leading mobile application architecture in Flutter. Reduced app launch time by 35% and introduced automated integration testing.',
    },
    {
      role: 'Flutter App Engineer',
      company: 'AppVenture Studio',
      period: '2022 - 2024',
      description: 'Developed 8+ cross-platform applications for fintech and healthcare clients with 99.8% crash-free sessions.',
    },
  ]
};
