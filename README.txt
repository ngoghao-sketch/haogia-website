Hao Gia - package ready for upload

Files included:
- index.html
- haogia-secret.html (admin, password: haogia0625)
- assets/logo.png
- assets/gallery/ (empty - upload your images here)

How to deploy:
1. Upload all files/folders to your GitHub repo root so index.html is at the root and assets/ is present.
2. Commit and let Vercel redeploy.
3. To add images: open https://<your-site>/haogia-secret.html, enter password haogia0625, choose images, click 'Download ZIP', extract and upload files to assets/gallery/ in repo, commit.

Notes:
- Slider displays up to 50 images named 1.jpg..50.jpg or uses a list.json if provided.
- This admin helper is client-side only (creates ZIP). For direct uploads to server, integrate Firebase/Supabase.
