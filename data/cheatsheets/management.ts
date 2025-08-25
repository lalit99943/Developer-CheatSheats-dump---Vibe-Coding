import { CheatSheet, ChartConfig } from '../../types';

export const managementCheatSheets: CheatSheet[] = [
  {
    id: 'mgmt-7',
    category: 'Management',
    subCategory: 'svg',
    title: 'Agile Metric: Burndown Chart',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .axis { stroke: #475569; }
        .grid { stroke: #334155; stroke-dasharray: 2, 2; }
        .label { font-size: 11px; fill: #94a3b8; }
        .ideal-line { stroke: #f59e0b; stroke-dasharray: 4, 4; stroke-width: 2; }
        .actual-line { stroke: #60a5fa; stroke-width: 2.5; fill: none; }
        .dot { fill: #60a5fa; }
    </style>
    
    <!-- Axes -->
    <line x1="50" y1="200" x2="400" y2="200" class="axis"/> <!-- X-axis -->
    <text x="225" y="230" class="label" text-anchor="middle">Sprint Days</text>
    <line x1="50" y1="200" x2="50" y2="30" class="axis"/> <!-- Y-axis -->
    <text x="30" y="120" class="label" text-anchor="middle" transform="rotate(-90 30 120)">Story Points</text>

    <!-- Grid and Labels -->
    <text x="40" y="45" class="label" text-anchor="end">40</text><line x1="50" y1="40" x2="400" y2="40" class="grid"/>
    <text x="40" y="205" class="label" text-anchor="end">0</text>
    <text x="50" y="215" class="label" text-anchor="middle">0</text>
    <text x="390" y="215" class="label" text-anchor="middle">10</text>
    
    <!-- Lines -->
    <polyline points="50,40 390,200" class="ideal-line" />
    <polyline points="50,40 84,50 118,60 152,80 186,100 220,90 254,120 288,140 322,170 356,180 390,190" class="actual-line"/>
    
    <!-- Legend -->
    <rect x="280" y="40" width="10" height="2" stroke="none" fill="#f59e0b" style="stroke-dasharray: 2, 2;"/>
    <text x="295" y="45" class="label">Ideal</text>
    <rect x="340" y="40" width="10" height="2" stroke="none" fill="#60a5fa"/>
    <text x="355" y="45" class="label">Actual</text>
</svg>`,
    description: 'A graphical representation of work left to do versus time. The outstanding work is on the vertical axis, with time along the horizontal. The chart shows the ideal progress (straight line) versus the actual progress (jagged line).',
    tags: ['management', 'agile', 'scrum', 'metrics', 'burndown', 'progress', 'svg'],
  },
  {
    id: 'mgmt-8',
    category: 'Management',
    subCategory: 'svg',
    title: 'Agile Metric: Lead Time vs Cycle Time',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 200" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .timeline { stroke: #475569; stroke-width: 2; marker-end: url(#time-arrow); }
        .marker { stroke: #64748b; stroke-dasharray: 2, 2; }
        .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; }
        .range-label { font-size: 13px; font-weight: 600; text-anchor: middle; }
        .cycle-time { stroke: #34d399; }
        .lead-time { stroke: #60a5fa; }
    </style>
    <defs>
        <marker id="time-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569"/>
        </marker>
    </defs>
    
    <!-- Timeline -->
    <line x1="30" y1="50" x2="520" y2="50" class="timeline"/>
    
    <!-- Markers -->
    <g id="marker1">
        <line x1="50" y1="50" x2="50" y2="80" class="marker"/>
        <text x="50" y="95" class="label">Ticket</text>
        <text x="50" y="110" class="label">Created</text>
    </g>
    <g id="marker2">
        <line x1="180" y1="50" x2="180" y2="80" class="marker"/>
        <text x="180" y="95" class="label">Work</text>
        <text x="180" y="110" class="label">Started</text>
    </g>
    <g id="marker3">
        <line x1="400" y1="50" x2="400" y2="80" class="marker"/>
        <text x="400" y="95" class="label">Work</text>
        <text x="400" y="110" class="label">Finished</text>
    </g>
    <g id="marker4">
        <line x1="500" y1="50" x2="500" y2="80" class="marker"/>
        <text x="500" y="95" class="label">Delivered to</text>
        <text x="500" y="110" class="label">Customer</text>
    </g>
    
    <!-- Ranges -->
    <g id="cycle-time-range">
        <path d="M 180 140 C 220 120, 360 120, 400 140" stroke-width="2" fill="none" class="cycle-time"/>
        <text x="290" y="130" class="range-label" fill="#a7f3d0">Cycle Time</text>
    </g>
    <g id="lead-time-range">
        <path d="M 50 170 C 150 145, 400 145, 500 170" stroke-width="2" fill="none" class="lead-time"/>
        <text x="275" y="160" class="range-label" fill="#7dd3fc">Lead Time</text>
    </g>
</svg>`,
    description: 'A timeline visualizing the difference between Lead Time (total time from request to delivery) and Cycle Time (time from start of work to finish). Both are key indicators of a development team\'s efficiency.',
    tags: ['management', 'agile', 'kanban', 'metrics', 'lead time', 'cycle time', 'svg'],
  },
  {
    id: 'mgmt-6',
    category: 'Management',
    subCategory: 'chart',
    title: 'Agile Metric: Velocity',
    type: 'chart',
    snippet: {
      type: 'bar',
      data: [
        { name: 'Sprint 1', points: 20, average: 22.4 },
        { name: 'Sprint 2', points: 25, average: 22.4 },
        { name: 'Sprint 3', points: 22, average: 22.4 },
        { name: 'Sprint 4', points: 24, average: 22.4 },
        { name: 'Sprint 5', points: 21, average: 22.4 },
      ],
      xAxisDataKey: 'name',
      series: [
        { dataKey: 'points', color: '#60a5fa' },
        { dataKey: 'average', color: '#f59e0b' },
      ],
    } as ChartConfig,
    description: 'Velocity is the average amount of work a scrum team completes during a sprint, measured in story points. This chart shows the team\'s velocity over several sprints and the running average, which is used for planning and forecasting future work.',
    tags: ['management', 'agile', 'scrum', 'metrics', 'velocity', 'planning', 'chart'],
  },
  {
    id: 'mgmt-1',
    category: 'Management',
    subCategory: 'text',
    title: 'KPI - Key Performance Indicator',
    type: 'code',
    snippet: 'KPI: A measurable value that demonstrates how effectively a company is achieving key business objectives.',
    description: 'KPIs are used to evaluate success at reaching targets. For a software team, a KPI could be "average lead time for changes" or "deployment frequency".',
    tags: ['management', 'metrics', 'kpi', 'performance', 'business'],
  },
  {
    id: 'mgmt-10',
    category: 'Management',
    subCategory: 'svg',
    title: 'MoSCoW Method',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .title { font-size: 16px; font-weight: bold; fill: #e2e8f0; }
        .subtitle { font-size: 11px; fill: #64748b; font-style: italic; }
        .item-text { font-size: 12px; fill: #94a3b8; }
        .line { stroke: #475569; stroke-width: 2; }
    </style>
    
    <line x1="225" y1="20" x2="225" y2="280" class="line"/>
    <line x1="20" y1="150" x2="430" y2="150" class="line"/>
    
    <!-- Must Have -->
    <g transform="translate(40, 40)">
        <text class="title" fill="#ef4444">Must Have</text>
        <text y="15" class="subtitle">Critical for delivery</text>
        <text y="40" class="item-text">- Non-negotiable</text>
        <text y="55" class="item-text">- Core functionality</text>
    </g>
    
    <!-- Should Have -->
    <g transform="translate(245, 40)">
        <text class="title" fill="#f59e0b">Should Have</text>
        <text y="15" class="subtitle">Important, but not critical</text>
        <text y="40" class="item-text">- High value</text>
        <text y="55" class="item-text">- Can be delayed if needed</text>
    </g>

    <!-- Could Have -->
    <g transform="translate(40, 170)">
        <text class="title" fill="#3b82f6">Could Have</text>
        <text y="15" class="subtitle">Desirable, but not necessary</text>
        <text y="40" class="item-text">- "Nice to have"</text>
        <text y="55" class="item-text">- Low impact if omitted</text>
    </g>
    
    <!-- Won't Have -->
    <g transform="translate(245, 170)">
        <text class="title" fill="#64748b">Won't Have</text>
        <text y="15" class="subtitle">Out of scope for this timeframe</text>
        <text y="40" class="item-text">- Can be done later</text>
        <text y="55" class="item-text">- Least critical</text>
    </g>
</svg>`,
    description: 'A prioritization technique visualized as a 2x2 grid. It helps teams and stakeholders reach a common understanding of the importance of requirements for a specific delivery timeframe.',
    tags: ['management', 'prioritization', 'moscow', 'requirements', 'agile', 'svg'],
  },
  {
    id: 'mgmt-3',
    category: 'Management',
    subCategory: 'svg',
    title: 'MVP - Minimum Viable Product',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .title { font-size: 13px; font-weight: bold; fill: #e2e8f0; }
        .label { font-size: 11px; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#mvp-arrow); }
        .happy { fill: #34d399; }
        .sad { fill: #ef4444; }
    </style>
    <defs>
        <marker id="mvp-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>

    <!-- Not MVP -->
    <text x="20" y="40" class="title">Not an MVP (Incremental)</text>
    <path d="M 80 80 L 140 80" class="arrow"/><text x="80" y="110" class="label">Wheel</text><text x="80" y="60" class="sad">☹️</text>
    <path d="M 190 80 L 250 80" class="arrow"/><text x="190" y="110" class="label">Axle</text><text x="190" y="60" class="sad">☹️</text>
    <path d="M 300 80 L 360 80" class="arrow"/><text x="300" y="110" class="label">Chassis</text><text x="300" y="60" class="sad">☹️</text>
    <text x="410" y="110" class="label">Car</text><text x="410" y="60" class="happy">😊</text>
    
    <!-- Is MVP -->
    <text x="20" y="150" class="title">Is an MVP (Iterative)</text>
    <path d="M 80 190 L 140 190" class="arrow"/><text x="80" y="220" class="label">Skateboard</text><text x="80" y="170" class="happy">😊</text>
    <path d="M 190 190 L 250 190" class="arrow"/><text x="190" y="220" class="label">Scooter</text><text x="190" y="170" class="happy">😊</text>
    <path d="M 300 190 L 360 190" class="arrow"/><text x="300" y="220" class="label">Bicycle</text><text x="300" y="170" class="happy">😊</text>
    <text x="410" y="220" class="label">Car</text><text x="410" y="170" class="happy">😊</text>
</svg>`,
    description: 'An MVP is a version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort. The goal is to deliver a functional, lovable product at each stage, not just a component of the final product.',
    tags: ['management', 'product', 'mvp', 'agile', 'lean', 'svg'],
  },
  {
    id: 'mgmt-2',
    category: 'Management',
    subCategory: 'svg',
    title: 'OKR - Objectives and Key Results',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .box { fill: #334155; stroke: #475569; rx: 5; }
        .kr-box { fill: #0f172a; stroke: #334155; rx: 5; }
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; }
        .arrow { stroke: #64748b; stroke-width: 2; marker-end: url(#okr-arrow); }
    </style>
    <defs>
        <marker id="okr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/></marker>
    </defs>
    
    <rect x="100" y="30" width="250" height="60" class="box"/>
    <text x="225" y="50" class="title">Objective</text>
    <text x="225" y="75" class="label">Launch a successful MVP</text>
    
    <path d="M 225 90 V 120" class="arrow" />

    <rect x="25" y="150" width="120" height="60" class="kr-box"/>
    <text x="85" y="170" class="title">Key Result 1</text>
    <text x="85" y="195" class="label">1,000 sign-ups</text>

    <rect x="165" y="150" width="120" height="60" class="kr-box"/>
    <text x="225" y="170" class="title">Key Result 2</text>
    <text x="225" y="195" class="label">20% weekly active</text>

    <rect x="305" y="150" width="120" height="60" class="kr-box"/>
    <text x="365" y="170" class="title">Key Result 3</text>
    <text x="365" y="195" class="label">NPS > 40</text>
</svg>`,
    description: 'A goal-setting framework. The **Objective** is a significant, inspirational goal. **Key Results** are measurable milestones which, if achieved, will advance the objective. This structure provides a clear path to success.',
    tags: ['management', 'goals', 'okr', 'strategy', 'planning', 'svg'],
  },
  {
    id: 'mgmt-5',
    category: 'Management',
    subCategory: 'svg',
    title: 'RACI Matrix',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 250" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .header { font-weight: 600; fill: #cbd5e1; font-size: 13px; text-anchor: middle; }
        .task { font-weight: 500; fill: #e2e8f0; font-size: 12px; }
        .cell { font-weight: 700; font-size: 14px; text-anchor: middle; }
        .r { fill: #34d399; } /* Responsible */
        .a { fill: #facc15; } /* Accountable */
        .c { fill: #60a5fa; } /* Consulted */
        .i { fill: #94a3b8; } /* Informed */
        .grid-line { stroke: #334155; stroke-width: 1; }
    </style>
    <text x="225" y="30" text-anchor="middle" font-size="16" fill="#e2e8f0" font-weight="bold">RACI Matrix Example</text>
    
    <!-- Headers -->
    <text x="200" y="70" class="header">Proj. Manager</text>
    <text x="300" y="70" class="header">Developer</text>
    <text x="400" y="70" class="header">Stakeholder</text>
    
    <!-- Rows -->
    <g class="task-row">
        <text x="20" y="110" class="task">Define Requirements</text>
        <rect x="160" y="90" width="80" height="30" fill="none"/><text x="200" y="110" class="cell a">A</text>
        <rect x="260" y="90" width="80" height="30" fill="none"/><text x="300" y="110" class="cell c">C</text>
        <rect x="360" y="90" width="80" height="30" fill="none"/><text x="400" y="110" class="cell r">R</text>
    </g>
    <line x1="15" y1="130" x2="435" y2="130" class="grid-line"/>
    <g class="task-row">
        <text x="20" y="160" class="task">Develop Feature</text>
        <rect x="160" y="140" width="80" height="30" fill="none"/><text x="200" y="160" class="cell a">A</text>
        <rect x="260" y="140" width="80" height="30" fill="none"/><text x="300" y="160" class="cell r">R</text>
        <rect x="360" y="140" width="80" height="30" fill="none"/><text x="400" y="160" class="cell i">I</text>
    </g>
    <line x1="15" y1="180" x2="435" y2="180" class="grid-line"/>
    <g class="task-row">
        <text x="20" y="210" class="task">User Acceptance Test</text>
        <rect x="160" y="190" width="80" height="30" fill="none"/><text x="200" y="210" class="cell c">C</text>
        <rect x="260" y="190" width="80" height="30" fill="none"/><text x="300" y="210" class="cell i">I</text>
        <rect x="360" y="190" width="80" height="30" fill="none"/><text x="400" y="210" class="cell a">A/R</text>
    </g>
</svg>`,
    description: 'A responsibility assignment chart (RACI) shows the roles and responsibilities for tasks in a project. (R)esponsible: Who does the work. (A)ccountable: Who owns the work. (C)onsulted: Who provides input. (I)nformed: Who is kept up-to-date.',
    tags: ['management', 'raci', 'roles', 'responsibility', 'project', 'svg'],
  },
  {
    id: 'mgmt-12',
    category: 'Management',
    subCategory: 'text',
    title: 'ROI - Return on Investment',
    type: 'code',
    snippet: 'ROI = (Net Profit / Cost of Investment) * 100',
    description: 'A performance measure used to evaluate the efficiency or profitability of an investment. In projects, it helps stakeholders decide if a feature or initiative is worth the cost.',
    tags: ['management', 'finance', 'roi', 'business', 'metrics'],
  },
  {
    id: 'mgmt-4',
    category: 'Management',
    subCategory: 'text',
    title: 'SOW - Statement of Work',
    type: 'code',
    snippet: 'SOW: A formal document that captures and defines all the work, deliverables, timelines, and costs for a project.',
    description: 'An SOW is a detailed project contract that outlines everything that will be done, by whom, and by when. It is often used for external contractors or client work.',
    tags: ['management', 'project', 'sow', 'contract', 'planning'],
  },
  {
    id: 'mgmt-9',
    category: 'Management',
    subCategory: 'svg',
    title: 'SWOT Analysis',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 300" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .title { font-size: 16px; font-weight: bold; fill: #e2e8f0; }
        .subtitle { font-size: 11px; fill: #64748b; font-style: italic; }
        .item-text { font-size: 12px; fill: #94a3b8; }
        .line { stroke: #475569; stroke-width: 2; }
    </style>
    
    <line x1="225" y1="20" x2="225" y2="280" class="line"/>
    <line x1="20" y1="150" x2="430" y2="150" class="line"/>
    
    <!-- Strengths (Internal, Positive) -->
    <g transform="translate(40, 40)">
        <text class="title" fill="#34d399">Strengths</text>
        <text y="15" class="subtitle">Internal, Positive</text>
        <text y="40" class="item-text">- Experienced Team</text>
        <text y="55" class="item-text">- Strong Brand</text>
        <text y="70" class="item-text">- Efficient Processes</text>
    </g>
    
    <!-- Weaknesses (Internal, Negative) -->
    <g transform="translate(245, 40)">
        <text class="title" fill="#f87171">Weaknesses</text>
        <text y="15" class="subtitle">Internal, Negative</text>
        <text y="40" class="item-text">- High Debt</text>
        <text y="55" class="item-text">- Outdated Technology</text>
        <text y="70" class="item-text">- Limited Budget</text>
    </g>

    <!-- Opportunities (External, Positive) -->
    <g transform="translate(40, 170)">
        <text class="title" fill="#60a5fa">Opportunities</text>
        <text y="15" class="subtitle">External, Positive</text>
        <text y="40" class="item-text">- Emerging Market</text>
        <text y="55" class="item-text">- New Technology</text>
        <text y="70" class="item-text">- Favorable Regulations</text>
    </g>
    
    <!-- Threats (External, Negative) -->
    <g transform="translate(245, 170)">
        <text class="title" fill="#f59e0b">Threats</text>
        <text y="15" class="subtitle">External, Negative</text>
        <text y="40" class="item-text">- New Competitors</text>
        <text y="55" class="item-text">- Economic Downturn</text>
        <text y="70" class="item-text">- Changing User Tastes</text>
    </g>
</svg>`,
    description: 'SWOT is a strategic planning technique that helps an organization identify its internal Strengths and Weaknesses, as well as its external Opportunities and Threats.',
    tags: ['management', 'strategy', 'swot', 'planning', 'analysis', 'svg'],
  },
  {
    id: 'mgmt-13',
    category: 'Management',
    subCategory: 'svg',
    title: 'TCO - Total Cost of Ownership',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
      .title { font-size: 16px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
      .label { font-size: 12px; fill: #94a3b8; text-anchor: middle; }
      .iceberg-top { fill: #e0f2fe; }
      .iceberg-bottom { fill: #38bdf8; opacity: 0.6; }
      .water { fill: #0c4a6e; }
      .item-text { font-size: 13px; fill: #e0f2fe; text-anchor: middle; }
    </style>

    <text x="200" y="30" class="title">Total Cost of Ownership (TCO)</text>
    
    <!-- Water -->
    <rect x="0" y="100" width="400" height="200" class="water"/>
    <path d="M 0 100 Q 50 90, 100 100 T 200 100 T 300 100 T 400 100" fill="#38bdf8" opacity="0.4"/>

    <!-- Iceberg -->
    <path d="M 150 100 L 250 100 L 280 260 L 120 260 Z" class="iceberg-bottom" />
    <path d="M 150 100 L 180 60 L 220 80 L 250 100 Z" class="iceberg-top" />
    
    <!-- Text -->
    <text x="200" y="85" class="label" fill="#075985" font-weight="bold">Purchase Price</text>

    <text x="200" y="140" class="item-text">Maintenance & Support</text>
    <text x="200" y="170" class="item-text">Training & Staffing</text>
    <text x="200" y="200" class="item-text">Upgrades & Integration</text>
    <text x="200" y="230" class="item-text">Downtime & Outages</text>
</svg>`,
    description: 'TCO is a financial estimate of direct and indirect costs. For software, the initial purchase price is often just the "tip of the iceberg," with larger, hidden costs for maintenance, support, and training.',
    tags: ['management', 'finance', 'tco', 'cost', 'planning', 'svg'],
  },
  {
    id: 'mgmt-11',
    category: 'Management',
    subCategory: 'svg',
    title: 'WIP - Work in Progress Limits',
    type: 'svg',
    snippet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" style="font-family: 'Inter', sans-serif; background-color: #1e293b; border-radius: 8px;">
    <style>
        .title { font-size: 14px; font-weight: bold; fill: #e2e8f0; text-anchor: middle; }
        .header { font-size: 12px; fill: #cbd5e1; text-anchor: middle; }
        .board { fill: #0f172a; stroke: #334155; rx: 5; }
        .card { fill: #334155; stroke: #475569; rx: 3; }
        .bottleneck { fill: #ef4444; }
    </style>
    
    <!-- Without WIP -->
    <text x="125" y="30" class="title">Without WIP Limits (Bottleneck)</text>
    <rect x="25" y="40" width="200" height="220" class="board"/>
    <text x="75" y="60" class="header">To Do</text>
    <text x="175" y="60" class="header">In Progress</text>
    <rect x="135" y="70" width="80" height="25" class="card bottleneck"/>
    <rect x="135" y="100" width="80" height="25" class="card bottleneck"/>
    <rect x="135" y="130" width="80" height="25" class="card bottleneck"/>
    <rect x="135" y="160" width="80" height="25" class="card bottleneck"/>
    <rect x="135" y="190" width="80" height="25" class="card bottleneck"/>
    
    <!-- With WIP -->
    <text x="375" y="30" class="title">With WIP Limit (Limit = 2)</text>
    <rect x="275" y="40" width="200" height="220" class="board"/>
    <text x="325" y="60" class="header">To Do</text>
    <text x="425" y="60" class="header">In Progress (2)</text>
    <rect x="285" y="70" width="80" height="25" class="card"/>
    <rect x="285" y="100" width="80" height="25" class="card"/>
    <rect x="385" y="70" width="80" height="25" class="card"/>
    <rect x="385" y="100" width="80" height="25" class="card"/>
</svg>`,
    description: 'Limiting Work In Progress is a core concept in Kanban. It prevents bottlenecks by constraining the number of tasks in a given stage. This improves flow, reduces context switching, and helps teams deliver work faster.',
    tags: ['management', 'kanban', 'wip', 'agile', 'flow', 'efficiency', 'svg'],
  },
];
