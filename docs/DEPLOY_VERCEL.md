# Deploy Polycephaly Profile to Vercel

## 1. Local verification

From the folder that contains `package.json`:

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` and test the homepage plus every project route.

Before production deployment:

```powershell
npm run build
```

If the build fails, fix the failure before deploying.

## 2. Put the project on GitHub

```powershell
git init
git add .
git commit -m "feat: polycephaly profile v2.2 APRIS showcase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/polycephaly-profile.git
git push -u origin main
```

## 3. Import into Vercel

1. Open https://vercel.com/new
2. Choose **Import Git Repository**.
3. Select `polycephaly-profile`.
4. Let Vercel detect **Next.js**.
5. Keep the project root as `./` because `package.json` is at the repository root.
6. Keep the default Build Command (`next build`) and Output Directory (`.next`).
7. Deploy.

## 4. Verify the production site

Check the generated Vercel URL and test:

- `/`
- `/projects/prime-chancellor`
- `/projects/prime-nexus`
- `/projects/prime-regent`
- `/projects/prime-legate`
- `/projects/prime-marshal`
- `/projects/prime-justiciar`
- `/projects/prime-herald`
- `/projects/prime-interpreter`
- `/projects/prime-maestro`
- `/projects/prime-seneschal`
- `/projects/prime-exchequer`
- `/projects/apris`

## 5. Custom domain

In Vercel, open the project → **Settings → Domains**, add your domain, then follow the DNS records Vercel provides.

## 6. Recommended update workflow

After the first deployment:

```powershell
git add .
git commit -m "feat: update profile"
git push
```

The Git-connected Vercel project can then create a new deployment from the push. This keeps the live site synchronized with the Git repository.
