# WIN Portal

Tools for running standards-based WIN (What I Need) rotations in grade 6 math and ELA.

Teachers build a unit, share a student portal through Canvas, and read student turn-ins in a data dashboard. Everything is plain HTML, so it runs on GitHub Pages with no server, no database, and no logins.

## What's in this repository

| File | What it is |
|---|---|
| `index.html` | Home page with links to every tool |
| `builder.html` | WIN Builder: generate units from Indiana 2023 grade 6 standards or write your own questions, then download a student portal |
| `dashboard.html` | Teacher data dashboard: skill mastery, misconceptions, item analysis, RACE writing checks, next-day groups |
| `portals/estimating-fractions-math.html` | Example math student portal (3 days) |
| `portals/evidence-and-theme-ela.html` | Example ELA student portal (3 days) |
| `units/*.json` | Unit files for the examples. Open them in the builder to edit. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. Keep it. |

## Put the site online with GitHub Pages

1. Sign in at [github.com](https://github.com) (a free account works).
2. Click **+** in the top-right corner, then **New repository**.
3. Name it (for example, `win-portal`), choose **Public**, and click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Drag in **everything in this folder**, including the `portals` and `units` folders and the `.nojekyll` file. (On a Mac, press Command + Shift + . in Finder to show hidden files like `.nojekyll`.)
6. Click **Commit changes**.
7. Go to **Settings**, then **Pages** in the left menu.
8. Under **Build and deployment**, set **Source** to **Deploy from a branch**, **Branch** to **main**, and the folder to **/ (root)**. Click **Save**.
9. Wait 1 to 2 minutes and refresh. The site's address appears at the top of the Pages settings, for example `https://your-username.github.io/win-portal/`.

Free GitHub Pages sites must come from a public repository. That's fine here: the repository holds only the tools and example units, never student work.

## Using it with students

1. Open the builder on the site, generate or write a unit, and tap **Download student portal**.
2. Upload that file to your Canvas course, or add it to the `portals` folder in the repository and link students to it.
3. Create a text-entry Canvas assignment for each WIN day. Students tap **Turn in my work**, copy, and paste.
4. After class, use Canvas **Download Submissions** and upload the zip to the dashboard.

## Updating a file

Open the file in the repository, click the pencil icon or **Add file → Upload files**, upload the new version with the **same name**, and commit. The site updates in about a minute.

## Privacy

- Student work stays on the student's device until they paste it into Canvas.
- The dashboard runs only in the teacher's browser and saves to that browser. Export a CSV regularly, because clearing browser data clears the dashboard.
- The pages load fonts from Google Fonts, and the dashboard loads a zip reader from cdnjs. Neither receives student data. If your district blocks those, the pages still work with default fonts; unzip Canvas downloads before uploading them.

Check with your district's technology office before sharing the site with students.

## Standards

Generated units use the Indiana Academic Standards (2023) for grade 6. Math items are generated with random numbers each time. ELA items come from original passages and question banks written for this tool. Always preview a unit before students use it.
