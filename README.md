# Chimah — Software Engineer Portfolio

A responsive, single-page developer portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site presents Chimah's background, technical skills, selected projects, and contact information through a custom editorial-style interface.

Last updated: October 28, 2026.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [How the Application Works](#how-the-application-works)
- [Component Documentation](#component-documentation)
- [Data and Type System](#data-and-type-system)
- [Styling and Theme System](#styling-and-theme-system)
- [Animations and Interactions](#animations-and-interactions)
- [Responsive Behavior](#responsive-behavior)
- [Running the Project](#running-the-project)
- [Customizing the Portfolio](#customizing-the-portfolio)
- [Build and Deployment](#build-and-deployment)
- [Accessibility and Performance](#accessibility-and-performance)
- [Known Maintenance Notes](#known-maintenance-notes)

## Features

- Professional editorial-style portfolio design.
- Responsive desktop, tablet, and mobile layouts.
- System, light, and dark theme modes.
- Theme preference saved in `localStorage`.
- Active navigation state based on the visible page section.
- Responsive mobile navigation menu.
- Scroll progress indicator.
- Pointer-following background light effect on pointer devices.
- Scroll-triggered section reveal animations.
- Reduced-motion support for users who disable animations.
- Data-driven skills and project sections.
- Optional project website and repository links.
- SEO title, description, theme color, and custom favicon.
- Direct email contact actions.

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React 19 | Component rendering and interactive UI state |
| TypeScript | Static typing for components and project data |
| Vite 8 | Development server and production bundling |
| Tailwind CSS 4 | CSS foundation and build integration |
| Custom CSS | Layout, typography, themes, animation, and responsive behavior |
| ESLint | TypeScript and React code-quality checks |

Tailwind is loaded through the Vite plugin and `@import "tailwindcss"`, but the portfolio's visual system is primarily implemented with custom semantic classes in `src/index.css`.

## Project Structure

```text
portfolio/
├── public/
│   ├── favicon.svg          # Custom browser icon
│   ├── icons.svg            # Currently unused legacy asset
│   └── profile.jpg          # Hero/profile photograph
├── src/
│   ├── components/
│   │   ├── About.tsx        # Background and working principles
│   │   ├── Contact.tsx      # Contact call-to-action and footer
│   │   ├── Hero.tsx         # Main introduction and profile presentation
│   │   ├── Nav.tsx          # Desktop/mobile navigation and scroll spy
│   │   ├── ProjectCard.tsx  # Reusable project presentation component
│   │   ├── Projects.tsx     # Project section and project mapping
│   │   ├── Skills.tsx       # Data-driven expertise section
│   │   └── ThemeToggle.tsx  # System/light/dark theme control
│   ├── data/
│   │   ├── projects.ts      # Project content
│   │   └── skills.ts        # Skill categories and technologies
│   ├── assets/              # Legacy starter assets, currently unused
│   ├── App.tsx              # Page composition and global interactions
│   ├── index.css            # Complete design system and responsive styling
│   ├── main.tsx             # React application entry point
│   └── types.ts             # Shared TypeScript project types
├── index.html               # Document metadata, fonts, and React root
├── package.json             # Dependencies and npm scripts
├── vite.config.ts           # React and Tailwind Vite plugins
└── tsconfig*.json           # TypeScript configuration
```

## How the Application Works

### 1. Browser entry point

`index.html` creates the `<div id="root">` element where React mounts the application. It also defines:

- The page title and description.
- The favicon and browser theme color.
- Google Font connections for Manrope, IBM Plex Mono, and Instrument Serif.
- A small theme initialization script that applies light mode before React loads, preventing a visible theme flash.

### 2. React initialization

`src/main.tsx` finds the root element and renders `<App />` inside React's `StrictMode`.

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

`StrictMode` helps expose unsafe side effects during development. Development-only effects may run twice while StrictMode checks the component lifecycle.

### 3. Page composition

`src/App.tsx` renders every section in order:

```text
Nav
└── Main
    ├── Hero
    ├── About
    ├── Skills
    ├── Projects
    └── Contact
```

The page is a single route. Navigation links use section IDs such as `#about`, `#skills`, `#projects`, and `#contact` instead of a routing library.

### 4. Global interactions

`App.tsx` registers the site's global browser behavior in one `useEffect`:

- Pointer movement updates the CSS variables `--pointer-x` and `--pointer-y`.
- Scrolling updates `--scroll-progress` from `0` to `1`.
- An `IntersectionObserver` watches all elements with `data-reveal`.
- When a watched element enters the viewport, the `is-visible` class is added.
- Event listeners and observers are removed when the component unmounts.

This approach keeps animation state out of React's render cycle. CSS variables and classes update the visual effects without causing a component re-render on every pointer or scroll event.

## Component Documentation

### `Nav.tsx`

The navigation component provides:

- Brand link back to `#top`.
- Links to the four main content sections.
- An active-section indicator.
- Responsive mobile menu state.
- Escape-key support for closing the mobile menu.
- The `ThemeToggle` component.

The active section uses a separate `IntersectionObserver`. Each section is observed with a negative `rootMargin`, creating an activation zone near the center of the viewport.

The mobile menu uses the `menuOpen` state. Clicking a link or pressing Escape closes it.

### `ThemeToggle.tsx`

The theme control supports three modes:

```text
system → light → dark → system
```

The current mode is stored under the `localStorage` key `theme`.

- `system` follows `prefers-color-scheme` and listens for operating-system changes.
- `light` adds the `light` class to the root `<html>` element.
- `dark` removes the `light` class.

Each mode has its own inline SVG icon. No icon dependency is required.

### `Hero.tsx`

The hero is the first visible content section. It contains:

- Availability label.
- Professional role.
- Main positioning statement.
- Short introduction.
- Project and contact calls to action.
- Portfolio metrics.
- Profile image and caption.
- Animated scroll cue.

The profile image is served from `/public/profile.jpg`, so its browser path is `/profile.jpg`.

### `About.tsx`

The About section contains static biographical content and three working principles:

- Product thinking.
- Technical clarity.
- Thoughtful craft.

The content is intentionally written directly inside the component because it is unique page copy rather than repeated structured data.

### `Skills.tsx`

The Skills component imports `skillGroups` from `src/data/skills.ts` and maps every group into a capability row.

```tsx
skillGroups.map((group, index) => (
  <article key={group.label} className="capability-row">
    ...
  </article>
))
```

Adding or removing a skill group in the data file automatically changes the rendered section.

### `Projects.tsx`

The Projects component imports the `projects` array and creates one `ProjectCard` per project.

The array index is passed to the card to generate its visible project number.

### `ProjectCard.tsx`

`ProjectCard` receives two props:

```ts
interface ProjectCardProps {
  project: Project;
  index: number;
}
```

The component displays:

- Project number.
- Live or in-progress status.
- Title and description.
- Technology stack.
- Project link, repository link, or a `Case study soon` message.

The destination uses this priority:

```ts
const destination = project.link ?? project.repo;
```

A live project URL is preferred. If it is missing, the repository URL is used. If both are missing, no clickable external action is rendered.

### `Contact.tsx`

The contact section provides:

- Availability message.
- Contact positioning statement.
- Email call to action using a `mailto:` URL.
- Copyright information.
- Back-to-top navigation.

## Data and Type System

### Project type

`src/types.ts` defines the structure required for project data:

```ts
export type ProjectStatus = "live" | "in-progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  link?: string;
  repo?: string;
}
```

TypeScript checks every object in `src/data/projects.ts` against this interface.

### Project data

Projects are stored in `src/data/projects.ts`:

```ts
{
  id: "example",
  title: "Example Project",
  description: "A short explanation of the project.",
  stack: ["React", "TypeScript"],
  status: "live",
  link: "https://example.com",
  repo: "https://github.com/example/project",
}
```

Rules:

- `id` must be unique.
- `status` must be either `live` or `in-progress`.
- `link` and `repo` are optional.
- Stack values are rendered in the supplied order.

### Skills data

Skills are stored in `src/data/skills.ts` as groups:

```ts
{
  label: "Frontend",
  items: ["React", "Tailwind CSS"],
}
```

The label becomes the capability heading, and every item is rendered in the associated technology list.

## Styling and Theme System

The complete design system lives in `src/index.css`.

### Color variables

Dark mode variables are defined on `:root`:

```css
:root {
  --bg: #0c0e0d;
  --surface: #131614;
  --text: #f1efe8;
  --accent: #f46f45;
}
```

Light mode overrides the same values through `html.light`:

```css
html.light {
  --bg: #f3f0e8;
  --surface: #faf8f2;
  --text: #171918;
  --accent: #c94f2a;
}
```

Components use semantic variables instead of hard-coded theme colors. This means a palette change can be made primarily by editing the root variables.

### Typography

- Manrope: primary interface and body font.
- Instrument Serif: editorial accent headings.
- IBM Plex Mono: metadata, numbering, labels, and technical details.

The fonts are loaded from Google Fonts in `index.html`. If Google Fonts is unavailable, the CSS fallback fonts are used.

### Layout system

`.section-wrap` defines the shared maximum content width. Major page sections use `.section-block` for vertical spacing.

The project section uses a 12-column CSS Grid:

- First and fourth cards occupy seven columns.
- Second and third cards occupy five columns.
- All cards occupy the full width at tablet sizes.

### Theme initialization

Theme handling happens in two places:

1. `index.html` reads the stored/system theme before React loads.
2. `ThemeToggle.tsx` manages changes after React has mounted.

This prevents the page from briefly displaying dark mode before switching to light mode.

## Animations and Interactions

### Reveal animations

Any element with `data-reveal` begins with reduced opacity and a downward offset.

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
}
```

`App.tsx` adds `is-visible` when the element enters the viewport:

```css
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

The observer stops watching an element after its first reveal, so animations do not repeatedly replay while scrolling.

### Pointer light

Pointer coordinates are stored in CSS custom properties:

```text
--pointer-x
--pointer-y
```

`.pointer-light` uses those coordinates as the center of a radial gradient. The effect is disabled on coarse-pointer devices such as most touchscreens.

### Scroll progress

The current scroll percentage is stored in `--scroll-progress`. The fixed progress element uses that value with `transform: scaleX(...)`.

### Hover interactions

Hover behavior includes:

- Project card lift and accent border.
- Capability row color inversion.
- Portrait image saturation and scale adjustment.
- Button offset and shadow movement.
- Contact arrow rotation.

These effects use `transform`, opacity, and color where possible to keep animations smooth.

## Responsive Behavior

The main responsive breakpoints are defined in `src/index.css`:

| Breakpoint | Main behavior |
| --- | --- |
| `1040px` | Reduces hero and section grid proportions |
| `820px` | Enables mobile navigation and converts major layouts to one column |
| `560px` | Applies phone typography, spacing, stacked actions, and compact cards |

Additional media queries:

- `pointer: coarse` disables the pointer-following effect.
- `prefers-reduced-motion: reduce` disables nonessential animations and smooth scrolling.

## Running the Project

### Requirements

- Node.js compatible with the versions in `package.json`.
- npm.

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal. Changes update through hot module replacement.

### Run ESLint

```bash
npm run lint
```

### Create a production build

```bash
npm run build
```

The build command runs TypeScript checks before creating the optimized Vite bundle.

### Preview the production build

```bash
npm run preview
```

### Termux library-path troubleshooting

If Node reports a native symbol-linking error inside a managed Termux environment, run the command with the inherited library path removed:

```bash
env -u LD_LIBRARY_PATH npm run dev
```

The same prefix can be used with `npm run lint`, `npm run build`, or `npm run preview`.

## Customizing the Portfolio

### Change the hero content

Edit `src/components/Hero.tsx` to update:

- Role and introduction.
- Main headline.
- Availability message.
- Metrics.
- Call-to-action text.
- Profile caption.

### Change the profile photograph

Replace:

```text
public/profile.jpg
```

Keep the filename or update the image path in `Hero.tsx`.

For better loading performance, use an appropriately sized WebP or AVIF image rather than a multi-megabyte original photograph.

### Change About content

Edit `src/components/About.tsx`.

The current academic status and student wording should be reviewed whenever the portfolio owner's status changes.

### Add a project

Add another object to `src/data/projects.ts`:

```ts
{
  id: "new-project",
  title: "New Project",
  description: "What the project does and why it matters.",
  stack: ["React", "TypeScript"],
  status: "in-progress",
}
```

No component changes are required.

### Add project links

Use `link` for a deployed website and `repo` for source code:

```ts
link: "https://project.example.com",
repo: "https://github.com/username/project",
```

### Change skills

Edit `src/data/skills.ts`. Groups and items are rendered automatically.

### Change contact details

Update the `mailto:` URL and visible email address in:

- `src/components/Hero.tsx`
- `src/components/Contact.tsx`

Both locations should stay synchronized.

### Change colors

Edit the variables in `:root` and `html.light` inside `src/index.css`.

The key variables are:

```text
--bg
--surface
--surface-raised
--text
--muted
--line
--accent
--accent-soft
--accent-ink
```

### Change fonts

1. Update the Google Fonts URL in `index.html`.
2. Update font-family declarations in `src/index.css`.
3. Update the Tailwind font variables inside the `@theme` block if Tailwind font utilities will be used.

### Add social links

The previous placeholder social links were intentionally removed. Add real links to `Contact.tsx` only when the correct URLs are available.

For external links, use:

```tsx
<a href="https://example.com" target="_blank" rel="noreferrer">
  Profile
</a>
```

## Build and Deployment

`npm run build` creates the production output in:

```text
dist/
```

The portfolio can be deployed to any static hosting service that supports a Vite application, including services such as Vercel, Netlify, GitHub Pages, or a traditional web server.

The application currently uses one page and hash-based section anchors, so no server-side route fallback is required.

Deployment checklist:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Confirm project and contact links.
4. Confirm the academic-status wording is current.
5. Test light, dark, and system themes.
6. Test desktop and mobile navigation.
7. Verify the profile image size and crop.
8. Deploy the contents generated in `dist/`.

## Accessibility and Performance

Implemented accessibility behavior includes:

- Semantic sections, headings, articles, navigation, and footer elements.
- Descriptive navigation labels.
- `aria-expanded` and `aria-controls` on the mobile menu button.
- Escape-key support for closing mobile navigation.
- Visible keyboard focus outlines.
- Reduced-motion media-query support.
- Decorative elements marked with `aria-hidden` where appropriate.
- Theme controls with descriptive accessible labels.

Performance considerations:

- Scroll and pointer listeners are passive.
- Intersection observers are disconnected after use.
- Scroll animations primarily use opacity and transforms.
- No third-party animation or icon library is loaded.
- The current profile image is approximately 3.7 MB and is the largest performance opportunity.
- Google Fonts require an external request; self-hosting is an option for stricter performance or privacy requirements.

## Known Maintenance Notes

- `src/App.css` is a legacy starter stylesheet and is not imported.
- `src/assets/hero.png`, `src/assets/react.svg`, and `src/assets/vite.svg` are currently unused.
- `public/icons.svg` is currently unused.
- Projects without `link` or `repo` display `Case study soon`.
- All current project entries use the `in-progress` status.
- The displayed project count in `Hero.tsx` is manually written as `04`; update it if the number of projects changes, or refactor it to read `projects.length`.
- Contact email content appears in both `Hero.tsx` and `Contact.tsx`.
- Copyright year and portfolio year are currently written as `2026`.

## Validation Status

As of October 28, 2026:

- `npm run lint` passes.
- `npm run build` passes.
- The production build is generated successfully by Vite.
