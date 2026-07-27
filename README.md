# Pivot Pharmacy — Static Website
**Converted from Google Sites to Static HTML/CSS/JS**

## Site Structure
```
pivot-pharmacy/
├── index.html               ← Home page
├── about.html               ← About Us
├── medical-tourism.html     ← Medical Tourism
├── international-study.html ← International Study
├── contact.html             ← Contact Us
├── .htaccess                ← cPanel/DirectAdmin server config
└── assets/
    ├── css/
    │   └── style.css        ← All styles
    ├── js/
    │   └── main.js          ← Navigation, animations
    └── images/
        └── hero-bg.jpg      ← Hero background image
```

## Deployment to cPanel / DirectAdmin

### Method 1 — File Manager
1. Log in to your cPanel or DirectAdmin control panel
2. Open **File Manager**
3. Navigate to `public_html/` (or a subdomain folder)
4. Upload all files and folders from this `pivot-pharmacy/` directory
5. Ensure `.htaccess` is uploaded (hidden files must be visible)
6. Visit your domain — the site is live!

### Method 2 — FTP (FileZilla / WinSCP)
1. Connect via FTP to your hosting server
2. Upload the contents of `pivot-pharmacy/` to `public_html/`
3. Ensure `.htaccess` is included

## Post-Deployment Steps
- **Enable HTTPS**: Activate your SSL certificate in cPanel → SSL/TLS, then uncomment the HTTPS redirect lines in `.htaccess`
- **Contact Form**: The form currently simulates sending. To receive emails, integrate one of these:
  - **Formspree** (free): Replace `onsubmit="handleSubmit(event)"` with Formspree action URL
  - **PHP Mailer**: Add a `mail.php` script (see note below)
  - **cPanel forwarder**: Use Email Forwarders in cPanel

## Contact Form — PHP Integration (Optional)
Create `mail.php` in root:
```php
<?php
if ($_POST) {
    $to = 'pivotpharmacy@yahoo.com';
    $subject = 'Website Enquiry: ' . htmlspecialchars($_POST['subject']);
    $body = "Name: {$_POST['name']}\nEmail: {$_POST['email']}\nPhone: {$_POST['phone']}\n\n{$_POST['message']}";
    mail($to, $subject, $body, "From: {$_POST['email']}");
    echo 'success';
}
```
Then change the form's `onsubmit` to POST to `mail.php`.

## Navigation Pages
| File | URL |
|------|-----|
| index.html | / or /home |
| about.html | /about |
| medical-tourism.html | /medical-tourism |
| international-study.html | /international-study |
| contact.html | /contact |

## Design Notes
- **Brand color**: `#979292` (muted warm grey — matches original Google Sites theme)
- **Fonts**: Roboto (headings) + Open Sans (body) — same as original
- **Responsive**: Mobile-first, hamburger menu on small screens
- **Animations**: Scroll-triggered fade-up on all sections
