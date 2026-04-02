# DSA Roadmap - Interactive Learning Guide

A beautifully designed, interactive **Data Structures & Algorithms Roadmap** built with React. This app provides a structured, week-by-week plan to master DSA using Python -- complete with curated video tutorials, practice resources, and difficulty tracking.

## Preview

The app features a dark-themed, monospace UI with:
- A visual timeline of 13 stages from beginner to interview-ready
- Expandable topic cards with difficulty badges
- Curated YouTube video links for each topic
- Practice platform recommendations
- Recommended books section

## What's Inside

The roadmap covers **13 stages** over **24+ weeks**:

| # | Stage | Weeks | Difficulty |
|---|-------|-------|------------|
| 1 | Python Foundations | Week 1-2 | Easy |
| 2 | Complexity Analysis | Week 2-3 | Easy |
| 3 | Arrays & Hashing | Week 3-5 | Easy-Medium |
| 4 | Sorting & Binary Search | Week 5-7 | Medium |
| 5 | Linked Lists | Week 7-8 | Easy-Medium |
| 6 | Stacks & Queues | Week 8-9 | Easy-Medium |
| 7 | Recursion & Backtracking | Week 9-11 | Medium |
| 8 | Trees | Week 11-14 | Medium |
| 9 | Graphs | Week 14-17 | Medium-Hard |
| 10 | Dynamic Programming | Week 17-21 | Medium-Hard |
| 11 | Greedy & Intervals | Week 21-23 | Medium |
| 12 | Bit Manipulation | Week 23-24 | Medium |
| 13 | Interview Prep & Mastery | Week 24+ | All Levels |

Each stage includes:
- **Overview** -- what the topic is and why it matters
- **Topics** -- individual concepts with difficulty ratings and detailed descriptions
- **Video Tutorials** -- hand-picked YouTube videos from creators like NeetCode, Striver, Corey Schafer, Abdul Bari, and Aditya Verma
- **Resources** -- additional learning materials and playlists

## Tech Stack

- **React** 19.2 -- UI framework
- **JavaScript (JSX)** -- component logic
- **CSS-in-JS** -- inline styling with a dark monospace theme
- **Create React App** -- project bootstrapping

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   https://github.com/abhadre66/DSA_Roadmap.git
   cd DSA_Roadmap
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder, ready for deployment.

## Project Structure

```
DSA_Roadmap/
├── public/
│   ├── index.html          # HTML template
│   ├── favicon.ico         # App icon
│   ├── manifest.json       # PWA manifest
│   └── robots.txt
├── src/
│   ├── App.js              # Root component
│   ├── App.css             # Base styles
│   ├── DSARoadmap.jsx      # Main roadmap component (all stages, topics, UI)
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # Performance metrics
├── package.json
└── README.md
```

## Featured Practice Platforms

The app recommends these platforms for hands-on practice:

| Platform | Best For |
|----------|----------|
| [LeetCode](https://leetcode.com) | Interview prep (gold standard) |
| [NeetCode](https://neetcode.io) | Curated roadmap + Python solutions |
| [Striver's A2Z Sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2) | Comprehensive problem list (450+) |
| [Codeforces](https://codeforces.com) | Competitive programming |
| [HackerRank](https://www.hackerrank.com) | Beginner-friendly tracks |
| [GeeksforGeeks](https://www.geeksforgeeks.org) | Concept articles & explanations |

## Recommended Books

| Book | Level |
|------|-------|
| Grokking Algorithms -- Aditya Bhargava | Beginner (visual, Python examples) |
| Cracking the Coding Interview -- Gayle McDowell | Interview (189 problems) |
| Elements of Programming Interviews in Python | Interview (250 problems) |
| CLRS -- Intro to Algorithms | Reference (deep theory) |

## How to Use This Roadmap

1. **Follow the stages in order** -- each stage builds on the previous one
2. **Watch the linked videos** -- they're hand-picked for clarity
3. **Practice on LeetCode/NeetCode** -- reading alone won't build skill
4. **Track your progress** -- the difficulty badges help you gauge where you are
5. **Spend extra time on Trees, Graphs, and DP** -- these are the most heavily tested in interviews

## Contributing

Contributions are welcome! If you'd like to add topics, fix links, or improve the UI:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is open source and available for personal and educational use.

---

Built for anyone preparing for DSA interviews. Good luck with your prep!
