<!DOCTYPE html>
<html data-theme="synthwave">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.9.0/dist/full.css" rel="stylesheet" type="text/css" />
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
    body { font-family: 'Inter', sans-serif; }
    .highlight-text {
      position: relative;
      display: inline-block;
      z-index: 1;
    }
    .highlight-text::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 2px;
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, rgba(100,100,255,0.3), rgba(200,100,255,0.5));
      z-index: -1;
      border-radius: 2px;
    }
    .skill-badge {
      transition: all 0.3s ease;
    }
    .skill-badge:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 15px rgba(100, 100, 255, 0.4);
    }
  </style>
</head>
<body>
<div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">Brian Walker</a>
  </div>
  <div class="flex gap-2">
    <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img alt="Profile" src="https://media.istockphoto.com/id/2026155202/photo/a-tricolor-mixed-breed-dog-listening-intently-with-a-foggy-background.webp?b=1&s=612x612&w=0&k=20&c=RzmZTKoA28cy0qwBU7CTY0mPs9SQiCQbWUhlwlcJnC8=" />
        </div>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="/about" class="justify-between">Profile</a></li>
        <li><a href="/">Home</a></li>
      </ul>
    </div>
  </div>
</div>

<section class="bg-base-200 min-h-screen py-16">
  <div class="container mx-auto px-4">
    <!-- About Me Header -->
    <div class="text-center mb-16" data-aos="fade-down">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        <span class="highlight-text">About Me</span>
      </h1>
      <p class="text-lg opacity-90 max-w-2xl mx-auto">
        Tech enthusiast, problem solver, and upcoming entrepreneur with a passion for innovation.
      </p>
    </div>

    <!-- Bio Section -->
    <div class="grid lg:grid-cols-2 gap-12 items-center mb-16">
      <div class="order-2 lg:order-1" data-aos="fade-right">
        <div class="avatar">
          <div class="w-full rounded-xl shadow-lg">
            <img src="https://media.istockphoto.com/id/2026155202/photo/a-tricolor-mixed-breed-dog-listening-intently-with-a-foggy-background.webp?b=1&s=612x612&w=0&k=20&c=RzmZTKoA28cy0qwBU7CTY0mPs9SQiCQbWUhlwlcJnC8=" alt="Brian Walker" class="rounded-xl" />
          </div>
        </div>
      </div>
      <div class="order-1 lg:order-2" data-aos="fade-left">
        <h2 class="text-3xl font-bold mb-6">Who I Am</h2>
        <p class="mb-4 text-lg opacity-90">
          Hi, I'm Brian Walker - a passionate technologist with a drive to create innovative solutions that make a difference. With a background in computer science and business, I bridge the gap between technical implementation and strategic vision.
        </p>
        <p class="mb-4 text-lg opacity-90">
          My journey began when I built my first website at 14, and since then I've been obsessed with the transformative power of technology. I believe in continuous learning and pushing boundaries to create impactful products.
        </p>
        <div class="flex gap-4 mt-8">
          <a href="#" class="btn btn-primary">Download CV</a>
          <a href="#" class="btn btn-outline btn-secondary">Contact Me</a>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="mb-16" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div class="skill-badge p-4 bg-base-100 rounded-lg shadow-md text-center">
          <div class="text-4xl mb-2">💻</div>
          <h3 class="font-bold">Web Dev</h3>
          <p class="text-sm opacity-80">HTML, CSS, JS</p>
        </div>
        <div class="skill-badge p-4 bg-base-100 rounded-lg shadow-md text-center">
          <div class="text-4xl mb-2">📱</div>
          <h3 class="font-bold">Mobile</h3>
          <p class="text-sm opacity-80">React Native</p>
        </div>
        <div class="skill-badge p-4 bg-base-100 rounded-lg shadow-md text-center">
          <div class="text-4xl mb-2">🔗</div>
          <h3 class="font-bold">Blockchain</h3>
          <p class="text-sm opacity-80">Solidity, Web3</p>
        </div>
        <div class="skill-badge p-4 bg-base-100 rounded-lg shadow-md text-center">
          <div class="text-4xl mb-2">📊</div>
          <h3 class="font-bold">Data</h3>
          <p class="text-sm opacity-80">Python, SQL</p>
        </div>
        <div class="skill-badge p-4 bg-base-100 rounded-lg shadow-md text-center">
          <div class="text-4xl mb-2">🎨</div>
          <h3 class="font-bold">Design</h3>
          <p class="text-sm opacity-80">UI/UX</p>
        </div>
      </div>
    </div>

    <!-- Experience Timeline -->
    <div class="mb-16" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-8 text-center">My Journey</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content p-6 bg-base-100 rounded-lg shadow-md relative">
            <div class="timeline-dot absolute w-4 h-4 bg-primary rounded-full"></div>
            <div class="timeline-date text-sm opacity-70 mb-2">2022 - Present</div>
            <h3 class="text-xl font-bold mb-2">Founder & CEO</h3>
            <h4 class="text-lg text-primary mb-2">TechStart Innovations</h4>
            <p class="opacity-90">Building the next generation of decentralized applications with a focus on user experience and accessibility.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content p-6 bg-base-100 rounded-lg shadow-md relative">
            <div class="timeline-dot absolute w-4 h-4 bg-secondary rounded-full"></div>
            <div class="timeline-date text-sm opacity-70 mb-2">2019 - 2022</div>
            <h3 class="text-xl font-bold mb-2">Senior Developer</h3>
            <h4 class="text-lg text-secondary mb-2">Digital Solutions Inc.</h4>
            <p class="opacity-90">Led a team of 5 developers to create enterprise web applications for Fortune 500 clients.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content p-6 bg-base-100 rounded-lg shadow-md relative">
            <div class="timeline-dot absolute w-4 h-4 bg-accent rounded-full"></div>
            <div class="timeline-date text-sm opacity-70 mb-2">2016 - 2019</div>
            <h3 class="text-xl font-bold mb-2">Junior Developer</h3>
            <h4 class="text-lg text-accent mb-2">WebCraft Studios</h4>
            <p class="opacity-90">Developed and maintained client websites while learning modern web technologies.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fun Facts -->
    <div class="text-center" data-aos="fade-up">
      <h2 class="text-3xl font-bold mb-8">Fun Facts</h2>
      <div class="stats shadow bg-base-100">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div class="stat-title">Coffee Consumed</div>
          <div class="stat-value text-primary">4,200+</div>
          <div class="stat-desc">cups and counting</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div class="stat-title">Projects Completed</div>
          <div class="stat-value text-secondary">87</div>
          <div class="stat-desc">and many more to come</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
          </div>
          <div class="stat-title">Hours Coding</div>
          <div class="stat-value text-accent">10,000+</div>
          <div class="stat-desc">since 2014</div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
    
    // Add timeline connector lines
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      if (index < timelineItems.length - 1) {
        const connector = document.createElement('div');
        connector.className = 'timeline-connector absolute h-8 w-0.5 bg-neutral left-2 top-full';
        connector.style.top = '100%';
        item.style.position = 'relative';
        item.appendChild(connector);
      }
    });
  });
</script>
</body>
</html>
