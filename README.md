# WIN Portal

Tools for running standards-based WIN (What I Need) rotations in **grade 5 and grade 6 math and ELA**, built on the Indiana Academic Standards (2023), the standards ILEARN assesses in 2025-26 and 2026-27.

Teachers build a unit, share a student portal through Canvas, and read student turn-ins in a data dashboard. Everything is plain HTML, so it runs on GitHub Pages with no server, no database, and no logins.

## What's in this repository

| File | What it is |
|---|---|
| `index.html` | Home page: start a unit by grade and subject, the weekly routine, example portals |
| `builder.html` | WIN Builder, in 3 steps: **Choose standards** (grade 5 or 6, math or ELA), **Edit the unit**, **Preview and share** |
| `standards.js` | The grade 5 and grade 6 standards list the builder uses. Edit this file to fix a code or its wording. |
| `dashboard.html` | Teacher data dashboard: next-day groups, who's missing, skill mastery, misconceptions, mastery by standard, RACE writing |
| `portals/*.html` | Example student portals (grade 6 math and ELA, 3 days each) |
| `units/*.json` | Unit files for the examples. Open them in the builder to edit. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. Keep it. |

## Getting data to the teacher

1. Each student's turn-in starts with a **readable summary** (problems finished, first-try score for each standard, confidence, what was tricky). You can read it right in SpeedGrader.
2. For the full picture, open the Canvas assignment, choose **Download Submissions**, and **drop the zip anywhere on the dashboard**. You can also paste turn-ins, or press Ctrl+V anywhere on the dashboard page.
3. The dashboard opens on **Next steps**: tomorrow's groups, a reteach focus, and (after you add a roster) who hasn't turned in. **Copy groups** puts the groups on your clipboard for an email or your plans.
4. Filter by **grade**, **class**, **unit**, and **day**. Export a CSV with one row per turn-in, or a **standards CSV** with one row per student and a column for each standard.

## Checking the standards list

The grade 6 list came with the original builder. The grade 5 list was added from the 2023 Indiana Academic Standards and has not yet been checked line by line against IDOE's grade 5 documents, so the builder shows a reminder above it. To check it:

1. Open IDOE's grade 5 math and ELA standards from [in.gov/doe](https://www.in.gov/doe/students/indiana-academic-standards/).
2. Open `standards.js` and compare each `c` (code) and `t` (text). Fix anything that differs. Don't change `gen`: it picks the question generator.
3. When a grade's list matches, change its line under `review` to `""`. The reminder goes away.

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

1. Open the builder, choose the grade, subject, and standards, and tap **Generate unit**.
2. Look it over in **Edit the unit**, then go to **Preview and share** and tap **Download student portal**.
3. Upload that file to your Canvas course, or add it to the `portals` folder in the repository and link students to it.
4. Create a text-entry Canvas assignment for each WIN day. Students tap **Turn in my work**, copy, and paste.
5. After class, use Canvas **Download Submissions** and drop the zip on the dashboard.

## Updating a file

Open the file in the repository, click the pencil icon or **Add file → Upload files**, upload the new version with the **same name**, and commit. The site updates in about a minute.

## Privacy

- Student work stays on the student's device until they paste it into Canvas.
- The dashboard runs only in the teacher's browser and saves to that browser, along with any class rosters you add. Export a CSV regularly, because clearing browser data clears the dashboard.
- The pages load fonts from Google Fonts, and the dashboard loads a zip reader from cdnjs. Neither receives student data. If your district blocks those, the pages still work with default fonts; unzip Canvas downloads before uploading them.

Check with your district's technology office before sharing the site with students.

## Standards

Generated units use the Indiana Academic Standards (2023) for grade 6. Math items are generated with random numbers each time. ELA items come from original passages and question banks written for this tool. Always preview a unit before students use it.
