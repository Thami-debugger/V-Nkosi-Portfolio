window.portfolioProjectData = {
    featured: [
        {
            id: "applynova",
            title: "ApplyNova",
            category: "AI & Automation",
            problem: "Job seekers need a more direct way to find suitable openings, submit applications, and keep track of responses.",
            description: "A professional job-application platform. Its live page describes job discovery, CV-backed applications, Gmail integration, and application tracking.",
            features: [
                "Discover real job openings",
                "One-click applications with a CV",
                "Gmail integration with professional templates",
                "Application and response tracking"
            ],
            technologies: ["Tailwind CSS on the public landing page", "Backend stack not publicly verified"],
            demoUrl: "https://applynova.co.za/",
            resources: [
                {
                    label: "Product video",
                    url: "https://youtu.be/h1FfQX8uRi4?si=gEgkkU5rlyiD3HE4"
                },
                {
                    label: "Podcast discussion",
                    url: "https://drive.google.com/file/d/1UDmhem3mSDRR67kasCZqRVmBucrjMQHT/view?usp=sharing"
                }
            ]
        },
        {
            id: "silent-drain",
            title: "Silent Drain",
            category: "Research",
            problem: "Exploring how satellite observations and geospatial analysis could help researchers investigate potential urban water loss.",
            description: "A Master's research project investigating potential urban water leaks and unusual surface-water patterns. Dashboard results are exploratory research signals, not confirmed leak detections.",
            features: [
                "Joburg Water Leak Detection dashboard built with Streamlit",
                "Dashboard UI requests point, statistics, and alert data from a separate API",
                "API calls returned HTTP 429 during app inspection; a later direct request to the points endpoint timed out"
            ],
            technologies: ["Streamlit dashboard", "Analysis and API stack not publicly verified"],
            demoUrl: "https://water-leak-dashboard.onrender.com/",
            status: "The dashboard responds, but its data API returned HTTP 429 during app inspection and a later direct request to its points endpoint timed out. No displayed totals or detections are validated."
        }
    ],
    more: [
        {
            id: "productivity-tracker",
            title: "Productivity Tracker — Task Analytics and Habit Tracking",
            category: "Productivity",
            problem: "People need a lightweight way to organize tasks and understand their daily completion habits.",
            description: "A no-registration task tracker that records completion times and summarizes productivity patterns in the browser.",
            features: [
                "Add, categorize, prioritize, and complete tasks",
                "Track completion times, productive hours, and daily patterns",
                "View category and hourly activity charts",
                "Monitor habit streaks; data is stored in browser localStorage"
            ],
            technologies: ["HTML", "CSS", "Vanilla JavaScript", "localStorage"],
            demoUrl: "https://productivity-tracker-vd37.onrender.com/",
            sourceUrl: "https://github.com/Thami-debugger/Productivity-Tracker",
            imageUrl: "https://raw.githubusercontent.com/Thami-debugger/Productivity-Tracker/1c706d9a57ca676c597eb856f1631c4e7e95b8fa/Screenshot%202025-12-30%20235104.png",
            imageAlt: "Productivity Tracker interface screenshot",
            aliases: ["Productivity-Tracker"]
        },
        {
            id: "water-leak-dashboard",
            title: "Water Leak Dashboard — Geospatial Water-Loss Research",
            category: "Research",
            problem: "Researchers need an interface for exploring possible spatial indicators related to urban water loss.",
            description: "The live Streamlit dashboard is associated with Silent Drain and exploratory research into satellite observations and unusual surface-water patterns. It does not establish confirmed leaks.",
            features: [
                "Displays an alert summary in the dashboard interface",
                "Requests point and statistics data from a separate API",
                "Backing API requests returned HTTP 429 during verification"
            ],
            technologies: ["Streamlit dashboard", "Analysis and API stack not publicly verified"],
            demoUrl: "https://water-leak-dashboard.onrender.com/",
            status: "The dashboard returned HTTP 200, but API calls for points, statistics, and alerts returned HTTP 429 during app inspection; a later direct request to the points endpoint timed out."
        },
        {
            id: "shoppulse-ai",
            title: "ShopPulse AI — Retail Analytics",
            category: "Business Automation",
            problem: "Businesses need a workflow for preparing invoices and following up on payments.",
            description: "The provided deployment currently presents an invoicing and business-automation app branded EnterpriseFlow Pro, rather than a retail-analytics dashboard.",
            features: [
                "Create, send, and track invoices",
                "Automated invoice reminders",
                "Invoice and client-management workflows are present in the source repository"
            ],
            technologies: ["Python", "Flask", "Supabase", "Bootstrap 5"],
            demoUrl: "https://shoppulse-ai-1.onrender.com/",
            status: "The provided deployment currently presents EnterpriseFlow Pro invoicing rather than retail analytics. Its repository is private, so a public source-code link is not included."
        },
        {
            id: "data-analysis",
            title: "Interactive Data Analysis Application",
            category: "Data Science",
            secondaryCategories: ["AI & Analytics"],
            problem: "Analysts need a quick way to inspect tabular data, spot quality issues, and explore useful summaries and charts.",
            description: "A Streamlit app for CSV and Excel exploration. Its deployed page warns that local Ollama narration is unavailable on Render; rule-based profiling, data cleaning, and visualizations remain available.",
            features: [
                "Upload CSV and XLSX files; inspect rows, columns, missing values, and duplicates",
                "Review statistical summaries, data types, and data previews",
                "Clean data, including duplicate removal and other supported quality fixes",
                "Explore charts, correlation and outlier summaries, and rule-based analysis",
                "Export cleaned data as CSV"
            ],
            technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn"],
            demoUrl: "https://streamlit-data-analysis.onrender.com/",
            sourceUrl: "https://github.com/Thami-debugger/data-analysis",
            imageUrl: "https://raw.githubusercontent.com/Thami-debugger/data-analysis/3bc14eb23b0ae61fb25ed2ee997abb2c45c9b499/Screenshot%202025-12-31%20013635.png",
            imageAlt: "Interactive Data Analysis application upload screen",
            aliases: ["DataClean Pro"],
            status: "Optional Ollama-generated narration requires a locally installed Ollama service and is unavailable in the Render deployment."
        },
        {
            id: "clipboard-bridge",
            title: "Clipboard Bridge — Clipboard Utility",
            category: "Developer Tools",
            problem: "Moving short text between a user's devices can require unnecessary copying through messaging or email.",
            description: "A browser-based clipboard utility that transfers text between connected devices in a temporary room.",
            features: [
                "Create a room or join one with a six-character code",
                "Synchronize clipboard text over a WebSocket connection",
                "Rooms expire after 24 hours; room state is held in server memory",
                "No account or database is required"
            ],
            technologies: ["Python", "FastAPI", "WebSockets", "Vanilla JavaScript"],
            demoUrl: "https://clipboard-bridge-qzqw.onrender.com/",
            sourceUrl: "https://github.com/Thami-debugger/clipboard-bridge"
        },
        {
            id: "bitcoin-model",
            title: "Bitcoin Predicting Model",
            category: "Machine Learning",
            description: "A machine-learning model exploring Bitcoin price fluctuations.",
            demoUrl: "https://bb-kn4h.onrender.com"
        },
        {
            id: "queue-management",
            title: "Queue Management System",
            category: "Automation",
            description: "A queue-management project focused on service delivery and operational efficiency, with Python task automation.",
            technologies: ["Python"],
            demoUrl: "https://wcco.onrender.com"
        },
        {
            id: "word-of-the-day",
            title: "Word of the Day App",
            category: "Learning",
            description: "A small app that fetches and displays a new word each day.",
            demoUrl: "https://word-of-the-day-vclq.onrender.com"
        },
        {
            id: "power-apps-challenge",
            title: "Microsoft Power Apps Challenge",
            category: "Low-Code",
            description: "A demonstration of Power Automate, Canvas apps, Model-Driven apps, and Power BI integration.",
            technologies: ["Power Automate", "Power Apps", "Power BI"],
            resources: [
                {
                    label: "Watch the demonstration",
                    url: "https://drive.google.com/file/d/1J78myXCEjj-ie93XdTxFwZEPkCZ8CbZ6/view?usp=drive_link"
                }
            ]
        },
        {
            id: "trading-bot",
            title: "My Trading Bot",
            category: "Experiments",
            description: "A trading-bot project; implementation details are not publicly documented here.",
            resources: [
                {
                    label: "Watch the project video",
                    url: "https://drive.google.com/file/d/1n2D2P3f2QtFsJfFnELCra5xfkNW5VJ4y/view?usp=sharing"
                }
            ]
        }
    ]
};
